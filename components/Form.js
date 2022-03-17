import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fwkv9yi",
        "template_5z284ge",
        form.current,
        "fullStackJosh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-row justify-center w-full">
      <form
        className="flex flex-col w-full mx-8 mt-20 bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <label className="block text-gray-700 text-sm font-bold mb-5">Name</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="user_name" />
        <label className="block text-gray-700 text-sm font-bold my-5">Email</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="user_email" />
        <label className="block text-gray-700 text-sm font-bold my-5">Message</label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" />
        <button className="block text-white bg-new-blue hover:bg-josh-yellow text-sm h-9 rounded-lg font-bold my-5" type="submit">Send</button>
      </form>
    </div>
  );
};
