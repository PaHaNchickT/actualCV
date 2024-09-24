'use client';

import {
  Card,
  CardBody,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { useState, type ReactElement } from 'react';

import { ASSETS_PATH } from '@/constants/work-constants';

import CarouselButton from '../CarouselButton/CarouselButton';

const AboutWork = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  const [counter, setCounter] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const linkEpam = (
    <Link href="https://learn.epam.com/start" target="_blank">
      EPAM
    </Link>
  );
  const linkRSS = (
    <Link href="https://rs.school/courses" target="_blank">
      The Rolling Scopes School
    </Link>
  );

  return (
    <>
      <Card className="p-4 max-w-[800px]" shadow="lg">
        <CardBody className="overflow-visible py-2">
          <div className="flex flex-col gap-5 justify-between items-center sm:flex-row">
            <div className="flex flex-col gap-5">
              <div
                onClick={onOpen}
                className={`${ASSETS_PATH.diplomas[counter]} bg-cover w-[200px] h-[155px] transition-all duration-500 rounded-xl cursor-pointer shadow-[0_0_8px_3px_#F6AD34] hover:shadow-[0_0_8px_3px_#F6AD34] hover:grayscale-0 sm:shadow-none sm:grayscale`}
              ></div>
              <div className="flex gap-5 self-center">
                <CarouselButton counter={counter} setCounter={setCounter} isPlus={false} />
                <CarouselButton counter={counter} setCounter={setCounter} isPlus={true} />
              </div>
            </div>
            <p className="w-full text-justify text-sm sm:w-8/12 sm:text-base">
              {props.t('work.0')} {linkEpam} {props.t('work.1')} {linkRSS} {props.t('work.2')}
            </p>
          </div>
        </CardBody>
      </Card>

      <Modal size="xl" isOpen={isOpen} onClose={onClose} backdrop="blur" placement="center">
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Image
              isBlurred
              shadow="sm"
              radius="lg"
              width="100%"
              alt={`diploma-${counter + 1}-cover`}
              className="object-cover"
              src={`${ASSETS_PATH.diploma}${counter + 1}.jpg`}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      {ASSETS_PATH.diplomas.map((url, index) => (
        <div key={index} className={`${url} bg-cover hidden z-[-1]`}></div>
      ))}
    </>
  );
};

export default AboutWork;
