
  import { Card, Col, Input, Layout, Row, Typography } from "antd";
  import React from "react";
import Sidebar from "../components/Sidebar";
  
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;
  
  const Dashboard = () => {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header style={{ background: "#fff", padding: "0 16px" }}>
            <Title level={2} style={{ margin: 0 }}>
              Dashboard
            </Title>
            <Text>
              Here is where you can loream ipsum bla bla bal etc etc ect
            </Text>
          </Header>
          <Content style={{ margin: "16px" }}>
            <Card title="Ongoing Projects" extra={<a href="#">All Projects</a>}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card>
                    <Card.Meta
                      avatar={
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Alipay"
                          style={{ borderRadius: "50%" }}
                        />
                      }
                      title="Alipay"
                      description="Lorem aliquet est risus pretium, cursus."
                    />
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Text>Ultrices at viverra</Text>
                      <Text>7 days ago</Text>
                    </div>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Card.Meta
                      avatar={
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Angular"
                          style={{ borderRadius: "50%" }}
                        />
                      }
                      title="Angular"
                      description="Sed facilisis eget elementum quis cum velit massa."
                    />
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Text>Quis rhoncus</Text>
                      <Text>3 years ago</Text>
                    </div>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Card.Meta
                      avatar={
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Alipay"
                          style={{ borderRadius: "50%" }}
                        />
                      }
                      title="Alipay"
                      description="Elit quam adipiscing semper orci malesuada dignissim."
                    />
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Text>Cras amet</Text>
                      <Text>7 days ago</Text>
                    </div>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Card.Meta
                      avatar={
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Ant Design Pro"
                          style={{ borderRadius: "50%" }}
                        />
                      }
                      title="Ant Design Pro"
                      description="Ac mauris fermentum arcu felis facilisi."
                    />
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Text>Cras sed</Text>
                      <Text>3 years ago</Text>
                    </div>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Card.Meta
                      avatar={
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Bootstrap"
                          style={{ borderRadius: "50%" }}
                        />
                      }
                      title="Bootstrap"
                      description="Purus accumsan in sed vestibulum, tellus, nisl."
                    />
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Text>Quis dui</Text>
                      <Text>3 years ago</Text>
                    </div>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <Card.Meta
                      avatar={
                        <img
                          src="https://via.placeholder.com/40"
                          alt="React"
                          style={{ borderRadius: "50%" }}
                        />
                      }
                      title="React"
                      description="Vel enim pulvinar massa pharetra, ultricies sed."
                    />
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Text>Phasellus sed</Text>
                      <Text>3 years ago</Text>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
            <Card
              title="Card Title"
              style={{ marginTop: "16px" }}
              extra={<a href="#">More</a>}
            >
              <Row gutter={16}>
                <Col span={8}>
                  <Text>Label</Text>
                  <Input placeholder="example" />
                </Col>
                <Col span={8}>
                  <Text>Effective Date</Text>
                  <Input placeholder="Reminder Date" />
                </Col>
                <Col span={8}>
                  <Text>Label</Text>
                  <Input placeholder="example" />
                </Col>
              </Row>
            </Card>
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default Dashboard;