import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleEmojiClick = (event, emoji) => {
    let message = msg;
    message += event.emoji;
    setMsg(message);
  };
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
        <form className="input-container" onSubmit={(e) => sendChat(e)}>
          <input
            type="text"
            placeholder="Type your message here"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button className="submit">
            <IoMdSend />
          </button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  /* grid-template-columns: 5% 95%; */
  background-color: #080420;
  padding: 0 2rem;
  padding-bottom: 0.3rem;

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .EmojiPickerReact {
        position: absolute;
        top: -27rem;
        height: 25rem !important;
        width: 20rem !important;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9186f3;

        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9186f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .search-container {
          background-color: transparent !important;
          border-color: #9186f3 !important;
        }
        .emoji-group:before {
          background-color: #080420;
        }
        .epr_-sisw4f {
          display: none;
        }
        .epr-emoji-category-label {
          background-color: transparent !important;
          border-color: #9186f3 !important;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    background-color: #ffffff34;
    input {
      width: 100%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem;
      padding-left: 0.6rem;
      padding-right: 0.2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        /* padding: 0.3rem 1rem; */
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
