import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const InstituteTable = () => {
  function createData(Institute, website) {
    return { Institute, website };
  }
  const rows = [
    createData('National Institute of Technology Jamshedpur', 'https://www.nitjsr.ac.in'),
    createData('Motilal Nehru National Institute of TechnologyAllahabad', 'http://www.mnnit.ac.in'),
    createData('Maulana Azad National Institute of Technology Bhopal', 'http://www.manit.ac.in'),
    createData('National Institute of Technology Tiruchirapalli (Trichy)', 'https://www.nitt.edu'),
    createData('National Institute of Technology Agartala', 'https://nita.ac.in'),
    createData('National Institute of Technology Kurukshetra', 'http://www.nitkkr.ac.in'),
    createData('National Institute of Technology Raipur', 'http://www.nitrr.ac.in'),
    createData('National Institute of Technology Karnataka, Surathkal', 'https://www.nitk.ac.in'),
    createData('National Institute of Technology Warangal', 'http://www.nitkkr.ac.in'),
  ];
  return (
    <Grid alignItems={'center'} justifyContent={'center'} container pd={5} spacing={5}>
      <Grid item xs={2} md={2} lg={2}>
        {rows.map((row) => (
          <Box marginBottom={'2rem'}>
            <Typography marginBottom={'1rem'} variant="h6">
              Institute:
            </Typography>
            <Typography variant="h6">Website:</Typography>
          </Box>
        ))}
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        {rows.map((row) => (
          <Box marginBottom={'2rem'}>
            <Typography marginBottom={'1rem'} variant="h6">
              {row.Institute}
            </Typography>
            <a
              style={{
                display: 'block',
                height: '1.8rem',
              }}
              href={row.website}
            >
              {row.website}
            </a>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default InstituteTable;
