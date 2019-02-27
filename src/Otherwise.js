import PropTypes from "prop-types";
import React from "react";

import If from "./If.js";

const Otherwise = props => {
  return <If condition={true}>{props.children}</If>;
};

Otherwise.propTypes = {
  children: PropTypes.any.isRequired
};

export default Otherwise;
