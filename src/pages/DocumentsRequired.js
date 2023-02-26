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
import Page from '../components/Page';
import { MotionInView, varFade } from '../components/animate';
import { _skills } from '../_mock';

// hooks
import useResponsive from '../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const DocumnetRequired = () => {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;
  function createData(Document, Remarks) {
    return { Document, Remarks };
  }
  const rows = [
    createData('Class X Certificate/ Birth Certificate', 'Mandatory for every candidate'),
    createData('Graduation Mark sheet', 'Mandatory for every candidate'),
    createData('NIMCET Score/Rank Card', 'Mandatory for every candidate'),
    createData('Respective Category Certificate', 'Mandatory for SC/ST/OBC-NCL/GEN-EWS candidates'),
    createData('PwD certificate', 'Mandatory for PwD candidates'),
  ];

  return (
    <Page title="Documents Required">
      <RootStyle>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* <MotionInView variants={varFade().inUp}> */}
          <Typography variant="h3">Documents Required</Typography>
          <TableContainer
            style={{
              height: '100%',
              width: '50%',
              margin: '2.5rem',
              // marginLeft: '12rem',
              // alignSelf: 'center',
            }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Document</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Remarks</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Document} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.Document}
                    </TableCell>
                    <TableCell align="left">{row.Remarks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* </MotionInView> */}
        </Box>
      </RootStyle>
    </Page>
  );
};

export default DocumnetRequired;
