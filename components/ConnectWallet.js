import { ThirdwebProvider, ConnectButton } from "@thirdweb-dev/react";
import {createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "@thirdweb-dev/react";
  

  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
    inAppWallet({
      auth: {
        options: [
          "email",
          "google",
          "apple",
          "facebook",
          "phone",
        ],
      },
    }),
  ];
  
  export default function ConnectedWalletFunct() {
    return (
      <ThirdwebProvider>
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={"dark"}
          connectModal={{ size: "wide" }}
        />
      </ThirdwebProvider>
    );
  }