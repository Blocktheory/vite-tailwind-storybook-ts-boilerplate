import React from "react";
import { Component, ErrorInfo, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { getImage } from "../utils";

interface IProps {
    children: ReactNode;
}

interface IState {
    hasError?: boolean;
    pathname?: string;
}

class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { pathname: "" };
    }

    public state: IState = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): IState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }
    componentDidMount() {
        this.setState({ pathname: window.location.hash });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div
                    className={`errorBoundary ${
                        this.state.pathname === "#/welcome"
                            ? "w-screen h-screen"
                            : "flex-col"
                    }`}
                >
                    <div>
                        <img
                            className={`${
                                this.state.pathname === "#/welcome"
                                    ? ""
                                    : "w-[250px] mb-10"
                            }`}
                            src={getImage("404_error.svg")}
                            alt="page_not_found"
                        />
                    </div>
                    <div
                        className={`${
                            this.state.pathname === "#/welcome" ? "text-left ml-20" : ""
                        }`}
                    >
                        <h3 className="heading1 mb-4">Oops..! Something went wrong</h3>

                        <p
                            className={`paragraph2 text-text-500 mb-16 ${
                                this.state.pathname === "#/welcome" ? "" : ""
                            }`}
                        >
                            An error occurred. Please try again later.
                        </p>
                        <NavLink
                            to="/home"
                            onClick={() => this.setState({ hasError: false })}
                            className="btn-primary inline-block"
                        >
                            Back to home
                        </NavLink>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
