import styled from "styled-components";
import { ThemeInterface } from "@difx/core-ui/themes";

export const PageStyled = styled.div`
  background-color: ${({ theme }: { theme: ThemeInterface }) =>
    theme.background.secondary};
    h4 {
    font-weight: 700;
    margin-bottom: 70px;
  }
`;

export const AboutUsHeaderStyled = styled.div`
  .top-banner {
    height: 800px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }: { theme: ThemeInterface }) =>
      theme.background.homeBg};
    .top-banner-header-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1;
    }
    .top-banner-description-div {
      .top-banner-description {
        margin-bottom: 20px;
      }
    }
    .top-banner-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      .ant-btn {
        border-radius: 8px !important;
        padding: 13px 32px;
        display: flex;
        align-items: center;
      }
    }
  }
  @media screen and (max-width: 676px) {
    .top-banner {
      height: 600px;
    }
  }
  @media screen and (min-width: 678px) and (max-width: 1024px) {
  }
`;

export const OurServicesContentStyled = styled.div`
  margin: 80px 0;
  h4 {
    font-weight: 700;
    margin-bottom: 70px;
  }
  .services-card {
    display: flex;
    flex-direction: column;
    img {
      width: 40px;
    }
    .services-label {
      text-transform: uppercase;
      margin-top: 10px;
      margin-bottom: 5px;
    }
  }
  .services-card-main {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    row-gap: 100px !important;
    .ant-col {
      padding-left: 30px !important;
      padding-right: 30px !important;
    }
  }
  @media screen and (max-width: 676px) {
    margin: 40px 0;
    h4 {
      margin-bottom: 30px;
    }
  }
`;

export const OurTermContentStyled = styled.div`
  margin: 70px 0 120px 0;
  h4 {
    font-weight: 700;
    margin-bottom: 70px;
  }
  .team-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 100px;
      width: 100px;
    }
    .team-label-div {
      display: flex;
      align-items: center;
      .team-label {
        margin-top: 10px;
        margin-bottom: 5px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-left: 5px;
        margin-top: 5px;
      }
    }
  }
  .team-card-main {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    row-gap: 100px !important;
    .ant-col {
      padding-left: 30px !important;
      padding-right: 30px !important;
    }
  }
  @media screen and (max-width: 676px) {
    margin: 60px 0;
    .team-card-main {
      margin-top: 90px;
    }
  }
  @media screen and (min-width: 678px) and (max-width: 1024px) {
    .team-card-main {
      margin-top: 90px;
    }
  }
`;

export const WeAreListedOnContentStyled = styled.div`
  margin: 80px 0;
  h4 {
    font-weight: 700;
    margin-bottom: 70px;
  }
  .coinmarket-cap-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    .ant-btn {
      display: flex;
      align-items: center;
      border-radius: 12px !important;
      padding: 12px 80px;
      img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }
  }
  @media screen and (max-width: 676px) {
    margin: 60px 0;
    h4 {
      margin-bottom: 30px;
    }
  }
`;

export const WorkingDIFXContentStyled = styled.div`
  margin: 80px 0;
  .working-difx-left {
    .working-difx-title-div {
      line-height: 1;
      padding-bottom: 20px;
      h2 {
        font-weight: 700;
      }
    }
    .working-difx-description {
      padding-bottom: 60px;
      font-weight: 500;
    }
    .view-opening-positions-button {
      .ant-btn {
        display: flex;
        align-items: center;
        border-radius: 8px !important;
        padding: 12px 16px;
      }
    }
  }
  .working-difx-img {
    width: 100%;
  }
  @media screen and (max-width: 676px) {
    margin: 40px 0;
    .working-difx-left {
      .working-difx-title-div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .working-difx-description {
        text-align: center;
      }
      .view-opening-positions-button {
        display: flex;
        justify-content: center;
        .ant-btn {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
`;
