import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {/* This line renders a <div> element with the class name container. The textPosition variable is used to dynamically add an additional class to the container, allowing for different text alignment (left, right, or center). */}

      {header ? <h2>{header}</h2> : null}

      {/* This line checks if the header prop is truthy. If it is, it renders an <h2> element containing the value of the header prop; otherwise, it renders null. */}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {/* This line renders a nested <div> element with the class name container-children, and it includes additional classes based on the values of the direction and contentPosition variables. These classes control the layout and alignment of the child elements within the container. */}

        {children}

        {/* This line renders the children prop, which represents the content that will be placed inside the Container component. */}
      </div>
    </div>
  );
}

export default Container;
