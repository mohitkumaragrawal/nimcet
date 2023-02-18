/* eslint-disable */
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// @mui
import { Card, Typography, Stack, Button } from '@mui/material';
// components

// // ----------------------------------------------------------------------

CourseCard.propTypes = {
  course: PropTypes.object,
};

export default function CourseCard({ course }) {
  const { course_id, batch } = course;
  const navigator = useNavigate();

  const handleClick = () => {
    navigator(`/marksentry/${course_id}`);
  };

  return (
    <Card>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="h5" noWrap>
          {course_id}
        </Typography>
        <Typography variant="subtitle1" align="right" fontWeight="light" color="primary">
          {batch} Batch
        </Typography>
        <Button variant="contained" onClick={handleClick}>
          Marks Entry
        </Button>
      </Stack>
    </Card>
  );
}
