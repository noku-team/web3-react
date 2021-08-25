import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import Web3ProviderEngine from 'web3-provider-engine';
import { LedgerSubprovider } from "0x-tools/subproviders/lib/src";
interface LedgerConnectorArguments {
    chainId: number;
    url: string;
    pollingInterval?: number;
    requestTimeoutMs?: number;
    accountFetchingConfigs?: any;
    baseDerivationPath?: string;
}
export declare class LedgerConnector extends AbstractConnector {
    private readonly chainId;
    private readonly url;
    private readonly pollingInterval?;
    private readonly requestTimeoutMs?;
    private readonly accountFetchingConfigs?;
    private readonly baseDerivationPath?;
    private provider;
    constructor({ chainId, url, pollingInterval, requestTimeoutMs, accountFetchingConfigs, baseDerivationPath }: LedgerConnectorArguments);
    activate(): Promise<ConnectorUpdate>;
    getProvider(): Promise<Web3ProviderEngine>;
    getChainId(): Promise<number>;
    getAccount(accountIndex?: number): Promise<null | string>;
    getLedgerSubprovider(): LedgerSubprovider;
    deactivate(): void;
}
export {};
