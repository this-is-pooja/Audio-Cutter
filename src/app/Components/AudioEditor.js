import {
  Box,
  Button,
  Group,
  Select,
  Text,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

// import TimelinePlugin from 'wavesurfer.js/src/plugin/timeline';

// import RegionsPlugin from 'wavesurfer.js/src/plugin/regions';

const AudioEditor = ({ file }) => {
  const wavesurferRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);
  // const [file, setFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [zoom, setZoom] = useState(50);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    if (wavesurferRef.current && !wavesurfer) {
      const ws = WaveSurfer.create({
        container: wavesurferRef.current,
        waveColor: "#211027",
        progressColor: "#69207F",
        cursorColor: "violet",
        barWidth: 2,
        barRadius: 3,
        responsive: true,
        height: 150,
        // plugins: [
        //   RegionsPlugin.create(),
        //   TimelinePlugin.create({
        //     container: '#timeline'
        //   })
        // ]
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
        setEndTime(audioDuration);

        wavesurfer.addRegion({
          start: 0,
          end: audioDuration,
          color: "rgba(255, 0, 0, 0.1)",
        });
      });

      wavesurfer.on("play", () => setIsPlaying(true));
      wavesurfer.on("pause", () => setIsPlaying(false));
    }
  }, [wavesurfer, file]);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const fileURL = URL.createObjectURL(file);
  //     setFile(fileURL);
  //   }
  // };

  const handlePlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    if (wavesurfer) {
      wavesurfer.setVolume(value);
    }
  };

  const handleZoomChange = (value) => {
    setZoom(value);
    if (wavesurfer) {
      wavesurfer.zoom(value);
    }
  };

  const handleStartTimeChange = (value) => {
    setStartTime(value);
    if (wavesurfer) {
      const region =
        wavesurfer.regions.list[Object.keys(wavesurfer.regions.list)[0]];
      if (region) {
        region.update({ start: value });
      }
    }
  };

  const handleEndTimeChange = (value) => {
    setEndTime(value);
    if (wavesurfer) {
      const region =
        wavesurfer.regions.list[Object.keys(wavesurfer.regions.list)[0]];
      if (region) {
        region.update({ end: value });
      }
    }
  };

  const handleTrim = () => {
    if (wavesurfer) {
      const originalBuffer = wavesurfer.backend.buffer;
      const sampleRate = originalBuffer.sampleRate;
      const channels = originalBuffer.numberOfChannels;
      const startOffset = Math.floor(startTime * sampleRate);
      const endOffset = Math.floor(endTime * sampleRate);
      const newLength = endOffset - startOffset;

      const trimmedBuffer = wavesurfer.backend.ac.createBuffer(
        channels,
        newLength,
        sampleRate
      );

      for (let channel = 0; channel < channels; channel++) {
        const originalData = originalBuffer.getChannelData(channel);
        const trimmedData = trimmedBuffer.getChannelData(channel);
        for (let i = 0; i < newLength; i++) {
          trimmedData[i] = originalData[startOffset + i];
        }
      }

      wavesurfer.loadDecodedBuffer(trimmedBuffer);
      setStartTime(0);
      setEndTime(newLength / sampleRate);
      setDuration(newLength / sampleRate);
    }
  };

  return (
    <Box mt={100} ml={"30%"}>
      <Text align="center" size="sm" mb="xs" color={"#fff"}>
        {file ? file?.name : "No file selected"}
      </Text>
      <div ref={wavesurferRef} />
      <div id="timeline" />
      <Group position="apart" mt="md">
        <Group>
          <Button
            onClick={handlePlayPause}
            variant="filled"
            color="blue"
            size="sm"
          >
            {isPlaying ? "Pause" : "Play"}
          </Button>
        </Group>
        <Group>
          <Button variant="filled" color="gray" size="sm">
            Cut
          </Button>
          <Button variant="filled" color="gray" size="sm">
            Remove
          </Button>
          <Button variant="filled" color="gray" size="sm">
            &lt;
          </Button>
          <Button variant="filled" color="gray" size="sm">
            &gt;
          </Button>
        </Group>
      </Group>
      <Group position="apart" mt="md">
        <Group>
          <Text>Format:</Text>
          <Select
            value="mp3"
            data={[{ value: "mp3", label: "mp3" }]}
            style={{ width: "100px" }}
          />
        </Group>
        <Button variant="filled" color="blue">
          Save
        </Button>
      </Group>
    </Box>
  );
};

export default AudioEditor;
