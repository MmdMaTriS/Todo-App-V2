import React from "react";
import PropTypes from "prop-types";
//Design-System Sources and Components
import { Steps, Button, Row, Col } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  CheckOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

export default function Todo({ data, dispatch }) {
  return (
    <div style={{ paddingTop: "23px" }}>
      <Steps style={{ fontFamily: "MmdReg" }}>
        <Step
          status={data.isDone ? "finish" : data.isStart ? "finish" : "process"}
          title={data.title}
          icon={<SolutionOutlined />}
        />

        <Step
          status={data.isDone ? "finish" : data.isStart ? "process" : "wait"}
          title={
            data.isDone ? "Good Job" : data.isStart ? "Working" : "Start ?"
          }
          icon={
            data.isDone ? (
              <CheckOutlined />
            ) : data.isStart ? (
              <LoadingOutlined />
            ) : (
              <ExclamationCircleOutlined />
            )
          }
        />
        <Step
          status={data.isDone ? "finish" : "wait"}
          title="Done"
          icon={<SmileOutlined />}
        />
      </Steps>
      <Row style={{ textAlign: "center" }}>
        <Col span={8}>
          <Button
            onClick={() => dispatch({ type: "todoStarted", payload: data.id })}
            type={data.isStart ? "danger" : "default"}
          >
            Task Started
          </Button>
        </Col>
        <Col span={8}>
          <Button
            onClick={() => dispatch({ type: "changed", payload: data.id })}
            type={data.isDone ? "danger" : "default"}
          >
            Task Finished
          </Button>
        </Col>
        <Col span={8}>
          <Button
            danger
            onClick={() => dispatch({ type: "remove", payload: data.id })}
          >
            Remove Task
          </Button>
        </Col>
      </Row>
    </div>
  );
}

Todo.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    isStart: PropTypes.bool.isRequired,
  }).isRequired,
};
