import React, { HtmlHTMLAttributes } from "react";
import { Text } from "../Text";

import * as S from "./styles";

interface ProductProps extends HtmlHTMLAttributes<HTMLDivElement> {
  image_url: string;
  name: string;
  type: string;
  price: number;
}

export default function Product({
  image_url,
  name,
  type,
  price,
  ...props
}: ProductProps) {
  return (
    <S.Product {...props}>
      <S.ProductImage src={image_url} />
      <S.ProductWrap>
        <Text>{name}</Text>
        <Text className="text-secondary">{type}</Text>
        <S.Price className="text-success text-bold">
          R$ {price.toLocaleString("pt-BR")}
        </S.Price>
      </S.ProductWrap>
    </S.Product>
  );
}
