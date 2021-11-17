import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_FEED = gql`
  query getContentFeed($itemId: ID!, $after: String, $first: Int) {
    node(id: $itemId) {
      ... on ContentChannel {
        id
        childContentItemsConnection(after: $after, first: $first) {
          totalCount
          pageInfo {
            endCursor
          }
          edges {
            node {
              id
              coverImage {
                sources {
                  uri
                }
              }
              title
              summary
              images {
                sources {
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;

function useContentFeed(options = {}) {
  const query = useQuery(GET_CONTENT_FEED, {
    ...options,
  });

  return {
    content: query?.data?.node?.childContentItemsConnection || [],
    ...query,
  };
}

export default useContentFeed;
