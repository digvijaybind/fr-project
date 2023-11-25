import React from "react";
import { PageStyled, VipProgramsBannerContentStyled } from "./styled";
import { Row, Col, Button } from "antd";
import { Heading, Text } from "@difx_ui";
import DepositCard from "./DepositCard";
import MyVipPrivileges from "./MyVipPrivileges";
import VipStatus from "./VipStatus";
import VipNow from "./VipNow";

const VipPrograms = () => {
  return (
    <PageStyled>
      <VipProgramsBannerContentStyled>
        <div className="top-banner">
          <Row className="container">
            <Col span={24}>
              <Row gutter={[48, 48]}>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={12}
                  xl={12}
                  className="top-banner-header"
                >
                  <Heading type="H2">DIFX VIP Program</Heading>
                  <Text
                    weight="semiBold"
                    type="large"
                    className="top-banner-description"
                  >
                    Get your matching VIP level at DIFX  if you already trade on
                    our exchange.
                  </Text>

                  <div className="top-banner-btn">
                    <Button type="primary">Apply for VIP</Button>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <img
                    className="top-banner-img"
                    src="/imgs/vipPrograms/top-banner-img.svg"
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <DepositCard />
            </Col>
          </Row>
        </div>
        <Row className="container">
          <Col span={24}>
            <MyVipPrivileges />
          </Col>
        </Row>
        <Row className="container">
          <Col span={24}>
            <VipStatus />
          </Col>
        </Row>
        <Row className="container">
          <Col span={24}>
           <Heading type="H3" align="center">Terms & Conditions</Heading>
          </Col>
        </Row>
        <Row className="container">
          <Col span={24}>
            <VipNow />
          </Col>
        </Row>
      </VipProgramsBannerContentStyled>
    </PageStyled>
  );
};

export default VipPrograms;
