import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

const CardLegacy = ( ) => {

  const projects = [
    {
      title: "Alipay",
      description: "Lorem aliquet est risus pretium, cursus.",
      footer: "Ultrices at viverra",
      time: "7 days ago",
      image: "/image.png",
    },
    {
      title: "Ant Design Pro",
      description: "Ac mauris fermentum arcu felis facilisi.",
      footer: "Cras sed",
      time: "3 years ago",
      image: "/image-2.png",
    },
    {
      title: "Angular",
      description: "Sed facilisis eget elementum quis cum velit massa.",
      footer: "Quis rhoncus",
      time: "3 years ago",
      image: "/image-3.png",
    },
    {
      title: "Bootstrap",
      description: "Purus accumsan in sed vestibulum, tellus, nisl.",
      footer: "Quis dui",
      time: "3 years ago",
      image: "/image-4.png",
    },
    {
      title: "Alipay",
      description: "Elit quam adipiscing semper orci malesuada dignissim.",
      footer: "Cras amet",
      time: "7 days ago",
      image: "/image-5.png",
    },
    {
      title: "React",
      description: "Vel enim pulvinar massa pharetra, ultricies sed.",
      footer: "Phasellus sed",
      time: "3 years ago",
      image: "/image-6.png",
    },
  ];
  
  return (
    <Card bordered={false} style={{ width: 781 }}>
      <Row justify="space-between" align="middle" style={{ padding: "16px 24px" }}>
        <Col>
          <Title level={5}>Ongoing Projects</Title>
        </Col>
        <Col>
          <Text type="primary">All Projects</Text>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col span={8} key={index}>
            <Card hoverable>
              <Row gutter={[16, 16]} align="middle">
                <Col>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Col>
                <Col>
                  <Title level={5}>{project.title}</Title>
                </Col>
              </Row>
              <Paragraph>{project.description}</Paragraph>
              <Row justify="space-between">
                <Col>
                  <Text type="secondary">{project.footer}</Text>
                </Col>
                <Col>
                  <Text type="secondary">{project.time}</Text>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default CardLegacy;