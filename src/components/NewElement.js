import React from "react";

function newElement (type, attributes) {
  const el = document.createElement(type);
  for (let attribute in attributes) {
    const value = attributes[attribute];
    if (attribute === 'innerText') el.innerText = value;
    else el.setAttribute(attribute, value);
  }
  return el;
}

// const containerDiv = document.querySelector('.container');
// const card = newElement('div', {class: 'card'})
// containerDiv.appendChild(card)

export default newElement;