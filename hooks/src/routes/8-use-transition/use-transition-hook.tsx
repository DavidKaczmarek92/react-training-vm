/* eslint-disable react/no-array-index-key */
import React, { memo, ReactNode, useState, useTransition } from "react";

export const UseTransitionHook = () => {
    const [tab, setTab] = useState("about");
    return (
        <>
            <TabButton isActive={tab === "about"} onClick={() => setTab("about")}>About</TabButton>
            <TabButton isActive={tab === "posts"} onClick={() => setTab("posts")}>Posts</TabButton>
            <TabButton isActive={tab === "contact"} onClick={() => setTab("contact")}>Contact</TabButton>

            <hr />

            {tab === "about" && <AboutTab />}
            {tab === "posts" && <PostsTab />}
            {tab === "contact" && <ContactTab />}
        </>
    );
};

function TabButton({ children, isActive, onClick }: {children: ReactNode, isActive: boolean, onClick: () => void}) {
    const [isPending, startTransition] = useTransition();
    if (isActive) return <b>{children}</b>;

    if (isPending) return <b className="pending">{children}</b>;

    return (
        <button type={"button"} onClick={() => {
            startTransition(() => {
                onClick();
            });
        }}>
            {children}
        </button>
    );
}

function AboutTab() {
    return (
        <p>This is some about information</p>
    );
}

const PostsTab = memo(function PostsTab() {
    const items = [];
    for (let i = 0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }
    return (
        <ul className="items">
            {items}
        </ul>
    );
});

function SlowPost({ index }: {index: number}) {
    const startTime = performance.now();
    while (performance.now() - startTime < 1) { /* empty */ }

    return (
        <li className="item">
            Post #{index + 1}
        </li>
    );
}

const ContactTab = () => <p>This is some contact information</p>;

