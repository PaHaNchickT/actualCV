'use client';

import { Button, Image, Link, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import { ASSETS_PATH } from '@/constants/global-constants';
import { STACK_COLORS } from '@/constants/work-constants';
import type { TWorkItem } from '@/types/types';

const WorkModal = (props: {
  item: TWorkItem;
  isOpen: boolean;
  onOpenChange: () => void;
  t: ReturnType<typeof useTranslations<'Works'>>;
}): ReactElement => {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        size="4xl"
        backdrop="blur"
        scrollBehavior="inside"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-primary">
                {props.t(`items.${props.item.id}.subtitle`)}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col justify-between gap-5 pb-14 lg:flex-row">
                  <section className="w-full flex flex-col gap-3 lg:w-[60%]">
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
                  <div className="flex flex-col gap-5 self-center">
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
                    {props.item.link === 'UNDER_NDA' ? (
                      <Button
                        color="primary"
                        onPress={onClose}
                        className="w-full text-black pointer-events-auto cursor-not-allowed"
                        isDisabled
                      >
                        {props.t('btnLinkDisabled')}
                      </Button>
                    ) : (
                      <Link href={props.item.link} className="rounded-xl" target="_blank">
                        <Button color="primary" onPress={onClose} className="w-full text-black">
                          {props.t('btnLink')}
                        </Button>
                      </Link>
                    )}
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
