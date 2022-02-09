/**
 * @author [Luccin Masirika]
 * @email [luccinmasirika@gmail.com]
 * @create date 2022-02-09 17:16:36
 * @modify date 2022-02-09 17:16:36
 * @desc [description]
 */

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export const useI18n = <T extends string>() => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const setState = (lang: T): void => {
    router.push({ pathname, query }, asPath, { locale: lang });
    router.push({ pathname, query }, asPath, { locale: lang });
    Cookies.set('NEXT_LOCALE', lang, { expires: 365 });
  };
  return setState;
};
