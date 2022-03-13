import SEO from '@/components/seo'
import Wrapper from '@/components/wrapper'
import type { NextPage } from 'next'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO
        title="MUI NextJs Starter"
        description="MUI NextJs with TypeScript Starter Kit"
        name="MUI NextJs with TypeScript Starter Kit"
        logo="/vercel.svg"
        favicon="/favicon.ico"
        image="/vercel.svg"
        phone="00000000"
        GA_MEASUREMENT_ID="0000000000"
      />
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: 1, height: '50vh' }}
      >
        <Typography variant="h1">404</Typography>
      </Stack>
    </Wrapper>
  )
}

export default Home
