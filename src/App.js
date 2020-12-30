import { QueryClient, QueryClientProvider } from 'react-query'

import Dashboard from './Dashboard'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <header className="App-header" />
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </div>
  )
}

export default App
