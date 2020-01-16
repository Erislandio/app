import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  max-width: 1200px;
  padding: 5px;
  display: block;
  width: 100%;
`;

export const Container = ({ id, children }) => {
  return (
    <ContainerStyled id={id} className="container">
      {children}
    </ContainerStyled>
  );
};
