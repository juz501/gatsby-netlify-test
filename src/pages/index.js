import React from "react";
import Helmet from "react-helmet";

const IndexPage = () => {

  const homepage = { title: "Hello World", content: "Awesome place here!"}

  return (
    <div className="page-content">
      <Helmet>
        <title>{ homepage.title }</title>
      </Helmet>
      <h1 dangerouslySetInnerHTML={{ __html: homepage.title }}></h1>
      <div className="content">
        <div className="inner" dangerouslySetInnerHTML={{ __html: homepage.content }} />
      </div>
    </div>
  );
};

export default IndexPage;

