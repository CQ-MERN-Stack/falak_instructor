import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
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
    dispatch(getUsers({ query }));
    this.setState({ data: useSelector((state) => state.userData) });
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
