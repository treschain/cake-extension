import {
    ExchangeType,
    MetaType,
    TransactionCategories,
    TransactionStatus,
} from "../context/commTypes"
import { SwapParameters } from "@block-wallet/background/controllers/SwapController"
import { BigNumber } from "ethers"
import { formatUnits } from "ethers/lib/utils"
import { RichedTransactionMeta } from "./transactionUtils"

const ONEINCH_NATIVE_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

export const isSwapNativeTokenAddress = (address: string): boolean => {
    return address.toLowerCase() === ONEINCH_NATIVE_ADDRESS.toLowerCase()
}

/**
 * Calculates the exchange rate between two assets
 */
export const calcExchangeRate = (
    fromAmount: BigNumber,
    fromTokenDecimals: number,
    toAmount: BigNumber,
    toTokenDecimals: number
): number => {
    const plainRate =
        parseFloat(formatUnits(toAmount, toTokenDecimals)) /
        parseFloat(formatUnits(fromAmount, fromTokenDecimals))
    return parseFloat(plainRate.toFixed(fromTokenDecimals))
}

/**
 * Simulates a complete transaction object to display details
 */
export const populateExchangeTransaction = (
    swapParameters: SwapParameters
): RichedTransactionMeta => {
    return {
        id: "",
        status: TransactionStatus.UNAPPROVED,
        time: 1,
        blocksDropCount: 1,
        metaType: MetaType.REGULAR,
        loadingGasValues: false,
        transactionParams: {
            from: swapParameters.tx.from,
            to: swapParameters.tx.to,
        },
        transactionCategory: TransactionCategories.EXCHANGE,
        methodSignature: swapParameters.methodSignature,
        exchangeParams: {
            exchangeType: ExchangeType.SWAP_1INCH,
            fromToken: swapParameters.fromToken,
            toToken: swapParameters.toToken,
            fromTokenAmount: swapParameters.fromTokenAmount,
            toTokenAmount: swapParameters.toTokenAmount,
            blockWalletFee: swapParameters.blockWalletFee,
        },
    }
}
