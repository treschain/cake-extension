import { FC } from "react"
import { LINKS } from "../../util/constants"
import { ButtonWithLoading } from "../button/ButtonWithLoading"
import PopupFooter from "../popup/PopupFooter"
import PopupLayout from "../popup/PopupLayout"
import Info from "./Info"
import { useBlankState } from "../../context/background/backgroundHooks"

interface WelcomeInfoProps {
    onDismiss: () => void
}
const WelcomeInfo: FC<WelcomeInfoProps> = ({ onDismiss }) => {
    const { settings } = useBlankState()!

    return (
        <PopupLayout
            footer={
                <PopupFooter>
                    <ButtonWithLoading
                        onClick={onDismiss}
                        label="Start Using"
                    />
                </PopupFooter>
            }
        >
            <div className="w-full p-6 pb-0 bg-white bg-opacity-75">
                <Info>
                    <Info.Title>Welcome to CakeWallet!</Info.Title>
                    <div className="p-1 pt-6">
                        <Info.List>
                            {settings.defaultBrowserWallet ? (
                                <Info.Item type="success">
                                    CakeWallet is your default browser wallet
                                    to interact with DApps.
                                </Info.Item>
                            ) : (
                                <Info.Item type="warn">
                                    Set CakeWallet as your default browser
                                    wallet to interact with DApps.
                                </Info.Item>
                            )}

                            <Info.Item type="warn">
                                Select CakeWallet or, alternatively the
                                injected option, to connect with DApps.
                            </Info.Item>
                            <Info.Item type="warn">
                                If you don't see CakeWallet's logo when
                                connecting, select another browser wallet's
                                logo.
                            </Info.Item>
                            <Info.Item type="warn">
                                Join our{" "}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={LINKS.TELEGRAM}
                                    className="text-decoration-line: underline; text-blue-600 hover:text-blue-800"
                                >
                                    Telegram group
                                </a>{" "}
                                if you have any questions or feedback.
                            </Info.Item>
                            <Info.Item type="success" className="m-0 mt-16">
                                We hope that you enjoy using the CakeWallet!
                            </Info.Item>
                        </Info.List>
                    </div>
                </Info>
            </div>
        </PopupLayout>
    )
}

export default WelcomeInfo
