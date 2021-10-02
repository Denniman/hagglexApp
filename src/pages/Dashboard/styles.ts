import styled from 'styled-components';

export const AssertBar = styled.div`
  width: 100%;
  height: 13rem;
  border-radius: 0.5rem;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-position: center;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #fcd7a2, #ffc175);
`;

export const TextSecondary = styled.p`
  font-size: 1.3rem;
  color: #562121;
  font-weight: 600;
`;
export const TextSecBTC = styled.p`
  font-size: 1rem;
  color: #562121;
  font-weight: 600;
`;

export const TextMain = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: #562121;
  sup {
    font-size: 1rem;
  }
`;

export const TextBTC = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #562121;
  /* letter-spacing: 0.5rem; */
  sup {
    font-size: 1rem;
  }
`;

export const USDContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 14rem;
  height: 4rem;
  padding: 1.4rem;
  color: #575757;
  font-size: 1.2rem;
  border-radius: 1.7rem;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffc175;
    height: 3rem;
    width: 6rem;
    border-radius: 1.7rem;
    padding: 1rem;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
  }
`;

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FlexTransactions = styled.div`
  height: 100%;
  flex-basis: 50%;

  .card {
    padding: 5rem 3rem 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    &--wallet {
      /* padding: 3rem 3rem 0; */

      &_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      &_list {
        background-color: #f9f9f9;
        color: #575757;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 0.6rem 0.7rem;
        border-radius: 0.5rem;
      }
    }

    &--balance {
      flex-basis: 50%;
    }

    &--bottom {
      padding: 0 3rem 0;
    }
  }

  .list {
    font-weight: 700;
    color: #000;
    font-size: 1.2rem;
    padding: 0.5rem 1.4rem;
    border-radius: 0.7rem;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.04);
  }

  .card--line {
    border-bottom: 2px solid #f4f5f9;
  }
`;
export const WalletTransactions = styled.div`
  height: 100%;
  flex-basis: 50%;
  margin-bottom: 3rem;

  .card--balance {
    padding: 5rem 3rem;
    background-color: #fff;
    border-radius: 0.5rem;
    &_header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem;
      height: 10rem;
      background: linear-gradient(to right, #fcd7a2, #ffc175);
      border-radius: 0.5rem;
    }

    &_tab--wrapper {
      padding: 3rem 3rem 0;
    }

    &--available {
      text-align: center;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 2.5rem;
    }
    &_text {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
    }

    &--formwrapper {
      box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
      border-radius: 0.6rem;
      height: 100%;

      &_content {
        padding: 2rem 3rem;
      }
      &_header {
        border-bottom: 2px solid #f4f5f9;
        &--text {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &--first {
            text-align: center;
            padding: 2rem;
            flex-basis: 50%;
            border-top-left-radius: 0.6rem;
            background-color: #f0ebff;
            > p {
              color: #2e1963;
              font-weight: 700;
            }
          }
          &--second {
            text-align: center;
            padding: 2rem;
            flex-basis: 50%;
            > p {
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  .btclogo {
    width: 4rem;
  }

  .amounttext_wrapper {
    display: flex;
    align-items: baseline;
    > sub {
      font-weight: 600;
    }
  }

  .card--balance-line {
    margin-top: -1.5rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    > div {
      width: 5rem;
      height: 1px;
      background-color: #00000021;
      flex-basis: 90%;
    }
  }

  .imgLogo {
    width: 3rem;
  }
`;

export const WalletText = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const TabsHeader = styled.div`
  display: flex;
  gap: 2rem;

  .tabs-header-spacing {
    justify-content: space-between;
  }

  .tab {
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
  }

  .active {
    font-weight: 700;
    color: #000;
    border-bottom: 3px solid #ffc31a;
  }
`;

export const WalletTabsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .tab {
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
  }

  .active {
    font-weight: 700;
    color: #000;
    border-bottom: 3px solid #ffc31a;
  }
`;

export const AmountText = styled.p`
  font-size: 4rem;
`;

export const Form = styled.form`
  margin-top: 1.5rem;

  .formbutton {
    margin-top: 3rem;
    border-bottom: 2px solid #f4f5f9;
  }

  .small {
    display: flex;
    justify-content: flex-end;
  }

  .sendbtc--alert {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    background-color: #b395ff28;
    padding: 0.5rem;
    border-radius: 2.5rem;
    text-align: center;

    > p {
      font-weight: 700;
      color: #2e1963;
    }
  }

  .alertLogo {
    width: 2rem;
  }
`;

export const List = styled.ul`
  margin-top: 3rem;
`;
