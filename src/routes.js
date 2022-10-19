import React from "react";
import {Switch, Route} from "react-router";

import AllPhones from '../src/container/phones/index';

export default (
    <Switch>
        <Route path='/' component={AllPhones} exact />
    </Switch>
)