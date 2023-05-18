/* eslint-disable */
/* prettier-ignore */
import * as Types from '/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAllDoctorsQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']>;
  before?: Types.InputMaybe<Types.Scalars['String']>;
  filter?: Types.InputMaybe<Types.DoctorFilterInput>;
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  last?: Types.InputMaybe<Types.Scalars['Int']>;
  sortBy?: Types.InputMaybe<Types.DoctorOrder>;
}>;


export type GetAllDoctorsQuery = { __typename?: 'Query', doctors?: { __typename?: 'DoctorCountableConnection', totalCount?: number | null, edges: Array<{ __typename?: 'DoctorCountableEdge', node: { __typename?: 'Doctor', id: string, availabilityStatus: Types.DoctorAvailabilityStatusEnum, bio?: string | null, languages?: any | null, yearsOfExperience: number, vendor: { __typename?: 'Vendor', id: string, name: string } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };


export const GetAllDoctorsDocument = gql`
    query getAllDoctors($after: String, $before: String, $filter: DoctorFilterInput, $first: Int, $last: Int, $sortBy: DoctorOrder) {
  doctors(
    after: $after
    before: $before
    filter: $filter
    first: $first
    last: $last
    sortBy: $sortBy
  ) {
    edges {
      node {
        id
        vendor {
          id
          name
        }
        availabilityStatus
        bio
        languages
        bio
        yearsOfExperience
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
  }
}
    `;

/**
 * __useGetAllDoctorsQuery__
 *
 * To run a query within a React component, call `useGetAllDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDoctorsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetAllDoctorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>(GetAllDoctorsDocument, options);
      }
export function useGetAllDoctorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>(GetAllDoctorsDocument, options);
        }
export type GetAllDoctorsQueryHookResult = ReturnType<typeof useGetAllDoctorsQuery>;
export type GetAllDoctorsLazyQueryHookResult = ReturnType<typeof useGetAllDoctorsLazyQuery>;
export type GetAllDoctorsQueryResult = Apollo.QueryResult<GetAllDoctorsQuery, GetAllDoctorsQueryVariables>;