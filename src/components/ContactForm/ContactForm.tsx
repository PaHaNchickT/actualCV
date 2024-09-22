'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { useForm } from 'react-hook-form';

import type { TContactForm } from '@/types/types';

function ContactForm(props: { t: ReturnType<typeof useTranslations<'Contact'>> }): ReactNode {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>({
    mode: 'onChange',
    // resolver: zodResolver(RestSchema(t)),
  });

  const submit = async (data: TContactForm): Promise<void> => {
    console.log(data, props.t('title'));
  };

  return (
    <div className="flex flex-col items-center pt-5 px-2 gap-2">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col items-center gap-5 w-full min-w-[400px] sm:w-[70%]"
      >
        <Input
          type="text"
          label="How can I address you?"
          {...register('name')}
          className="w-full text-center"
          isInvalid={Boolean(errors.name)}
          errorMessage={errors.name?.message}
        />
        <div className="flex justify-between w-full gap-5">
          <div className="w-full">
            <Input
              type="text"
              label="E-mail"
              {...register('email')}
              className="w-full text-center"
              isInvalid={Boolean(errors.email)}
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="w-full">
            <Input
              type="text"
              label="Company"
              {...register('company')}
              className="w-full text-center"
              isInvalid={Boolean(errors.company)}
              errorMessage={errors.company?.message}
            />
          </div>
        </div>
        <Textarea
          {...register('message')}
          label="Message"
          placeholder="Type here..."
          className="w-full h-[100px]"
          isInvalid={Boolean(errors.message)}
          errorMessage={errors.message?.message}
        />
        <div className="p-5">
          <Button
            size="lg"
            type="submit"
            color={(Object.keys(errors).length && 'danger') || 'primary'}
            isDisabled={Boolean(Object.keys(errors).length)}
            className="h-14"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
