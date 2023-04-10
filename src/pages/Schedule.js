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
    <Page title="Schedule">
      <RootStyle>
        <Download
          name="Schedule"
          title="Schedule"
          link="https://nitjsr.ac.in/backend/uploads/upload/nimcet/IMPORTANT%20DATES_final.pdf"
        />
      </RootStyle>
    </Page>
  );
};

export default ProformaAnnexures;
