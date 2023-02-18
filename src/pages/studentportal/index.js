import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import { Container, Grid, Typography, Stack, Select, MenuItem, Box, Button } from '@mui/material';

import Page from '../../components/Page';
// import Button from 'src/theme/overrides/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

function createData(id, ta, mid, end, scode, sub, grade, credit) {
  return { id, ta, mid, end, scode, sub, grade, credit };
}

const rows = [];

function CustomizedTables({ data }) {
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sr No.</StyledTableCell>
            <StyledTableCell align="right">Subject Code</StyledTableCell>
            <StyledTableCell align="right">Subject Name</StyledTableCell>
            <StyledTableCell align="right">Credits</StyledTableCell>
            <StyledTableCell align="right">TA</StyledTableCell>
            <StyledTableCell align="right">Mid Sem</StyledTableCell>
            <StyledTableCell align="right">End Sem</StyledTableCell>
            <StyledTableCell align="right">Grade Obtained</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.results.length > 0 &&
            data.results.map((row,index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align="right">{row.course_id}</StyledTableCell>
                <StyledTableCell align="right">{row.credit}</StyledTableCell>
                <StyledTableCell align="right">{row.ta}</StyledTableCell>
                <StyledTableCell align="right">{row.mid}</StyledTableCell>
                <StyledTableCell align="right">{row.end}</StyledTableCell>
                <StyledTableCell align="right">{row.end}</StyledTableCell>
                <StyledTableCell align="right">{row.grade}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function StudentPortal() {
  // Get student data from the context;
  const [semester, setSemester] = useState('');
  const [studentResult, setStudentResult] = useState(null);

  const getData = useCallback(async () => {
    const config = {
      headers: {
        Content_Type: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    };

    const res = await axios.get(`http://localhost:5000/students/get-semester-marks?semester=${semester}`, config);
    setStudentResult(res.data);
  }, [semester]);

  useEffect(() => {
    getData();
  }, [semester]);

  return (
    <Page title="Student Portal">
      <RootStyle>
        <Container sx={{ marginTop: '2rem' }}>
          <Grid container alignItems={'center'} spacing={1} justifyContent="space-between" direction="row">
            <Grid xs={3} item>
              <Typography>Name: {'Mohit'}</Typography>
            </Grid>
            <Grid xs={3} item>
              <Typography>Registration No: {'2021UGCS029'}</Typography>
            </Grid>
            <Grid xs={3} item>
              <Grid container spacing={2} alignItems="center" direction="row">
                <Grid item>
                  <Typography flex={1}>Semester:</Typography>
                </Grid>
                <Grid item>
                  <Select value={semester} onChange={(e) => setSemester(e.target.value)} flex={2}>
                    <MenuItem value="0">Choose semester</MenuItem>
                    <MenuItem value="1">Semester 1</MenuItem>
                    <MenuItem value="2">Semester 2</MenuItem>
                    <MenuItem value="3">Semester 3</MenuItem>
                    <MenuItem value="4">Semester 4</MenuItem>
                    <MenuItem value="5">Semester 5</MenuItem>
                    <MenuItem value="6">Semester 6</MenuItem>
                    <MenuItem value="7">Semester 7</MenuItem>
                    <MenuItem value="8">Semester 8</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={1} item>
              <Button variant="contained">Show</Button>
            </Grid>
            <Grid xs={1} item>
              <Button variant="contained">Print</Button>
            </Grid>
          </Grid>
          <br />
          <CustomizedTables data={studentResult} />
          <br />
          <Grid container direction="row" justifyContent={'space-around'}>
            <Grid item>
              <Typography>
                <b>SGPA:</b> {studentResult ? studentResult.results[0].sgpa : null}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <b>CGPA:</b> {studentResult ? studentResult.cgpa : null}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <b>RESULT:</b> {'PASS'}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
