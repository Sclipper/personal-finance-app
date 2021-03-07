import callAPI from '../callAPI'

const saveStatementToDatabase = (data) => {
  const assets = {
    cash_checking_account: data.assets.checkingAccount,
    cash_savings_account: data.assets.savingsAccount,
    securities: data.assets.securities,
    retirement_funds: data.assets.retirementFunds,
    real_estate: data.assets.realEstate,
    valuables: data.assets.jewels,
    other_assets: data.assets.otherAssets,
  }
  const liabilities = {
    debt: data.liabilities.creditCard,
    notes_payable: data.liabilities.notesPayable,
    taxes_payable: data.liabilities.taxes,
    real_estate_mortgages: data.liabilities.realEstateMortgages,
    other_mortgages: data.liabilities.otherMortgages,
    other_liabilities: data.liabilities.otherLiabilities,
  }
  return callAPI('/user/save-statement', {
    method: 'post',
    data: {
      assets,
      liabilities,
    },
  })
}

export default saveStatementToDatabase
