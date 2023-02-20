// @mui
import { Button, Typography, TextField, Stack, List, ListItem } from '@mui/material';
// components
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function ContactForm() {
  return (
    // <Stack spacing={5}>
    //   <MotionInView variants={varFade().inUp}>
    //     <Typography variant="h3">
    //       Feel free to contact us. <br />
    //       We'll be glad to hear from you, buddy.
    //     </Typography>
    //   </MotionInView>

    //   <Stack spacing={3}>
    //     <MotionInView variants={varFade().inUp}>
    //       <TextField fullWidth label="Name" />
    //     </MotionInView>

    //     <MotionInView variants={varFade().inUp}>
    //       <TextField fullWidth label="Email" />
    //     </MotionInView>

    //     <MotionInView variants={varFade().inUp}>
    //       <TextField fullWidth label="Subject" />
    //     </MotionInView>

    //     <MotionInView variants={varFade().inUp}>
    //       <TextField fullWidth label="Enter your message here." multiline rows={4} />
    //     </MotionInView>
    //   </Stack>

    //   <MotionInView variants={varFade().inUp}>
    //     <Button size="large" variant="contained">
    //       Submit Now
    //     </Button>
    //   </MotionInView>
    // </Stack>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignContent: 'space-between',
      }}
    >
      <MotionInView variants={varFade().inUp}>
        <div
          style={{
            marginBottom: '1rem',
          }}
        >
          <Typography variant="h2" marginBottom={'1rem'}>
            National Informatics Centre (NIC)
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',

              // alignContent: 'space-between',
            }}
          >
            <Typography variant="p">
              National Informatics Centre (NIC) was established in 1976, and has since emerged as a “prime builder” of
              e-Government / e-Governance applications up to the grassroots level as well as a promoter of digital
              opportunities for sustainable development. NIC, through its ICT Network, “NICNET”, has institutional
              linkages with all the Ministries /Departments of the Central Government, State Governments/ Union
              Territories, and District Administrations of India.
            </Typography>

            <Typography variant="p">
              NIC provides web enabled services to academic institutions/bodies across the country for examination
              management, counselling and admissions. The division caters to all the stakeholders namely, aspirants,
              examination boards, counselling board, participating institutions and reporting cum document verification
              centres. Examination and counselling services provide a centralized platform bringing together
              beneficiaries and service providers on a common platform for 100% transparent and policy compliant
              admissions.
            </Typography>

            <Typography variant="p">
              NIC provides end-to-end technical services/solution for conducting various examinations by assisting
              premier organizing bodies and other institutions such as NTA,CBSE, JoSAA, NCHMCT, UPSEE, WBJEE, OJEE, etc.
              NIC has been instrumental in partnering with various examination bodies in conducting central and state
              level examinations such as JEE (Main and Advance), National Eligibility Test, and Central Teacher’s
              Eligibility Test (CTET). In addition to this, the division caters to counselling services for admission to
              premier institutions such as IITs, NITs, IIITs and Central/State funded universities/institutions in
              multiple domains like engineering (Degree, Diploma, ITI), medical, architecture, pharmacy, agriculture,
              hotel management, etc. catering to candidates from 8th/10th pass to Post Graduates.
            </Typography>
          </div>
        </div>
      </MotionInView>
      <MotionInView variants={varFade().inUp}>
        <Typography variant="h2">MANDATE</Typography>
        <List
          sx={{
            listStyleType: 'disc',
            pl: 2,
            '& .MuiListItem-root': {
              display: 'list-item',
            },
          }}
        >
          <ListItem>Technology partner of the Government</ListItem>
          <ListItem>Design and Develop IT Systems for the Government</ListItem>
          <ListItem>Provide ICT Infrastructure to the Government</ListItem>
          <ListItem>Explore & Advise on use of Emerging Technologies</ListItem>
        </List>
      </MotionInView>
    </div>
  );
}
