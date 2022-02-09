import "./styles.css";
import styled from "styled-components";

const Box = styled.div``;
const Row = styled.div`
  display: flex;
  border: 1px solid red;
  height: 40px;
  width: 80%;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  border: 1px solid brown;
`;

export default function App() {
  return (
    <Box>
      <Row>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
      </Row>
      <Row>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
      </Row>
      <Row>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
        <Col size={1}></Col>
      </Row>
    </Box>
  );
}
