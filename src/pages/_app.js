// pages/_app.js

import "@mantine/core/styles.css";
import '../../src/app/globals.css'; // Ensure this path is correct

import Home from "./index"; // Adjust the path based on your file structure
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {

  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark', 
        primaryColor: 'violet',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
     <Home />
    </MantineProvider>
  );
}

export default MyApp;
