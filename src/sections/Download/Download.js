import React from 'react';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// _mock_
// components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionInView, varFade } from '../../components/animate';
import { _skills } from '../../_mock';

// utils
import { fPercent } from '../../utils/formatNumber';
// hooks
import useResponsive from '../../hooks/useResponsive';

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const Download = ({ name, title, link }) => {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;
  return (
    <RootStyle>
      {title === 'NA' ? (
        <Box display={'flex'} justifyContent="center" alignItems={'center'}>
          <Typography variant="h1">No Documents Found</Typography>
        </Box>
      ) : (
        <Box display={'flex'} flexDirection="column" alignItems={'center'} justifyContent={'center'}>
          <Typography variant="h3">{title}</Typography>
          <TableContainer
            style={{
              height: '60%',
              width: '80%',
              margin: '2.5rem',
              borderRadius: '0',
              // marginLeft: '12rem',
              // alignSelf: 'center',
            }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="left">Year</TableCell>
                  <TableCell align="left">View/Download</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      width: '60%',
                    }}
                  >
                    {name}
                  </TableCell>
                  <TableCell align="left">2024</TableCell>
                  <TableCell align="left">
                    <a
                      style={{
                        color: isLight ? 'black' : 'white',
                      }}
                      href={link}
                    >
                      Click To View!
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </RootStyle>
  );
};

export default Download;
