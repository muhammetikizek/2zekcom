import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  // Ensure that a valid locale is used
  const finalLocale = (routing.locales.includes(locale as any)
    ? locale
    : routing.defaultLocale) as string;

  return {
    locale: finalLocale,
    messages: (await import(`../messages/${finalLocale}.json`)).default
  };
});
