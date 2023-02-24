// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { MotionInView, varFade } from '../components/animate';
import { ContactHero, ContactForm, ContactMap } from '../sections/contact';

// ----------------------------------------------------------------------.

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
        <Container sx={{ my: 10 }}>
          <Typography variant="h2" marginBottom={'1rem'}>
            Contact Us
          </Typography>
          <Typography variant="h6" marginBottom={'0.5rem'}>
            The Secretary, NIMCET -2022
          </Typography>
          <Typography marginBottom={'0.5rem'}>National Institute of Technology Jamshedpur</Typography>
          <Typography marginBottom={'0.5rem'}>Adityapur-2, Jamshedpur – 831014, Jharkhand</Typography>
          <Typography marginBottom={'0.5rem'}>
            <b>Mob. No. :</b>
            +91-9341519389
          </Typography>
          <Typography marginBottom={'15rem'}>
            <b>Email : </b>
            nimcet2022@nitjsr.ac.in
          </Typography>
        </Container>
      </RootStyle>
    </Page>
  );
}
