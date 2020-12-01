import React, { Component } from "react";
// import styled from "styled-components";
import "./style.css";
// import classes from './style.css';
import { connect } from "react-redux";
export class ModelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "./images/allbody/bodynew.png",
      model: "./images/model/1000new.png",

      feet: "./images/shoes/shoes1.png",
      background: "./images/background/background1.jpg",
    };
  }
  render() {
    console.log(this.props.model);

    return (
      <div className="col-md-4">
        <div className="contain">
          <div
            className="body"
            style={{ background: `url(${this.state.body})` }}
          />

          <div
            className="model"
            style={{ background: `url(${this.state.model})` }}
          />

          <div
            className="hairstyle"
            style={{
              background: `url(${this.props.model.hairstyle})`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="necklace"
            style={{
              background: `url(${this.props.model.necklaces})`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="bikinitop"
            style={{ background: `url(${this.props.model.defaultTopClothes})` }}
          />

          <div
            className="bikinibottom"
            style={{ background: `url(${this.props.model.defaultBotClothes})` }}
          />

          <div
            className="handbag"
            style={{
              background: `url(${this.props.model.handbags})`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="feet"
            style={{ background: `url(${this.state.feet})` }}
          />

          <div
            className="background"
            style={{
              background: `url(${this.state.background})`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="bikinitop"
            style={{
              backgroundImage: `url(${this.props.model.topclothes})`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="bikinibottom"
            style={{
              backgroundImage: `url(${this.props.model.botclothes})`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="feet"
            style={{
              backgroundImage: `url(${this.props.model.shoes})`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="background"
            style={{
              background: `url(${this.props.model.background})`,
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    model: state.ModelReducer,
  };
};
export default connect(mapStateToProps, null)(ModelComponent);
