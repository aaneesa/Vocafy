'use client'
import Link from "next/link"
import courseData from "@/data/language_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { Button } from "./ui/moving-border"

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: string
  isFeatured: boolean
  image: string
}

function FeaturedCourses() {
  // limit to 3 featured courses
  const featuredCourses = courseData.courses
    .filter((course: Course) => course.isFeatured)
    .slice(0, 3)

  return (
    <div className="py-16 bg-neutral-950">
      {/* Section Header */}
      <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-sm md:text-base text-red-400 font-semibold tracking-wider uppercase">
                Featured Courses
            </h2>
            <p className="mt-0 text-3xl md:text-4xl font-extrabold text-white leading-snug">
                Learn With the Best
            </p>
            <p className="mt-0 text-neutral-400 text-base max-w-2xl mx-auto">
                Explore our most popular courses handpicked to help you start your journey.
            </p>
            </div>


      {/* Cards */}
      <div className="mt-12 mx-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
                <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* View All */}
      <div className="mt-16 text-center">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
