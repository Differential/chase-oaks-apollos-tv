import React from 'react';

import {
  BodyText,
  Box,
  Card,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LargeSystemText,
  SmallBodyText,
  SmallSystemText,
  SystemText,
} from 'shared/ui-kit';

function DemoTypography(props = {}) {
  return (
    <Box {...props}>
      <H1 mb="s">Typography</H1>

      <Card>
        <Box width="100%" flexDirection="row" justifyContent="space-between">
          <Box width="45%">
            <H3
              color="text.secondary"
              borderBottomWidth="1px"
              borderColor="text.secondary"
              pb="xxs"
              mb="xs"
            >
              Headings
            </H3>
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <H5>Heading 5</H5>
            <H6>Heading 6</H6>
          </Box>

          <Box width="25%">
            <H3
              color="text.secondary"
              borderBottomWidth="1px"
              borderColor="text.secondary"
              pb="xxs"
              mb="xs"
            >
              Body Text
            </H3>
            <BodyText>Body Text</BodyText>
            <BodyText fontWeight="bold">Body Text</BodyText>
            <SmallBodyText>Small Body Text</SmallBodyText>
            <SmallBodyText fontWeight="bold">Small Body Text</SmallBodyText>
          </Box>

          <Box width="25%">
            <H3
              color="text.secondary"
              borderBottomWidth="1px"
              borderColor="text.secondary"
              pb="xxs"
              mb="xs"
            >
              System
            </H3>
            <LargeSystemText>Large System Text</LargeSystemText>
            <LargeSystemText fontWeight="bold">
              Large System Text
            </LargeSystemText>
            <SystemText>System Text</SystemText>
            <SystemText fontWeight="bold">System Text</SystemText>
            <SmallSystemText>Small System Text</SmallSystemText>
            <SmallSystemText fontWeight="bold">
              Small System Text
            </SmallSystemText>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default DemoTypography;
