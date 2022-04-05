import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type MainSwitchProps = {
  children?: ReactNode;
};

const MainSwitch = ({ children }: MainSwitchProps) => {
  return (
    <Flex as="main" w="100%">
      // in here put a flexbox for the description and the guild updates along
      // with some logic to control which is rendered.
      {children}
    </Flex>
  );
};

export default MainSwitch;
