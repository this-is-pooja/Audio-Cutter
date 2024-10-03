"use client";

import { Box, Button, FileButton, Flex, Text, Title } from "@mantine/core";
import React, { useState } from "react";

function KeyBpmFinder() {
  const [file, setFile] = useState(null);

  return (
    <Box mt={"20%"} align="center" ml={"27%"}>
      <Flex gap={30} justify={"center"} mb={50}>
        <Text fz="md" fw="600" c={"#fff"}>
          HOW IT WORKS
        </Text>
        <Text fz="md" fw="600" c={"#fff"}>
          TEP TEMPO
        </Text>
      </Flex>
      <Title fz={"44px"} c={"#fff"}>
        Song Key and BPM Finder
      </Title>
      <Title fz={"22px"} m={"25px 0 40px 0"} c="#fff">
        Analyzes music and finds Key, Scale and BPM for any song
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
export default KeyBpmFinder;
