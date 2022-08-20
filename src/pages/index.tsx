import SEO from '@/components/seo'
import Wrapper from '@/components/wrapper'
import type { NextPage } from 'next'
import * as React from 'react'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

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
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ mt: 4 }}
        gutterBottom
      >{`Hi, I'm Luccin Maisrika 👋 `}</Typography>
      <Typography textAlign="center" color="text.secondary">
        Full Stack JavaScript/TypeScript Developer with 4+ years of experience
        in React.js/Next.js, Node.js/NestJs
      </Typography>
      <Link href="https://www.linkedin.com/in/luccin-masirika">
        My linkedin
      </Link>
      <Link href="https://github.com/luccin243">My Github</Link>
    </Wrapper>
  );
};

export default Home
