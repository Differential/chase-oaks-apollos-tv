import { useEffect } from 'react';
import Head from 'next/head';

import amplitude from 'shared/lib/amplitude';
import gtag from 'shared/lib/gtag';
import { useCurrentUser } from 'shared/hooks';
import { useNavigation } from 'shared/router';

function AppHead() {
  const { currentUser } = useCurrentUser();
  const router = useNavigation();

  useEffect(() => {
    let gtagValid = true;

    // Do not run Google Analytics unless traffic is coming from a browser
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    // Only run Google Analytics and Facebook Pixels in production
    if (process.env.NODE_ENV !== 'production') return null;

    // NEXT_PUBLIC_GA_CODE  needs to be set in the .env
    if (!process.env.NEXT_PUBLIC_GA_CODE) {
      console.warn(
        'GoogleAnalytics tracking code is required to initialize GoogleAnalytics'
      );

      gtagValid = false;
    }

    if (!window.gtag) {
      console.warn(
        'GoogleAnalytics should be loaded manually before gtag is called.'
      );

      gtagValid = false;
    }

    const handleRouteChange = (url) => {
      if (gtagValid) {
        gtag.pageview(url);
      }
    };

    if (!gtagValid) return null;

    if (gtagValid) {
      gtag.pageview();
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
      {/* Global site tag (gtag.js) - Google Analytics */}
      {process.env.NODE_ENV === 'production' &&
      process.env.NEXT_PUBLIC_GA_CODE ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_CODE}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_CODE}', {
      page_path: window.location.pathname,
    });
  `,
            }}
          />
        </>
      ) : null}
    </Head>
  );
}

export default AppHead;
