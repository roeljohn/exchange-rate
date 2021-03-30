import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select } from 'antd';
import { getFinalConvertRates } from "../actions/actionRate";

const { Option } = Select;

const RatesConvertForm = ({ rates, getFinalConvertRates }) => (
    <div className="text-center">
                       <Form
                        name="signin"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={(values) => getFinalConvertRates(values.amount, values.second_currency)}
                        onFinishFailed={(errorInfo) => console.log(errorInfo)}
                        >
                            <Form.Item
                                label="Convert"
                                name="first_currency"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Select
                                onChange={value => console.log(value)}
                                placeholder="Select a option and change input text above"
                                allowClear
                                >
                                {rates && Object.entries(rates).map(([key, value]) => {
                                    return <Option key={key} value={value}>{key} {value}</Option>
                                })}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="To"
                                name="second_currency"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Select
                                onChange={value => console.log(value)}
                                placeholder="Select a option and change input text above"
                                allowClear
                                >
                                {rates && Object.entries(rates).map(([key, value]) => {
                                    return <Option key={key} value={value}>{key} {value}</Option>
                                })}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="amount"
                                onChange={e => console.log(e.target.value)}
                                rules={[{ required: true, message: 'Please input your amount!' }]}
                            >
                                <Input placeholder="Amount" />
                            </Form.Item>
                            <p>Your 1 Currency is equal to Second Currency</p>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    CONVERT
                                </Button>
                            </Form.Item>
                        </Form>
    </div>
);

const mapStateToProps = (state) => {
    return {
        rates: state.rateReducer.rates
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        getFinalConvertRates: (amount, second_currency) => dispatch(getFinalConvertRates(amount, second_currency))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatesConvertForm);
