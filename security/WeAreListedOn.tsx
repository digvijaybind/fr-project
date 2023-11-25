import React from "react";
import { Button } from "antd";
import { Heading } from "@difx_ui";
import { useTranslation } from "next-i18next";
import { WeAreListedOnContentStyled } from "./styled";

const WeAreListedOn = () => {
  const { t } = useTranslation();

  return (
    <WeAreListedOnContentStyled>
      <Heading type="H4" align="center">
      {t("about_us.we_are_listed_on")}
      </Heading>
      <div className="coinmarket-cap-btn">
        <Button>
          <img src="/imgs/aboutUs/coinmarket_cap.svg" alt="" />
          {t("about_us.coinmarketcap")}
        </Button>
      </div>
    </WeAreListedOnContentStyled>
  );
};

export default WeAreListedOn;
