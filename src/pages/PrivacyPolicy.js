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
    <Page title="Privacy Policy">
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
          <Typography variant="h3" marginBottom={'1rem'}>
            Privacy Policy
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            As a general rule, this website does not collect Personal Information about you when you visit the site. You
            can generally visit the site without revealing Personal Information, unless you choose to provide such
            information.
          </Typography>
          <Typography variant="h4" marginBottom={'0.5rem'}>
            Site Visit Data:
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            This website records your visit and logs the following information for statistical purposes your server’s
            address; the name of the top-level domain from which you access the Internet (for example, .gov, .com, .in,
            etc.); the type of browser you use; the date and time you access the site; the pages you have accessed and
            the documents downloaded and the previous Internet address from which you linked directly to the site. We
            will not identify users or their browsing activities, except when a law enforcement agency may exercise a
            warrant to inspect the service provider’s logs.
          </Typography>
          <Typography variant="h4" marginBottom={'0.5rem'}>
            Site Visit Data:
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            This website records your visit and logs the following information for statistical purposes your server’s
            address; the name of the top-level domain from which you access the Internet (for example, .gov, .com, .in,
            etc.); the type of browser you use; the date and time you access the site; the pages you have accessed and
            the documents downloaded and the previous Internet address from which you linked directly to the site. We
            will not identify users or their browsing activities, except when a law enforcement agency may exercise a
            warrant to inspect the service provider’s logs.
          </Typography>
          <Typography variant="h4" marginBottom={'0.5rem'}>
            Cookies:
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            A cookie is a piece of software code that an internet web site sends to your browser when you access
            information at that site. This site does not use cookies.
          </Typography>
          <Typography variant="h4" marginBottom={'0.5rem'}>
            Collection of Personal Information:
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            f you are asked for any other Personal Information you will be informed how it will be used if you choose to
            give it. If at any time you believe the principles referred to in this privacy statement have not been
            followed, or have any other comments on these principles, please notify the webmaster through the contact us
            page.
          </Typography>
          <Typography variant="h4" marginBottom={'0.5rem'}>
            Note:
          </Typography>
          <Typography marginBottom={'0.5rem'}>
            The use of the term “Personal Information” in this privacy statement refers to any information from which
            your identity is apparent or can be reasonably ascertained.
          </Typography>
        </Container>
      </RootStyle>
    </Page>
  );
}
