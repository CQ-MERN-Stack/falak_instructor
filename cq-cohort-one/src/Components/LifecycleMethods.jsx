import React from "react";

export default class LifecycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
      isLoading: false,
    };
    // console.log("constructor")
  }
  getData = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
        data: "output",
        isLoading: false,
      });
    }, 2000);
  };
  // componentDidMount() {
  //   console.log("componentDidMount")
  //   this.getData();
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount")
  // }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    const { isLoading, data, count } = this.state;
    // console.log("render")
    return (
      <>
        {isLoading && "loading"}
        {!isLoading && (
          <>
            {data + count}
            <button onClick={this.getData}>Refresh</button>
          </>
        )}
      </>
    );
  }
}
