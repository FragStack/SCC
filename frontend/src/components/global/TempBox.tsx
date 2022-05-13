import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

const TempBox = (props: Props) => {
  return (
    <Flex w="50%" minH="10%" bg="#f9ffff" mt={"5em"}>
      temp
    </Flex>
  );
};

export default TempBox;
