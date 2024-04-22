import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ethers from 'ethers';
import{useStorage, useSigner} from '@thirdweb-dev/react';

const CryptoTrackerContainer = styled.div`
  margin: 10vh;
  max-width: 100vw;
  text-align: center;
`;

const WalletContainer = styled.div`
margin: 1vh;
max-width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    `
const CryptoTracker = () => {
  const [topBTCWallets, setTopBTCWallets] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchTopBTCWallets = async () => {
      try {
        const response = await fetch('API_ENDPOINT_FOR_TOP_BTC_WALLETS');
        const data = await response.json();
        setTopBTCWallets(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTopBTCWallets();
  }, []);

  return (
    <CryptoTrackerContainer>
            <h1>Top 5 BTC Wallets</h1>
            <WalletContainer>
              <p>Wallet Address: 0x108ef6ba </p>
              <p>Owned BTC: 1017 BTC</p> 
              <p>Recent Transaction: Bought 50 BTC</p> 
          </WalletContainer>
          <WalletContainer>
<p>Wallet Address: 0x108ef6ba </p>
<p>Owned BTC: 1017 BTC</p> 
<p>Recent Transaction: Bought 50 BTC</p> 
</WalletContainer>
<WalletContainer>
<p>Wallet Address: 0x108ef6ba </p>
<p>Owned BTC: 1017 BTC</p> 
<p>Recent Transaction: Bought 50 BTC</p> 
</WalletContainer>
<WalletContainer>
<p>Wallet Address: 0x108ef6ba </p>
<p>Owned BTC: 1017 BTC</p> 
<p>Recent Transaction: Bought 50 BTC</p> 
</WalletContainer>
<WalletContainer>
<p>Wallet Address: 0x108ef6ba </p>
<p>Owned BTC: 1017 BTC</p> 
<p>Recent Transaction: Bought 50 BTC</p> 
</WalletContainer>
<h1>Top 5 ETH Wallets</h1>
            <WalletContainer>
              <p>Wallet Address: 0x108ef6ba </p>
              <p>Owned ETH: 1017 ETH</p> 
              <p>Recent Transaction: Bought 50 ETH</p> 
          </WalletContainer>
          <WalletContainer>
<p>Wallet Address: 0x108ef6ba </p>
<p>Owned ETH: 1017 ETH</p> 
<p>Recent Transaction: Bought 50 ETH</p> 
</WalletContainer>
<WalletContainer>
<p>Wallet Address: 0x108ef6ba </p>
<p>Owned ETH: 1017 ETH</p> 
<p>Recent Transaction: Bought 50 ETH</p> 
</WalletContainer>
<WalletContainer>
<p>Wallet Address: 0x108ef6ba </p>
<p>Owned ETH: 1017 ETH</p> 
<p>Recent Transaction: Bought 50 ETH</p> 
</WalletContainer>
<WalletContainer>
<p>Wallet Address: 0x108ef6ba </p>
<p>Owned ETH: 1017 ETH</p> 
<p>Recent Transaction: Bought 50 ETH</p> 
</WalletContainer>
</CryptoTrackerContainer>


  );
};

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <CryptoTracker />
    </AppContainer>
  );
};

export default App;



