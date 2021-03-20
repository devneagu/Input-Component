import React from "react";

export const Input = (props) => {
  let {
    placeholder,
    errorInput,
    helperText,
    labelText,
    size,
    disabled,
    value,
    fullWidth,
    multiline,
    rows,
    cols,
  } = props;

  const randId =
    Date.now() * 1000 + Math.floor(Math.random() * Math.floor(411050));
  return (
    <div
      className={`inputParent  ${fullWidth != undefined ? "fullWidth" : ""} ${
        size != undefined ? size : ""
      }`}
    >
      <label
        htmlFor={randId}
        className={`aboveInput ${errorInput == undefined ? "" : "error"}`}
      >
        <span>{labelText ? labelText : "Label"}</span>
        {multiline == undefined ? (
          <input
            disabled={disabled}
            placeholder={placeholder == undefined ? "" : placeholder}
            type="text"
            name={randId}
            id={randId}
            defaultValue={value != undefined ? value : ""}
          ></input>
        ) : (
          <textarea
            rows={rows == undefined ? 2 : rows}
            cols={rows == undefined ? 2 : cols}
            disabled={disabled}
            placeholder={placeholder == undefined ? "" : placeholder}
            type="text"
            name={randId}
            id={randId}
            defaultValue={value != undefined ? value : ""}
          ></textarea>
        )}
      </label>
      {helperText != undefined ? (
        <label
          className={`belowInput ${errorInput == undefined ? "" : "error"}`}
        >
          {helperText}
        </label>
      ) : (
        ""
      )}
    </div>
  );
};
