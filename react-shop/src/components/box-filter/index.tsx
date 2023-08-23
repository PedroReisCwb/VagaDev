import React, { HTMLAttributes } from "react";
import * as S from "./styles";

interface BoxFilterProps extends HTMLAttributes<HTMLUListElement> {
  values: string[];
  currentValue?: string;
  onChangeValue: (value: string) => void;
}

export function BoxFilter({
  values,
  currentValue,
  onChangeValue,
  ...props
}: BoxFilterProps) {
  return (
    <S.BoxFilter {...props}>
      {values.map((value) => (
        <S.BoxFilterItem key={value} onClick={() => onChangeValue(value)}>
          <S.BoxFilterBtn active={value === currentValue}>
            {value}
          </S.BoxFilterBtn>
        </S.BoxFilterItem>
      ))}
    </S.BoxFilter>
  );
}
