import SEO from '@/components/seo'
import Wrapper from '@/components/wrapper'
import 'dayjs/locale/fr'
import type { NextPage } from 'next'
import * as React from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

const Starter = dynamic(import('@/components/starter'))

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
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
      <h3 style={{textAlign: "center", margin-top:"10px"}}>Hi, I'm Luccin Maisrika 👋 </h3>
      <P style={{textAlign: "center", margin-top:"10px"}}>Welcome 🤗 to my portfolio</p>
    </Wrapper>
  )
}

export default Home
