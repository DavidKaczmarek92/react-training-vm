import React, { useContext, useReducer } from "react";

import {
    loggedInStatusContext, LoggedInStatusContextProvider,
    LoggedInStatusContextValue,
} from "./logged-in-status-context";

export type LoggedInStatusAction = "ToggleLoggedIn" | "ForceLogout";

export type LoggedInStatusState = {
    loggedIn: boolean;
}

const LoggedInStatusReducer = (state: LoggedInStatusState, action: LoggedInStatusAction):LoggedInStatusState => {
    switch (action) {
        case "ToggleLoggedIn":
            return {
                ...state,
                loggedIn: !state.loggedIn,
            };
        case "ForceLogout":
            return {
                ...state,
                loggedIn: false,
            };
    }
};

export const UseContextComponent = () => {
    const [state, dispatch] = useReducer(LoggedInStatusReducer, ({ loggedIn: false }));

    const contextValue:LoggedInStatusContextValue = {
        state,
        dispatch,
    };

    return (
        <LoggedInStatusContextProvider value={contextValue}>
            <Header/>
        </LoggedInStatusContextProvider>
    );
};

const Header = () => {
    return (
        <>
            <Menu/>
            <UserStatusSwitcher/>
            <UserLogout/>
        </>
    );
};

const Menu = () => {
    return <UserStatus/>;
};

const UserStatus = () => {
    const { state: { loggedIn } } = useContext(loggedInStatusContext);

    return (<div>User is {loggedIn ? "" : "not"} logged in</div>);
};

const UserStatusSwitcher = () => {
    const { dispatch } = useContext(loggedInStatusContext);

    return (
        <div>
            <button type={"button"} onClick={() => dispatch("ToggleLoggedIn")}>Toggle logging in!</button>
        </div>
    );
};

const UserLogout = () => {
    const { dispatch } = useContext(loggedInStatusContext);
    return (
        <div>
            <button type={"button"} onClick={() => dispatch( "ForceLogout")}>Logout!</button>
        </div>
    );
};
