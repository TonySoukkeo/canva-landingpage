import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import defaultStyle from "./back-btn.styles";

const BackBtn = ({ onClick, style: userStyles = {}, ...otherProps }) => {
  const history = useHistory();

  const handleOnBackClick = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <span
      onClick={handleOnBackClick}
      style={{
        display: "flex",
        cursor: "pointer",
      }}
    >
      <ChevronLeftIcon
        style={{
          ...defaultStyle,
          ...userStyles,
        }}
        {...otherProps}
      />
    </span>
  );
};

export default BackBtn;
