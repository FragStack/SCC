import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../header";
import MainSwitch from "../MainSwitch";

type SiteLayoutProps = {
  children?: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      minH={"100vh"}
      bgImage="url('/space.jpg')"
      bgSize="cover"
      bgAttachment="fixed"
      // bgAttachment="fixed"
    >
      <Header title="Smart Contract CDN Demo" />
      <MainSwitch />
    </Flex>
  );
};

export default SiteLayout;
