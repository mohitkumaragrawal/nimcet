// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ContactHero, ContactForm, ContactMap } from '../sections/contact';

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
    <Page title="Terms and Conditions">
      <RootStyle>
        {/* <ContactHero /> */}
        <Container sx={{ my: 10 }}>
          {/* <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactMap />
            </Grid>
          </Grid> */}
          <Typography variant="h2" marginBottom={'1rem'}>
            Terms and Conditions
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            This website is updated and maintained by National Institute of Technology Jamshedpur
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            Though all efforts have been made to ensure the accuracy of the content on this website, the same should not
            be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users
            are advised to verify/check with the National Institute of Technology Jamshedpur and/or other source(s), and
            to obtain appropriate professional advice.
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            Under no circumstances will National Institute of Technology Jamshedpur be liable for any expense, loss or
            damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or
            damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of
            this website.
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any
            dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of
            India.
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            The information posted on this website could include hypertext links or pointers to information created and
            maintained by non-Government / private organizations. National Institute of Technology Jamshedpur is
            providing these links and pointers solely for your information and convenience. When you select a link to an
            outside website, you are leaving the National Institute of Technology Jamshedpur website and are subject to
            the privacy and security policies of the owners/sponsors of the outside website. National Institute of
            Technology Jamshedpur does not guarantee the availability of such linked pages at all times. National
            Institute of Technology Jamshedpur cannot authorize the use of copyrighted materials contained in linked
            websites. Users are advised to request such authorization from the owner of the linked website. National
            Institute of Technology Jamshedpur, does not guarantee that linked websites comply with Indian Government
            Web Guidelines.
          </Typography>
        </Container>
      </RootStyle>
    </Page>
  );
}
