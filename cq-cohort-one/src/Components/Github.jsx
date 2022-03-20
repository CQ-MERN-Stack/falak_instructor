import React from "react";
import axios from "axios";

const config = {
  method: "get", // post, get, patch, delete, put
  url: "https://api.github.com/search/users",
  params: {
    q: "",
  },
};

export default class Github extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      isLoading: true,
      error: false,
      errorMessage: "",
    };
  }
  getData = (query) => {
    console.log(query);
    this.setState({
      isLoading: true,
      error: false,
    });
    config.params.q = query;
    console.log(config);
    axios(config)
      .then((res) => {
        // function to be executed after axios call
        console.log(res.data);
        this.setState({
          data: res.data.items,
          isLoading: false,
          error: false,
        });
      })
      .catch((err) => {
        // handle error
        console.log(err);
        this.setState({
          errorMessage: err,
          error: true,
          isLoading: false,
        });
      });
  };
  render() {
    const { isLoading, data, query, error, errorMessage } = this.state;
    console.log(errorMessage);
    return (
      <div>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <button onClick={() => this.getData(query)}>Search</button>
        {isLoading && <div> Loading ... </div>}
        {!isLoading && error && <div>Something went wrong</div>}
        <div>
          {!isLoading &&
            !error &&
            data &&
            data.map((item) => <div key={item.id}>{item.login}</div>)}
        </div>
      </div>
    );
  }
}
