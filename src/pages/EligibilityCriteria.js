// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';
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

const EligibilityCriteria = () => {
  return (
    <Page title="Eligibility Criteria">
      <RootStyle>
        <RootStyle>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h3">ELIGIBILITY CRITERIA TO APPEAR FOR NIMCET 2023</Typography>
            <Container sx={{ my: 8, width: '70%' }}>
              <Typography
                sx={{
                  marginBottom: 2,
                }}
                variant="h6"
              >
                <b>
                  Indian Nationals securing at least 60% marks in aggregate or 6.5 CGPA on a 10-point scale (55% marks
                  or 6.0 CGPA on a 10-point scale in case of SC/ ST/PwD) in
                </b>
              </Typography>
              <Typography variant="h6">
                <b>(i) Any UG program of minimum Three years with Mathematics/ Statistics. as one of the subjects</b>
              </Typography>
              <Typography variant="h6">
                <b>OR</b>
              </Typography>
              <Typography variant="h6">
                <b>(ii) B.E./ B.Tech. from a recognized University/Institution</b>
              </Typography>
              <Typography
                sx={{
                  marginBottom: 2,
                }}
                variant="h6"
              >
                <b>are eligible to appear for NIMCET-2023.</b>
              </Typography>
              <Typography
                sx={{
                  marginBottom: 2,
                }}
                variant="p"
              >
                Conversion of scored marks from CGPA to percentage and vice-versa is not permitted.
              </Typography>
              <br />
              <Typography variant="p">
                <b>NOTE:</b>
              </Typography>
              <Typography variant="p">
                Students who have completed/completing Bachelor Degree Program as (B.Sc./ B.Sc. (Hons)/BCA/ BIT) of 3
                years from Open Universities are also eligible to apply provided the program is approved by UGC / AICTE
                and Distance Education Council (DEC) of Govt. of India.
              </Typography>
            </Container>
          </Box>
        </RootStyle>
      </RootStyle>
    </Page>
  );
};

export default EligibilityCriteria;
