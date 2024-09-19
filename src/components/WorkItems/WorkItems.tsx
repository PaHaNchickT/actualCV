'use client';

import {
  Button,
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
import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';

import { ASSETS_PATH } from '@/constants/constants';
import type { TWorkItem } from '@/types/types';

const WorkItems = (props: { item: TWorkItem }): ReactElement => {
  const t = useTranslations('Works');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="">
        <Card
          shadow="sm"
          isPressable
          onPress={onOpen}
          className="w-[400px] h-[400px] flex flex-col justify-center relative bg-black hover:bg-[#F6AD34]"
        >
          <CardBody className="overflow-visible p-0 absolute z-[2] opacity-70">
            <Image
              shadow="sm"
              radius="lg"
              width="400px"
              height="400px"
              alt={`${t(`items.${props.item.id}.title`)}-cover`}
              className="w-full object-cover blur-[1px] grayscale"
              src={`${ASSETS_PATH.proj}${props.item.id}.jpg`}
            />
          </CardBody>
          <div className="bg-background px-6 py-3 text-3xl box-border relative z-[3]">
            {/* {transition-all duration-300 group-hover/card:w-full group-hover/card:text-4xl} */}
            <b>{t(`items.${props.item.id}.title`)}</b>
          </div>
        </Card>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{t(`items.${props.item.id}.title`)}</ModalHeader>
              <ModalBody className="flex-row justify-between gap-5">
                <section className="w-[65%]">
                  <p>{t(`items.${props.item.id}.descr`)}</p>
                </section>
                <Image
                  shadow="sm"
                  radius="lg"
                  width="200px"
                  height="200px"
                  alt={`${t(`items.${props.item.id}.descr`)}-cover`}
                  className="self-center object-cover"
                  src={`${ASSETS_PATH.proj}${props.item.id}.jpg`}
                />
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button color="primary" onPress={onClose}>
                  <Link href={props.item.link} className="text-black" target="_blank">
                    {t('btnLink')}
                  </Link>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkItems;
