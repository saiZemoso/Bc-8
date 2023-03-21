import {render,screen} from '@testing-library/react'
import React from 'react';
import Card from '.';
import theme from '../../../themes';

describe('Card Molecule rendering correctly',()=>{
    test("Avatar rendering correctly", () => {
        render(
          <Card
            coinSrc="./coins/Tether.png"
            coinName="Tether"
            coinAbbr="USDT"
            currency="$74.28"
            percentage="-0.01"
            color="red"
          />
        );
        const avatarElement = screen.getByRole("img");
        expect(avatarElement).toBeInTheDocument();
      });
      test("Text rendering correctly", () => {
        render(
          <Card
            coinSrc="./coins/Tether.png"
            coinName="Tether"
            coinAbbr="USDT"
            currency="$74.28"
            percentage="-0.01"
            color="red"
          />
        );
        const textElement = screen.getByText('USDT');
        expect(textElement).toBeInTheDocument();
      });
      test("Percentage Text rendering correctly with color", () => {
        render(
          <Card
            coinSrc="./coins/Tether.png"
            coinName="Tether"
            coinAbbr="USDT"
            currency="$74.28"
            percentage="-0.01"
            color="red"
          />
        );
        const textElement = screen.getByText('-0.01');
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle('color:red')

        render(
            <Card
              coinSrc="./coins/XRP.png"
              coinName="XRP"
              coinAbbr="XRP"
              currency="$74.14"
              percentage="+2.2%"
              color="green"
            />
          );
          const greenText = screen.getByText('+2.2%');
        expect(greenText).toBeInTheDocument();
        expect(greenText).toHaveStyle('color:green')
      }); 
    test('Date component rendering correctly',()=>{
        render(<Card
              coinSrc="./coins/Bitcoin.png"
              coinName="Bitcoin"
              coinAbbr="From Jane Cooper"
              currency="+0.0030 BTC"
              percentage="+$1,200"
              color={theme.palette.textColor.mediumEmphasis}
              forTransaction={true}
              date={25}
              month='Feb'
              transactionStatus='Received'
            />)
        const transactionElement = screen.getByText('Received')
        expect(transactionElement).toBeInTheDocument();
    })
    
})