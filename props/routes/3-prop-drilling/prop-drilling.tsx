import { useState } from "react";

export const PropDrilling = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <>
            <div>
                <button type={"button"} onClick={() => setLoggedIn(prevLoggedIn => !prevLoggedIn)}>Log In!</button>
            </div>
            <Header loggedIn={loggedIn}></Header>
        </>
    );
};

const Header = (props: UserStatusProps) => {
    return <Menu loggedIn={props.loggedIn}></Menu>;
};

const Menu = (props: UserStatusProps) => {
    return <UserStatus loggedIn={props.loggedIn}/>;
};

type UserStatusProps = {
    loggedIn: boolean
}

const UserStatus = (props: UserStatusProps) => {
    return (<div>User is {props.loggedIn ? "" : "not"} logged in</div>);
};
