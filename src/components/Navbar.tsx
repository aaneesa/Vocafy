'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import coursesData from "../data/language_courses.json"

const languageCourses = coursesData.courses;

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href = {'/'}>
            <MenuItem setActive={setActive} active={active} item = 'Home'>
            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All Language Courses</HoveredLink>
                {languageCourses.map((course) => (
                <HoveredLink key={course.id} href={`/courses`}>
                    {course.title}
                </HoveredLink>
                ))}
            </div>
            </MenuItem>
            <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                
                </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar