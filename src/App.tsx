import React from "react";
import { FC, Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { PageNotFound } from "./components";
import GlobalContextProvider, { GlobalContext } from "./context/GlobalContext";
import { homeRoutes } from "./features/home/homeRoutes";
import PrivateRoute from "./hocs/PrivateRoute";
import { I18nProvider } from "./i18n";
import ErrorBoundary from "./utils/ErrorBoundary";

const App: FC = () => {
    return (
        <div>
            <GlobalContextProvider>
                <ErrorBoundary>
                    <I18nProvider>
                        <Routes>
                            {[...homeRoutes].map(({ path, element, key }, index) => (
                                <Fragment key={index}>
                                    <Route path={path} element={element} key={key} />
                                </Fragment>
                            ))}
                            {[].map(({ path, element, key }, index) => (
                                <Fragment key={index}>
                                    <Route
                                        element={
                                            <PrivateRoute path={path}>
                                                {element}
                                            </PrivateRoute>
                                        }
                                    >
                                        <Route
                                            path={path}
                                            element={
                                                <PrivateRoute path={path}>
                                                    {element}
                                                </PrivateRoute>
                                            }
                                            key={key}
                                        />
                                    </Route>
                                </Fragment>
                            ))}
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </I18nProvider>
                </ErrorBoundary>
            </GlobalContextProvider>
        </div>
    );
};

export default App;
