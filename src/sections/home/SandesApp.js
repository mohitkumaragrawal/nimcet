import { Stack, Typography, Card } from '@mui/material';

import { MotionInView, varFade } from '../../components/animate';

import imgSandes from '../../assets/sandes.png';
import svgAppStore from '../../assets/app-store.svg';
import svgPlayStore from '../../assets/play-store.svg';

export default function SandesApp() {
  return (
    <MotionInView variants={varFade().inUp}>
      <Card sx={{ width: '100%', padding: '1rem 2rem', border: '1px solid', borderColor: 'divider' }}>
        <Stack direction={'row'} sx={{ gap: '2rem', alignItems: 'center' }}>
          <img src={imgSandes} alt="Sandes" width={128} height={128} style={{ borderRadius: '2rem' }} />
          <Stack direction={'column'} sx={{ gap: 1 }}>
            <Typography variant="h4">Sandes</Typography>
            <Typography>Install "Sandes" app to get counselling related messages.</Typography>

            <Stack direction={'row'} spacing={2}>
              <a href="https://play.google.com/store/apps/details?id=in.nic.gimkerala&hl=nl&gl=US">
                <img src={svgPlayStore} alt="" width={48} height={48} />
              </a>
              <a href="https://apps.apple.com/in/app/sandes/id1517976582">
                <img src={svgAppStore} alt="" width={48} height={48} />
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </MotionInView>
  );
}
