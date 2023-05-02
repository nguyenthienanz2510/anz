type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Post extends Base {
  author: Author
  body: Block[]
  categories: Category[]
  mainImage: Image
  slug: Slug
  title: string
  description: string
}

interface Author extends Base {
  bio: Block[]
  image: Image
  name: string
  slug: Slug
}

interface Image {
  _type: 'image'
  assets: Reference
}

interface Reference {
  _ref: string
  _type: 'reference'
}

interface Slug {
  _type: 'slug'
  current: string
}

interface Block {
  _key: string
  _type: 'block'
  children: Span[]
  markDefs: any[]
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Span {
  _key: string
  _type: 'span'
  marks: string[]
  text: string
}

interface Category extends Base {
  description: string
  title: string
}

interface MainImage {
  _type: 'image'
  asset: 'reference'
}

interface Title {
  _type: 'string'
  current: string
}

interface PortfolioSocial extends Base {
  name: string
  url: 'url'
}

interface Portfolio extends Base {
  name: string
  avatar: Image
  aboutMeImage: Image
  slogan: string[]
  backgroundInformation: string
  phoneNumber: string
  email: string
  address: string
  socials: PortfolioSocial[]
}

interface PortfolioSkill extends Base {
  title: string
  image?: Image
  summary?: string
  progress?: number
  detail?: string[]
  order?: number
}

interface PortfolioExperience extends Base {
  jobTitle: string
  companyImage?: Image
  companyName?: string
  summary?: string
  dateStarted?: string
  dateEnded?: string
  isCurrentWorkingHere?: boolean
  technologies: PortfolioSkill[]
  description: string[]
}

interface PortfolioProject extends Base {
  title: string
  projectImage?: string
  summary?: string
  technologies?: PortfolioSkill[]
  detail?: string[]
  linkSource?: string
  linkToBuild?: string
  order?: number
}
