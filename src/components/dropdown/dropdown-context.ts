import { createContext } from 'react'

const detauls = {
  handleToggle: () => {}
}

const Context: React.Context<{ handleToggle(): void }> = createContext(detauls)

export const { Provider } = Context

export default Context
