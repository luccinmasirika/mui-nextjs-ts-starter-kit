/**
 * @author [Luccin Masirika]
 * @email [luccinmasirika@gmail.com]
 * @create date 2022-02-09 17:16:45
 * @modify date 2022-02-09 17:16:45
 * @desc [description]
 */

import { RootReducer } from '@/store/reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;
