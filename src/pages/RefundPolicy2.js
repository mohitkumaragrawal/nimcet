import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// components
import Page from '../components/Page';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: theme.spacing(28),
  textAlign: 'center',
  paddingBottom: theme.spacing(10),
  maxWidth: '70rem',
  margin: 'auto',
}));

export default function PrivacyPolicy2() {
  return (
    <Page title="Test Centers">
      <RootStyle>
        <Typography variant="h3" marginBottom={2}>
          Refund/ Cancellation Policy
        </Typography>
        <Typography align="left">
          This website and the hosted applications are meant for application capture, entrance examination (NIMCET-2023)
          and counseling (choice filling, seat allocation and document verification, etc.) for admission to MCA
          programmes offered by ten participating NITs of the country.
        </Typography>
        <Typography align="left">
          The data captured from the candidates shall be used solely for the purpose of conducting examination (NIMCET
          -2023), result declaration, choice filling, reporting and admission to MCA programmes of nine participating
          NITs and shall not be disclosed to the third parties until otherwise necessary to conduct examination,
          counseling, admission, etc., for the benefit of the candidates.
        </Typography>
        <Typography align="left">
          The detailed terms and conditions for eligibility, processes and schedule, and refund policy, etc., are given
          in the Information Brochure for NIMCET-2023.
        </Typography>
        <Typography align="left" variant="h6" marginTop={3}>
          Secretary, NIMCET-2023
        </Typography>
      </RootStyle>
    </Page>
  );
}
