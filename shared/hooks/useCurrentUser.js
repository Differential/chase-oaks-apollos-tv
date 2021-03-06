import { gql } from '@apollo/client';

import { useAuthQuery } from 'shared/hooks';

export const GET_CURRENT_USER = gql`
  query {
    currentUser {
      id
      rock {
        authToken
      }
      profile {
        email
        firstName
        lastName
        photo {
          uri
        }
        campus {
          id
          name
        }
      }
    }
  }
`;

function useCurrentUser(options = {}) {
  const query = useAuthQuery(GET_CURRENT_USER, options);

  return {
    currentUser: query?.data?.currentUser || null,
    ...query,
  };
}

export default useCurrentUser;
