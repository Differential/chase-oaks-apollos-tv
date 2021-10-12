import { useEffect } from 'react';
import Head from 'next/head';

import amplitude from 'shared/lib/amplitude';
import { useCurrentUser } from 'shared/hooks';

import { useIntercom } from 'react-use-intercom';

function AppHead() {
  const { currentUser } = useCurrentUser();

  const fullName =
    currentUser &&
    `${currentUser?.profile?.firstName} ${currentUser?.profile?.lastName}`;

  const intercom = useIntercom();

  useEffect(() => {
    if (fullName || currentUser?.profile?.email) {
      window.Intercom('update', {
        name: fullName, // Full name
        email: currentUser?.profile?.email, // Email address
        // created_at: currentUser.created_at, // Signup date as a Unix timestamp
      });
    }

    intercom.update({
      name: fullName,
      email: currentUser?.profile?.email,
    });

    return null;
  }, [fullName, currentUser?.profile?.email]);

  useEffect(() => {
    // Only run Amplitude Analytics in production
    // if (!process.env.NODE_ENV === 'production') return null;

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
