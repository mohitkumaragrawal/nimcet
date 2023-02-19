// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';

import LatestNews from '../sections/home/LatestNews';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(20),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(20),
  },
}));

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <Page title="Home">
      <RootStyle>
        {/* <AboutHero /> */}
        <LatestNews />

        <AboutWhat />

        <AboutVision />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />

        <AboutTeam />

        <AboutTestimonials />
      </RootStyle>
    </Page>
  );
}
