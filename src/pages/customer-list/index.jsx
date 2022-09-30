import React, { useEffect } from 'react'
import { Table, Button, notification } from 'antd';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomerAction, getAllCustomersAction } from '../../redux/actions/customers.actions';
import { Content } from 'antd/lib/layout/layout';

const CustomerList = () => {

  const dispatch = useDispatch();
  const allCustomers = useSelector(state => state)

  useEffect(() => {
    dispatch(getAllCustomersAction())
  }, [])

  const handleDelete = (customer) => {
    dispatch(deleteCustomerAction(customer));
    // dispatch(getAllCustomersAction());
    openNotification()
  }

  const openNotification = () => {
    notification.success({
      message: 'Customer Deleted!',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const columns = [
    {
      title: 'Customer Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
      key: 'contactName',
    },
    {
      title: "Delete Customer",
      dataIndex: "id",
      key: "id",
      render: (value, customer) => <Button onClick={() => handleDelete(customer)} type='primary' danger>Delete</Button>,
    }
  ];

  return (
    <div className="site-layout-content">
      <Content style={{ padding: '0 100px' }}>
        <Table columns={columns} dataSource={allCustomers} rowKey='id' />
      </Content>
    </div>
  )
}

export default CustomerList