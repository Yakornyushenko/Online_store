import React from "react";
import {Switch, Route} from "react-router";

import AllPhones from '../src/container/phones/index';
import PhoneUnit from "./container/phone-unit/phoneUnit";

export default (
    <Switch>
        <Route path='/' component={AllPhones} exact />
        <Route path='/categories/:id' component={AllPhones} />
        <Route path='/phone/:id' component={PhoneUnit} />
    </Switch>
)