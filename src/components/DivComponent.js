import react from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import RoundButton from "./RoundButton";

const Container = styled.div`
  z-index: -1;
  background-color: black;
  height: 2000px;
  width: 1520px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  justify-content: space-around;
  justify-items: center;
`;

const Div = styled.div`
  z-index: ;
  height: 250px;
  width: 550px;
  border-radius: 10px;
  background-color: purple;
  grid-column: 1/3;
  grid-row: 1/2;
  margin-top: 80px;
  margin-left: 90px;
  text-align: center !important;
  display: block;
  padding: 24px;
  font-size: 45px;
  font-weight: 700;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Source Sans Pro", sans-serif;
  }
  h3 {
    font-weight: 400;
    font-size: 20px;
  }
`;
const JQdiv = styled(Div)`
  margin-right: 150px;
  background-color: blue;
  grid-column: 3/5;
`;

const JVdiv = styled(Div)`
  grid-column: 1/3;
  grid-row: 2/3;
  background-color: lightblue;
`;

const CppDiv = styled(Div)`
  grid-column: 3/5;
  grid-row: 2/3;
  background-color: gray;
  margin-right: 160px;
`;

function DivComponent({ text }) {
  return (
    <div>
      <Container>
        <Div>
          PHP <h3>A sever programming language</h3>
          <RoundButton></RoundButton>
        </Div>
        <JQdiv>
          JQuery <h3>A JS library for developing web pages</h3>
          <RoundButton></RoundButton>
        </JQdiv>
        <JVdiv>
          Java<h3>A programming language</h3>
          <RoundButton></RoundButton>
        </JVdiv>
        <CppDiv>
          C++<h3>A programming language</h3>
          <RoundButton>Learn Java</RoundButton>
        </CppDiv>

        <ButtonComponent />
      </Container>
    </div>
  );
}
export default DivComponent;
