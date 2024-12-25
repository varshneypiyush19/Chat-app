import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";
const Welcome = () => {
  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   async function name() {
  //     setUserName(
  //       await JSON.parse(
  //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //       ).username
  //     );
  //   }
  //   name();
  // }, []);
  useEffect(() => {
    async function name() {
      const storedUser = localStorage.getItem(
        process.env.REACT_APP_LOCALHOST_KEY
      );
      if (storedUser) {
        try {
          const parsedUser = await JSON.parse(storedUser);
          if (parsedUser && parsedUser.username) {
            setUserName(parsedUser.username);
          } else {
            setUserName("Guest"); // Fallback if username is missing
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
          setUserName("Guest"); // Fallback for JSON parsing error
        }
      } else {
        setUserName("Guest"); // Fallback if no data in local storage
      }
    }
    name();
  }, []);

  return (
    <Container className="welcome">
      <div className="log">
        <Logout />
      </div>
      <img src={Robot} alt="robot" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start Messaging</h3>
    </Container>
  );
};

export default Welcome;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
  .log {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
