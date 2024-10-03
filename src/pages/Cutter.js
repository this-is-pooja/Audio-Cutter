"use client";

import { Box, Button, FileButton, Flex, Text, Title } from "@mantine/core";
import React, { useState } from "react";

import AudioEditor from "../app/Components/AudioEditor";

export default function Cutter() {
  const [file, setFile] = useState(null);
  const [fileName,setFileName]=useState(null);

  return file ? (
    <AudioEditor file={file} fileName={fileName}setFile={setFile}/>
  ) : (
    <Box mt={"16%"} align="center" ml={"30%"}>
      <Flex gap={30} justify={"center"} mb={50}>
        <Text fz="md" fw="600" c={"#fff"}>
          HOW IT WORKS
        </Text>
        <Text fz="md" fw="600" c={"#fff"}>
          JOINER
        </Text>
      </Flex>
      <Title fz={"44px"} c={"#fff"}>
        Audio Cutter
      </Title>
      <Title fz={"22px"} m={"25px 0 40px 0"} c="#fff">
        Free editor to trim and cut any audio file online
      </Title>
      <FileButton  accept="audio/*"
       onChange={(file) => {
        if (file) {
          const fileURL = URL.createObjectURL(file); 
          setFile(fileURL); 
          setFileName(file?.name);
        }
      }}
      >
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
