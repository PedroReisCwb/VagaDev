import React, { HTMLAttributes } from "react";

import * as S from "./styles";

export function Text({
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <S.Text {...props}>{children}</S.Text>;
}
