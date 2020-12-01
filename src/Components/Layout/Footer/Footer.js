import React, { Component } from "react";
import { connect } from "react-redux";
export class FooterComponent extends Component {
  handleNakedMe = () => {
    this.props.dispatch({
      type: "SET_NAKED",
      payload: {
        img: "",
      },
    });
  };
  render() {
    return (
      <div>
        <div className="">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.handleNakedMe();
            }}
          >
            click me
          </button>
        </div>
      </div>
    );
  }
}
export default connect(null, null)(FooterComponent);
