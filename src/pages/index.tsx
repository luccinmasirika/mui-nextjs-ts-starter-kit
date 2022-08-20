import SEO from '@/components/seo'
import Wrapper from '@/components/wrapper'
import type { NextPage } from 'next'
import * as React from 'react'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO
        title="Luccin Masirika"
        description="MUI NextJs with TypeScript Starter Kit"
        name="MUI NextJs with TypeScript Starter Kit"
        logo="/vercel.svg"
        favicon="/favicon.ico"
        image="/vercel.svg"
        phone="00000000"
        GA_MEASUREMENT_ID="0000000000"
      />
      <h3>Hi, I'm Luccin Maisrika 👋 </h3>
      <p>Welcome 🤗 to my portfolio</p>
    </Wrapper>
  )
}

export default Home
