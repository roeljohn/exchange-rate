import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {connect} from 'react-redux'
import { convertExchangeRate } from '../actions/action';
import { getConvertRates, getRates } from '../actions/actionRate';
import RateList from '../components/RateList';
import RatesConvertForm from '../components/RatesConvertForm';


class RatesConvert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        this.props.getRates();
    }
    render() {
        return (
            <div>
                <Container>
                <Row>
                    <Col sm></Col>
                    <Col sm>
                        <RatesConvertForm />
                        <RateList />
                    </Col>
                    <Col sm></Col>
                    
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
        getRates: () => dispatch(getRates()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RatesConvert);
