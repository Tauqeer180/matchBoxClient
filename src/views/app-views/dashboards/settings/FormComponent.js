import { Form, Input, Button, Checkbox, Select } from 'antd';
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormComponent = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Employee Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input Employee Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Employee ID"
        name="id"
        rules={[
          {
            required: true,
            message: 'Please input ID',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
        rules={[
          {
            required: true,
            message: 'Please input Status',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mobile No"
        name="number"
        rules={[
          {
            required: true,
            message: 'Please input Number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Permisson"
        name="permisson"
        rules={[
          {
            required: true,
            message: 'Please input Permisson',
          },
        ]}
      >
        <div>
          <Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
            <Option value="Read">Read</Option>
            <Option value="Write">Write</Option>
            <Option value="Modified">Modified</Option>
          </Select>
        </div>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
