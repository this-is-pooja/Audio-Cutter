"use Client";

import { Box, Flex, ScrollArea, Text } from "@mantine/core";

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
import { useRouter } from "next/navigation";

export default function Sidebar({ onPageChange, currentPage }) {
  return (
    <>
      <ScrollArea h={490} w={80} type="always">
        <Flex
          direction={"column"}
          w={"62px"}
          align={"center"}
          justify={"center"}
        >
          <Flex
            direction={"column"}
            p={8}
            onClick={() => onPageChange("Remover")}
            style={{
              borderRight:
                currentPage === "Remover" ? "1px solid #6656d3" : "none",
              backgroundColor: currentPage === "Remover" && "#1C1C26",
            }}
          >
            <Image src={Remover} />
            <Text c="#6a7380" fz={"sm"} ml={10}>
              Remover
            </Text>
          </Flex>

          <Flex
            direction={"column"}
            p={10}
            onClick={() => onPageChange("Splitter")}
            style={{
              borderRight:
                currentPage === "Splitter" ? "1px solid #6656d3" : "none",
              backgroundColor: currentPage === "Splitter" && "#1C1C26",
            }}
          >
            <Splitter style={{ width: "50px", height: "50px" }} />
            <Text c="#6a7380" fz={"sm"} ml={10}>
              Splitter
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            ta={"center"}
            p={10}
            onClick={() => onPageChange("Pitcher")}
            style={{
              borderRight:
                currentPage === "Pitcher" ? "1px solid #6656d3" : "none",
              backgroundColor: currentPage === "Pitcher" && "#1C1C26",
            }}
          >
            <Pitcher style={{ width: "50px", marginRight: "5px" }} />
            <Text c="#6a7380" fz={"sm"} ml={8}>
              Pitcher
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            ta={"center"}
            h={100}
            onClick={() => onPageChange("Key-bpm-finder")}
            style={{
              borderRight:
                currentPage === "Key-bpm-finder" ? "1px solid #6656d3" : "none",
              backgroundColor: currentPage === "Key-bpm-finder" && "#1C1C26",
            }}
          >
            <KeyBpmFinder style={{ width: "50px" }} />
            <Text c="#6a7380" fz={"sm"} ml={8}>
              Key BPM Finder
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            ta={"center"}
            h={70}
            p={6}
            mt={20}
            style={{
              borderRight:
                currentPage === "Cutter" ? "1px solid #6656d3" : "none",
              backgroundColor: currentPage === "Cutter" && "#1C1C26",
            }}
            onClick={() => onPageChange("Cutter")}
          >
            <Cutter style={{ width: "50px", marginLeft: "35px" }} />
            <Text c="#6a7380" fz={"sm"} ml={8}>
              Cutter
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            ta={"center"}
            h={70}
            mb={10}
            w={76}
            onClick={() => onPageChange("Joiner")}
            style={{
              borderRight:
                currentPage === "Joiner" ? "1px solid #6656d3" : "none",
              backgroundColor: currentPage === "Joiner" && "#1C1C26",
            }}
          >
            <Joiner style={{ width: "50px",marginLeft:12 }} />
            <Text c="#6a7380" fz={"sm"} ml={10}>
              Joiner
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            ta={"center"}
            h={70}
            onClick={() => onPageChange("Recorder")}
            style={{
              borderRight:
                currentPage === "Recorder" ? "1px solid #6656d3" : "none",
              backgroundColor: currentPage === "Recorder" && "#1C1C26",
            }}
          >
            <Recorder style={{ width: "50px", margin: "10px 0 0px 30px" }} />
            <Text c="#6a7380" fz={"sm"} ml={10}>
              Recorder
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            ta={"center"}
            h={70}
            mb={10}
            onClick={() => onPageChange("Karaoke")}
            style={{
              borderRight:
                currentPage === "Karaoke" ? "1px solid #6656d3" : "none",
              backgroundColor: currentPage === "Karaoke" && "#1C1C26",
            }}
          >
            <Karaoke
              style={{
                width: "50px",
                height: "40px",
                margin: "10px 0 0px 15px",
              }}
            />
            <Text c="#6a7380" fz={"sm"} ml={10}>
              Karaoke
            </Text>
          </Flex>
        </Flex>
      </ScrollArea>
      <Flex
        direction={"column"}
        mt={30}
        justify={"center"}
        align={"center"}
        // onClick={() => onPageChange("Support")}
        // style={{
        //   borderRight: currentPage === "Support" ? "1px solid #6656d3" : "none",
        //   backgroundColor: currentPage === "Support" && "#1C1C26",
        // }}
      >
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
