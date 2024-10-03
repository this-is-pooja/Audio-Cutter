"use client";

import { Box, Button, FileButton, Flex, Text, Title } from "@mantine/core";
import React, { useState } from "react";

import Image from "next/image";
import MicOff from "../assets/images/MicOff.png";

export default function Recorder() {
  const [file, setFile] = useState(null);

  return (
    <Box mt={"15%"} align="center" ml={"12%"}>
      <Image src={MicOff} />
      <Title fz={"44px"} c={"#fff"}>
        Access Denied
      </Title>
      <Title fz={"22px"} m={"25px 0 40px 0"} c="#fff">
        Please allow browser to access your microphone. You can do this in
        browser settings or in the address bar.
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
