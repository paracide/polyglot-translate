export const SOCIAL_MEDIA = {
  github: process.env.LINK_GITHUB || 'https://github.com/paracide/polyglot-translate',
  instagram: process.env.LINK_LINKEDIN || 'https://www.linkedin.com/in/yongdong-xiang-2b61a2240/',
  linkedin: process.env.LINK_INSTAGRAM || 'https://www.instagram.com/paracidex',
}

export const API_SERVICE = {
  google: {
    url: 'https://clients5.google.com/translate_a/t',
  },
  deepl: {
    url: ''
  }
}

export const SYS_SERVICE = {
  google: {
    gtmId: process.env.NEXT_PUBLIC_GOOGLE_GTM_ID || '',
    gaId: process.env.NEXT_PUBLIC_GOOGLE_GA_ID || '',
    adSenseAccount: process.env.NEXT_PUBLIC_GOOGLE_AD_SENSE_ACCOUNT || ''
  }
}
