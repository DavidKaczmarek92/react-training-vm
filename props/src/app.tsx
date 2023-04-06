import "./app.pcss";

import { RouteConfig, Router } from "common/src/components/router/router";
import React from "react";

import { BasicProps } from "../routes/1-basic-props/basic-props";
import { PropsTyping } from "../routes/2-props-typing/props-typing";
import { PropDrilling } from "../routes/3-prop-drilling/prop-drilling";
import { GivingProps } from "../routes/4-giving-props-to-children/giving-props";
import { UsingProps } from "../routes/5-using-props/using-props";
import { UseContextComponent } from "../routes/6-use-context/use-context-component";

const routes: RouteConfig[] = [
    {
        path: "/1",
        component: () => <BasicProps/>,
    }, {
        path: "/2",
        component: () => <PropsTyping/>,
    }, {
        path: "/3",
        component: () => <PropDrilling/>,
    }, {
        path: "/4",
        component: () => <GivingProps/>,
    }, {
        path: "/5",
        component: () => <UsingProps/>,
    }, {
        path: "/6",
        component: () => <UseContextComponent/>,
    },
];

function App() {

    return (
        <div className="App">
            <Router routes={routes}/>
        </div>
    );
}

export default App;
