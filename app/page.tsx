import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Mint NFT on OpenSea!',
      target: 'https://opensea.io/collection/prosocial-heroes-series-1-1',
    },
    {
      action: 'link',
      label: 'Mint NFT on Hypersub!',
      target: 'https://hypersub.withfabric.xyz/collection/prosocial-heroes-c16v7c71nlz4',
    },
    // {
    //   action: 'tx',
    //   label: 'Send Base Sepolia',
    //   target: `${NEXT_PUBLIC_URL}/api/send-ether`,
    // }
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/prosocialise.jpg`,
  },
  // input: {
  //   text: 'Tell me a story',
  // },
  // postUrl: `${NEXT_PUBLIC_URL}/api/frame`
});

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title: 'https://prosocialise.org/',
  description: 'LFG',
  openGraph: {
    title: 'https://prosocialise.org/',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/prosocialise.jpg`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': '2024-02-01',
  },
};

export default function Page() {
  return (
    <>
      <h1>Prosocialise Foundation</h1>
    </>
  );
}
