// @flow

import { useQuery } from 'react-query'
import { getAccessToken } from '../api'

export function useAccessToken() {
  return useQuery(['accessToken'], () => getAccessToken(), {
    staleTime: 1800000,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
