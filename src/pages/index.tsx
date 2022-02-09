/**
 * @author [Luccin Masirika]
 * @email [luccinmasirika@gmail.com]
 * @create date 2022-02-09 13:21:47
 * @modify date 2022-02-09 13:21:47
 * @desc [MUI NextJs with Typescript Starter Kit Wrapper]
 */

import SEO from '@/components/seo';
import Wrapper from '@/components/wrapper';
import { useI18n } from '@/hooks/usei18n';
import { Button, Container, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { NextPage } from 'next';
import { useDarkMode } from 'next-dark-mode';
import { useRouter } from 'next/router';
import * as React from 'react';

dayjs.extend(relativeTime);

const Home: NextPage = () => {
  const {
    autoModeActive,
    autoModeSupported,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode();

  const { locale } = useRouter();
  const switchLanguage = useI18n<'fr' | 'en'>();

  const toggleMode = () => {
    darkModeActive ? switchToLightMode() : switchToDarkMode();
  };

  const toggleLanguage = () => {
    locale === 'en' ? switchLanguage('fr') : switchLanguage('en');
  };

  return (
    <Wrapper>
      <SEO
        title='MUI NextJs Starter'
        description='MUI NextJs with TypeScript Starter Kit'
        name='MUI NextJs with TypeScript Starter Kit'
        logo='/vercel.svg'
        favicon='/favicon.ico'
        image='/vercel.svg'
        phone='00000000'
        GA_MEASUREMENT_ID='0000000000'
      />
      <Container>
        <Stack
          justifyContent='center'
          alignItems='center'
          sx={{
            bgcolor: 'primary.main',
            my: 8,
            p: 4,
          }}
        >
          <Typography
            variant='h3'
            component='h1'
            color='secondary'
            gutterBottom
            textAlign='center'
          >
            MUI NextJs with TypeScript Starter Kit
          </Typography>
          <Typography
            variant='h6'
            component='h2'
            color='text.secondary'
            gutterBottom
            textAlign='center'
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum qui
            et quidem quos dolore illo culpa quasi expedita consequuntur
            corrupti minima, nulla quaerat magnam tempore a alias aliquam
            repudiandae saepe!
          </Typography>

          <Typography
            gutterBottom
            textAlign='center'
            variant='h6'
            component='h2'
            color='text.secondary'
          >
            Date 1 :{' '}
            {dayjs()
              .locale(locale as string)
              .to(new Date())}
          </Typography>

          <Typography
            gutterBottom
            textAlign='center'
            variant='h6'
            component='h2'
            color='text.secondary'
          >
            Date 2 :{' '}
            {dayjs(new Date())
              .locale(locale as string)
              .format('DD MMMM YYYY')}
          </Typography>

          <Typography
            gutterBottom
            textAlign='center'
            variant='h6'
            component='h2'
            color='text.secondary'
          >
            Date 3 :{' '}
            {dayjs(new Date())
              .locale(locale as string)
              .format('dddd - DD MMMM YYYY / HH:MM')}
          </Typography>

          <Stack direction='row' spacing={2} sx={{ my: 4 }}>
            <Button onClick={toggleMode} variant='contained' color='secondary'>
              Switch to {darkModeActive ? 'Light' : 'Dark'} theme
            </Button>
            <Button
              onClick={toggleLanguage}
              variant='contained'
              color='secondary'
            >
              Switch to {locale === 'en' ? 'French' : 'English'}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Wrapper>
  );
};

export default Home;
