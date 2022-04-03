import { Flex, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import GuildUpdates from "../../guildUpdates";
import Header from "../header";

type SiteLayoutProps = {
  children?: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <Header title="Smart Contract CDN Demo" />
      //temp flex where the tech overview will go
      <Flex as="section" w="100%" minH="40vh" bg="grey">
        Tech description here
      </Flex>
      <GuildUpdates />
    </>
  );
};

export default SiteLayout;
