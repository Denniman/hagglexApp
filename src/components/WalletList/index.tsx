import styled from 'styled-components';
import WalletItem from '../WalletItem';
import BTCGreen from '../../assets/images/btcgreen.png';
import BTCIcon from '../../assets/images/btc.png';
import Dash from '../../assets/images/dash.png';
import Hagglex from '../../assets/images/hagglexcoin.png';
import Ethereum from '../../assets/images/ethereum.png';
import Litecoin from '../../assets/images/litecoin.png';
import UDT from '../../assets/images/udt.png';
import Doge from '../../assets/images/doge.png';

const data = [
  {
    id: '1',
    title: 'USDT',
    acro: 'USDT',
    amount: '0.0 USDT',
    nairaAmount: 'NGN 0.00',
    svg: <img src={UDT} alt="" className="icon" />,
  },
  {
    id: '2',
    title: 'Bitcoin Cash',
    acro: 'BCH',
    amount: '0.0 BCH',
    nairaAmount: 'NGN 0.00',
    svg: <img src={BTCGreen} alt="" className="icon" />,
  },
  {
    id: '3',
    title: 'Ethereum',
    acro: 'ETH',
    amount: '0.0 ETH',
    nairaAmount: 'NGN 0.00',
    svg: <img src={Ethereum} alt="" className="icon" />,
  },
  {
    id: '4',
    title: 'Dash',
    acro: 'DASH',
    amount: '0.0 DASH',
    nairaAmount: 'NGN 0.00',
    svg: <img src={Dash} alt="" className="icon" />,
  },
  {
    id: '5',
    title: 'Litecoin',
    acro: 'LTC',
    amount: '0.0 LTC',
    nairaAmount: 'NGN 0.00',
    svg: <img src={Litecoin} alt="" className="icon" />,
  },
  {
    id: '6',
    title: 'Dogecoin',
    acro: 'DOGE',
    amount: '0.0 DOGE',
    nairaAmount: 'NGN 0.00',
    svg: <img src={Doge} alt="" className="icon" />,
  },
];

const dataOne = [
  {
    id: '1',
    title: 'Haggle',
    acro: 'HAG',
    amount: '0.0 HAG',
    nairaAmount: 'NGN 0.00',
    svg: <img src={Hagglex} alt="" className="icon" />,
  },
];

const dataTwo = [
  {
    id: '2',
    title: 'Bitcoin',
    acro: 'BTC',
    amount: '0.0 BTC',
    nairaAmount: 'NGN 0.00',
    svg: <img src={BTCIcon} alt="" className="icon" />,
  },
];

const WalletList = () => {
  return (
    <Container>
      {data.map(({ id, title, acro, amount, nairaAmount, svg }) => (
        <WalletItem
          key={id}
          acronymn={acro}
          amount={amount}
          title={title}
          nairaAmount={nairaAmount}
          svg={svg}
        />
      ))}
    </Container>
  );
};

export const WalletListOne = () => {
  return (
    <Container>
      {dataOne.map(({ id, title, acro, amount, nairaAmount, svg }) => (
        <WalletItem
          key={id}
          acronymn={acro}
          amount={amount}
          title={title}
          nairaAmount={nairaAmount}
          svg={svg}
        />
      ))}
    </Container>
  );
};
export const WalletListTwo = () => {
  return (
    <Container>
      {dataTwo.map(({ id, title, acro, amount, nairaAmount, svg }) => (
        <WalletItem
          key={id}
          acronymn={acro}
          amount={amount}
          title={title}
          nairaAmount={nairaAmount}
          svg={svg}
        />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  list-style: none;

  .divider {
    background-color: #f2f5f4;
  }

  .icon {
    width: 5rem;
  }
`;

export default WalletList;
