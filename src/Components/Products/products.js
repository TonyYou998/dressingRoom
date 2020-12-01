import React, { Component } from "react";
import ProductItemComponent from "../productItem/productItem";
import { connect } from "react-redux";
export class ProductsComponents extends Component {
  render() {
    // console.log(this.props);
    const { listProduct } = this.props;

    return (
      <div className="">
        <div className="row">
          {listProduct.tabPanes
            .filter((item) => {
              return item.type === this.props.selectCategories;
            })
            .map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <ProductItemComponent item={item} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listProduct: state.ProductReducer.listProduct,
    selectCategories: state.SelectCategoriesReducer.categories,
  };
};
export default connect(mapStateToProps, null)(ProductsComponents);
