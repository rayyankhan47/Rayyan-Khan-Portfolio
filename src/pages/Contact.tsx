import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwpooqva';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-4 py-12">
      <div className="max-w-lg w-full bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out for opportunities, collaborations, or just to connect!</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/rayyankhan1/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-3xl transition" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:rayyankhan47@gmail.com" className="text-blue-400 hover:text-blue-300 text-3xl transition" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input name="name" type="text" required placeholder="Name" className="rounded px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="email" type="email" required placeholder="Email" className="rounded px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="subject" type="text" required placeholder="Subject" className="rounded px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" required placeholder="Message" rows={5} className="rounded px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="mt-2 px-6 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow transition">Send Message</button>
        </form>
        {status === 'success' && <p className="text-green-400 mt-4">Message sent! Thank you.</p>}
        {status === 'error' && <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>}
      </div>
    </section>
  );
};

export default Contact; 