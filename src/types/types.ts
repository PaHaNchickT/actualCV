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
  from_name: string;
  from_company: string;
  from_email: string;
  message: string;
  to_name: string;
};
