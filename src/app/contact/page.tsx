'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundLines } from "@/components/ui/background-lines";

function LanguageAppContact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="min-h-screen bg-slate-black py-12 pt-36 relative overflow-hidden">
      {/* Background beams */}
      <BackgroundLines className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Contact content */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center">
          Have questions about learning Indian languages, our courses, or
          platform features? We&apos;d love to hear from you! Send us a message
          and our team will get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default LanguageAppContact;
