import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/blocAstroJs2/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/blocAstroJs2/about',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/blocAstroJs2/archive',
  },
}
