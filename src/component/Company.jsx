import CompanyList from './CompanyList'
import CompanyDetails from './ComapanyDetails';
import React, { useState } from 'react';
import { Modal, Select, Input, Button, Checkbox, Form, } from 'antd';

// import { CiSearch } from "react-icons/ci";

const Company = () => {
  const { Search } = Input;
  return (
    <>
      <div>
        <div className='grid grid-flow-col'>
          <div>
            <h1 className="text-3xl mt-4 p-6">Companies</h1>
            <p>Manage your legal entitles here.</p>
          </div>
          <div className='mt-12'>
            <ButtonModal />
          </div>
        </div>
        <div className='flex gap-4'>
          {/* <CiSearch className='text-xl mt-1' /> */}
          <Search
            placeholder="Company Name"
            style={{
              width: 300,
            }}
          />

          <Select
            defaultValue="Filter by Domicile"
            style={{
              width: 220,
            }}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
            ]}
          />
          <Select
            defaultValue="Filter by Business Structure"
            style={{
              width: 220,
            }}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
            ]}
          />
          <Button type='primary'>Filter</Button>
          <Button>Clear Filter</Button>
        </div>
        <div className='flex gap-12'>
          <CompanyList />
          <CompanyDetails />
        </div>

      </div>
    </>
  )
}

export default Company;


function ButtonModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        + Add Company Name
      </Button>
      <Modal title="Add Company Details" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Company Name"
            name="Company Name"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="State"
            name="State"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Country"
            name="Country"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="City"
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}



