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
    <Page title="Hyperlink Policy">
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
            Hyperlink Policy
          </Typography>
          <Typography variant="h3" marginBottom={'1rem'}>
            Links to external websites/portals
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            At many places in this website, you shall find links to other websites/portals. This links have been placed
            for your convenience. National Institute of Technology Jamshedpur is not responsible for the contents and
            reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere
            presence of the link or its listing on this website should not be assumed as endorsement of any kind. We
            cannot guarantee that these links will work all the time and we have no control over availability of linked
            pages.
          </Typography>
          <Typography variant="h3" marginBottom={'1rem'}>
            Links to NIT Jamshedpur Website by other Websites/Portalss
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            Prior permission is required before hyperlink are directed from any website/portal to this site. Permission
            for the same, stating the nature of the content on the pages from where the link has to be given and the
            exact language of the hyperlink should be obtained by sending a request to stake holder
          </Typography>
        </Container>
      </RootStyle>
    </Page>
  );
}
