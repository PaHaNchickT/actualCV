import type { TWorkItem } from '@/types/types';

export const ASSETS_PATH = {
  video: '/video/bg.mp4',
  videoPoster: '/images/bg.jpg',
  avatar: '/images/avatar.png',
  placeholder: '/images/placeholder.png',
  proj: '/images/proj',
};

export const STACK_COLORS: { [key: string]: string } = {
  firebase: '#FFCB2D',
  html: '#F67E34',
  husky: '#113256',
  jest: '#FF6434',
  js: '#F6AD34',
  lint: '#4B32C3',
  next: 'white',
  pretty: 'white',
  react: '#00D8FF',
  redux: '#764ABC',
  sass: '#EC407A',
  tail: '#06B6D4',
  ts: '#3178C6',
  webpack: '#1C78C0',
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
      {
        name: 'TypeScript',
        key: 'ts',
      },
      {
        name: 'React',
        key: 'react',
      },
      {
        name: 'NextJS',
        key: 'next',
      },
      {
        name: 'TailWind',
        key: 'tail',
      },
      {
        name: 'ESLint',
        key: 'lint',
      },
      {
        name: 'Prettier',
        key: 'pretty',
      },
      {
        name: 'Husky',
        key: 'husky',
      },
      {
        name: 'FireBase',
        key: 'firebase',
      },
      {
        name: 'Jest',
        key: 'jest',
      },
    ],
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
    link: 'https://rolling-scopes-school.github.io/pahanchickt-JSFE2023Q4/build-coffee-house/pages/home/',
  },
];
