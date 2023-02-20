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
const Institutes = () => {
  return (
    <Page title="Institutes">
      <RootStyle>
        <Download
          name="Participating Institutes"
          title="Institutes"
          link="https://cdnbbsr.s3waas.gov.in/s33e6260b81898beacda3d16db379ed329/uploads/2022/05/2022052527.pdf"
        />
      </RootStyle>
    </Page>
  );
};

export default Institutes;
