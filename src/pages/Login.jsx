// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import Logo from "../assets/frienz_logo.png";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { loginRoute } from "../utils/APIRoutes";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Add this line to import the icons

// export default function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };

//   useEffect(() => {
//     if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (handleVaildation()) {
//       try {
//         const { username, password } = values;
//         const { data } = await axios.post(loginRoute, { username, password });
//         if (data.status === false) {
//           toast.error(data.msg, toastOptions);
//         } else {
//           localStorage.setItem(
//             process.env.REACT_APP_LOCALHOST_KEY,
//             JSON.stringify(data.user)
//           );
//           navigate("/");
//         }
//       } catch (error) {
//         toast.error("Something went wrong. Please try again.", toastOptions);
//       }
//     }
//   };

//   const handleVaildation = () => {
//     const { username, password } = values;
//     if (!username) {
//       toast.error("Username and Password is required.", toastOptions);
//       return false;
//     }
//     if (!password) {
//       toast.error("Username and Password is required.", toastOptions);
//       return false;
//     }
//     return true;
//   };

//   return (
//     <>
//       <FormContainer>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <div className="brand">
//             <img src={Logo} alt="Logo" />
//             <h1>Frienz</h1>
//           </div>
//           <input
//             type="text"
//             placeholder="Username"
//             name="username"
//             onChange={(e) => handleChange(e)}
//             min="3"
//           ></input>
//           <div className="password-container">
//             <input
//               type={showPassword ? "text" : "password"} // Toggle password visibility
//               placeholder="Password"
//               name="password"
//               onChange={(e) => handleChange(e)}
//             />
//             <span
//               onClick={() => setShowPassword((prev) => !prev)} // Toggle state
//               className="toggle-password"
//             >
//               {showPassword ? <FaEye /> : <FaEyeSlash />}
//             </span>
//           </div>
//           <button type="submit">Login</button>
//           <span>
//             Already have an account ?<Link to="/register"> Register</Link>
//           </span>
//         </form>
//       </FormContainer>
//       <ToastContainer />
//     </>
//   );
// }

// const FormContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     img {
//       height: 5rem;
//     }
//     h1 {
//       color: white;
//       text-transform: uppercase;
//     }
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 3rem 5rem;
//     .password-container {
//       position: relative;
//       input {
//         width: 100%;
//       }
//       .toggle-password {
//         position: absolute;
//         right: 10px;
//         top: 50%;
//         transform: translateY(-50%);
//         cursor: pointer;
//         color: white;
//       }
//     }
//     input {
//       background-color: transparent;
//       padding: 1rem;
//       border: 0.1rem solid #4e0eff;
//       border-radius: 0.4rem;
//       color: white;
//       width: 100%;
//       font-size: 1rem;
//       &:focus {
//         border: 0.1rem solid #997af0;
//         outline: none;
//       }
//     }
//     button {
//       background-color: #997af0;
//       color: white;
//       padding: 1rem 2rem;
//       border: none;
//       font-weight: bold;
//       cursor: pointer;
//       border-radius: 0.4rem;
//       font-size: 1rem;
//       text-transform: uppercase;
//       transition: 0.5s ease-in-out;
//       &:hover {
//         background-color: #4e0eff;
//       }
//     }
//     span {
//       color: white;
//       text-transform: uppercase;
//       a {
//         color: #4e0eff;
//         text-decoration: none;
//         font-weight: bold;
//       }
//     }
//   }
// `;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/frienz_logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Add this line to import the icons

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleVaildation()) {
      try {
        const { username, password } = values;
        const { data } = await axios.post(loginRoute, { username, password });
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else {
          localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(data.user)
          );
          navigate("/");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.", toastOptions);
      }
    }
  };

  const handleVaildation = () => {
    const { username, password } = values;
    if (!username) {
      toast.error("Username and Password is required.", toastOptions);
      return false;
    }
    if (!password) {
      toast.error("Username and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>Frienz</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)} // Toggle state
              className="toggle-password"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <button type="submit">Login</button>
          <span>
            Already have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
      font-size: 2rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    width: 100%;
    max-width: 400px; /* Max width for larger screens */

    .password-container {
      position: relative;
      input {
        width: 100%;
      }
      .toggle-password {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        color: white;
      }
    }

    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }

    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .brand {
      gap: 0.5rem;
      h1 {
        font-size: 1.5rem;
      }
    }

    form {
      padding: 2rem 3rem;
    }

    input,
    button {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .brand {
      gap: 0.3rem;
      h1 {
        font-size: 1.2rem;
      }
    }

    form {
      padding: 1.5rem 2rem;
      max-width: 90%; /* Full width for very small screens */
    }

    input,
    button {
      font-size: 0.8rem;
    }
  }
`;
