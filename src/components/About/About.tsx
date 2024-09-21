'use client';

import { Card, CardBody } from '@nextui-org/react';
import { type ReactElement } from 'react';

const About = (): ReactElement => {
  return (
    <div className="w-full p-10 relative z-[2] flex flex-col items-center gap-10">
      <h3 className="font-black text-5xl text-center">About me</h3>
      <Card className="py-4 w-9/12">
        <CardBody className="overflow-visible py-2">
          <p>Info</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
