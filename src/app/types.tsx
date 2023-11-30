export interface IContact {
  id: string
  name: string
  organization: string
  position: string
  expertise: string
  phone: string
  phoneSecond: string
  email: string
  emailSecond: string
  source: string // keyof typeof sources
  comment: string
}