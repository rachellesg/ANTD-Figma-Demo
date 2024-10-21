import React from "react";
import { Row, Col, Card, Typography, Table, Pagination } from "antd";
import { CaretUpOutlined, CaretDownOutlined, InfoCircleOutlined, MoreOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const dataSource = [
  { key: '1', rank: 'text', keyword: 'John Brown', users: 'text', status: 'Status' },
  { key: '2', rank: 'text', keyword: 'John Brown', users: 'text', status: 'Status' },
  { key: '3', rank: 'text', keyword: 'John Brown', users: 'text', status: 'Status' },
  { key: '4', rank: 'text', keyword: 'John Brown', users: 'text', status: 'Status' },
  { key: '5', rank: 'text', keyword: 'John Brown', users: 'text', status: 'Status' },
];

const columns = [
  { title: 'Rank', dataIndex: 'rank', key: 'rank' },
  { title: 'Keyword', dataIndex: 'keyword', key: 'keyword', render: text => <a>{text}</a> },
  { title: 'Users', dataIndex: 'users', key: 'users' },
  { title: 'Weekly Range', dataIndex: 'status', key: 'status', render: text => <span><CaretUpOutlined /> {text}</span> },
];

const SearchCard = () => {
  return (
    <Card bordered={false} style={{ width: 580 }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={5}>Online Top Search</Title>
        </Col>
        <Col>
          <MoreOutlined />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card bordered={false}>
            <Row justify="space-between" align="middle">
              <Col>
                <Text>Search Users</Text>
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: 8 }}>
              <Col>
                <Title level={3}>12,321</Title>
              </Col>
              <Col>
                <Text>17.1 <CaretUpOutlined /></Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Row justify="space-between" align="middle">
              <Col>
                <Text>Per Capita Search</Text>
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Col>
            </Row>
            <Row align="middle" style={{ marginTop: 8 }}>
              <Col>
                <Title level={3}>2.7</Title>
              </Col>
              <Col>
                <Text>26.2 <CaretUpOutlined /></Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: 16 }} />
      <Pagination defaultCurrent={1} total={50} style={{ textAlign: 'right', marginTop: 16 }} />
    </Card>
  );
};

export default SearchCard;