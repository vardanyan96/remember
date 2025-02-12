export interface Lang {
  country: string
  image: string
}

export interface Translate {
  id: number
  language: string
  subtitle?: string
  buttons:{
    continue?:string
    apple?:string
    email?:string
    term?:string
    terms?:string
  }
  answers?:string[]
  description:object
}
