import React from "react";

import * as S from "./styles";

const Loading: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Skeleton />
    </S.Wrapper>
  );
};

export { Loading };
