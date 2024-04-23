import { ThirdwebProvider, metamaskWallet, 
  coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
  import { createGlobalStyle } from 'styled-components'
  import { StateContext } from "react";
  import Head from "next/head";
  
  export const GlobalStyle = createGlobalStyle`
    * 
    {
      font-size: 1.157vw;
      line-height: 100%;
      font-family: "Uncut Sans Regular";
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none; 
      a {
        color: inherit; 
        text-decoration: none; 
      }
  
      @font-face {
        font-family: "Uncut Sans Bold";
        src: url("/fonts/UncutSans/Bold.otf");
      }
      @font-face {
        font-family: "Uncut Sans Book";
        src: url("/fonts/UncutSans/Book.otf");
      }
      @font-face {
        font-family: "Uncut Sans Light";
        src: url("/fonts/UncutSans/Light.otf");
      }
      @font-face {
        font-family: "Uncut Sans Medium";
        src: url("/fonts/UncutSans/Medium.otf");
      }
      @font-face {
        font-family: "Uncut Sans Regular";
        src: url("/fonts/UncutSans/Regular.otf");
      }
      @font-face {
        font-family: "Uncut Sans Semibold";
        src: url("/fonts/UncutSans/Semibold.otf");
      }
    }
  `
  
  export default function App({ Component, pageProps }) {
    return (
    <>    
      <Head>
        <title>Whale Tracking</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Traacking Top Wallets in Crypto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  
      <StateContext>
      <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
      clientId="80ebbd6cddb0c60ab49912d7f508e9f3">
    </ThirdwebProvider>
      </StateContext>
  
      <GlobalStyle />
    </>
    ) 
  }