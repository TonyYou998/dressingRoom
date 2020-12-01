import React, { Component } from "react";

export default class HeaderComponents extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="text-center">
                <img src="./images/logoUIT.png" alt="Card image" />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">UIT-Thay Đồ Búp Bê</h4>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
