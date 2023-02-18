// @mui
import { styled } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import Page from '../../components/Page';
import CourseCard from './CourseCard';

import axios from '../../utils/axios';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get('/courses/get-courses').then((res) => {
      setCourses(res.data.courses);
    });
  }, []);

  return (
    <Page title="Dashboard">
      <RootStyle>
        <Container sx={{ marginTop: '2rem' }}>
          <Typography variant="h2">Your Courses</Typography>

          <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
            {courses.map((course) => (
              <Grid item xs={12} md={6} lg={4} key={course.id}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
