import React, { memo, Fragment } from "react";

// Styled components
import { Input, InvalidText } from "./input.styles";

export default memo(
  ({
    placeholder = "enter text here",
    valid,
    focused,
    name,
    invalidText = "",
    ...otherProps
  }) => {
    return (
      <Fragment>
        <Input
          focused={focused}
          valid={valid}
          placeholder={placeholder}
          name={name}
          {...otherProps}
        />

        {!valid && invalidText.length && focused ? (
          <InvalidText>{invalidText}</InvalidText>
        ) : null}
      </Fragment>
    );
  }
);
