import SEO from '@/components/seo'
import Wrapper from '@/components/wrapper'
import type { NextPage } from 'next'
import * as React from 'react'
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Home: NextPage = () => {
  const router = useRouter();
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
        variant="h4"
        textAlign="center"
        sx={{ mt: 4 }}
        gutterBottom
      >{`Hi, I'm Luccin Masirika 👋 `}</Typography>
      <Typography textAlign="center" color="text.secondary">
        Full Stack JavaScript/TypeScript Developer with 4+ years of experience
        in React.js/Next.js, Node.js/NestJs
      </Typography>
      <Stack direction="row" sx={{ justifyContent: "center", width: 1 }}>
        <ButtonGroup
          size="small"
          aria-label="small button group"
          color="secondary"
        >
          <Button
            onClick={() =>
              router.push("https://www.linkedin.com/in/luccin-masirika")
            }
            key="linkedin"
          >
            My LinkedIn
          </Button>
          <Button
            key="github"
            onClick={() => router.push("https://github.com/luccin243")}
          >
            My GitHub
          </Button>
        </ButtonGroup>
      </Stack>
    </Wrapper>
  );
};

export default Home
