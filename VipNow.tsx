import React from "react";
import { VipNowContentStyled } from "./styled";
import { Row, Col, Button } from "antd";
import { Heading, Text } from "@difx_ui";
const VipNow = () => {
  return (
    <VipNowContentStyled>
      <div className="vip-now-card">
        <Heading type="H5" align="center">
        Become a VIP now
        </Heading>
        <Text align="center" type="small">
        Trade more and pay less.
        </Text>
        <Button type="primary">Apply for VIP</Button>
      </div>
      <img
        src="/imgs/vipPrograms/vip-now-left-img.svg"
        className="vip-now-left-img"
      />
    </VipNowContentStyled>
  );
};

export default VipNow;
