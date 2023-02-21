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
const InstructionandProcedures = () => {
  return (
    <Page title="Instruction and Procedures for Counselling.">
      <RootStyle>
        <Download
          name="Tentative Vacancy Position for Special Round Counselling"
          title="Tentative Vacancy Position for Special Round Counselling"
          link="https://cdnbbsr.s3waas.gov.in/s33e6260b81898beacda3d16db379ed329/uploads/2022/08/2022080376.pdf"
        />
      </RootStyle>
    </Page>
  );
};

export default InstructionandProcedures;
