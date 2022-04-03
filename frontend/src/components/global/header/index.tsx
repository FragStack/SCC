import { Flex, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type HeaderProps = {
  children?: ReactNode;
  title: string;
};

const Header = ({ children, title }: HeaderProps) => {
  return (
    <Flex
      as="nav"
      //temp
      bg="navy"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
    >
      <Heading>{title}</Heading>
      {children}
    </Flex>
  );
};

export default Header;
