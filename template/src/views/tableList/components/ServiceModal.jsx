import React from 'react';
import { Modal, Form, Input } from 'antd';

import { addService, updateService } from '../../service';

class ServiceModal extends React.Component {
  constructor(props) {
    super(props);
    this.refForm = React.createRef(null);
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    const { values, visible } = this.props;
    // 组件初始化(组件显示回调函数)
    if (!prevProps.visible && visible) {
      this.refForm.current.setFieldsValue({
        title: values.title,
        version: values.version,
      });
    }
  }
  render() {
    const { onCancel, onSuccess, visible, values } = this.props;
    return (
      <Modal
        visible={visible}
        maskClosable={false}
        closable={false}
        title="新增/编辑"
        okText="保存"
        cancelText="取消"
        onCancel={() => {
          onCancel();
        }}
        onOk={async () => {
          try {
            const queryParams = await this.refForm.current.validateFields();
            let res;
            const pathParams = {
              serviceId: values.id,
            };
            if (values.id) {
              res = await updateService(pathParams, queryParams);
            } else {
              res = await addService(queryParams);
            }
            if (res.status === 200) {
              onSuccess(res.data);
            }
          } catch (info) {
            console.log('Validate Failed:', info);
          }
        }}
      >
        <Form
          ref={this.refForm}
          layout="vertical"
          name="form_in_modal"
          initialValues={values}
        >
          <Form.Item
            name="title"
            label="项目名称"
            rules={[{ required: true, message: '请输入项目名称！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="version"
            label="版本"
            rules={[
              {
                required: true,
                message: '请输入版本号！',
              },
            ]}
          >
            <Input placeholder="0.0.1" />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default ServiceModal;
