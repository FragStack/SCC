import { VStack, Spinner } from "@chakra-ui/react";
import { Button, useBoolean } from '@chakra-ui/react'
import React, { useState, ReactNode } from "react";

type GuildUpdateProps = {
  children?: ReactNode;
};


const GuildUpdates = ({ children }: GuildUpdateProps) => {
  const [loading, setLoading] = useBoolean(false)
  if (!loading) {
    return (
      <VStack as="main" w="100%" minH="20vh">
        <Button colorScheme='teal' size='lg' onClick={setLoading.toggle}>
          Request Guild Update
        </Button>
    </VStack>
    );
  } else {
    return (
      <VStack as="main" w="100%" minH="20vh">
        <Spinner size='xl'/>
        <h2>Digging through IPFS boxes for your requested content...</h2>
        <Button colorScheme='teal' size='lg' onClick={setLoading.toggle}>
          Toggle loading off (dev)
        </Button>
      </VStack>
    );
  }
};

export default GuildUpdates;
