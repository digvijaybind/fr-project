import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { Heading, Text } from "@difx_ui";
import { VipStatusContentStyled } from "./styled";

const VipStatus = () => {
  return (
    <VipStatusContentStyled>
      <Heading type="H4" align="center">
        What factors will be considered when determining my VIP status in{" "}
        <Typography.Link>DIFX?</Typography.Link>
      </Heading>
      <Row gutter={[48, 48]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <img
            className="vip-status-img"
            src="/imgs/vipPrograms/vip-status-img.svg"
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="vip-status-header"
        >
          <Heading type="H3">
            What factors will be considered when determining my VIP status in
            DIFX?
          </Heading>
          <Text weight="semiBold" className="vip-status-description">
            After your VIP level is activated, you will be able to trade
            derivatives, spot, and USDC options. You will receive the VIP status
            based on any of the following factors: - Your total equity under
            your DIFX account - Your 30-day derivatives trading volume - Your
            30-day spot trading volume - or your 30-day USDC Options trading
            volume - whichever reaches the threshold the quickest.
          </Text>
        </Col>
      </Row>
    </VipStatusContentStyled>
  );
};

export default VipStatus;
