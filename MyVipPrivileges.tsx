import React from "react";
import { Row, Col, Button } from "antd";
import { Heading, Text } from "@difx_ui";
import { MyVipPrivilegesContentStyled } from "./styled";

const MyVipPrivileges = () => {
  const vipPrivileges = [
    {
      name: "24h Withdrawal Limit",
      imgSrc: "/imgs/vipPrograms/bitcoin.svg",
    },
    {
      name: "X% BTC Pairs Trading Fee",
      imgSrc: "/imgs/vipPrograms/bitcoin.svg",
    },
    {
      name: "X% ETH Pairs Trading Fees",
      imgSrc: "/imgs/vipPrograms/eth.svg",
    },
    {
      name: "Fee Discount",
      imgSrc: "/imgs/vipPrograms/fee-discount.svg",
    },
    {
      name: "Prestige",
      imgSrc: "/imgs/vipPrograms/medal.svg",
    },
    {
      name: "Account Priority",
      imgSrc: "/imgs/vipPrograms/document.svg",
    },
  ];
  return (
    <MyVipPrivilegesContentStyled>
      <Heading type="H4" align="center">
        My VIP Privileges
      </Heading>
      <Row gutter={[48, 48]}>
        {vipPrivileges.map((item, index) => (
          <Col xs={24} sm={24} md={12} lg={8} key={index}>
            <div className="vip-privileges-card">
              <img src={item.imgSrc} />
              <Text weight="semiBold">{item.name}</Text>
            </div>
          </Col>
        ))}
      </Row>
    </MyVipPrivilegesContentStyled>
  );
};

export default MyVipPrivileges;
