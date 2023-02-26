import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Divider, Typography, Paper } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// components
import Page from '../components/Page';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(28),
  textAlign: 'center',
  paddingBottom: theme.spacing(10),
}));

const data = [
  { center: 'Allahabad', code: 11 },
  { center: 'Bhagalpur', code: 12 },
  { center: 'Bhopal', code: 13 },
  { center: 'Bhubaneswar', code: 14 },
  { center: 'Chandigarh', code: 15 },
  { center: 'Delhi', code: 16 },
  { center: 'Guwahati', code: 17 },
  { center: 'Hyderabad', code: 18 },
  { center: 'Indore', code: 19 },
  { center: 'Jaipur', code: 20 },
  { center: 'Jalandhar', code: 21 },
  { center: 'Jamshedpur', code: 22 },
  { center: 'Kanpur', code: 23 },
  { center: 'Kolkata', code: 24 },
  { center: 'Kozhikode', code: 25 },
  { center: 'Kurukshetra', code: 26 },
  { center: 'Lucknow', code: 27 },
  { center: 'Muzaffarpur', code: 28 },
  { center: 'Patna', code: 29 },
  { center: 'Raipur', code: 30 },
  { center: 'Ranchi', code: 31 },
  { center: 'Rourkela', code: 32 },
  { center: 'Surat', code: 33 },
  { center: 'Surathkal', code: 34 },
  { center: 'Tiruchirappalli', code: 35 },
  { center: 'Varanasi', code: 36 },
  { center: 'Warangal', code: 37 },
  { center: 'Pune', code: 38 },
  { center: 'Silchar', code: 39 },
  { center: 'Agartala', code: 40 },
];

export default function TestCenters() {
  return (
    <Page title="Test Centers">
      <RootStyle>
        <Typography variant="h3">Test Centers</Typography>

        <TableContainer
          style={{
            height: '60%',
            width: '80%',
            borderRadius: '0',
            margin: 'auto',
            marginTop: '2rem',
            // marginLeft: '12rem',
            // alignSelf: 'center',
          }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Test Center</TableCell>
                <TableCell align="left">Center Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((value, id) => (
                <TableRow key={id}>
                  <TableCell>{value.center}</TableCell>
                  <TableCell>{value.code}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </RootStyle>
    </Page>
  );
}
