// @mui
import { styled } from '@mui/material/styles';
import { Container, Divider, Grid, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';
import { MotionInView, varFade } from '../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About us">
      <RootStyle>
        <AboutHero />

        <Container sx={{ my: 10 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={10}>
              <MotionInView variants={varFade().inUp}>
                <Typography align="left">
                  National Institutes of Technology (NITs) are Institutes of National Importance andare Centrally Funded
                  Technical Institutes. The NIT MCA Common Entrance Test(NIMCET), is a National Level Test conducted by
                  NITs for admission to their Masterof Computer Applications (MCA) programme. The admission to the
                  MCAprogramme to the nine NITs at Agartala, Allahabad, Bhopal, Jamshedpur,Kurukshetra, Raipur,
                  Surathkal, Tiruchirappalli (Trichy), and Warangal for the year2022-23 is based on the Rank obtained in
                  NIMCET-2022 only. The Curriculum andSyllabi of Master of Computer Applications (MCA) programme offered
                  by NITsare designed considering the needs of different Information Technology firms in India and
                  abroad. MCA graduates have high potential for jobs in the IT Sector.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
