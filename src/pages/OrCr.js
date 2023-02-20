import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';
import { ChairmanAbout, InstituteTable } from '../sections/chairman';

import { Download } from '../sections/Download';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));
const ProformaAnnexures = () => {
  return (
    <Page title="Proforma Annexures">
      <RootStyle>
        <Download
          name="Opening & Closing Rank (ORCR) for NIMCET Counselling 2022"
          title="OR-CR"
          link="https://admissions.nic.in/NIMCET/applicant/report/orcrreport.aspx?enc=Nm7QwHILXclJQSv2YVS+7r8WN5VcMLyoxl07IrV0Mk3FTx6y+wn62y0T2jm2IBZx"
        />
      </RootStyle>
    </Page>
  );
};

export default ProformaAnnexures;
