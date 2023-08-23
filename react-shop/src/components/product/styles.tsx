import styled from "styled-components";
import { Text } from "../Text";

export const Product = styled.div`
  cursor: pointer;
`;

export const ProductWrap = styled.div`
  padding: 0.5rem 0;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const Price = styled(Text)`
  font-weight: bold;
`;
