import React from "react";
import PageContainer from "../../components/PageContainer";
// @ts-ignore
import { Badge, Button } from "@gohypergiant/scoa-smds";

export const ScoaSmdsPage: React.FC = () => {
  return (
    <PageContainer>
      <div>
        <Badge>Badge</Badge>
      </div>
      <div>
        <Button>Button</Button>
      </div>
    </PageContainer>
  );
};
