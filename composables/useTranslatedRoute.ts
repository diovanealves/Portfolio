type Translations = {
  en: string;
  "pt-br": string;
};

export function useTranslatedRoute(translations: Translations) {
  const { locale } = useI18n();

  const selectedRoute =
    locale.value === "en" ? translations.en : translations["pt-br"];

  if (!selectedRoute) {
    console.warn(`No route translation found for locale: ${locale.value}`);
    return `/${locale.value}`;
  }

  return `/${locale.value}/${selectedRoute}`;
}
