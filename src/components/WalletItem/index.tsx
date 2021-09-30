import React from 'react';
import styled from 'styled-components';
import {
  BTCIconGreen,
  DogeIcon,
  EthereumIcon,
  DashIcon,
  HaggleIcon,
  BTCIconYellow,
  LitecoinIcon,
} from '../../assets/icons';

interface WalletItemProps {
  title: string;
  amount: string;
  acronymn: string;
  nairaAmount: string;
  svg: any;
}

export const IconsData = [
  BTCIconGreen,
  DogeIcon,
  EthereumIcon,
  DashIcon,
  HaggleIcon,
  BTCIconYellow,
  LitecoinIcon,
];

const WalletItem: React.FC<WalletItemProps> = ({
  title,
  acronymn,
  amount,
  nairaAmount,
  svg,
}) => {
  return (
    <li>
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '5px' }}>{svg}</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TitleText>{title}</TitleText>
            <p>{acronymn}</p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Text>{amount}</Text>
          <p>{nairaAmount}</p>
        </div>
      </Container>
    </li>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: #2e1963;
`;

export default WalletItem;
