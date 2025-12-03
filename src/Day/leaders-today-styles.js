import React from "react";
import "./media.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .capsule {
    background-color: rgb(252, 41, 71);
    border-radius: 200px;
    max-width: 1400px;
    margin-top: 50px;
    padding: 2rem 15rem;
  }

  .heading {
    color: white;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  }

  .sub__heading {
    color: white;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }
`;