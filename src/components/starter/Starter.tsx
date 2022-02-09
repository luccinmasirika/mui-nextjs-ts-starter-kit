/**
 * @author [Luccin Masirika]
 * @email [luccinmasirika@gmail.com]
 * @create date 2022-02-09 20:55:21
 * @modify date 2022-02-09 20:55:21
 * @desc [Home Page]
 */

import { useI18n } from '@/hooks/useI18n';
import { Button, Container, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { NextPage } from 'next';
import { useDarkMode } from 'next-dark-mode';
import { useRouter } from 'next/router';
import * as React from 'react';

dayjs.extend(relativeTime);

const Starter: NextPage = () => {
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
    <Container>
      <Stack
        justifyContent='center'
        alignItems='center'
        sx={{
          bgcolor: 'secondary.main',
          my: 8,
          p: 4,
          borderRadius: 2,
          boxShadow: (theme) => `6px 6px 0 ${theme.palette.primary.main}`,
        }}
      >
        <Typography
          variant='h3'
          component='h1'
          color='primary'
          gutterBottom
          fontWeight={700}
          textAlign='center'
        >
          MUI NextJs with TypeScript Starter Kit
        </Typography>
        <Typography color='text.secondary' gutterBottom textAlign='center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum qui et
          quidem quos dolore illo culpa quasi expedita consequuntur corrupti
          minima, nulla quaerat magnam tempore a alias aliquam repudiandae
          saepe!
        </Typography>

        <Typography gutterBottom textAlign='center' color='text.secondary'>
          Date 1 :{' '}
          {dayjs()
            .locale(locale as string)
            .to(new Date())}
        </Typography>

        <Typography gutterBottom textAlign='center' color='text.secondary'>
          Date 2 :{' '}
          {dayjs(new Date())
            .locale(locale as string)
            .format('DD MMMM YYYY')}
        </Typography>

        <Typography gutterBottom textAlign='center' color='text.secondary'>
          Date 3 :{' '}
          {dayjs(new Date())
            .locale(locale as string)
            .format('dddd - DD MMMM YYYY / HH:MM')}
        </Typography>

        <Stack direction='row' spacing={2} sx={{ my: 4 }}>
          <Button onClick={toggleMode} variant='contained' color='primary'>
            Switch to {darkModeActive ? 'Light' : 'Dark'} theme
          </Button>
          <Button onClick={toggleLanguage} variant='contained' color='primary'>
            Switch to {locale === 'en' ? 'French' : 'English'}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Starter;
