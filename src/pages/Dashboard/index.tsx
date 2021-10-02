import React from 'react';
import DashboardLayout from '../../components/Layout/DashBoardLayout';
import HomeLayout from '../../components/Layout/HomeLayout';
import WalletList, {
  WalletListOne,
  WalletListTwo,
} from '../../components/WalletList';
import BTCLogo from '../../assets/images/btc.png';
import DownLoadLogo from '../../assets/images/downLoad.png';
import { InputTextDashboard } from '../../components/Input';
import Button from '../../components/Button';
import DPIconAlert from '../../assets/images/alert.png';

import {
  Container,
  FlexTransactions,
  AmountText,
  AssertBar,
  TextSecondary,
  TextMain,
  List,
  WalletTabsHeader,
  TabsHeader,
  USDContainer,
  TextBTC,
  TextSecBTC,
  WalletText,
  WalletTransactions,
  Form,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <HomeLayout>
        <AssertBar>
          <div>
            <TextSecondary> My Asset Portfolio</TextSecondary>
            <TextMain>
              N0.00 <sup>NGN</sup>
            </TextMain>
          </div>

          <USDContainer>
            USD
            <div>
              <TextSecondary>NGN</TextSecondary>
            </div>
          </USDContainer>
        </AssertBar>

        <Container>
          <FlexTransactions>
            <div className="card">
              <div className="card--line">
                <div className="card--wallet">
                  <div className="card--wallet_header">
                    <WalletText>Wallet</WalletText>

                    <div className="card--wallet_list">
                      <div className="list">List</div>
                      Stats
                    </div>
                  </div>

                  <TabsHeader>
                    <p className="active tab">FLEX</p>
                    <p className="tab">VAULT</p>
                  </TabsHeader>
                </div>
              </div>

              <div className="card--botto">
                <WalletListOne />
              </div>
            </div>

            <div className="card--bottom">
              <WalletListTwo />
            </div>
            <div className="card">
              <WalletList />
            </div>
          </FlexTransactions>

          <WalletTransactions>
            <div className="card--balance">
              <div className="card--balance_header">
                <img src={BTCLogo} alt="btc" className="btclogo" />
                <div className="card--balance_text">
                  <TextSecondary>Total Wallet Balance</TextSecondary>
                  <TextBTC>0.0000000 BTC</TextBTC>
                  <div className="card--balance--available">
                    <TextSecBTC>
                      Avialble Escrow Wallet: 0.0000000BTC
                    </TextSecBTC>
                  </div>
                </div>
              </div>
            </div>

            <div className="card--balance_tab--wrapper">
              <WalletTabsHeader>
                <p className="active tab">SEND</p>
                <p className="tab">DEPOSIT</p>
                <p className="tab">TRANSFER</p>
                <p className="tab">HISTORY</p>
              </WalletTabsHeader>
            </div>

            <div className="card--balance">
              <div className="card--balance--formwrapper">
                <div className="card--balance--border">
                  <div className="card--balance--formwrapper_header">
                    <div className="card--balance--formwrapper_header--text">
                      <div className="card--balance--formwrapper_header--text--first">
                        <p>EXTERNAL WALLET</p>
                      </div>
                      <div className="card--balance--formwrapper_header--text--second">
                        <p>HAGGLEX WALLET</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card--balance--formwrapper_content">
                  <WalletText>Amount to send</WalletText>
                  <div className="amounttext_wrapper">
                    <AmountText>0.00</AmountText>
                    <sub>NGN</sub>
                  </div>
                  <div className="card--balance-line">
                    <div></div>
                    <img src={DownLoadLogo} alt="" className="imgLogo" />
                  </div>
                  <p>0.0000000BTC</p>

                  <Form>
                    <InputTextDashboard
                      id="wallet"
                      label="Send to"
                      placeholder="Paste wallet address"
                    />
                    <div className="small">
                      <small>Transaction Fees: 0.0000000BTC</small>
                    </div>
                    <div className="formbutton">
                      <Button text="SEND BTC" />
                      <div className="sendbtc--alert">
                        <img src={DPIconAlert} alt="" className="alertLogo" />
                        <p>Send only BTC to this deposit address</p>
                      </div>
                    </div>
                  </Form>
                  <List>
                    <li>Paste a BTC address only through this means.</li>
                    <li>
                      Sending coins or token other than BTC to this address may
                      result in the loss of your tokens.
                    </li>
                  </List>
                </div>
              </div>
            </div>
          </WalletTransactions>
        </Container>
      </HomeLayout>
    </DashboardLayout>
  );
};

export default Dashboard;
