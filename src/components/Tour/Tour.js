import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="nyc"
          />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info{" "}
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>
            {" "}
            Ready to have an amazing experience? So do not waste your time and
            come to NYC!
          </p>
        </div>
      </article>
    );
  }
}
