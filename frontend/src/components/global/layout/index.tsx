import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../header";
import MainSwitch from "../MainSwitch";

type SiteLayoutProps = {
  children?: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <Flex w="100%" minH="120vh" direction="column" align="center">
      <Header title="Smart Contract CDN Demo" />
      <MainSwitch />
    </Flex>
  );
};

export default SiteLayout;
