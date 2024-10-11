const languageMap: Record<string, string> = {
  en: 'English',
  fr: 'French'
}
export const sortedLocales = Object.keys(languageMap).sort((a, b) => {
  return languageMap[a].localeCompare(languageMap[b])
})
