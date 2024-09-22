'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { Button, Input, Textarea } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import type { FormEvent, ReactNode } from 'react';
import type { SubmitHandler } from 'react-hook-form';
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

  const submit = async (data: TContactForm, event: FormEvent): Promise<void> => {
    console.log(event, data, props.t('title'));

    emailjs
      .sendForm('service_0hrkkvh', 'template_onpkbb5', event.target as HTMLFormElement, {
        publicKey: 'xVpyZi5OQr6MxzU7z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="flex flex-col items-center pt-5 px-2 gap-2">
      <form
        onSubmit={handleSubmit(submit as SubmitHandler<TContactForm>)}
        className="flex flex-col items-center gap-5 w-full min-w-[400px] sm:w-[70%]"
      >
        <Input
          type="text"
          label="How can I address you?"
          {...register('from_name')}
          className="w-full text-center"
          isInvalid={Boolean(errors.from_name)}
          errorMessage={errors.from_name?.message}
        />
        <div className="flex justify-between w-full gap-5">
          <div className="w-full">
            <Input
              type="text"
              label="E-mail"
              {...register('from_email')}
              className="w-full text-center"
              isInvalid={Boolean(errors.from_email)}
              errorMessage={errors.from_email?.message}
            />
          </div>
          <div className="w-full">
            <Input
              type="text"
              label="Company"
              {...register('from_company')}
              className="w-full text-center"
              isInvalid={Boolean(errors.from_company)}
              errorMessage={errors.from_company?.message}
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
          <Input type="hidden" value="PaHaNchick" {...register('to__name')} />
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
