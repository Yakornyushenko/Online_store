import React, {Component} from "react";
import {connect} from "react-redux";

import {fetchAllPhones} from "../../actions";

class Phones extends Component {
    componentDidMount() {
        this.props.fetchAllPhones()
    }
    render() {
        return (
            <div>AllPhones</div>
        )
    }
}

const mapDispatchToProps = {
    fetchAllPhones
}
export default connect(null, mapDispatchToProps)(Phones);