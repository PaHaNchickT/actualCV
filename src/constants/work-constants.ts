/* eslint-disable max-lines */
import type { TWorkItem } from '@/types/types';

export const STACK_COLORS: { [key: string]: string } = {
  figma: 'text-[#0ACF83]',
  firebase: 'text-[#FFCB2D]',
  html: 'text-[#F67E34]',
  husky: 'text-[#113256]',
  jest: 'text-[#FF6434]',
  js: 'text-[#F6AD34]',
  lint: 'text-[#4B32C3]',
  next: 'text-white',
  nextIntl: 'text-[#88DFFF]',
  nodejs: 'text-[#83CD29]',
  puppeteer: 'text-[#01D8A2]',
  pretty: 'text-white',
  react: 'text-[#00D8FF]',
  reactForm: 'text-[#EC5990]',
  redux: 'text-[#764ABC]',
  sass: 'text-[#EC407A]',
  tail: 'text-[#06B6D4]',
  ts: 'text-[#3178C6]',
  webpack: 'text-[#1C78C0]',
  zod: 'text-[#3068B7]',
  default: 'text-white',
};

export const STACK = [
  [
    [
      { name: 'HTML', key: 'html', id: 0 },
      { name: 'Figma', key: 'figma', id: 1 },
    ],
    [
      { name: 'SASS', key: 'sass', id: 2 },
      { name: 'Tailwind', key: 'tail', id: 3 },
    ],
    [
      { name: 'JavaScript', key: 'js', id: 4 },
      { name: 'WebPack', key: 'webpack', id: 5 },
    ],
  ],
  [
    [
      { name: 'TypeScript', key: 'ts', id: 6 },
      { name: 'React', key: 'react', id: 7 },
    ],
    [
      { name: 'Next.js', key: 'next', id: 8 },
      { name: 'Redux', key: 'redux', id: 9 },
    ],
    [
      { name: 'Jest', key: 'jest', id: 10 },
      { name: 'Puppeteer', key: 'puppeteer', id: 11 },
    ],
  ],
];

export const WORKS: TWorkItem[] = [
  {
    id: 1,
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
        name: 'Redux',
        key: 'redux',
      },
      {
        name: 'Storybook',
        key: 'sass',
      },
      {
        name: 'Descript',
        key: 'nodejs',
      },
      {
        name: 'Jest',
        key: 'jest',
      },
      {
        name: 'Puppeteer',
        key: 'puppeteer',
      },
    ],
    link: 'https://auto.ru/',
    cover: "bg-[url('/images/proj1.jpg')]",
  },
  {
    id: 2,
    stack: [
      {
        name: 'JavaScript',
        key: 'js',
      },
      {
        name: 'React',
        key: 'react',
      },
      {
        name: 'React Admin',
        key: 'default',
      },
      {
        name: 'Material UI',
        key: 'tail',
      },
      {
        name: 'React Hook Form',
        key: 'reactForm',
      },
    ],
    link: 'UNDER_NDA',
    cover: "bg-[url('/images/proj2.jpg')]",
  },
  {
    id: 3,
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
        name: 'Next.js',
        key: 'next',
      },
      {
        name: 'Redux',
        key: 'redux',
      },
      {
        name: 'NextUI',
        key: 'next',
      },
      {
        name: 'TailWind',
        key: 'tail',
      },
    ],
    link: 'https://minesweeper-eight-green.vercel.app/',
    cover: "bg-[url('/images/proj3.jpg')]",
  },
  {
    id: 4,
    stack: [
      {
        name: 'TypeScript',
        key: 'ts',
      },
      {
        name: 'SASS',
        key: 'sass',
      },
      {
        name: 'WebPack',
        key: 'webpack',
      },
    ],
    link: 'https://rolling-scopes-school.github.io/pahanchickt-JSFE2023Q4/build-rss-puzzle/',
    cover: "bg-[url('/images/proj4.jpg')]",
  },
  {
    id: 5,
    stack: [
      {
        name: 'JavaScript',
        key: 'js',
      },
      {
        name: 'SASS',
        key: 'sass',
      },
      {
        name: 'WebPack',
        key: 'webpack',
      },
    ],
    link: 'https://rolling-scopes-school.github.io/pahanchickt-JSFE2023Q4/build-nonograms/',
    cover: "bg-[url('/images/proj5.jpg')]",
  },
  {
    id: 6,
    stack: [
      {
        name: 'HTML',
        key: 'html',
      },
      {
        name: 'SASS',
        key: 'sass',
      },
      {
        name: 'Figma',
        key: 'figma',
      },
      {
        name: 'JavaScript',
        key: 'js',
      },
    ],
    link: 'https://rolling-scopes-school.github.io/pahanchickt-JSFE2023Q4/build-coffee-house/pages/home/',
    cover: "bg-[url('/images/proj6.jpg')]",
  },
];

export const PORTFOLIO_STACK = [
  {
    name: 'TypeScript',
    key: 'ts',
  },
  {
    name: 'React',
    key: 'react',
  },
  {
    name: 'Next.js',
    key: 'next',
  },
  {
    name: 'Redux',
    key: 'redux',
  },
  {
    name: 'NextUI',
    key: 'next',
  },
  {
    name: 'TailWind',
    key: 'tail',
  },
  {
    name: 'Next-Intl',
    key: 'nextIntl',
  },
  {
    name: 'React Hook Form',
    key: 'reactForm',
  },
  {
    name: 'Zod',
    key: 'zod',
  },
];
