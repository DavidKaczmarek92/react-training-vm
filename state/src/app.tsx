import "./app.pcss";

import { RouteConfig, Router } from "common/src/components/router/router";
import React from "react";

import { BasicState } from "../routes/1-basic-state/basic-state";
import { PassingState } from "../routes/2-passing-state-to-other-components/passing-state";
import { ModifyingIndependent } from "../routes/3-modifying-state-indepentent-value/modifying-independent";
import { ModifyingClosure } from "../routes/4-modifying-dependent-closure/modifying-closure";
import { ModifyingPrevious } from "../routes/5-modifying-with-previous-value/modifying-previous";
import { TableAsState } from "../routes/6-table-as-state/table-as-state";
import { ObjectAsState } from "../routes/7-object-as-state/object-as-state";
import { StateWithReducer } from "../routes/8-use-reducer/state-with-reducer";

const routes: RouteConfig[] = [
    {
        path: "/1",
        component: () => <BasicState/>,
    }, {
        path: "/2",
        component: () => <PassingState/>,
    }, {
        path: "/3",
        component: () => <ModifyingIndependent/>,
    }, {
        path: "/4",
        component: () => <ModifyingClosure/>,
    }, {
        path: "/5",
        component: () => <ModifyingPrevious/>,
    }, {
        path: "/6",
        component: () => <TableAsState/>,
    }, {
        path: "/7",
        component: () => <ObjectAsState/>,
    }, {
        path: "/8",
        component: () => <StateWithReducer/>,
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
