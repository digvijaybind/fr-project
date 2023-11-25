import styled from "styled-components";
import { ThemeInterface } from "@difx/core-ui/themes";

export const PageStyled = styled.div`
  background-color: ${({ theme }: { theme: ThemeInterface }) =>
    theme.background.secondary};
`;
export const VipProgramsBannerContentStyled = styled.div`
  width: 100%;
  margin: 0;
  min-width: 0;
  margin-left: auto;
  margin-right: auto;
  .top-banner {
    background-color: ${({ theme }: { theme: ThemeInterface }) =>
      theme.color.secondaryMuted};
    .top-banner-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    backdrop-filter: blur(250px);
    .top-banner-img {
      width: -webkit-fill-available;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    h2 {
      font-weight: 700;
    }
    .top-banner-description {
      margin-top: 10px;
    }
    .top-banner-btn {
      margin-top: 20px;
    }
  }
`;

export const DepositCardContentStyled = styled.div`
  margin-bottom: 50px;
  background-color: ${({ theme }: { theme: ThemeInterface }) =>
    theme.background.secondary};
  padding: 30px;
  border-radius: 12px;
  position: relative;
  .deposit-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ant-btn {
      border-radius: 8px !important;
      margin-top: 20px;
    }
  }
  .deposit-left-img {
    position: absolute;
    top: -40px;
    left: 0;
    width: 170px;
  }
  .deposit-right-img {
    position: absolute;
    top: 0px;
    right: 0;
    height: 100%;
  }
`;

export const MyVipPrivilegesContentStyled = styled.div`
  margin: 40px 0;
  h4 {
    margin-bottom: 40px;
  }
  .vip-privileges-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
export const VipStatusContentStyled = styled.div`
  margin-top: 20px;
  .vip-status-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  backdrop-filter: blur(250px);
  .vip-status-img {
    width: 350px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  h2 {
    font-weight: 700;
  }
  .vip-status-description {
    margin-top: 10px;
  }
`;

export const VipNowContentStyled = styled.div`
  margin: 50px 0;
  background-color: #E0F9FF;
  padding: 30px;
  border-radius: 12px;
  .vip-now-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ant-btn {
      border-radius: 8px !important;
      margin-top: 20px;
    }
  }
  .vip-now-left-img {
    position: absolute;
    bottom: 50px;
    left: 0;
    height: 100px;
  }
`;
