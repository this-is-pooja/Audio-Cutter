"use client";

import React, { useState } from "react";

import { Box } from "@mantine/core";
import Cutter from "../pages/Cutter";
import Joiner from "./Joiner";
import Karaoke from "./Karaoke";
import KeyBpmFinder from "./Key-bpm-finder";
import MenuIcon from "../assets/icons/menu-deep.svg";
import Pitcher from "../pages/Pitcher";
import Recorder from "./Recorder";
import Remover from "../pages/Remover";
import Sidebar from ".././app/Components/Sidebar";
import Splitter from "../pages/Splitter";
import { useRouter } from "next/router";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("Remover");
  const router=useRouter();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/${page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Remover":
        return <Remover />;
      case "Splitter":
        return <Splitter />;
      case "Pitcher":
        return <Pitcher />;
      case "Key-bpm-finder":
        return <KeyBpmFinder />;
      case "Cutter":
        return <Cutter />;
      case "Joiner":
        return <Joiner />;
      case "Recorder":
        return <Recorder />;
      case "Karaoke":
        return <Karaoke />;
      default:
        return <Remover />;
    }
  };

  return (
    <Box
      bg={"#1C1C26"}
      h={"100vh"}
      w={"100vw"}
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Box
        h={"100vh"}
        bg={isSidebarOpen ? "#2D343E" : ""}
        style={{ borderRight: isSidebarOpen && "1px solid #55585c" }}
      >
        <MenuIcon
          style={{
            transform: "scaleX(-1)",
            margin: "20px 0 10px 20px",
            cursor: "pointer",
          }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        {isSidebarOpen && (
          <Sidebar onPageChange={handlePageChange} currentPage={currentPage} />
        )}
      </Box>
      {renderPage()}
    </Box>
  );
}
