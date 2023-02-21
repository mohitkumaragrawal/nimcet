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
    <Page title="Copyright">
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
            Copyright Policy
          </Typography>

          <Typography marginBottom={'0.5rem'}>
            Material featured on this site may be reproduced free of charge after taking proper permission from National
            Institute of Technology Jamshedpur. This is subject to the material being reproduced accurately and not
            being used in a derogatory manner or in a misleading context. Wherever the material is being published or
            issued to others, the source must be prominently acknowledged. However, the permission to reproduce this
            material does not extend to any material on this site, which is explicitly identified as being the copyright
            of of National Institute of Technology Jamshedpur or third party. Authorization to reproduce such material
            must be obtained from the departments/copyright holders concerned.
          </Typography>
        </Container>
      </RootStyle>
    </Page>
  );
}
