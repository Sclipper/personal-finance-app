// @flow

import { useQuery } from 'react-query'
import { getUserData } from 'services/api'

export function useUserData() {
  return useQuery(['userData'], () => getUserData(), {
    refetchOnWindowFocus: false,
    retry: false,
  })
}
