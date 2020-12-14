import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  List,
  Card,
  Button,
  Popconfirm,
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import ServiceModal from './components/ServiceModal';
import {
  getAllServices,
  deleteService,
} from '@/views/service';

class ServiceList extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor (props) {
    super(props);
    this.state = {
      data: null,
      current: 1,
      total: 0,
      pageSize: 12,
      isShowModal: false,
      formValue: {},
    }
    this.init = this.init.bind(this);
    this.handleServiceCancel = this.handleServiceCancel.bind(this);
    this.handleShowDelete = this.handleShowDelete.bind(this);
  }
  componentDidMount () {
    this.init();
  }
  async init ({ current = 1, page_size =  this.state.pageSize} = {}) {
    const res = await getAllServices({
      current,
      page_size,
    });
    if (res.status === 200) {
      this.setState((state) => {
        return {
          current,
          total: res.data.count,
          pageSize: page_size,
          data: res.data.results,
        };
      });
    }
  }
  /**
   * 项目弹窗关闭回调函数
   */
  handleServiceCancel() {
    this.setState({
      isShowModal: false,
      formValue: {},
    });
  }
  handleShowDelete(index, isShow) {
    const data = [ ...this.state.data ];
    data[index].isShowDelete = isShow;
    this.setState({
      data,
    });
  }
  render () {
    const { current, total, pageSize, data, isShowModal, formValue } = this.state;
    return (
      <>
        {/* service */}
        <Button
          type="primary"
          className="brothers-button"
          onClick={() => {
            this.setState({
              isShowModal: true,
            });
          }}
        >
          创建项目
        </Button>
        {/* API详细信息 */}
        <List
          pagination={{
            current: current,
            total: total,
            pageSize: pageSize,
            onChange: (current) => {
              this.init({
                current,
              });
            }
          }}
          grid={{
            gutter: 16,
            column: 3,
          }}
          dataSource={data||[]}
          renderItem={(item, i) => (
            <List.Item>
              <Card
                hoverable
                title={item.title}
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={() => {
                      this.setState({
                        formValue: item,
                        isShowModal: true,
                      });
                    }}
                  />,
                  <SettingOutlined
                    key="setting"
                    onClick={() => {
                      console.log('查看详情');
                    }}
                  />,
                  <Popconfirm
                    title="确认删除该项目吗，删除后不可恢复？"
                    visible={item.isShowDelete}
                    onConfirm={async () => {
                      const data = await deleteService({
                        serviceId: item.id,
                      });
                      if (data.status === 200) {
                        this.handleShowDelete(i, false);
                        this.init();
                      }
                    }}
                    onCancel={() => {
                      this.handleShowDelete(i, false);
                    }}
                  >
                    <DeleteOutlined
                      key="delete"
                      onClick={() => {
                        this.handleShowDelete(i, true);
                      }}
                    />
                  </Popconfirm>,
                ]}
              >
                {item.version}
              </Card>
            </List.Item>
          )}
        />
        {/* 新增/编辑service */}
        <ServiceModal
          onSuccess={(data) => {
            this.handleServiceCancel();
            this.init();
          }}
          onCancel={this.handleServiceCancel}
          visible={isShowModal}
          values={formValue}
        />
      </>
    );
  }
}

export default withRouter(ServiceList);