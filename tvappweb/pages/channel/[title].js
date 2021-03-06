import React from 'react';

import { ContentFeedProvider } from 'shared/providers';
import { ContentList } from 'shared/components';
import { Box } from 'shared/ui-kit';

import { useNavigation } from 'shared/router';

function getItemId(slug) {
  if (slug) {
    const id = slug.split('-').pop();
    return `ContentChannel:${id}`;
  }

  return null;
}

const ContentFeed = () => {
  const router = useNavigation();
  const { title } = router.query;

  const itemId = getItemId(title);

  const options = {
    variables: { itemId },
  };

  return (
    <Box py="xxl" flexGrow={1}>
      <ContentFeedProvider Component={ContentList} options={options} />
    </Box>
  );
};

export default ContentFeed;
