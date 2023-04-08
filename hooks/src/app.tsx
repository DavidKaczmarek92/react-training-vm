import "./app.pcss";

import { RouteConfig, Router } from "common/src/components/router/router";
import React from "react";

import { UseEffectHook } from "./routes/1-use-effect/use-effect-hook";
import { UseMemoHook } from "./routes/2-use-memo/use-memo-hook";
import { UseCallbackHook } from "./routes/3-use-callback/use-callback-hook";
import { UseIdHook } from "./routes/4-use-id/use-id-hook";
import { UseRefHook } from "./routes/5-0-use-ref/use-ref-hook";
import { UseRefNonRenderingState } from "./routes/5-1-use-ref-non-rendering-state/use-ref-non-rendering-state";
import { UseMultipleRefs } from "./routes/5-2-use-multiple-refs/use-multiple-refs";
import { UseDeferredValueHook } from "./routes/6-use-deferred-value/use-deferred-value-hook";
import { UseImperativeHandleHook } from "./routes/7-use-imperative-handle/use-imperative-handle-hook";
import { UseTransitionHook } from "./routes/8-use-transition/use-transition-hook";
import { UseLayoutEffectHook } from "./routes/9-use-layout-effect/use-layout-effect-hook";

const routes: RouteConfig[] = [
    {
        path: "/1",
        component: () => <UseEffectHook/>,
    }, {
        path: "/2",
        component: () => <UseMemoHook/>,
    }, {
        path: "/3",
        component: () => <UseCallbackHook/>,
    }, {
        path: "/4",
        component: () => <UseIdHook/>,
    }, {
        path: "/5",
        component: () => <UseRefHook/>,
    }, {
        path: "/5-1",
        component: () => <UseRefNonRenderingState/>,
    }, {
        path: "/5-2",
        component: () => <UseMultipleRefs/>,
    }, {
        path: "/6",
        component: () => <UseImperativeHandleHook/>,
    }, {
        path: "/7",
        component: () => <UseDeferredValueHook/>,
    }, {
        path: "/8",
        component: () => <UseTransitionHook/>,
    }, {
        path: "/9",
        component: () => <UseLayoutEffectHook/>,
    },
];

function App() {
    return (
        <Router routes={routes}/>
    );
}

export default App;
