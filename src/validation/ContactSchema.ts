import type { useTranslations } from 'next-intl';
import type { ZodSchema } from 'zod';
import { z } from 'zod';

const ContactSchema = (t: ReturnType<typeof useTranslations<'Contact'>>): ZodSchema => {
  const schema = z.object({
    from_name: z
      .string()
      .min(1, t('errors.required'))
      .refine(
        (value) => value.match(/^[a-zA-Zа-яА-ЯёЁ\s]+$/),
        () => ({ message: t('errors.name') }),
      ),
    from_company: z.string().min(1, t('errors.required')),
    from_email: z.string().min(1, t('errors.required')).email(t('errors.email')),
    message: z.string().min(1, t('errors.message')),
  });

  return schema;
};

export default ContactSchema;
