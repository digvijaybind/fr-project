import React from "react";
import { Button, Col, Row } from "antd";
import { Heading, Text } from "@difx_ui";
import { useTranslation } from "next-i18next";
import { WorkingDIFXContentStyled } from "./styled";

const WorkingDIFX = () => {
  const { t } = useTranslation();

  return (
    <WorkingDIFXContentStyled>
      <Row gutter={[48, 48]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="working-difx-left"
        >
          <div className="working-difx-title-div">
            <Heading type="H2"> {t("about_us.working_at_difx")}</Heading>
            <Heading type="H2">
              {t("about_us.digital_financial_exchange")}
            </Heading>
          </div>
          <Text className="working-difx-description">
            {t("about_us.we_give_people_the_freedom")}
          </Text>
          <div className="view-opening-positions-button">
            <Button type="primary">
              {t("about_us.view_opening_positions")}
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <img
            className="working-difx-img"
            src="/imgs/aboutUs/working_difx.svg"
          />
        </Col>
      </Row>
    </WorkingDIFXContentStyled>
  );
};

export default WorkingDIFX;
