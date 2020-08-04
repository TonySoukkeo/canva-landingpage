import styled from "styled-components";

export const Wrapper = styled.div(({ ...otherProps }) => ({
  display: "flex",
  justifyContent: "center",
  ...otherProps,
}));
