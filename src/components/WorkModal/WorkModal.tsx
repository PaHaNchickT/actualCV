'use client';

import { Button, Image, Link, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import { ASSETS_PATH, STACK_COLORS } from '@/constants/constants';
import type { TWorkItem } from '@/types/types';

const WorkModal = (props: {
  item: TWorkItem;
  isOpen: boolean;
  onOpenChange: () => void;
  t: ReturnType<typeof useTranslations<'Works'>>;
}): ReactElement => {
  return (
    <>
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange} size="4xl" backdrop="blur">
        <ModalContent className="bg-background">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-primary">
                {props.t(`items.${props.item.id}.subtitle`)}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row justify-between gap-5 pb-14">
                  <section className="w-[60%] flex flex-col gap-3">
                    <p className="text-justify">{props.t(`items.${props.item.id}.descrMain`)}</p>
                    <p className="text-justify">{props.t(`items.${props.item.id}.descrSub`)}</p>
                    <div className="flex flex-col">
                      <p className="text-primary">{props.t('stackLabel')}</p>
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
                      alt={`${props.t(`items.${props.item.id}.title`)}-cover`}
                      className="object-cover"
                      src={`${ASSETS_PATH.proj}${props.item.id}.jpg`}
                    />
                    <Link href={props.item.link} className="rounded-xl" target="_blank">
                      <Button color="primary" onPress={onClose} className="w-full text-black">
                        {props.t('btnLink')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkModal;