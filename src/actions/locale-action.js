'use server';

import { cookies, headers } from 'next/headers';

import { COOKIE_NAME, defaultLocale, languages } from '@/constants/enum';

export async function getUserLocale() {
  const cookieValue = (await cookies()).get(COOKIE_NAME)?.value;
  if (cookieValue) {
    return cookieValue;
  }

  const acceptLanguage = (await headers()).get('accept-language');
  if (acceptLanguage) {
    const locale = acceptLanguage.split(';')[0].split(',')[0];
    return languages.has(locale) ? locale : defaultLocale;
  }

  return defaultLocale;
}

export async function setUserLocale(locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
