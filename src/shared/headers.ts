enum ParseAcceptLanguageResultType {
  Wildcard,
  Manual
}

type ParseAcceptLanguageResultLocale = {
  iso: string;
  weigth?: number;
};

type ParseAcceptLanguageResult = {
  type: ParseAcceptLanguageResultType;
  locales?: Array<ParseAcceptLanguageResultLocale>;
};

function parseAcceptLanguage(value: string): ParseAcceptLanguageResult {
  const trimmedValue = value.trim();

  if (trimmedValue === "*") {
    return {
      type: ParseAcceptLanguageResultType.Wildcard,
      locales: undefined
    };
  }

  const localeValues = trimmedValue.split(",");
  const locales = localeValues
    .map((localeValue): ParseAcceptLanguageResultLocale => {
      const localeValueSplit = localeValue.split(";");

      if (localeValueSplit.length === 1) {
        return {
          iso: localeValueSplit[0]!.trim()
        };
      }

      return {
        iso: localeValueSplit.at(0)!.trim(),
        weigth: Number.parseFloat(localeValueSplit.at(1)!.trim().slice(2))
      };
    })
    .sort((a, b) => {
      if (a.weigth === undefined) return -1;

      if (b.weigth === undefined) return 1;

      if (a.weigth === b.weigth) return 0;

      return a.weigth < b.weigth ? 1 : -1;
    });

  return {
    type: ParseAcceptLanguageResultType.Manual,
    locales
  };
}

export type { ParseAcceptLanguageResult, ParseAcceptLanguageResultLocale };

export { parseAcceptLanguage, ParseAcceptLanguageResultType };
