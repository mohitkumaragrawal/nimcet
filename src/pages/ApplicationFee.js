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

export default function ApplicationFee() {
  return (
    <Page title="Application Fee">
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
            APPLICATION PROCESSING FEE THROUGH NIMCET-2023 WEBSITE
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            The non-refundable Application Processing Fee for NIMCET-2023 test and counselling for admission to the MCA
            program is Rs. 2,500/- for OPEN/OPEN-EWS/OBC category and Rs. 1,250/- for SC/ST/PwD category candidates.
            Candidates have to deposit an appropriate amount relevant to their category
          </Typography>
          <Typography variant="h6">
            <b>Candidates are required to deposit the processing fee online through NIMCET- 2023 website only.</b>
          </Typography>
        </Container>
      </RootStyle>
    </Page>
  );
}
