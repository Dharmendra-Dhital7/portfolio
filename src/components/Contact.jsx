import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formspree.io/f/xpwkqpod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus(error);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center"
    >
      {/* Contact Form */}

      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 mb-10"
        >
          Feel free to reach out using the form below.
        </motion.p>
      </div>
      {/* form  */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl shadow-md space-y-4"
      >
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg border border-blue-900 focus:ring-2 focus:ring-blue-900 outline-none"
        />

        <motion.input
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg border border-blue-900 focus:ring-2 focus:ring-blue-900 outline-none"
        />

        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-lg border border-blue-900 focus:ring-2 focus:ring-blue-900 outline-none"
        ></motion.textarea>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-700 transition text-white p-3 rounded-lg font-semibold"
        >
          Send Message
        </motion.button>

        {status === "success" && (
          <p className="text-green-400 font-medium text-center">
            ✔ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 font-medium text-center">
            ✖ Something went wrong. Try again later.
          </p>
        )}
      </form>

      {/* Social Links */}
      <div className="flex gap-8 mt-12 text-3xl text-gray-400">
        <a
          href="https://github.com/Dharmendra-Dhital7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:drop-shadow-[0_0_10px_#fff] hover:-translate-y-1 transform transition duration-300 ease-in-out"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dharmendra-dhital-128592290/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:drop-shadow-[0_0_10px_#fff] hover:-translate-y-1 transform transition duration-300 ease-in-out"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Dharmendra23062"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:drop-shadow-[0_0_10px_#fff] hover:-translate-y-1 transform transition duration-300 ease-in-out"
        >
          <FaXTwitter />
        </a>
        <a
          href="mailto:dhitaldharmendra7@gmail.com"
          className="hover:text-white hover:drop-shadow-[0_0_10px_#fff] hover:-translate-y-1 transform transition duration-300 ease-in-out"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
