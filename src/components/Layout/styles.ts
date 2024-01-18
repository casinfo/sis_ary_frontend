import styled from "styled-components";
import { V } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  padding: calc(${V.smSpacing} * 2);

  h1 {
    font-size: 14px;
  }
`;
