import { FunctionComponent, useEffect } from "react"
import { useBlankState } from "../../context/background/backgroundHooks"
import { generateExplorerLink, getExplorerTitle } from "../../util/getExplorer"
import Divider from "../Divider"
import AnimatedIcon, { AnimatedIconName } from "../AnimatedIcon"
import arrow from "../../assets/images/icons/arrow_right.svg"
import classnames from "classnames"
import { Classes } from "../../styles"
import MessageDialog, { messageDialogProps } from "./MessageDialog"

const SuccessDialog: FunctionComponent<
    messageDialogProps & {
        open: boolean
        title: React.ReactElement | string
        message: React.ReactElement | string
        hideButton?: boolean
        timeout?: number // If setted, it will trigger onDone() after timeout value
        txHash?: string // If valid hash, shows explorer link i.e. View on Etherscan
        onDone: () => void
    }
> = ({
    open,
    title,
    message,
    timeout,
    txHash,
    hideButton,
    onDone,
    onClickOutside,
}) => {
    const { selectedNetwork, availableNetworks } = useBlankState()!

    const explorerName = getExplorerTitle(availableNetworks, selectedNetwork)

    useEffect(() => {
        if (timeout && open) {
            const timer = setTimeout(() => onDone(), timeout)
            return () => clearTimeout(timer)
        }
    }, [onDone, open, timeout])

    return (
        <MessageDialog
            title={title}
            message={message}
            open={open}
            onClickOutside={onClickOutside || onDone}
            header={
                <div className="flex justify-center">
                    <AnimatedIcon
                        icon={AnimatedIconName.ConfirmationCheck}
                        className="w-12 h-12 pointer-events-none"
                    />
                </div>
            }
            footer={
                <>
                    {txHash && (
                        <div className="flex w-full items-center justify-center -mt-2 mb-4">
                            <a
                                href={generateExplorerLink(
                                    availableNetworks,
                                    selectedNetwork,
                                    txHash,
                                    "tx"
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row items-center space-x-2 text-sm font-bold text-primary-300"
                            >
                                <span>View on {explorerName}</span>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-3 h-3"
                                />
                            </a>
                        </div>
                    )}

                    {!timeout && !hideButton && (
                        <>
                            <div className="-mx-6">
                                <Divider />
                            </div>
                            <button
                                onClick={onDone}
                                className={classnames(
                                    Classes.liteButton,
                                    "mt-4"
                                )}
                                type="button"
                            >
                                Done
                            </button>
                        </>
                    )}
                </>
            }
        />
    )
}
export default SuccessDialog
