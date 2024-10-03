import { Box, Button, Divider, Flex, Group, Select, Text } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

import { FaPause } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { PiArrowBendUpRight } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { TbCut } from "react-icons/tb";
import WaveSurfer from "wavesurfer.js";

const AudioEditor = ({ file, fileName, setFile }) => {
  const wavesurferRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showFileTypes, setShowFileTypes] = useState(false);
  const [selectedType, setSelectedType] = useState("mp3");

  useEffect(() => {
    if (wavesurferRef.current && !wavesurfer) {
      const ws = WaveSurfer.create({
        container: wavesurferRef.current,
        waveColor: "#4c5c68",
        progressColor: "#86c7f3",
        cursorColor: "#86c7f3",
        barWidth: 2,
        barRadius: 3,
        responsive: true,
        height: 100,
      });

      setWavesurfer(ws);

      return () => {
        ws.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (wavesurfer && file) {
      wavesurfer.load(file);

      wavesurfer.on("ready", () => {
        const audioDuration = wavesurfer.getDuration();
        setDuration(audioDuration);
      });

      wavesurfer.on("play", () => setIsPlaying(true));
      wavesurfer.on("pause", () => setIsPlaying(false));
      wavesurfer.on("audioprocess", () => {
        setCurrentTime(wavesurfer.getCurrentTime());
      });
    }
  }, [wavesurfer, file]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFile(fileURL);
    }
  };

  const handlePlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const handleCut = () => {
    console.log("Cut functionality not implemented");
  };

  const handleRemove = () => {
    console.log("Remove functionality not implemented");
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Box right={0} mt={20} onClick={() => setFile(null)}>
        <RxCross1 />
      </Box>
      <Box ml={"20%"} mt={"10%"}>
        <Text
          fz={"sm"}
          color={"#6a7380"}
          mt={20}
          ta={"right"}
          pos={"absolute"}
          right={50}
        >
          {file ? fileName : "No file selected"}
        </Text>
        <div ref={wavesurferRef} style={{ marginTop: "8%" }} />
        <Flex direction={"row"} justify={"space-between"}>
          <Text color="#6a7380" fz={"sm"}>
            {formatTime(currentTime)}
          </Text>
          <Text color="#6a7380" fz={"sm"}>
            {formatTime(duration)}
          </Text>
        </Flex>

        <Group mt={"50px"} pos={"absolute"} right={50}>
          <Button
            variant="filled"
            bg={"#2D343E"}
            color="#6a7380"
            fz={"md"}
            h={42}
            onClick={handleCut}
            style={{ cursor: "not-allowed" }}
          >
            <TbCut style={{ marginRight: "10px" }} color="#6a7380" />{" "}
            <Text color={"#6a7380"}>Cut</Text>
          </Button>
          <Button
            variant="filled"
            bg={"#2D343E"}
            color="#6a7380"
            fz={"lg"}
            h={42}
            onClick={handleRemove}
            style={{ cursor: "not-allowed" }}
          >
            <RiDeleteBin6Fill style={{ marginRight: "10px" }} color="#6a7380" />
            <Text color={"#6a7380"}>Remove</Text>
          </Button>
          <Button
            variant="filled"
            bg={"#2D343E"}
            color="#6a7380"
            fz={"lg"}
            h={42}
            style={{ cursor: "not-allowed" }}
          >
            <PiArrowBendUpLeftLight style={{ marginRight: "10px" }} />
          </Button>
          <Button
            variant="filled"
            bg={"#2D343E"}
            color="6a7380"
            fz={"lg"}
            h={42}
            style={{ cursor: "not-allowed" }}
          >
            <PiArrowBendUpRight />
          </Button>
        </Group>
        <Divider
          m={"10px"}
          color={"#6a7380"}
          w={"100vh"}
          mt={"28%"}
          ta={"center"}
        />
        <Group justify="space-between">
          <Group>
            <Button
              onClick={handlePlayPause}
              variant="filled"
              bg={"#2D343E"}
              w={138}
              h={45}
              fz={"md"}
              radius={24}
            >
              {!isPlaying ? (
                <IoMdPlay color="#6a7380" />
              ) : (
                <FaPause color={"#6a7380"} />
              )}
            </Button>
          </Group>
          <Group>
            <Group position="relative">
              <Group
                style={{
                  border: "1px solid #6a7380",
                  borderRadius: "24px",
                  cursor: "pointer",
                }}
                h={45}
                w={138}
                justify="center"
                onClick={() => setShowFileTypes(!showFileTypes)}
              >
                <Text fz={"md"} color={"#fff"}>
                  Format:{" "}
                  <span style={{ color: "#00ff8e" }}>{selectedType}</span>
                </Text>
              </Group>

              {showFileTypes && (
                <Flex
                  direction={"column"}
                  w={120}
                  mb={140}
                  justify={"center"}
                  style={{
                    border: "1px solid #6a7380",
                    borderRadius: "4px",
                    cursor: "pointer",
                    position: "absolute",
                    zIndex: 1,
                  }}
                  bg={"#2D343E"}
                  p={15}
                  gap={10}
                >
                  <Text
                    fz={"sm"}
                    color={"#fff"}
                    onClick={() => {
                      setSelectedType("wav");
                      setShowFileTypes(!showFileTypes);
                    }}
                  >
                    wav
                  </Text>
                  <Text
                    fz={"sm"}
                    color={"#fff"}
                    onClick={() => {
                      setSelectedType("mp3");
                      setShowFileTypes(!showFileTypes);
                    }}
                  >
                    mp3
                  </Text>
                </Flex>
              )}
            </Group>

            <Group>
              <Button
                variant="filled"
                bg={"#fff"}
                w={128}
                h={45}
                radius={24}
                c={"#000"}
                fz={"md"}
              >
                Save
              </Button>
            </Group>
          </Group>
        </Group>
      </Box>
    </>
  );
};

export default AudioEditor;
