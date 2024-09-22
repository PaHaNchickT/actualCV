'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Spinner, Textarea } from '@nextui-org/react';
import type { useTranslations } from 'next-intl';
import { useState, type FormEvent, type ReactNode } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import type { TContactForm } from '@/types/types';
import ContactSchema from '@/validation/ContactSchema';

function ContactForm(props: { t: ReturnType<typeof useTranslations<'Contact'>> }): ReactNode {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>({
    mode: 'onChange',
    resolver: zodResolver(ContactSchema(props.t)),
  });
  const [sending, setSending] = useState(false);

  const toastStyler = (color: string): object => {
    return {
      style: {
        border: `1px solid ${color}`,
        padding: '16px',
        color: 'white',
        top: '100px',
        backgroundColor: '#111111',
        textAlign: 'center',
        gap: '10px',
      },
      iconTheme: {
        primary: color,
        secondary: '#FFFAEE',
      },
    };
  };

  const submit = async (data: TContactForm, event: FormEvent): Promise<void> => {
    setSending(true);

    emailjs
      .sendForm('service_0hrkkvh', 'template_onpkbb5', event.target as HTMLFormElement, {
        publicKey: 'xVpyZi5OQr6MxzU7z',
      })
      .then(() => {
        reset();
        toast.success('Letter sent successfully!\nI will contact you shortly', toastStyler('#59D22C'));
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Something went wrong!\nTry again later', toastStyler('#E8314E'));
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="flex flex-col items-center py-5 px-2 gap-2 bg-[#18181B] rounded-3xl transition-all duration-300">
      <div>
        <Toaster position="bottom-right" />
      </div>
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
          isDisabled={sending}
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
              isDisabled={sending}
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
              isDisabled={sending}
            />
          </div>
        </div>
        <Textarea
          {...register('message')}
          label="Message"
          placeholder="Type here..."
          className="w-full text-center h-[100px]"
          isInvalid={Boolean(errors.message)}
          errorMessage={errors.message?.message}
          isDisabled={sending}
        />
        <div className="pb-2">
          <Input type="hidden" value="PaHaNchick" {...register('to_name')} />
          {sending ? (
            <Spinner color="warning" size="lg" className="h-[56px]" />
          ) : (
            <Button
              size="lg"
              type="submit"
              color={(Object.keys(errors).length && 'danger') || 'primary'}
              isDisabled={Boolean(Object.keys(errors).length)}
              className="h-14 text-background"
            >
              Send
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
