import { FC, useContext } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";
import translate from "../i18n/Translate";
import { PrimaryBtn } from "../ui_components";
import { getImage } from "../utils";

type TErrorProps = {
    title: string;
    description: string;
    retry: () => void;
};

const ErrorPage: FC<TErrorProps> = (props) => {
    const { title, description, retry } = props;
    const location = useLocation();
    const isFullscreen = new URLSearchParams(location?.search).get("fullscreen");
    const {
        state: { isDarkTheme },
    } = useContext(GlobalContext);
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div
                className={`pageNotFound relative ${
                    location.pathname.includes("/welcome") ? "" : "w-[420px] flex-col"
                }`}
            >
                <div>
                    <img
                        className={`${
                            location.pathname.includes("/welcome")
                                ? "w-[350px]"
                                : "w-[250px] mb-10"
                        }`}
                        src={getImage(
                            isDarkTheme
                                ? "hardware_wallet_error_dark.svg"
                                : "hardware_wallet_error.svg",
                        )}
                        alt="page_not_found"
                    />
                </div>
                <div
                    className={`${
                        location.pathname.includes("/welcome")
                            ? "ml-20 text-left"
                            : "ml-0 text-center"
                    }`}
                >
                    <h3
                        className={`heading1  ${
                            location.pathname.includes("/welcome") ? "mb-12" : "mb-6"
                        }`}
                    >
                        {title ? title : "404 Error"}
                    </h3>
                    {description && (
                        <p
                            className={`paragraph2 text-text-500  ${
                                location.pathname.includes("/welcome")
                                    ? "mb-10"
                                    : "px-10 mb-20"
                            }`}
                        >
                            {description}
                        </p>
                    )}
                    <div className="absolute w-full bottom-5 grid px-4 left-0">
                        <PrimaryBtn
                            title={translate("actions.backToHomeLabel")}
                            className="text-primary-700 mb-9 text-base"
                            type={"button"}
                            onClick={() =>
                                navigate(
                                    `${
                                        isFullscreen === "true"
                                            ? "/home?fullscreen=true"
                                            : "/home"
                                    }`,
                                )
                            }
                        />
                        <PrimaryBtn
                            title={translate("actions.retryLabel")}
                            className={`btn-primary py-5 ${
                                location.pathname.includes("/welcome") ? "w-[200px]" : ""
                            } `}
                            type={"button"}
                            onClick={() => retry()}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default ErrorPage;
