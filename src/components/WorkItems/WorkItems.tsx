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

import { ASSETS_PATH, STACK_COLORS } from '@/constants/constants';
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-primary">
                {t(`items.${props.item.id}.subtitle`)}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row justify-between gap-5">
                  <section className="w-[60%] flex flex-col gap-3">
                    <p className="text-justify">{t(`items.${props.item.id}.descrMain`)}</p>
                    <p className="text-justify">{t(`items.${props.item.id}.descrSub`)}</p>
                    <div className="flex flex-col">
                      <p className="text-primary">Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {props.item.stack.map((lang) => (
                          <p
                            key={lang.name}
                            className={`text-xs [text-shadow:_0_0_1px_white] text-[${STACK_COLORS[lang.key]}]`}
                          >
                            {lang.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </section>
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="300px"
                    height="300px"
                    alt={`${t(`items.${props.item.id}.title`)}-cover`}
                    className="self-center object-cover"
                    src={`${ASSETS_PATH.proj}${props.item.id}.jpg`}
                  />
                </div>
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
