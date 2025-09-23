"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const languageLearningContent = [
  {
    title: 'Master Languages Your Way: A Personal Journey in Fluency',
    description:
      'Begin a language learning journey that adapts to your unique pace and style. Our personalized lessons are crafted to meet your goals, making fluency feel natural and achievable.',
  },
  {
    title: 'Cultural Immersion Beyond Words',
    description:
      'Learn not just the language, but the culture behind it. From idioms to traditions, our approach helps you connect with people on a deeper, more authentic level.',
  },
  {
    title: 'Real-Life Conversations & Practice',
    description:
      'Engage in interactive speaking sessions and role-playing exercises that mirror real-world conversations. Gain confidence to communicate effectively in everyday situations.',
  },
  {
    title: 'Live Feedback & Personalized Guidance',
    description:
      'Get instant corrections and guidance from instructors and AI-powered tools. Our feedback system ensures you stay on track and improve with every session.',
  },
  {
    title: 'Smart & Adaptive Curriculum',
    description:
      'Our courses are continuously updated with the latest teaching methods and resources, tailored to your learning progress. Stay motivated with lessons that evolve with you.',
  }
];

function WhyChooseUs() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-black px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
        Why Choose Us?
      </h2>
      <div className="w-full max-w-6xl">
        <StickyScroll content={languageLearningContent} />
      </div>
    </section>
  )
}

export default WhyChooseUs