/* eslint-disable */
// @mui
import { styled } from '@mui/material/styles';
import {
  Container,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import Page from '../../components/Page';

import axios from '../../utils/axios';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

const TableHeaderCell = ({ columnName }) => {
  return (
    <TableCell sx={{ width: '200px' }}>
      <Typography fontWeight="600" fontSize="16px">
        {columnName}
      </Typography>
    </TableCell>
  );
};

const parseRemark = (remark) => {
  if (remark === 'VLD') return 'Valid';
  if (remark === 'UM') return 'Unfair Means';
  if (remark === 'ABS') return 'Absent';
};

// ----------------------------------------------------------------------

const StudenDataTableRow = ({ data, handleSave }) => {
  const { id, regn_no, name, mid, end, ta, grade, status, remark, attd } = data;

  const [midInp, setMidInp] = useState(mid);
  const [endInp, setEndInp] = useState(end);
  const [taInp, setTaInp] = useState(ta);
  const [attdInp, setAttdInp] = useState(attd);
  const [remarkInp, setRemarkInp] = useState(remark);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleClick = () => {
    if (editMode) {
      setSaving(true);
      handleSave({
        id,
        mid: midInp,
        end: endInp,
        ta: taInp,
        grade,
        remark: remarkInp,
        attd: attdInp,
      }).then((res) => {
        setSaving(false);
      });

      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  return (
    <TableRow>
      <TableCell>{regn_no}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        {editMode ? <TextField value={midInp} variant="outlined" onChange={(e) => setMidInp(+e.target.value)} /> : mid}
      </TableCell>
      <TableCell>
        {editMode ? <TextField value={endInp} variant="outlined" onChange={(e) => setEndInp(+e.target.value)} /> : end}
      </TableCell>
      <TableCell>
        {editMode ? <TextField value={taInp} variant="outlined" onChange={(e) => setTaInp(+e.target.value)} /> : ta}
      </TableCell>
      <TableCell>{mid + end + ta}</TableCell>
      <TableCell>{grade}</TableCell>
      <TableCell>
        {editMode ? (
          <TextField value={attdInp} variant="outlined" onChange={(e) => setAttdInp(+e.target.value)} />
        ) : (
          attd
        )}
      </TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>
        {editMode ? (
          <Select sx={{ width: '90px' }} value={remarkInp} onChange={(e) => setRemarkInp(e.target.value)}>
            <MenuItem value={'VLD'}>Valid</MenuItem>
            <MenuItem value={'ABS'}>Absent</MenuItem>
            <MenuItem value={'UM'}>Unfair Means</MenuItem>
          </Select>
        ) : (
          parseRemark(remark)
        )}
      </TableCell>
      <TableCell>
        <LoadingButton variant="contained" onClick={handleClick} loading={saving}>
          {editMode ? 'Save' : 'Edit'}
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};

// ----------------------------------------------------------------------

export default function MarksEntry() {
  const { course_id } = useParams();
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    axios.post(`/courses/get-course-marks`, { courseId: course_id }).then((response) => {
      if (response.data.success !== 1) {
        alert('unable to fetch the marks of students');
        throw Error('Unable to fetch the marks');
      }
      setMarksData(response.data.results);
    });
  }, []);

  const handleSave = async ({ id, mid, end, ta, grade, remark, attd }) => {
    // we have in marksData:
    // attd, batch, course_id, end, grade, id, mid, name, regn_no, remark, semester, status, ta, year
    // send the put request to the server to save the new data
    // endpoint: /courses//update-student-marks
    // body: semester, regnNo, courseId, batch, year, mid, end, ta, attd, grade, remark, status, id
    // if the the request was successful then update the marksData

    const dataIdx = marksData.findIndex((obj) => obj.id === id);
    const data = marksData[dataIdx];
    const newData = { ...data, mid, end, ta, grade, remark, attd };

    const result = await axios.put('/courses/update-student-marks', {
      semester: newData.semester,
      regnNo: newData.regn_no,
      courseId: newData.course_id,
      batch: newData.batch,
      year: newData.year,
      mid: newData.mid,
      end: newData.end,
      ta: newData.ta,
      attd: newData.attd,
      grade: newData.grade,
      remark: newData.remark,
      status: newData.status,
      id: newData.id,
    });

    if (result.data.success !== 1) {
      alert('Unable to save');
      return false;
    }

    const newMarksData = marksData.map((dt) => {
      if (dt.id === id) return newData;
      return dt;
    });
    setMarksData(newMarksData);

    return true;
  };

  return (
    <Page title="Marks Entry">
      <RootStyle>
        <Container sx={{ marginTop: '2rem' }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h2" pb="30px">
              {course_id}
            </Typography>
          </Stack>
          <TableContainer sx={{ maxHeight: '800px' }} component={Paper}>
            <Table stickyHeader>
              <TableHead height="80px" color="error">
                <TableRow>
                  <TableHeaderCell columnName="Reg No" />
                  <TableHeaderCell columnName="Name" />
                  <TableHeaderCell columnName="Mid Term" />
                  <TableHeaderCell columnName="End Term" />
                  <TableHeaderCell columnName="TA" />
                  <TableHeaderCell columnName="Total" />
                  <TableHeaderCell columnName="Grade" />
                  <TableHeaderCell columnName="Attendance" />
                  <TableHeaderCell columnName="Status" />
                  <TableHeaderCell columnName="Remak" />
                  <TableHeaderCell columnName="" />
                </TableRow>
              </TableHead>
              <TableBody>
                {marksData.map((data) => {
                  return <StudenDataTableRow data={data} key={data.id} handleSave={handleSave} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </RootStyle>
    </Page>
  );
}
