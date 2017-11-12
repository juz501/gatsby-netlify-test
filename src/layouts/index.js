import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./global.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <div className="content-container">{children()}</div>
    </div>
  )
};

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout;
