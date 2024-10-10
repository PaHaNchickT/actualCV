/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import type { MutableRefObject } from 'react';
import { useEffect, useRef, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Loader from '@/components/Loader/Loader';
import Stack from '@/components/Stack/Stack';
import Video from '@/components/Video/Video';
import WelcomeBanner from '@/components/WelcomeBanner/WelcomeBanner';
import Work from '@/components/Work/Work';
import { toggleLoading } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';

const Home = (): ReactElement => {
  const dispatch = useDispatch();
  const elementRef = useRef() as MutableRefObject<HTMLDivElement>;
  const isLoading = useSelector((state: RootState) => state.appState.isLoading);

  useEffect(() => {
    dispatch(toggleLoading(false));
  }, []);

  useEffect(() => {
    if (window && window.location.hash === '#work' && !isLoading) elementRef.current.scrollIntoView();
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center w-full relative">
          <Video />
          <WelcomeBanner />
          <Stack elementRef={elementRef} />
          <Work />
        </div>
      )}
    </>
  );
};

export default Home;
