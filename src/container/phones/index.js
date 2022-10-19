import React, {Component} from "react";
import {connect} from "react-redux";

import {fetchAllPhones} from "../../actions";
import {getPhones} from "../../selectors";
import {Link} from "react-router-dom";

class Phones extends Component {
    componentDidMount() {
        this.props.fetchAllPhones()
    }
    renderPhone (phone, i) {
        const shortDescription = `${phone.description.slice(60)}...`;
        return (
        <div className='col-md-4 col-lg-4, col-sm-4 book-list' key={i}>
            <div className='thumbnail'>
                <img className='img-thumbnail' src={phone.image} alt={phone.name}/>
                <div className='caption'>
                    <h4 className='pull-right'>${phone.price}</h4>
                    <h4>
                        <Link to={`/phones/${phone.id}`}>
                            {phone.name}
                        </Link>
                    </h4>
                    <p>{shortDescription}</p>
                    <p className='itemButton'>
                        <button className='btn btn-primary'>
                            Buy now!
                        </button>
                        <Link
                            to={`/phone/${phone.id}`}
                            className='btn btn-primary'>
                            More info
                        </Link>
                    </p>
                </div>
            </div>
        </div>
        )
    }
    render() {
        const {phones} = this.props
        return (
            <div className='books row'>
                {phones.map((phone, i) => {
                    return this.renderPhone(phone, i)
                })}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    phones: getPhones(state)
})
const mapDispatchToProps = {
    fetchAllPhones
}
export default connect(mapStateToProps, mapDispatchToProps)(Phones);