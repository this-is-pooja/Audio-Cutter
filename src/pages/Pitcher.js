"use client";

import { Box, Button, FileButton, Flex, Text, Title } from "@mantine/core";
import React, { useState } from "react";

export default function Pitcher() {
  const [file, setFile] = useState(null);

  return (
    <Box mt={"20%"} align="center" ml={"20%"}>
      <Flex gap={30} justify={"center"} mb={50}>
        <Text fz="md" fw="600" c={"#fff"}>
          HOW IT WORKS
        </Text>
      </Flex>
      <Title fz={"44px"} c={"#fff"}>
        Audio Speed and Pitch Changer
      </Title>
      <Title fz={"22px"} m={"25px 0 40px 0"} c="#fff">
        Changes pitch and tempo of the song by adjusting musical key and bpm
        sliders
      </Title>
     
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
