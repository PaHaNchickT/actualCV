import type { TWorkItem } from '@/types/types';

export const ASSETS_PATH = {
  video: '/video/bg.mp4',
  videoPoster: '/images/bg.jpg',
  avatar: '/images/avatar.png',
  placeholder: '/images/placeholder.png',
  proj: '/images/proj',
};

export const STACK_COLORS: { [key: string]: string } = {
  html: '#F67E34',
  sass: '#EC407A',
  tail: '#06B6D4',
  js: '#F6AD34',
  webpack: '#1C78C0',
  ts: '#3178C6',
  react: '#00D8FF',
  next: 'white',
  redux: '#764ABC',
  jest: '#FF6434',
};

export const STACK = [
  [
    { name: 'HTML', key: 'html', id: 0 },
    [
      { name: 'SASS', key: 'sass', id: 1 },
      { name: 'Tailwind', key: 'tail', id: 2 },
    ],
    [
      { name: 'JavaScript', key: 'js', id: 3 },
      { name: 'WebPack', key: 'webpack', id: 4 },
    ],
  ],
  [
    [
      { name: 'TypeScript', key: 'ts', id: 5 },
      { name: 'React', key: 'react', id: 6 },
    ],
    [
      { name: 'Next.js', key: 'next', id: 7 },
      { name: 'Redux', key: 'redux', id: 8 },
    ],
    { name: 'Jest', key: 'jest', id: 9 },
  ],
];

export const WORKS: TWorkItem[] = [
  {
    id: 0,
    stack: [
      // {
      //   name: 'React',
      //   key: 'react',
      // },
      // {
      //   name: 'NextJS',
      //   key: 'next',
      // },
    ],
    year: 2024,
    link: 'https://graphiql-app-kappa.vercel.app/en',
  },
  {
    id: 1,
    stack: [
      // {
      //   name: 'React',
      //   key: 'react',
      // },
      // {
      //   name: 'NextJS',
      //   key: 'next',
      // },
    ],
    year: 2024,
    link: 'https://react-2024-q3-zrxs.vercel.app/films?page=1',
  },
  {
    id: 2,
    stack: [
      // {
      //   name: 'React',
      //   key: 'react',
      // },
      // {
      //   name: 'NextJS',
      //   key: 'next',
      // },
    ],
    year: 2024,
    link: 'https://rolling-scopes-school.github.io/pahanchickt-JSFE2023Q4/build-rss-puzzle/',
  },
  {
    id: 3,
    stack: [
      // {
      //   name: 'React',
      //   key: 'react',
      // },
      // {
      //   name: 'NextJS',
      //   key: 'next',
      // },
    ],
    year: 2024,
    link: 'https://rolling-scopes-school.github.io/pahanchickt-JSFE2023Q4/build-nonograms/',
  },
  {
    id: 4,
    stack: [
      // {
      //   name: 'React',
      //   key: 'react',
      // },
      // {
      //   name: 'NextJS',
      //   key: 'next',
      // },
    ],
    year: 2023,
    link: 'https://pahanchickt.github.io/minesweeper/index.html',
  },
  {
    id: 5,
    stack: [
      // {
      //   name: 'React',
      //   key: 'react',
      // },
      // {
      //   name: 'NextJS',
      //   key: 'next',
      // },
    ],
    year: 2023,
    link: 'https://rolling-scopes-school.github.io/pahanchickt-JSFE2023Q4/build-coffee-house/pages/home/',
  },
];
