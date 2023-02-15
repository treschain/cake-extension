import { BigNumber } from "ethers"

export const SEND_GAS_COST = BigNumber.from("0x5208") // Hex for 21000, cost of a simple send.
export const APPROVE_GAS_COST = BigNumber.from("0xcb34") // Hex for 52020, default cost of approve.

/**
 * Decimal places to default in case an error looking up for them occurred
 */
export const DEFAULT_DECIMALS = 18

/**
 * Percentage of the estimated gas to define a lower and higher threshold to calculate a gas warning
 */
export const DEFAULT_TRANSACTION_GAS_PERCENTAGE_THRESHOLD = 20

/**
 * Time before transitioning to next DApp request
 */
export const DAPP_FEEDBACK_WINDOW_TIMEOUT = 3000

/**
 * Timeout before cancelling a signing request
 */
export const SIGN_TRANSACTION_TIMEOUT = 180000

/**
 * Default swap fee for users without fee discount
 */
export const BASE_SWAP_FEE = 0.5

/**
 * Default bridge fee for users without fee discount
 */
export const BASE_BRIDGE_FEE = 0.005

/**
 * Time ellapsed before refreshing the swap quote
 */
export const SWAP_QUOTE_REFRESH_TIMEOUT = 1000 * 15

export const LINKS = {
    TELEGRAM: "https://t.me/treslechesfinance",
    GITHUB: "https://github.com/treslecheschain/",
    TWITTER: "https://twitter.com/treslecheschain",
    WEBSITE_BUG_REPORT: "https://7eesyr6gt9t.typeform.com/to/qMOlgG90",
    GITHUB_BUG_REPORT:
        "https://github.com/treslecheschain/cake-extension/",
    ARTICLES: {
        HD_PATH:
            "https://docs.treschain.io/our-wallet/wallet/extension/what-is-an-hd-path",
        LOCK_TIMEOUT:
            "https://docs.treschain.io/our-wallet/wallet/extension/what-is-lock-timeout",
        CUSTOM_NETWORK_RISKS:
            "https://docs.treschain.io/our-wallet/wallet/extension/how-to-add-a-custom-network-rpc",
        MALICIOUS_DAPPS:
            "https://docs.treschain.io/our-wallet/wallet/extension/tips-to-stay-safe-when-connecting-to-dapps",
        BRIDGES: "https://docs.treschain.io/our-wallet/wallet/extension/how-to-use-blockwallet-bridges",
        CHANGELOG: "https://bit.ly/bw-release"
    },
}
