import { List } from 'antd';
import React from "react";
import { connect } from "react-redux";


const RateList = ({ rates }) => {
    const ratesArray = Object.entries(rates).map(([key,value])=>{
        return {currency: key, value: value };
    });
    return (
        <div className="text-center">
        {console.log('ratesArray', ratesArray)}
        <List
            size="small"
            header={<div>Latest Currency</div>}
            bordered
            dataSource={ratesArray}
            renderItem={item => <List.Item>{item.currency} {item.value}</List.Item>}
        />
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        rates: state.rateReducer.rates
    }
  }
export default connect(mapStateToProps)(RateList);
