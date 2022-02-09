/**
 * @author [Luccin Masirika]
 * @email [luccinmasirika@gmail.com]
 * @create date 2022-02-09 17:18:30
 * @modify date 2022-02-09 17:18:30
 * @desc [description]
 */

import { createTheme } from '@mui/material/styles';

export const theme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'light' ? '#EDE7F6' : '#212121',
        paper: '#212121',
      },
      primary: {
        main: '#4A148C',
      },
      secondary: {
        main: '#F06292',
      },
    },
  });
