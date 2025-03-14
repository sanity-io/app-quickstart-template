import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  __experimental_coreAppConfiguration: {
    organizationId: process.env.SANITY_ORG_ID,
    appLocation: './src/App.tsx',
  },
})
