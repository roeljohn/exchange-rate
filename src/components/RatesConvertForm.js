import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const RatesConvertForm = ({ rates }) => (
    <div className="text-center">
                       <Form
                        name="signin"
                        initialValues={{ remember: true }}
                        onFinish={(values) => console.log(values)}
                        onFinishFailed={(errorInfo) => console.log(errorInfo)}
                        >
                            <Form.Item
                                name="first_currency"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Select
                                onChange={value => console.log(value)}
                                placeholder="Select a option and change input text above"
                                allowClear
                                >
                                {rates && Object.entries(rates).map(([key, value]) => {
                                    return <Option value={value}>{key}</Option>
                                })}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="second_currency"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Select
                                onChange={value => console.log(value)}
                                placeholder="Select a option and change input text above"
                                allowClear
                                >
                                {rates && Object.entries(rates).map(([key, value]) => {
                                    return <Option value={value}>{key}</Option>
                                })}
                                </Select>
                            </Form.Item>

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
export default connect(mapStateToProps)(RatesConvertForm);
