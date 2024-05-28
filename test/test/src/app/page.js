import Image from "next/image";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import {
  StartupScreen 
 } from './ui-components';

Amplify.configure(awsconfig);

export default function Home() {
  return (
    <ThemeProvider theme={studioTheme}>
      <StartupScreen />
    </ThemeProvider>
  );
}
