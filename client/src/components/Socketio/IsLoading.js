import React, { useState, useEffect } from "react";

import { theme } from "../../themes/theme";
import styled from "styled-components";

export const IsLoading = () => {
  return (
    <>
      <Circle></Circle>
    </>
  );
};

const Circle = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 40px;
  height: 40px;
  border: 10px solid black;
  border-top: 10px solid red;
  border-radius: 50em;

  animation-name: spinCircle;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;

  @keyframes spinCircle {
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
