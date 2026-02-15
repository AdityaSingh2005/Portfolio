import React from "react";
import Image from "next/image";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Building2,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="font-geist-sans w-full bg-white px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            About Me
          </h2>
        </div>

        {/* Row: image left, text right */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_1.5fr] md:gap-14">
          {/* Left: Profile image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-[280px] w-[280px] overflow-hidden rounded-lg border border-gray-200 shadow-md md:h-[320px] md:w-[320px]">
              <Image
                src="/proflie-image.jpeg"
                alt="Aditya Singh"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 320px"
                priority={false}
              />
            </div>
          </div>

          {/* Right: Intro text only */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 leading-relaxed">
              I am a Full-Stack AI Engineer passionate about building
              intelligent, scalable, and user-focused applications by combining
              AI/ML, LLMs, and automation with modern full-stack technologies
              like Python, JavaScript/TypeScript. Skilled in deep learning, NLP,
              vector databases, and semantic search, I enjoy exploring how AI can
              transform workflows, make accurate predictions, and solve complex
              real-world problems. With strong experience in databases, cloud
              deployment, and CI/CD pipelines.
              <br />
              <br />
              As a side quest, I founded Geek Room, a 1,00,000+ developer
              community that connects students across India through hackathons,
              workshops, and bootcamps, fostering growth and collaboration.
              Driven by curiosity and creativity, I thrive on learning,
              experimenting, and bringing impactful ideas to life at the
              intersection of AI innovation, product development, and community
              building.
            </p>
          </div>
        </div>

        {/* Full-width stats & info card — text hierarchy: hero numbers > text values > labels */}
        <div className="mt-10 w-full rounded-lg border border-gray-100 bg-gray-50/80 p-6">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
            {/* Row 1: numeric stats — largest (hero) size */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-normal tracking-tight text-gray-900">2+</span>
              </div>
              <span className="text-sm font-medium text-gray-500">Year of experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-normal tracking-tight text-gray-900">4</span>
              </div>
              <span className="text-sm font-medium text-gray-500">Companies worked with</span>
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-1.5">
                <span className="text-xl font-normal leading-snug text-gray-900">
                  HDFC, EY, Investec, Apollo
                </span>
              </div>
              <span className="text-sm font-medium text-gray-500">Clients actively worked with</span>
            </div>
            {/* Row 2: education & location — large but subordinate to numbers */}
            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-1.5">
                <span className="text-xl font-normal leading-snug text-gray-900">
                  B.Tech, Computer Science
                </span>
              </div>
              <span className="text-sm font-medium text-gray-500">Degree</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-1.5">
                <span className="text-xl font-normal leading-snug text-gray-900">
                  Indraprastha University
                </span>
              </div>
              <span className="text-sm font-medium text-gray-500">University</span>
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-1.5">
                <span className="text-xl font-normal leading-snug text-gray-900">
                  New Delhi, India
                </span>
              </div>
              <span className="text-sm font-medium text-gray-500">Location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
