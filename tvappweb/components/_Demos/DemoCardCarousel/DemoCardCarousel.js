import React, { useEffect, useState } from 'react';

import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { Box, ContentItemCard, H1, H3, systemPropTypes } from 'shared/ui-kit';

import { CardCarousel } from 'tvappweb/components';
import DemoJumboCard from './DemoJumboCard';
import data from './mockData';

function DemoCardCarousel(props = {}) {
  // This `loaded` stuff is to avoid an elusive issue that only occurs
  // in this Demo context, where we load a bunch of pre-defined images
  // on initial page load. Some of the carousel image styles don't get
  // applied for some reason, but a re-render fixes it.
  // I suspect something with react-native-web and Next.js, but could be
  // a dev-environment only thing.
  const [loaded, setLoaded] = useState(false);
  const { responsive } = useBreakpoint();
  const responsiveVisibleCount = responsive({
    _: 1,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5,
  });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 0);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <Box {...props}>
      <H1 px="xl" mb="l">
        {`<CardCarousel>`}
      </H1>

      <Box mb="l">
        <H3 px="xl" mb="xxs">
          Long List
          <H3 color="text.tertiary" ml="xs">
            {data.length} items, 4 visible
          </H3>
        </H3>
        <CardCarousel
          data={data}
          renderItem={({ item, disabled }) => (
            <ContentItemCard
              image={item.coverImage}
              title={item.title}
              onPress={() => null}
              disabled={disabled}
            />
          )}
        />
      </Box>

      <Box mb="l">
        <H3 px="xl" mb="xxs">
          Long List, no `peek`
        </H3>
        <CardCarousel
          data={data}
          peek={false}
          renderItem={({ item, disabled }) => (
            <ContentItemCard
              image={item.coverImage}
              title={item.title}
              onPress={() => null}
              disabled={disabled}
            />
          )}
        />
      </Box>

      <Box mb="l">
        <H3 px="xl">
          Short List
          <H3 color="text.tertiary" ml="xs">
            3 items, 5 visible
          </H3>
        </H3>
        <CardCarousel
          data={data.slice(0, 3)}
          visibleCount={5}
          renderItem={({ item, disabled }) => (
            <ContentItemCard
              image={item.coverImage}
              title={item.title}
              onPress={() => null}
              disabled={disabled}
            />
          )}
        />
      </Box>

      <Box pt="xl" pb="l" mb="xl" bg="fill.screen">
        <H3 px="xl">
          Responsive `visibleCount` and overridden `gradientColor`
        </H3>
        <CardCarousel
          data={data}
          visibleCount={responsiveVisibleCount}
          gradientColor="fill.screen"
          renderItem={({ item, disabled }) => (
            <ContentItemCard
              image={item.coverImage}
              title={item.title}
              onPress={() => null}
              disabled={disabled}
            />
          )}
        />
      </Box>

      <Box mb="l">
        <H3 px="xl">
          Jumbo Carousel
          <H3 color="text.tertiary" ml="xs">
            4 items, 1 visible
          </H3>
        </H3>
        <CardCarousel
          data={data.slice(0, 4)}
          buttonsContainerBottomOffset={0}
          visibleCount={1}
          renderItem={DemoJumboCard}
        />
      </Box>
    </Box>
  );
}

DemoCardCarousel.propTypes = {
  ...systemPropTypes,
};

export default DemoCardCarousel;
