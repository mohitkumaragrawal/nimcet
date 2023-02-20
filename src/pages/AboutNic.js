// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutNicHero, ContentAboutNic } from '../sections/AboutNic';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Contact us">
      <RootStyle>
        <AboutNicHero />

        <Container sx={{ my: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={15}>
              <ContentAboutNic />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
