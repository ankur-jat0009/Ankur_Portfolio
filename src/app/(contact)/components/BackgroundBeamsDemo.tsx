"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "../../../components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function BackgroundBeamsDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (email.trim() === "" || message.trim() === "") {
      return toast.error("All Fields Are Required!!!");
    }
  
    const templateParams = {
      name: name,
      email: email,  // Sender's Email
      message: message,  // Client's Message
    };
  
    try {
      emailjs
        .send(
          "service_k79zemw", // Your Service ID
          "template_sjjugom", // Your Template ID
          templateParams, // Pass the template parameters here
          "5SWZcGut-KHX9dPHR" // Your Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message Sent Successfully!");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error);
            toast.error("Try Again!");
          }
        );
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="mt-20 sm:mt-0 relative">
        {" "}
     
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          {/* Add relative and z-10 to bring content to the front */}
          <div className="mx-auto max-w-max rounded-full border bg-slate-900 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
              Share Your Thoughts !
            </p>
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl text-center font-sans font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40 bg-opacity-50 capitalize">
            Love to hear from you..!
          </h1>
          <p className="text-neutral-400 max-w-lg mx-auto my-1 text-sm text-center">
            Whether you have feedback, special requests, or simply want to say
            hello, don&apos;t hesitate to reach out to us. Your input helps us
            continually improve and innovate our services.
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit}
            action=""
            className="space-y-4 mt-4"
          >
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-4 bg-neutral-800 placeholder:text-neutral-500 outline-none"
              required
            />
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-4 bg-neutral-800 placeholder:text-neutral-500 outline-none"
              required
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-slate-500 w-full p-4 bg-neutral-800 placeholder:text-neutral-500 outline-none"
              rows={5}
              required
            ></textarea>
            <Button
              type="submit"
              onClick={handleSubmit}
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-medium tracking-wider"
            >
              Send Message !
            </Button>
          </form>
        </div>
      </div>
      <BackgroundBeams />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
