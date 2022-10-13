import { useEffect } from 'react';
import Head from 'next/head';

import amplitude from 'shared/lib/amplitude';
import { useCurrentUser } from 'shared/hooks';
import TagManager from 'react-gtm-module';

function AppHead() {
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N2FPHBV' });
  }, []);

  useEffect(() => {
    // Only run Amplitude Analytics in production
    if (process.env.NODE_ENV !== 'production') return null;

    // NEXT_PUBLIC_AMPLITUDE_KEY  needs to be set in the .env
    if (!process.env.NEXT_PUBLIC_AMPLITUDE_KEY) {
      console.warn(
        'Amplitude Analytics tracking code is required to initialize Amplitude Analytics'
      );
      return null;
    }

    return amplitude.init(currentUser);
  }, [currentUser]);

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Chase Oaks Anywhere</title>
    </Head>
  );
}

export default AppHead;

<script>;</script>;
