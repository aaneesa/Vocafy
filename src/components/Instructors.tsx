'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const languageMentors = [
  {
    id: 1,
    name: 'Aditi Sharma',
    designation: 'Hindi Mentor',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Rahul Menon',
    designation: 'Malayalam Mentor',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Kavya Reddy',
    designation: 'Telugu Mentor',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Arjun Singh',
    designation: 'Punjabi Mentor',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
];

function LanguageMentors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Language Mentors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Learn Indian languages with expert tutors guiding you every step of the way
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={languageMentors} />
        </div>
    </div>
  )
}

export default LanguageMentors
