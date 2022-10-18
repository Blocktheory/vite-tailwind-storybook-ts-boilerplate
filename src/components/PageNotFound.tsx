import React from "react";
import { FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getImage } from "../utils";

const PageNotFound: FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const isFullscreen = searchParams.get("fullscreen");
    return (
        <>
            <div className={`pageNotFound ${isFullscreen ? "w-[420px] flex-col" : ""}`}>
                <div>
                    <img
                        className={`${isFullscreen ? "w-[250px] mb-10" : ""}`}
                        src={getImage("404_error.svg")}
                        alt="page_not_found"
                    />
                </div>
                <div
                    className={`${isFullscreen ? "ml-0 text-center" : "text-left ml-20"}`}
                >
                    <h3 className="heading1 mb-12">404 Error</h3>
                    <h4 className="sub-title mb-4">Page not found</h4>
                    <p
                        className={`paragraph2 text-text-500 mb-16 ${
                            isFullscreen ? "px-10" : ""
                        }`}
                    >
                        Sorry, but the page you are looking for was either not found or
                        does not exist.
                    </p>
                    <button
                        className="btn-primary py-3 px-10"
                        type="button"
                        onClick={() => navigate("/home")}
                    >
                        Back to home
                    </button>
                </div>
            </div>
        </>
    );
};
export default PageNotFound;
