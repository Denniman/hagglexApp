import React from 'react';
import { Container, Text, TitleText } from './styles';

interface WalletItemProps {
  title: string;
  amount: string;
  acronymn: string;
  nairaAmount: string;
  svg: any;
}

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

export default WalletItem;
