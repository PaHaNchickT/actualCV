export const EDUCATION: {
  name: 'education.university';
  degree: 'education.bachelor' | 'education.master';
  duration: string;
}[] = [
  { name: 'education.university', degree: 'education.bachelor', duration: '2017 - 2021' },
  { name: 'education.university', degree: 'education.master', duration: '2021 - 2023' },
];

export const ADD_EDUCATION: {
  name: string;
  course: string;
  duration: 'addEducation.edu1' | 'addEducation.edu2' | 'addEducation.edu3' | 'addEducation.edu4';
}[] = [
  { name: 'EPAM learning', course: 'Javascript basic mentoring program', duration: 'addEducation.edu1' },
  { name: 'RS School', course: 'JS/FE Pre-school 2022 (JavaScript)', duration: 'addEducation.edu2' },
  { name: 'RS School', course: 'Javascript/Front-end 2023Q04 (JavaScript)', duration: 'addEducation.edu3' },
  { name: 'RS School', course: 'React 2024 Q3 (React)', duration: 'addEducation.edu4' },
];

export const WORK: {
  name: 'work.0.name' | 'work.1.name';
  city: 'work.0.city' | 'work.1.city';
  position: 'work.0.position' | 'work.1.position';
  description: 'work.0.description' | 'work.1.description';
  durationFrom: 'work.0.durationFrom' | 'work.1.durationFrom';
  durationTo: 'work.0.durationTo' | 'work.1.durationTo';
  durationSummary: 'work.0.durationSummary' | 'work.1.durationSummary';
}[] = [
  {
    name: 'work.0.name',
    city: 'work.0.city',
    position: 'work.0.position',
    description: 'work.0.description',
    durationFrom: 'work.0.durationFrom',
    durationTo: 'work.0.durationTo',
    durationSummary: 'work.0.durationSummary',
  },
  {
    name: 'work.1.name',
    city: 'work.1.city',
    position: 'work.1.position',
    description: 'work.1.description',
    durationFrom: 'work.1.durationFrom',
    durationTo: 'work.1.durationTo',
    durationSummary: 'work.1.durationSummary',
  },
];

export const STACK: ['stack.0', 'stack.1', 'stack.2', 'stack.3', 'stack.4'] = [
  'stack.0',
  'stack.1',
  'stack.2',
  'stack.3',
  'stack.4',
];
