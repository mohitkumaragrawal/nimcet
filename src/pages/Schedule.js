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
          link="https://cdnbbsr.s3waas.gov.in/s33e6260b81898beacda3d16db379ed329/uploads/2022/07/2022070668.pdf"
        />
      </RootStyle>
    </Page>
  );
};

export default ProformaAnnexures;
