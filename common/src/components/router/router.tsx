import React, { ComponentType } from "react";

export type RouteConfig = {
    path: string;
    component: ComponentType;
}

export type RouterProps = {
    routes: RouteConfig[];
}

export const Router = ({ routes }: RouterProps) => {
    const currentRoute = routes.find(route => route.path === window.location.pathname);

    if (!currentRoute) return null;

    const { component: Component } = currentRoute;
    return <Component />;
};

