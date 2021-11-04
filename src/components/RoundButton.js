import React from "react";
import styled from "styled-components";

const RoundedButton = styled.button`
  background-color: #04aa6d;
  color: white;
  font-size: 18px;
  margin: auto;
  display: block;
  width: 200px;
  border-radius: 25px;
  margin-bottom: 16px !important;
  font-family: "Source Sans Pro", sans-serif;
`;

const RoundedButton1 = styled(RoundedButton)`
  background-color: pink;
`;
const RoundedButton2 = styled(RoundedButton)``;
const RoundedButton3 = styled(RoundedButton)``;
const RoundedButton4 = styled(RoundedButton)``;

function RoundButton({ texts }) {
  return (
    <div>
      <RoundedButton2>Learn JQuery</RoundedButton2>
    </div>
  );
}

export default RoundButton;
