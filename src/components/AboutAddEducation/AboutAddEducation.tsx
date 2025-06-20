'use client';

import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { useState, type ReactElement } from 'react';

import { ADD_EDUCATION } from '@/constants/about-constants';
import { ASSETS_PATH } from '@/constants/global-constants';

import CarouselButton from '../CarouselButton/CarouselButton';
import ImageSkeleton from '../ImageSkeleton/ImageSkeleton';

const AboutAddEducation = (props: { t: ReturnType<typeof useTranslations<'About'>> }): ReactElement => {
  const [counter, setCounter] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card className="p-4 pb-6 max-w-[800px] text-sm sm:text-base flex flex-col gap-5" shadow="lg">
        <div>
          <CardHeader className="text-primary">{props.t('addEducation.header')}</CardHeader>
          <CardBody className="overflow-visible py-2 pl-7">
            <ul className="list-disc marker:text-primary flex flex-col gap-3">
              {ADD_EDUCATION.map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                  <p className="font-black">{item.course}</p>
                  <p className="text-primary">{props.t(item.duration)}</p>
                </li>
              ))}
            </ul>
          </CardBody>
        </div>
        <div className="flex justify-center items-center gap-3">
          <CarouselButton counter={counter} setCounter={setCounter} isPlus={false} />
          <div className="relative w-[200px] h-[155px] rounded-xl overflow-hidden">
            <div
              onClick={onOpen}
              className={`w-full h-full ${ASSETS_PATH.diplomas[counter]} relative z-[1] bg-cover transition-all duration-500 cursor-pointer shadow-[0_0_8px_3px_#F6AD34] hover:shadow-[0_0_8px_3px_#F6AD34] hover:grayscale-0 sm:shadow-none sm:grayscale`}
            ></div>
            <ImageSkeleton />
          </div>
          <CarouselButton counter={counter} setCounter={setCounter} isPlus={true} />
        </div>
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
    </>
  );
};

export default AboutAddEducation;
