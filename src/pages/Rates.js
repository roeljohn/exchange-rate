import React from 'react';
import {connect} from 'react-redux'
import { getRates } from '../actions/actionRate';
import RateList from '../components/RateList';

class Rates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
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
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Rates);
