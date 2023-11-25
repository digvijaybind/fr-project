import React from "react";
import { Row, Col } from "antd";
import { PageStyled } from "./styled";
import AboutUsHeader from "./AboutUsHeader";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import WeAreListedOn from "./WeAreListedOn";
import WorkingDIFX from "./WorkingDIFX";
import OurMedia from "../home/OurMedia";
import { Heading } from "@difx_ui";
import { useTranslation } from "next-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <PageStyled>
      <AboutUsHeader />
      <Row className="container">
        <Col span={24} className="container">
          <OurServices />
          <OurTeam />
          <Heading type="H4" align="center">
            {t("about_us.our_partners_associates")}
          </Heading>
        </Col>
      </Row>
      <OurMedia />
      <Row className="container">
        <Col span={24} className="container">
          <WeAreListedOn />
          <WorkingDIFX />
        </Col>
      </Row>
    </PageStyled>
  );
};

export default AboutUs;
