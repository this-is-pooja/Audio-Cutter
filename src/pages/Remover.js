"use client";

import { Box, Button, FileButton, Flex, Text, Title } from "@mantine/core";
import React, { useState } from "react";

import Image from "next/image";
import Music from "../assets/images/Remover.png";

export default function Remover() {
  const [file, setFile] = useState(null);
  
  return (
    <Box mt={"10%"} align="center" ml={"20%"}>
      <Flex gap={30} justify={"center"} mb={50}>
        <Text fz="md" fw="600" c={"#fff"}>
          HOW IT WORKS
        </Text>
      </Flex>
      <Title fz={"44px"} c={"#fff"}>
      Vocal Remover and Isolation
      </Title>
      <Title fz={"22px"} m={"25px 0 40px 0"} c="#fff">
      Separate voice from music out of a song free with powerful AI algorithms
      </Title>
     <Box ta={"center"} mb={36}>
     <Image src={Music} width={569} height={237} />
     </Box>
      <FileButton onChange={setFile} accept="audio/*">
        {(props) => (
          <Button
            radius={"24px"}
            bg={"transparent"}
            h={44}
            w={160}
            style={{
              border: "2px solid #6656d3",
              cursor: "pointer",
            }}
            c={"#fff"}
            fz="md"
            {...props}
          >
            Browse my files
          </Button>
        )}
      </FileButton>
    </Box>
  );
}
