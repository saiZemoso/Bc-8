import { Box, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../themes";
import styled from "@emotion/styled";
import Button from "../../atoms/Button";
import axios from "axios";
import ProductTracker from "../../molecules/ProductTracker";

type BuySellSummaryProps = {
  isBuy?: boolean;
};

type Data = {
  id: number;
  src: string;
  sellingSrc: string;
  iconType: string;
  sellingIconType: string;
  iconDetails: string;
  sellingIconDetails: string;
  padding: string;
  sellingPadding: string;
};

type BillingData = {
  id: number;
  name: string;
  type: string;
  price: string;
  amount: number;
  cryptoAmount: number;
  transactionFee: number;
};

const BuySellSummary: FC<BuySellSummaryProps> = ({ isBuy = true }) => {
  const [productTracker, setProductTracker] = useState<Data[]>([]);
  const [billingData, setBillingData] = useState<BillingData>({
    id: 1,
    name: "",
    type: "",
    price: "",
    cryptoAmount: 0.02111,
    amount: 34000,
    transactionFee: 1000,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProductTrackerapi = async () => {
      await axios
        .get("http://localhost:3000/productTracker")
        .then((res) => {
          setLoading(!loading);
          setProductTracker(res.data);
        })
        .catch((err) => {
          setLoading(!loading);
          setError("Something went wrong");
          console.log(err.message);
        });
    };
    const getBillingapi = async () => {
      await axios
        .get("http://localhost:3000/overview/2")
        .then((res) => {
          setLoading(!loading);
          setBillingData(res.data);
        })
        .catch((err) => {
          setLoading(!loading);
          setError("Something went wrong");
          console.log(err.message);
        });
    };
    getProductTrackerapi();
    getBillingapi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSum = (a: number, b: number) => {
    return a + b;
  };

  return loading ? (
    <h1>loading...</h1>
  ) : (
    <>
      <h1> {error} </h1>
      <Grid
        container
        width="527px"
        flexDirection="column"
        border={`1px solid ${theme.palette.greyColors.grey100}`}
        minHeight="646px"
        gap="24px"
      >
        <Grid item>
          <SubGrid
            container
            p="24px 24px 32px 24px"
            gap="12px"
            alignItems="center"
          >
            <Grid item>
              <MedTypo variant="caption1">
                You are {isBuy ? "buying" : "selling"}
              </MedTypo>
            </Grid>
            <Grid item>
              <HighTypo variant="h6">
                {billingData.cryptoAmount} {billingData.type}
              </HighTypo>
            </Grid>
            <Grid item>
              <MedTypo variant="caption1">
                1{billingData.type} = {billingData.price}
              </MedTypo>
            </Grid>
          </SubGrid>
        </Grid>
        <Grid item>
          <SubGrid container p="0px 24px 24px 24px">
            {productTracker.map((data: Data) => (
              <ProductTracker isBuy={isBuy} key={data.id} data={data} />
            ))}
          </SubGrid>
        </Grid>
        <Grid item>
          <Grid
            container
            gap="24px"
            flexDirection="column"
            padding="0px 24px 24px 24px"
          >
            <Grid container gap="16px">
              <BillGrid container>
                <HighTypo variant="overline">
                  {billingData.cryptoAmount} {billingData.type}
                </HighTypo>
                <Divider />
                <HighTypo variant="overline">
                  $
                  {billingData.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </HighTypo>
              </BillGrid>
              <BillGrid container>
                <HighTypo variant="overline" sx={{ textTransform: "none" }}>
                  Transaction Fee
                </HighTypo>
                <Divider />
                <HighTypo variant="overline">
                  $
                  {billingData.transactionFee.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </HighTypo>
              </BillGrid>
              <BillGrid container>
                <HighTypo>Total</HighTypo>
                <Divider />
                <HighTypo>
                  $
                  {handleSum(
                    billingData.amount,
                    billingData.transactionFee
                  ).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </HighTypo>
              </BillGrid>
            </Grid>
            <Button
              sx={{
                backgroundColor: isBuy
                  ? theme.palette.primary.primary500
                  : theme.palette.semantic.warning300,
                ":hover": {
                  backgroundColor: isBuy
                    ? theme.palette.primary.primary500
                    : theme.palette.semantic.warning300,
                },
                height: "42px",
                padding: "0px 16px",
              }}
              onClick={() => {
                isBuy ? console.log(`item bought`) : console.log(`item sold`);
              }}
            >
              {isBuy ? "Buy Now" : "Sell Now"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const SubGrid = styled(Grid)({
  width: "527px",
  flexDirection: "column",
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
});
const BillGrid = styled(Grid)({
  flexDirection: "row",
  gap: "4px",
  justifyContent: "space-between",
});
const Divider = styled(Box)({
  borderTop: `1px dashed ${theme.palette.greyColors.grey300}`,
  minWidth: "310px",
  marginTop: "7px",
  flexGrow: 1,
});

const MedTypo = styled(Typography)({
  color: theme.palette.textColor.mediumEmphasis,
});
const HighTypo = styled(Typography)({
  color: theme.palette.textColor.highEmphasis,
});

export default BuySellSummary;
