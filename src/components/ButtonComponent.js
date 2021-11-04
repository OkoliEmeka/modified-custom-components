import react from "react";
import styled from "styled-components";
import DivComponent from "./DivComponent";

const LargeContainer = styled.div`
  display: grid;
  grid-template-colums: 25% 25% 25% 25%;
  grid-column-gap: 120px;
  grid-row-gap: 50px;
  justify-content: space-around;
  margin-left: 1300px;
  margin-top: 50px;
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-colums: 25% 25% 25% 25%;
  grid-column-gap: 120px;
  grid-row-gap: 50px;
  justify-content: space-around;
  margin-left: 1300px;
`;
const Button = styled.button`
  background-color: lightblue;
  font-size: 35px;
  border-radius: 10px;
  height: 100px;
  font-weight: 500;
  width: 250px;
  margin-top: 20px;
  color: black;

  grid-row: 1/2;
`;
const Button1 = styled(Button)`
  background-color: pink;
  grid-column: 2/3;
  grid-row: 1/2;
`;
const Button2 = styled(Button)`
  background-color: blue;
  grid-column: 3/4;
  grid-row: 1/2;
`;
const Button3 = styled(Button)`
  background-color: gold;
  grid-column: 4/5;
  grid-row: 1/2;
`;

const Button4 = styled(Button)`
  background-color: purple;
  grid-column: 1/2;
  grid-row: 2/3;
`;
const Button5 = styled(Button)`
  background-color: blue;
  grid-column: 2/3;
  grid-row: 2/3;
`;
const Button6 = styled(Button)`
  background-color: blue;
  grid-column: 3/4;
  grid-row: 2/3;
`;
const Button7 = styled(Button)`
  background-color: lightgreen;
  grid-column: 4/5;
  grid-row: 2/3;
`;
const Button8 = styled(Button)`
  background-color: yellow;
  grid-column: 1/2;
  grid-row: 3/4;
`;
const Button9 = styled(Button)`
  background-color: orange;
  grid-column: 2/3;
  grid-row: 3/4;
`;
const Button10 = styled(Button)`
  background-color: lightblue;
  grid-column: 3/4;
  grid-row: 3/4;
`;
const Button11 = styled(Button)`
  background-color: gold;
  grid-column: 4/5;
  grid-row: 3/4;
`;
const Button12 = styled(Button)`
  background-color: grey;
  grid-column: 1/2;
  grid-row: 4/5;
`;
const Button13 = styled(Button)`
  background-color: purple;
  grid-column: 2/3;
  grid-row: 4/5;
`;
const Button14 = styled(Button)`
  background-color: green;
  grid-column: 3/4;
  grid-row: 4/5;
`;
const Button15 = styled(Button)`
  background-color: mediumturquoise;
  grid-column: 4/5;
  grid-row: 4/5;
`;
const Button16 = styled(Button)`
  background-color: pink;
  grid-column: 1/2;
  grid-row: 5/6;
`;
const Button17 = styled(Button)`
  background-color: gray;
  grid-column: 2/3;
  grid-row: 5/6;
`;
const Button18 = styled(Button)`
  background-color: yellow;
  grid-column: 3/4;
  grid-row: 5/6;
`;
const Button19 = styled(Button)`
  background-color: lightblue;
  grid-column: 4/5;
  grid-row: 5/6;
`;
const Button20 = styled(Button)`
  background-color: lightgreen;
  grid-column: 1/3;
  grid-row: 1/2;
  width: 600px;
`;
const Button21 = styled(Button)`
  background-color: lightgreen;
  grid-column: 3/5;
  grid-row: 1/2;
  width: 600px;
`;
const Button22 = styled(Button)`
  background-color: lightgreen;
  grid-column: 1/3;
  grid-row: 2/3;
  width: 600px;
`;
const Button23 = styled(Button)`
  background-color: lightgreen;
  grid-column: 3/5;
  grid-row: 2/3;
  width: 600px;
`;

function ButtonComponent({ textss }) {
  return (
    <div>
      <ButtonContainer>
        <Button>Kotlin</Button>
        <Button1>C#</Button1>
        <Button2>R</Button2>
        <Button3>NodeJS</Button3>
        <Button4>MySQL</Button4>
        <Button5>W3.JS</Button5>
        <Button6>RWD</Button6>
        <Button7>React</Button7>
        <Button8>JSON</Button8>
        <Button9>AngularJS</Button9>
        <Button10>SaSS</Button10>
        <Button11>Icons</Button11>
        <Button12>SVG</Button12>
        <Button13>Canvas</Button13>
        <Button14>Graphics</Button14>
        <Button15>NumPy</Button15>
        <Button16>Go</Button16>
        <Button17>SciPy</Button17>
        <Button18>NumPy</Button18>
        <Button19>AppML</Button19>
      </ButtonContainer>
      <LargeContainer>
        <Button20>Pandas</Button20>
        <Button21>Excel</Button21>
        <Button22>Machine Learning</Button22>
        <Button23>Google Sheets</Button23>
      </LargeContainer>
    </div>
  );
}

export default ButtonComponent;
