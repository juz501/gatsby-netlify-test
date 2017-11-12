import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./global.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="main-layout">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children()}
      </div>
    );
  }
}
