import { AbstractConnector } from '@web3-react/abstract-connector'

export interface Web3ReactManagerFunctions {
  activate: (connector: AbstractConnector, onError?: (error: Error) => void, throwErrors?: boolean) => Promise<void>
  setError: (error: Error) => void
  deactivate: () => void
}

export interface Web3ReactManagerReturn extends Web3ReactManagerFunctions {
  connector?: AbstractConnector
  provider?: any
  chainId?: number
  account?: null | string

  error?: Error
  changeAccountIndex: (accountIndex: number) => Promise<void>
}

export interface Web3ReactContextInterface<T = any> extends Web3ReactManagerFunctions {
  connector?: AbstractConnector
  library?: T
  chainId?: number
  account?: null | string

  active: boolean
  error?: Error
  changeAccountIndex: (accountIndex: number) => Promise<void>
}
