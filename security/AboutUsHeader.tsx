import React from "react";
import { Button, Col, Row } from "antd";
import { Heading, Text } from "@difx_ui";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { AboutUsHeaderStyled } from "./styled";

const AboutUsHeader = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <AboutUsHeaderStyled>
      <div className="top-banner">
        <div className="container">
          <Row>
            <Col xs={24} md={24} sm={24} lg={24}>
              <div className="top-banner-header-div">
                <img src="/imgs/aboutUs/difx_icon.svg" alt="" />
                <Heading type="H2" align="center">
                  {t("about_us.about_difx")}
                </Heading>
                <Heading type="H2" align="center">
                  {t("about_us.digital_financial_exchange")}
                </Heading>
              </div>
              <div className="top-banner-description-div">
                <Text
                  type="large"
                  align="center"
                  className="top-banner-description"
                >
                  {t(
                    "about_us.building_next_generation_of_cross_asset_trading_platforms"
                  )}
                </Text>
                <Text
                  type="large"
                  align="center"
                  className="top-banner-description"
                >
                  {t("about_us.founded_in_2021_we_believe")}
                </Text>
              </div>
              <div className="top-banner-btn">
                <Button type="primary" onClick={() => router.push(`/market`)}> {t("about_us.start_now")} </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </AboutUsHeaderStyled>
  );
};

export default AboutUsHeader;
