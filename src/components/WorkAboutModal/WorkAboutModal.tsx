'use client';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { type ReactElement } from 'react';

import { PORTFOLIO_STACK, STACK_COLORS } from '@/constants/work-constants';

const WorkAboutModal = (props: {
  isOpen: boolean;
  onOpenChange: () => void;
  t: ReturnType<typeof useTranslations<'Works'>>;
}): ReactElement => {
  return (
    <>
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange} size="2xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-primary">{props.t('items.7.subtitle')}</ModalHeader>
              <ModalBody>
                <section className="flex flex-col justify-between gap-5">
                  <p className="text-justify">{props.t('items.7.descrMain')}</p>
                  <p className="text-justify">{props.t('items.7.descrSub')}</p>
                  <div className="flex flex-col">
                    <p className="text-primary">{props.t('stackLabel')}</p>
                    <div className="flex flex-wrap gap-2">
                      {PORTFOLIO_STACK.map((lang) => (
                        <p key={lang.name} className={`text-xs [text-shadow:_0_0_1px_white] ${STACK_COLORS[lang.key]}`}>
                          {lang.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkAboutModal;
