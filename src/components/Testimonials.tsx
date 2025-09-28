'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const indianLanguageTestimonials = [
  {
    quote:
      "I always wanted to connect with my grandparents in their native tongue. This app made learning Bengali simple and fun!",
    name: "Riya Banerjee",
    title: "Bengali Learner, Kolkata",
  },
  {
    quote:
      "Being from South India, I wanted to pick up Hindi for smoother communication at work. Within 3 months, I was confidently speaking!",
    name: "Arun Kumar",
    title: "Hindi Learner, Chennai",
  },
  {
    quote:
      "I’m an American student learning Sanskrit, and this app helped me explore Indian culture deeply through the language.",
    name: "Emily Brown",
    title: "Sanskrit Learner, USA",
  },
  {
    quote:
      "Learning Marathi through this app helped me bond better with my colleagues in Pune. The conversational practice is amazing!",
    name: "Siddharth Patil",
    title: "Marathi Learner, Pune",
  },
  {
    quote:
      "As someone living in Bangalore, learning Kannada made daily life much easier. From shopping to auto rides, I now feel at home.",
    name: "Fatima Khan",
    title: "Kannada Learner, Bangalore",
  },
];


function IndianLanguageAppTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-slate-black relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        भारतीय सफलता की कहानियाँ: Our Learners Speak
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={indianLanguageTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default IndianLanguageAppTestimonials
