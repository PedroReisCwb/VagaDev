import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ProductModalTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
`;

export const ProductModalSubtitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const ProductModalInfo = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ProductModalPrice = styled.span`
  font-size: 1.2rem;
`;

export const ProductModalButton = styled(Button)`
  margin-left: 0.5rem;
`;
