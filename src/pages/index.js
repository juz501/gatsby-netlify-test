import React from "react";
import Helmet from "react-helmet";

export default class Index extends React.Component {
  render() {
    return (
      <div className="page-content">
        <Helmet>
          <title>Hello World</title>
        </Helmet>
        <h1>Hello World</h1>
      </div>
    );
  }
}
