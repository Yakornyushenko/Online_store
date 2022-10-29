import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getTotalPrice} from "../selectors";

const BasketCart = ({totalPrice}) => {
    return (
        <div className='cart'>
            <div className='dropdown'>
                <Link
                    to= '/basket'
                    id= 'dLabel'
                    className='btn btn-inverse btn-block btn-lg'
                >
                    <i className='fa fa-fa-shopping-cart'></i>
                    <span className='cart-text'>basket: ${totalPrice}</span>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalPrice: getTotalPrice(state)
    }
}

export default connect(mapStateToProps, null)(BasketCart)