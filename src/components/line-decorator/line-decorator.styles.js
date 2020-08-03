import styled from "styled-components";

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
`;

export const LineSpan = styled.span`
  margin: 0 8px;
  color: ${({ color }) => (color ? color : "rgba(14, 19, 24, 0.25)")};
  text-transform: uppercase;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : ".8rem")};
`;

export const Hr = styled.hr`
  display: block;
  margin: 7px 0;
  border: none;
  border-bottom: 1px solid;
  border-color: ${({ color }) => (color ? color : "rgba(14, 19, 24, 0.25)")};
  flex: 1 0;
  height: 1px;
  overflow: hidden;
`;
