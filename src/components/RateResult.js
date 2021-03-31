import { List } from 'antd';
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RateResult = ({ convertFinalRates }) => {
    return (
        <div className="text-center">
            {convertFinalRates && convertFinalRates ? convertFinalRates : 'No Result Yet'}
        </div>
    );
};

RateResult.propTypes = {
    convertFinalRates: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        convertFinalRates: state.rateReducer.convertFinalRates
    }
}
export default connect(mapStateToProps)(RateResult);
