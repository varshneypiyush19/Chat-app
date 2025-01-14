// // import React, { useEffect, useRef, useState } from "react";
// // import styled from "styled-components";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { allUsersRoute, host } from "../utils/APIRoutes";
// // import Contacts from "../components/Contacts";
// // import Welcome from "../components/Welcome";
// // import ChatContainer from "../components/ChatContainer";
// // import { io } from "socket.io-client";
// // import { toast } from "react-toastify";

// // function Chat() {
// //   const navigate = useNavigate();
// //   const socket = useRef();
// //   const [contacts, setContacts] = useState([]);
// //   const [currentUser, setCurrentUser] = useState(undefined);
// //   const [currentChat, setCurrentChat] = useState(undefined);

// //   useEffect(() => {
// //     async function fetchcurrentuser() {
// //       const storedUser = localStorage.getItem(
// //         process.env.REACT_APP_LOCALHOST_KEY
// //       );
// //       if (!storedUser) {
// //         navigate("/login");
// //       } else {
// //         const parsedUser = JSON.parse(storedUser);
// //         setCurrentUser(parsedUser);
// //       }
// //     }
// //     fetchcurrentuser();
// //   }, [navigate]);

// //   // Initialize socket connection

// //   useEffect(() => {
// //     if (currentUser) {
// //       socket.current = io(host);
// //       socket.current.emit("add-user", currentUser._id);
// //       return () => {
// //         if (socket.current) {
// //           socket.current.disconnect();
// //         }
// //       };
// //     }
// //   }, [currentUser]);

// //   useEffect(() => {
// //     const toastOptions = {
// //       position: "bottom-right",
// //       autoClose: 8000,
// //       pauseOnHover: true,
// //       draggable: true,
// //       theme: "dark",
// //     };
// //     const fetchcurrentuser = async () => {
// //       if (currentUser) {
// //         try {
// //           const { data } = await axios.get(
// //             `${allUsersRoute}/${currentUser._id}`
// //           );
// //           setContacts(data);
// //         } catch (error) {
// //           toast.error("Failed to fetch user data", toastOptions);
// //         }
// //       }
// //     };
// //     fetchcurrentuser();
// //   }, [currentUser]);

// //   const handleChatChange = (chat) => {
// //     setCurrentChat(chat);
// //   };
// //   return (
// //     <Container>
// //       <div className="container">
// //         <Contacts contacts={contacts} changeChat={handleChatChange} />
// //         {currentChat === undefined ? (
// //           <Welcome currentUser={currentUser} />
// //         ) : (
// //           <ChatContainer currentChat={currentChat} socket={socket} />
// //         )}
// //       </div>
// //     </Container>
// //   );
// // }

// // export default Chat;

// // const Container = styled.div`
// //   height: 100vh;
// //   width: 100vw;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   gap: 1rem;
// //   align-items: center;
// //   background-color: #131324;
// //   .container {
// //     height: 85vh;
// //     width: 85vw;
// //     background-color: #00000076;
// //     display: grid;
// //     grid-template-columns: 25% 75%;
// //     @media screen and (min-width: 720px) and (max-width: 1080px) {
// //       grid-template-columns: 35% 65%;
// //     }
// //   }
// // `;

// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { allUsersRoute, host } from "../utils/APIRoutes";
// import Contacts from "../components/Contacts";
// import Welcome from "../components/Welcome";
// import ChatContainer from "../components/ChatContainer";
// import { io } from "socket.io-client";
// import { toast } from "react-toastify";

// function Chat() {
//   const navigate = useNavigate();
//   const socket = useRef();
//   const [contacts, setContacts] = useState([]);
//   const [currentUser, setCurrentUser] = useState(undefined);
//   const [currentChat, setCurrentChat] = useState(undefined);

//   useEffect(() => {
//     async function fetchCurrentUser() {
//       const storedUser = localStorage.getItem(
//         process.env.REACT_APP_LOCALHOST_KEY
//       );
//       if (!storedUser) {
//         navigate("/login");
//       } else {
//         const parsedUser = JSON.parse(storedUser);
//         setCurrentUser(parsedUser);
//       }
//     }
//     fetchCurrentUser();
//   }, [navigate]);

//   // Initialize socket connection
//   useEffect(() => {
//     if (currentUser) {
//       socket.current = io(host);
//       socket.current.emit("add-user", currentUser._id);
//       return () => {
//         if (socket.current) {
//           socket.current.disconnect();
//         }
//       };
//     }
//   }, [currentUser]);

//   useEffect(() => {
//     const toastOptions = {
//       position: "bottom-right",
//       autoClose: 8000,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "dark",
//     };

//     const fetchContacts = async () => {
//       if (currentUser) {
//         try {
//           const { data } = await axios.get(
//             `${allUsersRoute}/${currentUser._id}`
//           );
//           setContacts(data);
//         } catch (error) {
//           toast.error("Failed to fetch user data", toastOptions);
//         }
//       }
//     };

//     fetchContacts();
//   }, [currentUser]);

//   const handleChatChange = (chat) => {
//     setCurrentChat(chat);
//   };

//   return (
//     <Container>
//       <div className="container">
//         <Contacts contacts={contacts} changeChat={handleChatChange} />
//         {currentChat === undefined ? (
//           <Welcome currentUser={currentUser} />
//         ) : (
//           <ChatContainer currentChat={currentChat} socket={socket} />
//         )}
//       </div>
//     </Container>
//   );
// }

// export default Chat;

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;

//   .container {
//     height: 85vh;
//     width: 85vw;
//     background-color: #00000076;
//     display: grid;
//     grid-template-columns: 25% 75%;
//     border-radius: 1rem;
//     box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

//     @media screen and (max-width: 1080px) {
//       width: 95vw;
//       grid-template-columns: 35% 65%;
//     }

//     @media screen and (max-width: 768px) {
//       grid-template-columns: 40% 60%;
//     }

//     @media screen and (max-width: 480px) {
//       grid-template-columns: 100%;
//       grid-template-rows: 50% 50%;
//     }
//   }
// `;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../utils/APIRoutes";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import ChatContainer from "../components/ChatContainer";
import { io } from "socket.io-client";
import { toast } from "react-toastify";

function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 600);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  useEffect(() => {
    async function fetchCurrentUser() {
      const storedUser = localStorage.getItem(
        process.env.REACT_APP_LOCALHOST_KEY
      );
      if (!storedUser) {
        navigate("/login");
      } else {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      }
    }
    fetchCurrentUser();
  }, [navigate]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
    }
  }, [currentUser]);

  useEffect(() => {
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };

    const fetchContacts = async () => {
      if (currentUser) {
        try {
          const { data } = await axios.get(
            `${allUsersRoute}/${currentUser._id}`
          );
          setContacts(data);
        } catch (error) {
          toast.error("Failed to fetch user data", toastOptions);
        }
      }
    };

    fetchContacts();
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
    if (isMobileView) {
      setShowChat(true); // Show chat container in mobile view
    }
  };

  const goBackToContacts = () => {
    if (isMobileView) {
      setShowChat(false); // Return to contacts view in mobile
    }
  };

  return (
    <Container>
      <div
        className={`container ${isMobileView && showChat ? "chat-open" : ""}`}
      >
        {!isMobileView || !showChat ? (
          <Contacts contacts={contacts} changeChat={handleChatChange} />
        ) : null}
        {!isMobileView || showChat ? (
          currentChat === undefined ? (
            <Welcome currentUser={currentUser} />
          ) : (
            <ChatContainer
              currentChat={currentChat}
              socket={socket}
              goBackToContacts={goBackToContacts}
            />
          )
        ) : null}
      </div>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .container {
    height: 90vh;
    width: 100vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 35% 65%;
    border-radius: 1rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 600px) and (max-width: 768px) {
      grid-template-columns: 50% 50%;
    }
    @media screen and (max-width: 600px) {
      width: 95vw;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      &.chat-open {
        grid-template-columns: none;
      }
    }
  }
`;
