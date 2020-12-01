import React, { Component } from "react";
import { connect } from "react-redux";
export class ProductItemComponent extends Component {
  handleSelectClothes = (cloth) => {
    this.props.dispatch({
      type: "SET_CLOTH",
      payload: {
        type: cloth.type,
        img: cloth.imgSrc_png,
      },
    });
  };
  render() {
    const { item } = this.props;

    return (
      <div className="card my-2">
        <img src={item.imgSrc_jpg} />
        <p>{item.name}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.handleSelectClothes(item);
          }}
        >
          thử đồ
        </button>
      </div>
    );
  }
}
export default connect(null, null)(ProductItemComponent);
