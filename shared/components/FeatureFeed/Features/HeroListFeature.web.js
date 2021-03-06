import { withTheme } from 'styled-components';

import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { apollosPropTypes } from 'shared/lib';
import { Box, Button, H1, H2, H3, H4, systemPropTypes } from 'shared/ui-kit';

function HeroListFeature(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  // Responsive values
  const outerPadding = responsive({ _: 'base', lg: 'xl' });
  const HeadingComponent = responsive({ _: H3, md: H2, lg: H1 });
  const SummaryComponent = responsive({ _: H4, md: H3 });

  // Event Handlers
  const handleWatchNowPress = () => {
    router.push(getURLFromType(props.feature.heroCard.relatedNode));
  };

  const handlePrimaryActionClick = () => {
    router.push(
      getURLFromType(
        props.feature.primaryAction.relatedNode,
        props.feature.primaryAction.title
      )
    );
  };

  return (
    <Box mb={props.feature.actions?.length ? 'xl' : 'base'} {...props}>
      {/* Background Image */}
      <Box position="absolute" top="0" left="0" right="0">
        <Box
          backgroundImage={`linear-gradient(
        4deg,
        ${props.theme.colors.fill.paper} 15%,
        ${props.theme.colors.material.thick} 20%,
        ${props.theme.colors.material.thin} 45%,
        transparent
      ),url(${props.feature.heroCard.coverImage?.sources[0]?.uri})`}
          backgroundPosition="top center"
          backgroundSize="cover"
          width="100%"
          height={responsive({
            _: '80vw',
            lg: '56.25vw', // 16:9
          })}
          maxHeight="66vh"
        />
      </Box>

      {/* Content */}
      <Box pt={responsive({ sm: '50vw', md: '33vw', xxl: '23vw' })}>
        {/* Masthead */}
        <Box
          px={outerPadding}
          mb={responsive({ _: 'l', lg: 'xl', xxl: 'xxl' })}
        >
          <HeadingComponent>{props.feature.heroCard.title}</HeadingComponent>
          <SummaryComponent fontWeight="400">
            {props.feature.heroCard.summary}
          </SummaryComponent>

          {/* CTAs */}
          <Box alignSelf="flex-start" flexDirection="row" mt="base">
            <Button
              title="Watch now"
              onPress={handleWatchNowPress}
              variant={responsive({ _: 'micro', lg: undefined })}
              mr={responsive({ _: 'xs', lg: 's' })}
            />
            {props.feature.primaryAction ? (
              <Button
                title={props.feature.primaryAction.title}
                onPress={handlePrimaryActionClick}
                type="secondary"
                variant={responsive({ _: 'micro', lg: undefined })}
              />
            ) : null}
          </Box>
        </Box>

        {/* Actions / Cards list */}
        {props.feature.actions?.length ? (
          <Box>
            {/* List Header */}
            {props.feature.title || props.feature.subtitle ? (
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-end"
                mb="s"
                px={outerPadding}
              >
                <Box>
                  <H4 color="text.secondary">{props.feature.subtitle}</H4>
                  <H3>{props.feature.title}</H3>
                </Box>
              </Box>
            ) : null}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HeroListFeature,
};

export default withTheme(HeroListFeature);
