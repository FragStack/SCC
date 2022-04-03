import { VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type GuildUpdateProps = {
  children?: ReactNode;
};

const GuildUpdates = ({ children }: GuildUpdateProps) => {
  return (
    <VStack as="main" w="100%" minH="20vh">
      Temp Guild updates section
    </VStack>
  );
};

export default GuildUpdates;
