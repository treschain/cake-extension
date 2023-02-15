const BLOCK_WALLET_DOMAIN = '.treschain.com';

export const isABlockWalletNode = (rpcUrl: string): boolean => {
    return rpcUrl.endsWith(BLOCK_WALLET_DOMAIN);
};

export const customHeadersForBlockWalletNode = { wallet: 'TresWallet' };
