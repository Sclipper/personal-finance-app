import * as React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_UPDATE_ASSETS':
      return {
        ...state,
        assets: {
          ...state.assets,
          [action.key]: parseInt(action.data),
        },
      }
    case 'SET_UPDATE_LIABILITIES':
      return {
        ...state,
        liabilities: {
          ...state.liabilities,
          [action.key]: parseInt(action.data),
        },
      }
    default:
      return state
  }
}

const initialState = {
  assets: {
    checkingAccount: 0,
    savingsAccount: 0,
    securities: 0,
    retirementFunds: 0,
    realEstate: 0,
    jewels: 0,
    otherAssets: 0,
  },
  liabilities: {
    creditCard: 0,
    notesPayable: 0,
    taxes: 0,
    house: 0,
    otherMortgages: 0,
    otherLiabilities: 0,
  },
}

const Context = React.createContext()

export const PersonalFinanceProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
  })
  const value = {
    assets: state.assets,
    setUpdateAssets: (key, data) => {
      dispatch({ type: 'SET_UPDATE_ASSETS', data, key })
    },
    liabilities: state.liabilities,
    setUpdateLiabilities: (key, data) => {
      dispatch({ type: 'SET_UPDATE_LIABILITIES', data, key })
    },
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const usePersonalFinanceContext = () => {
  const ctx = React.useContext(Context)

  if (ctx != null) {
    return ctx
  }

  throw new Error(
    '`usePersonalFinance` must be used inside of a `PersonalFinanceProvider`',
  )
}
