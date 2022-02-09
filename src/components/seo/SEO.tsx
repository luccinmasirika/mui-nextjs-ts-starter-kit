import { BASE_URL } from '@/config/url';
import { CorporateContactJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React from 'react';

interface IProps {
  title: string;
  description: string;
  name: string;
  phone: string;
  image: string;
  logo: string;
  favicon: string;
  GA_MEASUREMENT_ID: string;
  children?: string;
}

const SEO: React.FC<IProps> = ({
  title,
  description,
  image,
  name,
  logo,
  phone,
  favicon,
  children,
  GA_MEASUREMENT_ID,
}) => {
  const { asPath, locale } = useRouter();
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={BASE_URL + asPath + locale}
        openGraph={{
          url: BASE_URL + asPath,
          title: title,
          description: description,
          images: [{ url: image }],
          site_name: name,
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: favicon,
          },
        ]}
        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Luccin Masirika',
          },
          {
            name: 'application-name',
            content: name,
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1',
          },
          {
            name: 'viewport',
            content: 'initial-scale=1, width=device-width',
          },
        ]}
      />
      <CorporateContactJsonLd
        url={BASE_URL + asPath + locale}
        logo={logo}
        contactPoint={[
          {
            telephone: phone,
            contactType: 'customer service',
            availableLanguage: ['English', 'French'],
          },
        ]}
      />
      {children}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
};

export default SEO;
