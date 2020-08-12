import React from "react";

// Styled Components
import { ButtonText, ActionButton } from "../button.styles";

const AppleButton = ({
  placeholder = "Enter text here",
  style: userStyles = {},
  ...otherProps
}) => {
  return (
    <ActionButton
      style={{
        backgroundColor: "transparent",
        ...userStyles,
      }}
      {...otherProps}
    >
      <div>
        <svg
          data-test="apple-icon"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#191e26"
            d="M19.644 17.365a11.555 11.555 0 0 1-1.085 2.03c-.57.847-1.038 1.433-1.398 1.758-.558.534-1.156.808-1.797.823-.46 0-1.014-.136-1.659-.412-.647-.275-1.242-.411-1.786-.411-.571 0-1.183.136-1.838.411-.655.276-1.183.42-1.587.434-.614.027-1.226-.254-1.837-.845-.39-.354-.878-.96-1.462-1.82-.627-.918-1.142-1.982-1.546-3.195C3.217 14.828 3 13.558 3 12.33c0-1.408.292-2.621.878-3.639a5.26 5.26 0 0 1 1.838-1.934 4.802 4.802 0 0 1 2.485-.73c.488 0 1.127.157 1.922.466.793.31 1.302.466 1.525.466.166 0 .732-.184 1.69-.55.907-.339 1.671-.48 2.298-.424 1.698.143 2.974.84 3.822 2.094-1.518.957-2.27 2.298-2.255 4.019.014 1.34.481 2.455 1.4 3.34.415.41.88.728 1.397.954-.112.338-.23.662-.356.973zM15.749 1.42c0 1.05-.368 2.031-1.103 2.939-.887 1.079-1.96 1.702-3.124 1.604a3.406 3.406 0 0 1-.023-.398c0-1.008.422-2.087 1.17-2.97a4.53 4.53 0 0 1 1.427-1.114c.576-.292 1.12-.453 1.632-.481.015.14.021.28.021.42z"
          ></path>
        </svg>
      </div>
      <ButtonText data-test="placeholder">{placeholder}</ButtonText>
    </ActionButton>
  );
};

export default AppleButton;
