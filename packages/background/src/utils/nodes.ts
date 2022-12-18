const BLOCK_WALLET_DOMAIN = '.tresleches.finance';

export const isABlockWalletNode = (rpcUrl: string): boolean => {
    return rpcUrl.endsWith(BLOCK_WALLET_DOMAIN);
};

export const customHeadersForBlockWalletNode = { wallet: 'CakeWallet' };
