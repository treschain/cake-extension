import classnames from "classnames"
import AnimatedIcon, { AnimatedIconName } from "../AnimatedIcon"

const TransactionsLoadingSkeleton = () => {
    return (
        <>
            {[...Array(3)].map((x, index) => (
                <div key={index}>
                    {index > 0 ? <hr /> : null}
                    <div className="flex items-center justify-between py-5">
                        <div className="flex items-center space-x-2">
                            <div className="flex justify-center items-center h-9 w-9 rounded-full border">
                                <AnimatedIcon
                                    icon={
                                        AnimatedIconName.GreyCircleLoadingSkeleton
                                    }
                                    className={classnames(
                                        "w-4 h-4 pointer-events-none",
                                        index % 2 === 1 && "rotate-180"
                                    )}
                                />
                            </div>
                            <div>
                                <AnimatedIcon
                                    icon={
                                        AnimatedIconName.GreyLineLoadingSkeleton
                                    }
                                    className="mb-2 h-3 w-16 rotate-180"
                                    svgClassName="rounded-md"
                                />
                                <AnimatedIcon
                                    icon={
                                        AnimatedIconName.GreyLineLoadingSkeleton
                                    }
                                    className="h-3 w-24"
                                    svgClassName="rounded-md"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <AnimatedIcon
                                icon={AnimatedIconName.GreyLineLoadingSkeleton}
                                className="mb-2 h-3 w-10"
                                svgClassName="rounded-md"
                            />
                            <AnimatedIcon
                                icon={AnimatedIconName.GreyLineLoadingSkeleton}
                                className="h-3 w-16 rotate-180"
                                svgClassName="rounded-md"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TransactionsLoadingSkeleton
