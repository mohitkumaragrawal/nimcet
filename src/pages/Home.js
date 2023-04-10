// @mui
import { styled } from '@mui/material/styles';
import { Divider, Grid, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';

import LatestNews from '../sections/home/LatestNews';
import Events from '../sections/home/Events';
import Introduction from '../sections/home/Introduction';
import SandesApp from '../sections/home/SandesApp';
import CardLink from '../sections/home/CardLink';
import ImageCarousel from '../sections/home/ImageCarousel';

import useResponsive from '../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(20),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(20),
  },
}));

// ----------------------------------------------------------------------

const activities = [
  {
    title: 'Important Dates',
    link: 'https://nitjsr.ac.in/backend/uploads/upload/nimcet/IMPORTANT%20DATES_final.pdf',
  },
];

const helpdeskAdmission = [
  {
    title: 'FAQ',
    // link: 'https://cdnbbsr.s3waas.gov.in/s33e6260b81898beacda3d16db379ed329/uploads/2022/07/2022070854.pdf',
  },
];

const infoBulletin = [
  {
    title: 'Eligibility Criteria',
    link: '/eligibility-criteria',
  },
  {
    title: 'Process/Business Rule',
    link: 'https://drive.google.com/file/d/1ADBVQI0bxEzm560q9nDxzubYgssD8xcd/view?usp=sharing',
    // link: '#',
  },
];

export default function Home() {
  const isDesktop = useResponsive('up', 'lg');

  return (
    <Page title="Home">
      <RootStyle>
        {/* <AboutHero /> */}
        <LatestNews />

        <Grid container spacing={5} padding={5}>
          <Grid item xs={12} md={6} lg={6}>
            <Events />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Introduction />
          </Grid>
        </Grid>

        <Grid container spacing={5} padding={5} paddingTop={2}>
          <Grid item xs={12} md={6} lg={6}>
            <SandesApp />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CardLink links={activities} heading="Candidates Activity Board" />
          </Grid>
        </Grid>

        <Grid container spacing={5} padding={5} paddingTop={2}>
          <Grid item xs={12} md={6} lg={6}>
            <CardLink links={helpdeskAdmission} heading="Helpdesk Admission" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CardLink links={infoBulletin} heading="Information Bulletein Key Points" />
          </Grid>
        </Grid>

        <ImageCarousel />
      </RootStyle>
    </Page>
  );
}
