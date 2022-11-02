import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Footer from "../Components/Footer";
import { db } from "../firebaseConfig/Firebase";
import { addDoc, collection, serverTimestamp , setDoc , doc } from "firebase/firestore";

function index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const contactHandler = async (e) => {
      e.preventDefault();
     if(name && email && message && topic && budget){
        setLoading(true);

        const docRef = await setDoc(doc(db, "contacts", (name)), {
          timestamp: serverTimestamp(),
          name: name,
          email: email,
          topic: topic,
          budget: budget,
          message: message,
        });
     }else{
        alert("Please Fill this 😒")
     }

    setName("");
    setEmail("");
    setTopic("");
    setBudget("");
    setMessage("");
    setLoading(false);
  };
  return (
    <>
      <div className="bg-[#0D1117] text-white h-auto">
        <Header />
        <div className="max-w-7xl mx-auto py-[9rem] px-5">
          <h1 className="font-bold text-[2.5rem] leading-12 mb-[3rem]">
            Love to hear from you, <br /> Get in touch👋
          </h1>
          <form className="grid sm:grid-cols-2 gap-4 ">
            <input
              type="text"
              placeholder="Your name"
              className="input-form"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your email"
              className="input-form"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <select
              className="input-form"
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="topic">What you are inerested</option>
              <option value="Frontend-Devloper">Frontend Developer</option>
              <option value="Backend-Devloper">Backend Developer</option>
              <option value="Desgin-Branding">Design Branding</option>
              <option value="Marketing">Marketing</option>
            </select>

            <select
              className="input-form"
              required
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="Project-Budget">Project Budget</option>
              <option value="Frontend-Devloper">$10.00</option>
              <option value="Backend-Devloper">$20.00</option>
              <option value="Desgin-Branding">$50.00</option>
              <option value="Marketing">$100.00</option>
            </select>

            <textarea
              placeholder="Message"
              className="input-form max-w-full h-[150px] sm:col-span-2"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              onClick={(e) => {
                contactHandler(e);
              }}
              className={`bg-gray-400' : 'bg-black h-[45px] flex items-center justify-center gap-2 duration-200 transition-all hover:bg-[#0a0a0a] ${loading ? 'bg-gray-300 opacity-80' : 'bg-black'}`}
            >
              <span>{loading ? 'Message Sended' : 'Just Send'}</span>{" "}
              <ArrowUpRightIcon className="h-5 text-white" />
            </button>

            
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default index;
