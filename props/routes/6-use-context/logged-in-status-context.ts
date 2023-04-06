import { createContext, Dispatch } from "react";

import { LoggedInStatusAction, LoggedInStatusState } from "./use-context-component";

export type LoggedInStatusContextValue = {
    state: LoggedInStatusState;
    dispatch: Dispatch<LoggedInStatusAction>;
}
export const loggedInStatusContext = createContext<LoggedInStatusContextValue>({
    state: { loggedIn: false },
    dispatch: () => null,
});

export const LoggedInStatusContextProvider = loggedInStatusContext.Provider;
