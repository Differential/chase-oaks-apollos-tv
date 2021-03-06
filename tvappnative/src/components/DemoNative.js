import React from 'react';
import { Box, H3 } from 'shared/ui-kit';

export default function DemoNative() {
  return (
    <H3>
      Welcome to the{' '}
      <Box as="text" color="base.secondary">
        Chase Oaks TV
      </Box>{' '}
      TV app.
    </H3>
  );
}
