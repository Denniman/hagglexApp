import styled from 'styled-components';
import WalletItem from '../WalletItem';

import {
  BTCIconGreen,
  DogeIcon,
  EthereumIcon,
  DashIcon,
  HaggleIcon,
  BTCIconYellow,
  LitecoinIcon,
} from '../../assets/icons';

const data = [
  {
    title: 'Haggle',
    acro: 'HAG',
    amount: '0.0 HAG',
    nairaAmount: 'NGN 0.00',
    svg: <HaggleIcon className="icon" />,
  },
  {
    title: 'Bitcoin',
    acro: 'BTC',
    amount: '0.0 BTC',
    nairaAmount: 'NGN 0.00',
    svg: <BTCIconYellow className="icon" />,
  },
  {
    title: 'USDT',
    acro: 'USDT',
    amount: '0.0 USDT',
    nairaAmount: 'NGN 0.00',
    svg: <BTCIconGreen className="icon" />,
  },
  {
    title: 'Bitcoin Cash',
    acro: 'BCH',
    amount: '0.0 BCH',
    nairaAmount: 'NGN 0.00',
    svg: <BTCIconGreen className="icon" />,
  },
  {
    title: 'Ethereum',
    acro: 'ETH',
    amount: '0.0 ETH',
    nairaAmount: 'NGN 0.00',
    svg: <EthereumIcon className="icon" />,
  },
  {
    title: 'Dash',
    acro: 'DASH',
    amount: '0.0 DASH',
    nairaAmount: 'NGN 0.00',
    svg: <DashIcon className="icon" />,
  },
  {
    title: 'Litecoin',
    acro: 'LTC',
    amount: '0.0 LTC',
    nairaAmount: 'NGN 0.00',
    svg: <LitecoinIcon className="icon" />,
  },
  {
    title: 'Dogecoin',
    acro: 'DOGE',
    amount: '0.0 DOGE',
    nairaAmount: 'NGN 0.00',
    svg: <DogeIcon className="icon" fill="#95be54" />,
  },
];

const WalletList = () => {
  return (
    <Container>
      {data.map(({ title, acro, amount, nairaAmount, svg }) => (
        <WalletItem
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

  .icon {
    width: 4rem;
  }
`;

export default WalletList;
