import { Box, Button, Typography } from '@mui/material';
import { MotionInView, varFade } from '../../components/animate';

export default function Introduction() {
  return (
    <Box>
      {/* <MotionInView variants={varFade().inUp}> */}
      <Typography variant="h3">About NIMCET</Typography>
      {/* </MotionInView> */}
      {/* <MotionInView variants={varFade().inUp}> */}
      <Typography align="justify">
      National Institutes of Technology (NITs) are Institutes of National Importance and are Centrally Funded Technical Institutes. The NIT MCA Common Entrance Test (NIMCET), is a National Level Test conducted by NITs for admission to their Master of Computer Applications (MCA) program. The admission to the MCA program to the ten NITs at Agartala, Allahabad, Bhopal, Jamshedpur, Kurukshetra, Patna, Raipur, Surathkal, Tiruchirappalli (Trichy), and Warangal and IIIT Bhopal for the year 2024-25 is based on the Rank obtained in NIMCET-2024 only. The Curriculum and Syllabi of Master of Computer Applications (MCA) program offered by NITs are designed considering the needs of different Information Technology firms in India and abroad. MCA graduates have high potential for jobs in the IT Sector.
      </Typography>

      {/* <Button sx={{ mt: '1rem' }} variant="contained">
        View More
      </Button> */}
      {/* </MotionInView> */}
    </Box>
  );
}
