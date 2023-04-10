import { Stack, Typography, Card } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import { MotionInView, varFade } from '../../components/animate';

import './LatestNews.css';

export default function LatestNews() {
  return (
    // <MotionInView variants={varFade().inRight}>
    <Card sx={{ margin: 5, marginBottom: 2, padding: 2, paddingLeft: 3, position: 'relative' }}>
      <Stack direction={'row'} sx={{ gap: '2rem', alignItems: 'center' }}>
        <NewspaperIcon sx={{ fontSize: '3rem' }} />
        <Stack direction={'column'} sx={{ gap: '1rem' }}>
        <Typography variant="h4">Latest News</Typography>
          <Typography>
            Last date to apply for NIMCET 2023 is extended till 16 April 2023
            <div className="new-blink">NEW</div>
          </Typography>
        </Stack>
      </Stack>
    </Card>
    // </MotionInView>
  );
}
