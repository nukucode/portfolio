// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true 
})