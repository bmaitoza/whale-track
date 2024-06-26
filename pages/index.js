import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../components/LandingPage";
import styled from 'styled-components';
import { useEffect } from "react";
import {ethers} from 'ethers';


export default function Home() {
  const router = useRouter();
  const signer = useSigner();

  useEffect(() => {
    const AsyncFunction = async () => {
      if(!signer){return}
      const contract = new ethers.Contract()

    }
  })
  
  return (
    <>
      <Head>
        <title>Whale Track: Tracking the biggest Cryptocurrency wallets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* <HomeSection
        bgImage=""
        heading="Tracking the Biggest Cryptocurrency Whales"
        subheading1="See What the Big Wallets are Doing for the Top 5 Cryptocurrencies"
        height="100vh"
        headingSize="5rem"
        subheadingSize="2rem"
        imagePosition="center top"
        showButton="true"
      /> */}
    </>
  );
}
