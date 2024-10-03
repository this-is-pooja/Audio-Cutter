"use client";

import { Box, Button, FileButton, Flex, Text, Title } from "@mantine/core";
import React, { useState } from "react";

export default function Karaoke() {
  const [file, setFile] = useState(null);

  return (
    <Box mt={"24%"} align="center" ml={"15%"}>
      <Title fz={"44px"} c={"#fff"}>
      Recording Voice Over a Song
      </Title>
      <Title fz={"22px"} m={"25px 0 40px 0"} c="#fff">
      Sing & record, tune voice and save complete song. Choose karaoke track you want to sing with
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
