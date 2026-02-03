import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
import { deskTool } from "sanity/desk";
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'vetola',

  projectId: 'fix2fhcj',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
