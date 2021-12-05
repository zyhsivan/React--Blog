import React, { memo } from "react";

import ZAuthor from "components/author";
import ZBanner from "components/banner";
import { AsideWrapper } from "./style";

export default memo(function ZAside() {
  return (
    <AsideWrapper>
      <ZAuthor />
      <ZBanner />
    </AsideWrapper>
  );
});
