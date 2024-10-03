"use client";

import { Box, Button, FileButton, Flex, Text, Title } from "@mantine/core";
import React, { useState } from "react";

export default function Joiner() {
  const [file, setFile] = useState(null);

  return (
    <Box mt={"20%"} align="center" ml={"20%"}>
      <Title fz={"44px"} c={"#fff"}>
        Audio Joiner
      </Title>
      <Title fz={"22px"} m={"25px 0 40px 0"} c="#fff">
        Join multiple audio tracks into one. Choose audio files you want to
        merge
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
