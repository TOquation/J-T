import { Metadata } from 'next';

import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const siteConfig = {
  title: 'Vefristay',
  description: `Vefristay Web Application`,
  logo: '/logo.svg',
  icon: '/logo.svg',
  apiURL: process.env.NEXT_PUBLIC_API_URL,
  primaryColor: '#FF5A60',
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Vefristay` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Vefristay` : title,
      description,
      url: 'https://isomorphic-furyroad.vercel.app',
      siteName: 'Vefristay', // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: 'https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/itemdep/isobanner.png',
        width: 1200,
        height: 630,
      },
      locale: 'en_NG',
      type: 'website',
    },
  };
};
