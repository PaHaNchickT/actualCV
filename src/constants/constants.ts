export const TEXT_CONTENT = {
  path: {
    video: '/video/bg.mp4',
    videoPoster: '/images/bg.jpg',
    avatar: '/images/avatar.png',
  },
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

export const WORKS = [
  {
    id: 0,
    title: 'Placeholder Title',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci risus, vehicula sit amet pulvinar at, eleifend et risus. Donec consequat sapien posuere laoreet feugiat. Nunc eget lacus ut turpis semper bibendum vel eu diam. Proin eget sapien sed massa tristique convallis. In rhoncus, arcu vel cursus aliquet, elit urna vehicula urna, eu sollicitudin arcu mi sed lorem. Proin et lorem metus. Proin sit amet eleifend orci. Nunc quis tristique justo. Nullam consequat pretium efficitur. Suspendisse potenti. Curabitur tristique nibh at ex mollis placerat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec pharetra arcu. Mauris maximus dui ac iaculis imperdiet.',
    stack: [
      {
        name: 'React',
        key: 'react',
      },
      {
        name: 'NextJS',
        key: 'next',
      },
    ],
  },
];
