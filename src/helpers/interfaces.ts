export interface Lang {
  country: string
  image: string
}

export interface Translate {
  id: number
  language: string
  subtitle?: string
  buttons: {
    continue?: string
    apple?: string
    email?: string
    term?: string
    terms?: string
    restore?: string
  },
  features?: {
    title: string
    subtitle: string
  }
  other_texts?: {
    terms_title?: string
    cta_title?: string
    price1_title?: string
    price2_title?: string
    price3_title?: string
    receipt_explanation?: string
    cta_download?: string
  }
  answers?: string[]
  description: object
}

