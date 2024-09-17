import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import deskStructure from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'german_cosmetics_aestethics',

  projectId: '1tgommzp',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }), // Updated to structureTool for v3

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
