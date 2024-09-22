export type TWorkItem = {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  stack: {
    name: string;
    key: string;
  }[];
  link: string;
  cover: string;
};

export type TContactForm = {
  name: string; //Как я могу к вам обращаться?
  company: string;
  email: string;
  message: string;
};
