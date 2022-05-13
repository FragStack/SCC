import { Button, Flex } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import TempBox from "./TempBox";

type MainSwitchProps = {
  children?: ReactNode;
};

// #f9ffff
const MainSwitch = ({ children }: MainSwitchProps) => {
  const [switchState, setSwitchState] = useState<string>("about");

  return (
    <Flex direction="column" as="main" w="100%" align="center">
      // in here put a flexbox for the description and the guild updates along
      // with some logic to control which is rendered.
      <Flex direction="row" justify="center" w="100%">
        <Button
          mr="2em"
          position="relative"
          overflow="hidden"
          borderTopLeftRadius={"2em 1em"}
          borderTopRightRadius={"2em 1em"}
          onClick={() => {
            setSwitchState("about");
          }}
        >
          About This Page
        </Button>
        <Flex
          p=".15em"
          bg="black"
          borderTopLeftRadius={"1em 1.25em"}
          borderTopRightRadius={"1em 1.25em"}
          borderBottomLeftRadius={"1.25em 1em"}
          borderBottomRightRadius={"1.25em 1em"}
          border="2px solid #f9ffff"
        >
          <Button
            bg="#f9ffff"
            borderTopLeftRadius={"1em 1.25em"}
            borderTopRightRadius={"1em 1.25em"}
            borderBottomLeftRadius={"1.25em 1em"}
            borderBottomRightRadius={"1.25em 1em"}
            // border="1px solid black"
            p="1em"
          >
            Guild Updates
          </Button>
        </Flex>
      </Flex>
      {children}
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
      <TempBox />
    </Flex>
  );
};

export default MainSwitch;
