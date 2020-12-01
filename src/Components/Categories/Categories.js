import React, { Component } from "react";
import { connect } from "react-redux";
export class CategoriesComponent extends Component {
  handleSelectCatagories = (catagories) => {
    this.props.dispatch({
      type: "SET_CATEGORIES",
      payload: catagories,
    });
  };
  render() {
    const { listCategories } = this.props;
    const { selectCategories } = this.props;
    return (
      <div>
        <ul className="nav nav-pills">
          {listCategories.navPills.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  selectCategories === item.type
                    ? "btn btn-primary"
                    : "btn btn-secondary"
                }
                onClick={() => {
                  this.handleSelectCatagories(item.type);
                }}
              >
                {item.showName}
              </button>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listCategories: state.listCategoriesReducer.listCategories,
    selectCategories: state.SelectCategoriesReducer.categories,
  };
};
export default connect(mapStateToProps, null)(CategoriesComponent);
