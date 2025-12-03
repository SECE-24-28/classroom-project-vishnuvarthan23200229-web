import styled from "styled-components";

export const HelloWorldStyle = styled.div`
  background-color: #f0f2f5;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  .com {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
  }

  h1 {
    color: #1877f2;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .subtitle {
    color: #606770;
    font-size: 1.2rem;
    margin-bottom: 30px;
    font-weight: normal;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #dddfe2;
    border-radius: 6px;
    font-size: 17px;
    background-color: #f5f6f7;
    box-sizing: border-box;
  }

  input[type="text"]:focus, input[type="password"]:focus {
    outline: none;
    border-color: #1877f2;
    background-color: white;
  }

  button {
    background-color: #1877f2;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
  }

  button:hover {
    background-color: #166fe5;
  }

  .forgot-password {
    color: #1877f2;
    text-decoration: none;
    font-size: 14px;
    margin-top: 15px;
    display: block;
  }

  .forgot-password:hover {
    text-decoration: underline;
  }

  .divider {
    border-top: 1px solid #dadde1;
    margin: 20px 0;
  }

  .create-account {
    background-color: #42b883;
    color: white;
    padding: 12px 16px;
    border: none;
    border-radius: 6px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
  }

  .create-account:hover {
    background-color: #369870;
  }
`;