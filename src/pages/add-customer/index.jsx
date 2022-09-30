import React from 'react'
import { Button, Form, Input } from 'antd';
import { addCustomerAction } from '../../redux/actions/customers.actions';
import { useDispatch } from 'react-redux';

const AddCustomer = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(addCustomerAction(values))

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Add New Customer</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ textAlign: 'center', margin: '20px' }}
      >
        <Form.Item
          label="Customer Id"
          name="id"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contact Name"
          name="contactName"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddCustomer