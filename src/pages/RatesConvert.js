import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {connect} from 'react-redux'
import { convertExchangeRate } from '../actions/action';
import { getConvertRates, getRates } from '../actions/actionRate';
import RatesConvertForm from '../components/RatesConvertForm';


class RatesConvert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        this.props.convertExchangeRate();
        this.props.getRates();
    }
    render() {
        return (
            <div>
                <Container>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>
                        <RatesConvertForm />
                    </Col>
                    <Col sm>sm=true</Col>
                    
                </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      rates: state.rateReducer.rates,
      convertRate: state.rateReducer.convertRate
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        convertExchangeRate: () => dispatch(getConvertRates(4, 2)),
        getRates: () => dispatch(getRates()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RatesConvert);
