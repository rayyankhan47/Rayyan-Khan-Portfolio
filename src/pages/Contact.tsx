import React, { useState } from 'react';

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
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div>
          <h1 className="mb-4">Contact</h1>
          <p className="text-gray-700">
            Feel free to reach out for opportunities, collaborations, or just to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href="mailto:rayyankhan47@gmail.com"
                className="text-gray-700 hover:text-black"
              >
                rayyankhan47@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/rayyankhan1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                linkedin.com/in/rayyankhan1
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/rayyankhan47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                github.com/rayyankhan47
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-black transition resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition"
              >
                Send Message
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-700">Message sent successfully! Thank you.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
