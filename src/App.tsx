import { useRouteElements } from './hooks/useRouteElements'

function App() {
  const useRoute = useRouteElements()
  return <>{useRoute}</>
}

export default App
