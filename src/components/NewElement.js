import React from 'react';
import PropTypes from "prop-types";

function newElement (type, attributes) {
  const el = document.createElement(type);
  for (let attribute in attributes) {
    const value = attributes[attribute];
    if (attribute === 'innerText') el.innerText = value;
    else el.setAttribute(attribute, value);
  }
  return el;
}

newElement.PropTypes = {
  type: PropTypes.string,
  attributes: PropTypes.object
}

export default newElement;