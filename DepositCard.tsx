import React from "react";
import { DepositCardContentStyled } from "./styled";
import { Row, Col, Button } from "antd";
import { Heading, Text } from "@difx_ui";
const DepositCard = () => {
  return (
    <DepositCardContentStyled>
      <div className="deposit-card">
        <Heading type="H5" align="center">
          Deposit ‘X amount’ & Upgrade to VIP
        </Heading>
        <Text align="center" type="small">
          Get VIP level 1 when you reach ‘X amount’ USD in equity!
        </Text>
        <Button type="primary">Deposit Now</Button>
      </div>
      <img
        src="/imgs/vipPrograms/deposit-left-img.svg"
        className="deposit-left-img"
      />
      <img
        src="/imgs/vipPrograms/deposit-right-img.svg"
        className="deposit-right-img"
      />
    </DepositCardContentStyled>
  );
};

export default DepositCard;
