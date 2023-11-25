import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Layout } from "antd";
import VipPrograms from "../../components/vip-programs/VipPrograms";
import { VipProgramContentStyled } from "../../style/vip-programs.styled";
import { useTitle } from "@difx/shared";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "./../../next-i18next.config";

export function StocksLayout() {
  const { t } = useTranslation();

  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle(`VIP Programs`);
  }, []);
  return (
    <>
      <VipProgramContentStyled>
        <Layout>
          <VipPrograms />
        </Layout>
      </VipProgramContentStyled>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale,
        ["common"],
        nextI18nextConfig
      )),
    },
  };
}
export default StocksLayout;
