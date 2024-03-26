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

export default function ProductandServices() {
  return (
    <Page title="Product And Services">
      <RootStyle>
        <Typography variant="h3" marginBottom={2}>
          Product And Services
        </Typography>
        <Typography align="left">
          National Institutes of Technology (NITs) are Institutes of National Importance and are Centrally Funded
          Technical Institutes. The NIT MCA Common Entrance Test (NIMCET), is a National Level Test conducted by NITs
          for admission to their Master of Computer Applications (MCA) programme. The admission to the MCA programme to
          the nine NITs at Agartala, Allahabad, Bhopal, Jamshedpur, Kurukshetra, Raipur, Surathkal, Tiruchirappalli
          (Trichy), and Warangal for the year 2024-25 is based on the Rank obtained in NIMCET-2024 only. The Curriculum
          and Syllabi of Master of Computer Applications (MCA) programme offered by NITs are designed considering the
          needs of different Information Technology firms in India and abroad. MCA graduates have high potential for
          jobs in the IT Sector. This website and the hosted applications are meant for application capture, entrance
          examination (NIMCET-2021) and counselling (choice filling, seat allocation and document verification, etc.)
          for admission to MCA programme offered by ten participating NITs of the country. Details of services offered
          by this portal are elaborated in the Information Brochure for NIMCET-2024.
        </Typography>
        <Typography align="left" variant="h6" marginTop={3}>
          Secretary, NIMCET-2024
        </Typography>
      </RootStyle>
    </Page>
  );
}
