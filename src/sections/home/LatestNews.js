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
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link href="https://cdn.digialm.com/EForms/configuredHtml/1042/88133/login.html" target="_blank">
            Application Login Link
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link target="_blank">
            The last date for NIMCET 2024 application is extended till 24/04/2024
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link target="_blank">The correction window shall be open from 26/04/2024 to 28/04/2024</Link>
          <Link href="https://qa-efmprd.digialm.com/EForms/configuredHtml/1042/88133/login.html" target="_blank">
            Link for Application editing/correction
          </Link>
          <Link>
            The hall ticket is live now. Candidate can login to download
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link>
            Link for challenges and model solutions will be available from 11/06/2024 (5:00 PM) to 13/06/2024 (5:00 PM).
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link>
            Response QP and challenge is live till 5:00 pm of 13/06/24. Please login for details.
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link href="https://nitjsr.ac.in/backend/uploads/nimcet/2024/modified_model_sol.pdf">
            Modified model solution after considering the challenges
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link>
            The result is live now. Candidate may login for the scorecard.
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link>
            Registration for counselling shall start from 29/06/24.
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link
            href="https://nitjsr.ac.in/backend/uploads/nimcet/2024/participating_institues_NIMCET_2024.pdf"
            target="_blank"
          >
            List of participating institute on nimcet portal
            {/* <div className="new-blink">NEW</div> */}
          </Link>
          <Link href="https://nimcet.admissions.nic.in/" target="_blank">
            To apply for councelling Please visit nimcet.admissions.nic.in
            <div className="new-blink">NEW</div>
          </Link>
          <Link href="https://nitjsr.ac.in/backend/uploads/nimcet/2024/Notification.pdf" target="_blank">
            Notification on challenge to questions
            <div className="new-blink">NEW</div>
          </Link>
        </Stack>
      </Stack>
    </Card>
    // </MotionInView>
  );
}
