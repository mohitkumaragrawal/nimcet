import { Stack, Typography, Card, Link } from '@mui/material';
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
          <Link href="https://cdn.digialm.com/EForms/configuredHtml/1042/88133/Registration.html" target="_blank">
            Registration Link
            <div className="new-blink">NEW</div>
          </Link>
          <Link href="https://cdn.digialm.com/EForms/configuredHtml/1042/88133/login.html" target="_blank">
            Application Login Link
            <div className="new-blink">NEW</div>
          </Link>
        </Stack>
      </Stack>
    </Card>
    // </MotionInView>
  );
}
