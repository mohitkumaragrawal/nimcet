import { Box, Button, Typography } from '@mui/material';
import { MotionInView, varFade } from '../../components/animate';

export default function Introduction() {
  return (
    <Box>
      <MotionInView variants={varFade().inUp}>
        <Typography variant="h2">Introduction</Typography>
      </MotionInView>
      <MotionInView variants={varFade().inUp}>
        <Typography>
          National Institutes of Technology (NITs) are Institutions of National Importance Under Ministry of Education,
          Govt. of India. The NIMCET is a Common Entrance National Level Test, conducted by any of the NITs, for
          admission in to their MCA programme. The MCA programme is offered by NITs at Agartala, Allahabad, Bhopal,
          Jamshedpur, Kurukshetra, Raipur, Surathkal, Tiruchirappalli and Warangal. The admission into the MCA programme
          for the year 2022-23 in above 09 NITs is based on the Rank obtained in NIMCET-2022 only.
        </Typography>

        <Button sx={{ mt: '1rem' }} variant="contained">
          View More
        </Button>
      </MotionInView>
    </Box>
  );
}
