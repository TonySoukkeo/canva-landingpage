import React from "react";

// Styled Components
import { ButtonText, ActionButton } from "../button.styles";

const GoogleButton = ({ placeholder = "Enter text here", ...props }) => {
  return (
    <ActionButton {...props}>
      <div>
        <svg
          data-test="facebook-icon"
          style={{
            color: "#3b5998",
          }}
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.61v-6.97h-2.34V11.3h2.34v-2c0-2.33 1.42-3.6 3.5-3.6 1 0 1.84.08 2.1.12v2.43h-1.44c-1.13 0-1.35.53-1.35 1.32v1.73h2.69l-.35 2.72h-2.34V21h4.59a1 1 0 0 0 .99-1V4a1 1 0 0 0-1-1z"
            fill="currentColor"
          ></path>
          <path
            d="M12.61 14.03V21h2.81v-6.98h2.34l.35-2.72h-2.69V9.57c0-.79.22-1.32 1.35-1.32h1.44V5.82c-.26-.04-1.1-.12-2.1-.12-2.08 0-3.5 1.27-3.5 3.6v2h-2.34v2.73h2.34z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      <ButtonText data-test="placeholder">{placeholder}</ButtonText>
    </ActionButton>
  );
};

export default GoogleButton;
