// Contact.js
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Contact Us</h3>

            <div className="mt-4 space-y-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded outline-none"
                {...register("name", { required: "This field is required" })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded outline-none"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Type your message"
                className="w-80 px-3 py-1 border rounded outline-none"
                {...register("message", { required: "This field is required" })}
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
