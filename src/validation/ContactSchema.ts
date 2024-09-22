import type { useTranslations } from 'next-intl';
import type { ZodSchema } from 'zod';
import { z } from 'zod';

const ContactSchema = (t: ReturnType<typeof useTranslations<'Contact'>>): ZodSchema => {
  console.log(t);
  const schema = z.object({
    from_name: z
      .string()
      .min(1, 'Обязательное поле')
      .refine(
        (value) => value.match(/^[a-zA-Zа-яА-ЯёЁ\s]+$/),
        () => ({ message: 'No numbers' }),
      ),
    from_company: z.string().min(1, 'Обязательное поле'),
    from_email: z.string().min(1, 'Обязательное поле').email('Valid email'),
    message: z.string().min(1, 'Сообщение не может быть пустым'),
    to__name: z.string(),
    // method: z.string().min(1, t('errors.required')),
    // endpoint: z.string().min(1, t('errors.endpointMin')).url(t('errors.endpointURL')),
    // headers: z.array(
    //   z.object({ key: z.string().min(1, t('errors.required')), value: z.string().min(1, t('errors.required')) }),
    // ),
    // variables: z.array(
    //   z.object({ key: z.string().min(1, t('errors.required')), value: z.string().min(1, t('errors.required')) }),
    // ),
    // bodyJSON: z.string().refine(
    //   (value) => codeMirrorParser(value),
    //   (value) => ({ message: `"${errorCatcher(value)}"` }),
    // ),
    // bodyText: z.string(),
  });

  return schema;
};

export default ContactSchema;
