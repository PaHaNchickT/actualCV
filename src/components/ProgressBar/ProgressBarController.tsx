'use client';

import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { swapPage } from '@/redux/appStateSlice';

export default function ProgressBarController(): null {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const pageName = window.location.pathname.split('/')[2];
    dispatch(swapPage(pageName ? pageName : ''));

    NProgress.done();
  }, [pathname]);

  return null;
}
