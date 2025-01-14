// import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import ChatInput from "./ChatInput";
// import Logout from "./Logout";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import { sendMessageRoute, receiveMessagesRoute } from "../utils/APIRoutes";

// export default function ChatContainer({ currentChat, socket }) {
//   const [messages, setMessages] = useState([]);
//   const scrollRef = useRef();

//   useEffect(() => {
//     async function fetchMessages() {
//       if (currentChat) {
//         const data = await JSON.parse(
//           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//         );
//         const response = await axios.post(receiveMessagesRoute, {
//           from: data._id,
//           to: currentChat._id,
//         });
//         setMessages(response.data);
//       }
//     }
//     fetchMessages();
//   }, [currentChat]);

//   const handleSendMsg = async (msg) => {
//     const data = await JSON.parse(
//       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//     );

//     const newMessage = { fromSelf: true, message: msg };

//     // Emit socket event
//     socket.current.emit("send-msg", {
//       to: currentChat._id,
//       from: data._id,
//       msg,
//     });

//     // Save to backend
//     await axios.post(sendMessageRoute, {
//       from: data._id,
//       to: currentChat._id,
//       message: msg,
//     });

//     // Update messages state
//     setMessages((prev) => [...prev, newMessage]);
//   };

//   useEffect(() => {
//     if (socket.current) {
//       const socketInstance = socket.current;

//       const handleMessageReceive = (msg) => {
//         const receivedMessage = { fromSelf: false, message: msg };
//         setMessages((prev) => [...prev, receivedMessage]);
//       };

//       // Attach the event listener
//       socketInstance.on("msg-receive", handleMessageReceive);

//       // Cleanup listener to prevent duplication
//       return () => {
//         socketInstance.off("msg-receive", handleMessageReceive);
//       };
//     }
//   }, [socket]);

//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <Container>
//       <div className="chat-header">
//         <div className="user-details">
//           <div className="avatar">
//             <img
//               src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
//               alt="avatar"
//             />
//           </div>
//           <div className="username">
//             <h3>{currentChat.username}</h3>
//           </div>
//         </div>
//         <Logout />
//       </div>
//       <div className="chat-messages">
//         {messages.map((message) => {
//           return (
//             <div ref={scrollRef} key={uuidv4()}>
//               <div
//                 className={`message ${
//                   message.fromSelf ? "sended" : "received"
//                 }`}
//               >
//                 <div className="content">
//                   <p>{message.message}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <ChatInput handleSendMsg={handleSendMsg} />
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: grid;
//   grid-template-rows: 10% 80% 10%;
//   gap: 0.1rem;
//   overflow: hidden;
//   @media screen and (min-width: 720px) and (max-width: 1080px) {
//     grid-template-rows: 15% 70% 15%;
//   }
//   .chat-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0 2rem;
//     .user-details {
//       display: flex;
//       align-items: center;
//       gap: 1rem;
//       .avatar {
//         img {
//           height: 3rem;
//         }
//       }
//       .username {
//         h3 {
//           color: white;
//         }
//       }
//     }
//   }
//   .chat-messages {
//     padding: 1rem 2rem;
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     overflow: auto;
//     &::-webkit-scrollbar {
//       width: 0.2rem;
//       &-thumb {
//         background-color: #ffffff39;
//         width: 0.1rem;
//         border-radius: 1rem;
//       }
//     }
//     .message {
//       display: flex;
//       align-items: center;
//       .content {
//         max-width: 40%;
//         overflow-wrap: break-word;
//         padding: 1rem;
//         font-size: 1.1rem;
//         border-radius: 1rem;
//         color: #d1d1d1;
//         @media screen and (min-width: 720px) and (max-width: 1080px) {
//           max-width: 70%;
//         }
//       }
//     }
//     .sended {
//       justify-content: flex-end;
//       .content {
//         background-color: #4f04ff21;
//       }
//     }
//     .recieved {
//       justify-content: flex-start;
//       .content {
//         background-color: #9900ff20;
//       }
//     }
//   }
// `;

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, receiveMessagesRoute } from "../utils/APIRoutes";

export default function ChatContainer({
  currentChat,
  socket,
  goBackToContacts,
}) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    async function fetchMessages() {
      if (currentChat) {
        const data = await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        );
        const response = await axios.post(receiveMessagesRoute, {
          from: data._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    }
    fetchMessages();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );

    const newMessage = { fromSelf: true, message: msg };

    // Emit socket event
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: data._id,
      msg,
    });

    // Save to backend
    await axios.post(sendMessageRoute, {
      from: data._id,
      to: currentChat._id,
      message: msg,
    });

    // Update messages state
    setMessages((prev) => [...prev, newMessage]);
  };

  useEffect(() => {
    if (socket.current) {
      const socketInstance = socket.current;

      const handleMessageReceive = (msg) => {
        const receivedMessage = { fromSelf: false, message: msg };
        setMessages((prev) => [...prev, receivedMessage]);
      };

      // Attach the event listener
      socketInstance.on("msg-receive", handleMessageReceive);

      // Cleanup listener to prevent duplication
      return () => {
        socketInstance.off("msg-receive", handleMessageReceive);
      };
    }
  }, [socket]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      <div className="chat-header">
        <button className="back-button" onClick={goBackToContacts}>
          {"<"}
        </button>
        <div className="user-details">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt="avatar"
            />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "received"
                }`}
              >
                <div className="content">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 75% 10%;
  gap: 0.1rem;
  overflow: hidden;
  padding-bottom: 1%;
  padding-right: 2%;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    position: relative;
    .back-button {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      background-color: transparent;
      /* background-color: #9a86f3; */
      border: none;
      color: #9a86f3;
      font-size: 2rem;
      cursor: pointer;
      /* padding: 0.2rem; */
      &:hover {
        background-color: #4f04ff21;
        border-radius: 50%;
      }
    }
    @media screen and (min-width: 600px) {
      padding: 0;
      .back-button {
        display: none;
      }
    }
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
