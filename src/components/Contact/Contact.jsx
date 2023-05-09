import React from "react";
import vg from "../../assets/vg.png";
import { useState } from "react";
import toast from "react-hot-toast";

import { motion } from "framer-motion";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    setDisableBtn(true);
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      setDisableBtn(false);
      setEmail("");
      setName("");
      setMessage("");
      toast.success("Message Sent Successfully");
    } catch (error) {
      toast.error("Error Sending The Message Try Again");
      setDisableBtn(false);
      console.log(error);
    }
  };

  const animations = {
    form: {
      initial: {
        x: "-100",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
      transition: {
        delay: 0.2,
      },
    },

    button: {
      initial: {
        y: "-100",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },

      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>

          <input
            type="text"
            placeholder="You'r Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="You'r Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="You'r Message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <motion.button
            className={disableBtn ? "disableBtn" : ""}
            disabled={disableBtn}
            {...animations.button}
            type="submit"
          >
            SEND
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
