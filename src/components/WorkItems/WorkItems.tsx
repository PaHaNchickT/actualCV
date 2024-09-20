/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
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
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import { ASSETS_PATH, STACK_COLORS } from '@/constants/constants';
import type { TWorkItem } from '@/types/types';

const WorkItems = (props: { item: TWorkItem }): ReactElement => {
  const t = useTranslations('Works');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // useEffect(() => {
  //   if (props.item.id === 1) onOpen();
  // }, []);

  return (
    <>
      <div className="">
        <Card
          shadow="sm"
          isPressable
          onPress={onOpen}
          className="w-[400px] h-[400px] flex flex-col justify-center relative bg-black group/card"
        >
          <CardBody className="overflow-visible p-0 absolute z-[2] opacity-70">
            <Image
              shadow="sm"
              radius="lg"
              width="400px"
              height="400px"
              alt={`${t(`items.${props.item.id}.title`)}-cover`}
              className="w-full object-cover blur-[1px] transition-all duration-300 grayscale group-hover/card:grayscale-0"
              src={`${ASSETS_PATH.proj}${props.item.id}.jpg`}
            />
          </CardBody>
          <div className="bg-background pl-8 pr-2 py-1 text-xl box-border relative z-[3] transition-all min-w-[10px] group-hover/card:min-w-full group-hover/card:text-5xl group-hover/card:py-4 group-hover/card:px-0">
            <b>{t(`items.${props.item.id}.title`)}</b>
          </div>
        </Card>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-primary">
                {t(`items.${props.item.id}.subtitle`)}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row justify-between gap-5 pb-14">
                  <section className="w-[60%] flex flex-col gap-3">
                    <p className="text-justify">{t(`items.${props.item.id}.descrMain`)}</p>
                    <p className="text-justify">{t(`items.${props.item.id}.descrSub`)}</p>
                    <div className="flex flex-col">
                      <p className="text-primary">{t('stackLabel')}</p>
                      <div className="flex flex-wrap gap-2">
                        {props.item.stack.map((lang) => (
                          <p
                            key={lang.name}
                            className={`text-xs [text-shadow:_0_0_1px_white] ${STACK_COLORS[lang.key]}`}
                          >
                            {lang.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </section>
                  <div className="flex flex-col gap-5">
                    <Image
                      isBlurred
                      shadow="sm"
                      radius="lg"
                      width="300px"
                      height="300px"
                      alt={`${t(`items.${props.item.id}.title`)}-cover`}
                      className="object-cover"
                      src={`${ASSETS_PATH.proj}${props.item.id}.jpg`}
                    />
                    <Link href={props.item.link} className="text-black rounded-xl" target="_blank">
                      <Button color="primary" onPress={onClose} className="w-full">
                        {t('btnLink')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </ModalBody>
              {/* <ModalFooter className="justify-center">
                
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkItems;
