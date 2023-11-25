import React from "react";
import { OurTermContentStyled } from "./styled";
import { Col, Row } from "antd";
import { useTranslation } from "next-i18next";
import { Heading, Text } from "@difx_ui";

const OurTeam = () => {
  const { t } = useTranslation();

  const ourTeam = [
    {
      imgSrc: "/imgs/aboutUs/team/jeetu_kataria.svg",
      title: `${t("about_us.jeetu_kataria")}`,
      description: `${t("about_us.co_founder_and_ceo")}`,
      linkedinLink: "https://www.linkedin.com/in/jeetu-kataria-84834521/",
    },
    {
      imgSrc: "/imgs/aboutUs/team/osama_bari.svg",
      title: `${t("about_us.osama_bari")}`,
      description: `${t("about_us.chief_technology_officer")}`,
      linkedinLink: "https://www.linkedin.com/in/osama-bari-a9970a51/",
    },
    {
      imgSrc: "/imgs/aboutUs/team/ashita_shenoy.svg",
      title: `${t("about_us.ashita_shenoy")}`,
      description: `${t("about_us.chief_financial_officer")}`,
      linkedinLink: "https://www.linkedin.com/in/ashita-shenoy-financepro/",
    },
    {
      imgSrc: "/imgs/aboutUs/team/shreenath_iyer.svg",
      title: `${t("about_us.shreenath_iyer")}`,
      description: `${t("about_us.chief_marketing_officer")}`,
      linkedinLink: "https://www.linkedin.com/in/siyer93/",
    },
    {
      imgSrc: "/imgs/aboutUs/team/ashish_tolani.svg",
      title: `${t("about_us.ashish_tolani")}`,
      description: `${t("about_us.vp_finance_and_admin")}`,
      linkedinLink: "https://www.linkedin.com/in/ashish-tolani/",
    },
  ];
  const ourTeamData = [
    {
      imgSrc: "/imgs/aboutUs/team/omar_ai_ali.svg",
      title: `${t("about_us.omar_al_ali")}`,
      description: `${t("about_us.vp_sales")}`,
      linkedinLink: "https://www.linkedin.com/in/al-ali-omar/",
    },
    {
      imgSrc: "/imgs/aboutUs/team/harshal_sharma.svg",
      title: `${t("about_us.harshal_sharma")}`,
      description: `${t("about_us.vp_strategic_phatnerships")}`,
      linkedinLink: "https://www.linkedin.com/in/harshalsharma/",
    },
    {
      imgSrc: "/imgs/aboutUs/team/elizaveta_koralkova.svg",
      title: `${t("about_us.elizaveta_koralkova")}`,
      description: `${t("about_us.head_of_listings")}`,
      linkedinLink: "https://www.linkedin.com/in/elizaveta-korolkova/",
    },
    {
      imgSrc: "/imgs/aboutUs/team/chinnmay_shah.svg",
      title: `${t("about_us.chinnmay_shah")}`,
      description: `${t("about_us.legel_councel")}`,
      linkedinLink: "https://www.linkedin.com/in/chinnmay-s-shah-a5268182/",
    },
    {
      imgSrc: "/imgs/aboutUs/team/jaikishan_dhanwani.svg",
      title: `${t("about_us.jaikishan_dhanwani")}`,
      description: `${t("about_us.head_of_risks_and_trading")}`,
      linkedinLink: "https://www.linkedin.com/in/jackydhanwani/",
    },
  ];

  return (
    <OurTermContentStyled>
      <Heading type="H4" align="center">
      {t("about_us.our_team")}
      </Heading>
      <Row gutter={[48, 48]} className="team-card-main">
        {ourTeam.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={24} md={24} lg={4} xl={4}>
              <div className="team-card">
                <img src={item.imgSrc} />
                <div className="team-label-div">
                  <Text
                    weight="bold"
                    type="medium"
                    align="center"
                    className="team-label"
                  >
                    {item.title}
                  </Text>
                  <a href={item.linkedinLink} target="_blank">
                    <img src="/imgs/aboutUs/Linkedin.svg" />
                  </a>
                </div>
                <Text
                  color="secondary"
                  type="small"
                  align="center"
                  className="team-description"
                >
                  {item.description}
                </Text>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row gutter={[48, 48]} className="team-card-main">
        {ourTeamData.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={24} md={24} lg={4} xl={4}>
              <div className="team-card">
                <img src={item.imgSrc} />
                <div className="team-label-div">
                  <Text
                    weight="bold"
                    type="medium"
                    align="center"
                    className="team-label"
                  >
                    {item.title}
                  </Text>
                  <a href={item.linkedinLink} target="_blank">
                    <img src="/imgs/aboutUs/Linkedin.svg" />
                  </a>
                </div>
                <Text
                  color="secondary"
                  type="small"
                  align="center"
                  className="team-description"
                >
                  {item.description}
                </Text>
              </div>
            </Col>
          );
        })}
      </Row>
    </OurTermContentStyled>
  );
};

export default OurTeam;
