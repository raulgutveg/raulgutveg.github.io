import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  const isDisabled = className && className.includes("disabled-button");
  return (
    <div className={className}>
      <a
        className={`main-button ${isDisabled ? "disabled" : ""}`}
        href={!isDisabled ? href : null}
        target={newTab && !isDisabled ? "_blank" : null}
        onClick={e => isDisabled && e.preventDefault()}
      >
        {text}
      </a>
    </div>
  );
}
