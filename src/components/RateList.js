import React from "react";
import { connect } from "react-redux";


const RateList = ({ rates }) => (
    <div className="text-center">
        <table>
            <tbody>
                <tr>
                    <th>Country</th>
                    <th>Rate</th>
                </tr>
                {Object.entries(rates).map(([key, value]) => {
                    return  <tr>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                })}
            </tbody>
        </table>

    </div>
);

const mapStateToProps = (state) => {
    return {
        rates: state.rateReducer.rates
    }
  }
export default connect(mapStateToProps)(RateList);
