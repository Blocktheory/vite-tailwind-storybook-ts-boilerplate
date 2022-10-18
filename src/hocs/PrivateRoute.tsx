import React, { FC, ReactElement, useState } from "react";

interface IProps {
    children: ReactElement;
    path: string;
}

const PrivateRoute: FC<IProps> = ({ children, path }: IProps) => {
    const [state, setState] = useState({
        isLoggedIn: false,
        loader: true,
    });

    return <div></div>;
};

export default PrivateRoute;
