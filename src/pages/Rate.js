import React from 'react';
import {connect} from 'react-redux'
import { getRates } from '../actions/actionRate';
import RateList from '../components/RateList';

class QRProfile extends React.Component {
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
                <RateList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      rates: state.rateReducer.rates
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getRates: () => dispatch(getRates()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(QRProfile);
