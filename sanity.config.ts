import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/Studio/StudioNavbar'
import Logo from './components/Studio/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: "/studio",
  name: 'NGUYENTHIENANZ_Content_Studio',
  title: 'Content Studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },

  theme: myTheme,
})
