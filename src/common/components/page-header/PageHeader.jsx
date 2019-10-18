import React from "react";
import PropTypes from "prop-types";
import { wrapWordsWithSpan } from "../../utils/utils";
import { Header, Paragraph } from "./PageHeader.styles";

const PageHeader = ({ header, children }) => {
  return (
    <React.Fragment>
      <Header data-test="header">{wrapWordsWithSpan(header)}</Header>
      <Paragraph data-test="description">{children}</Paragraph>
    </React.Fragment>
  );
};

PageHeader.propTypes = {
  header: PropTypes.string
};

export default PageHeader;
