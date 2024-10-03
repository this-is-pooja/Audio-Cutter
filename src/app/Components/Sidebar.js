"use Client";

import { Box, Flex, Text } from "@mantine/core";

import CountryFlag from "../../assets/images/CountryFlag.png";
import Cutter from "../../assets/icons/cut.svg";
import Image from "next/image";
import Joiner from "../../assets/icons/Joiner.svg";
import Karaoke from "../../assets/icons/Karaoke.svg";
import KeyBpmFinder from "../../assets/icons/key.svg";
import Pitcher from "../../assets/icons/Pitcher.svg";
import Recorder from "../../assets/icons/microphone.svg";
import Remover from "../../assets/icons/Remover.png";
import Splitter from "../../assets/icons/Splitter.svg";
import Support from "../../assets/icons/help.svg";

export default function Sidebar({ onPageChange, currentPage }) {
  return (
    <>
      <Box>
        <Flex align={"center"} direction={"column"} w={"5.5rem"} c={"pointer"}>
          {[
            { name: "Remover", icon: <Image src={Remover} /> },
            { name: "Splitter", icon: <Splitter /> },
            { name: "Pitcher", icon: <Pitcher /> },
            { name: "Key-bpm-finder", icon: <KeyBpmFinder /> },
            { name: "Cutter", icon: <Cutter /> },
            { name: "Joiner", icon: <Joiner /> },
            { name: "Recorder", icon: <Recorder /> },
            { name: "Karaoke", icon: <Karaoke /> },
          ].map(({ name, icon }) => (
            <Flex
              key={name}
              align={"center"}
              w={"100%"}
              direction={"column"}
              ta={"center"}
              onClick={() => onPageChange(name)}
              py={"8px"}
              style={{
                cursor: "pointer",
                borderRight: currentPage === name ? "1px solid #6656d3" : "none",
                backgroundColor: currentPage === name ? "#1C1C26" : "transparent",
              }}
            >
              {icon}
              <Text
                c={currentPage === name ? "#ffffff" : "#6a7380"}
                fz={"sm"}
              >
                {name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Flex align={"center"} direction={"column"} mt={30}>
        <Support />
        <Text c="#6a7380" fz={"sm"}>
          Support
        </Text>
      </Flex>
      <Box align={"center"} mt={12}>
        <Image src={CountryFlag} />
      </Box>
    </>
  );
}
