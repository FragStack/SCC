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
      bg="transparent"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={8}
    >
      <Heading>{title}</Heading>
      {children}
    </Flex>
  );
};

export default Header;
