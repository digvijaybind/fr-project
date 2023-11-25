import React from "react";
import { Col, Row } from "antd";
import { Heading, Text } from "@difx_ui";
import { useTranslation } from "next-i18next";
import { OurServicesContentStyled } from "./styled";

const OurServices = () => {
  const { t } = useTranslation();

  const ourServices = [
    {
      imgSrc: "/imgs/aboutUs/custodian_wallet.svg",
      title: `${t("about_us.custodian_wallet")}`,
      description: `${t("about_us.difx_has_partnered_with_fir_blocks")}`,
    },
    {
      imgSrc: "/imgs/aboutUs/know_your_customer.svg",
      title: `${t("about_us.know_your_customer")}`,
      description: `${t("about_us.difx_has_integrated_sumsub")}`,
    },
    {
      imgSrc: "/imgs/aboutUs/meta_trader_5.svg",
      title: `${t("about_us.meta_trader_five")}`,
      description: `${t("about_us.custom_mt5_platform_that_hosts_several")}`,
    },
    {
      imgSrc: "/imgs/aboutUs/24-hours-support.svg",
      title: `${t("about_us.24/7_support")}`,
      description: `${t("about_us.difx_provides_users_with_around")}`,
    },
    {
      imgSrc: "/imgs/aboutUs/nomination_program.svg",
      title: `${t("about_us.nomination_program")}`,
      description: `${t("about_us.difx_provides_a_revolutionary_service")}`,
    },
  ];

  return (
    <OurServicesContentStyled>
      <Heading type="H4" align="center">
        {t("about_us.our_services")}
      </Heading>
      <Row gutter={[48, 48]} className="services-card-main">
        {ourServices.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="services-card">
                <img src={item.imgSrc} />
                <Text weight="bold" type="large" className="services-label">
                  {item.title}
                </Text>
                <Text color="secondary" className="services-description">
                  {item.description}
                </Text>
              </div>
            </Col>
          );
        })}
      </Row>
    </OurServicesContentStyled>
  );
};

export default OurServices;
