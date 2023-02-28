import { Stack, Typography, Card } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import { MotionInView, varFade } from '../../components/animate';

import './LatestNews.css';

export default function LatestNews() {
  return (
    // <MotionInView variants={varFade().inRight}>
    <Card sx={{ margin: 5, marginBottom: 2, padding: 2, paddingLeft: 3, position: 'relative' }}>
      <div className="new-blink">NEW</div>
      <Stack direction={'row'} sx={{ gap: '2rem', alignItems: 'center' }}>
        <NewspaperIcon sx={{ fontSize: '3rem' }} />
        <Stack direction={'column'} sx={{ gap: '1rem' }}>
          <Typography variant="h4">Latest News</Typography>
          <Typography>
            Online Registration and Application form is available from 05/03/2023 (10:00 AM) to 10/04/2023 (5:00 PM)
          </Typography>
        </Stack>
      </Stack>
    </Card>
    // </MotionInView>
  );
}
