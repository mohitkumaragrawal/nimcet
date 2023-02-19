import { Box, Grid, Stack, Typography, Card } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function LatestNews() {
  return (
    <Card sx={{ margin: '1rem', padding: '1rem 3rem' }}>
      <Stack direction={'row'} sx={{ gap: '2rem', alignItems: 'center' }}>
        <NewspaperIcon sx={{ fontSize: '3rem' }} />
        <Stack direction={'column'} sx={{ gap: '1rem' }}>
          <Typography variant="h4">Latest News</Typography>
          <Typography>
            All candidates who have confirmed seats in NIMCET-2022 have to pay the partial admission fee (SC/ST/PwD:
            20,000/-, GN/OBC/GN-EWS:30,000/-) during 28/07/2022 to 01/08/2022. Non Payment of partial admission fee will
            lead to cancellation of allotted seats.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
