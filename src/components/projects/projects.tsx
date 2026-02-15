import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import projectsData from '../../data/projectsData.json'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

export default function Projects() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-zinc-100">
        Personal Projects
      </h2>

      <div className="px-0 sm:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full pb-16 md:pb-0"
        >
          <CarouselContent>
            {projectsData.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-white dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col md:flex-row">
                  {/* Image Section - No spacing/padding */}
                  {/* <div className="relative w-full md:w-5/12 h-64 md:h-auto bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div> */}

                  {/* Content Section - With padding */}
                  <div className="flex-1 p-4 flex flex-col">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                      {project.title}
                    </h3>

                    <ul className="space-y-2 mb-8 flex-grow">
                      {project.description.map((point, idx) => (
                        <li key={idx} className="flex items-start text-zinc-600 dark:text-zinc-400">
                          <span className="mr-2 mt-2.5 w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0" />
                          <span className="text-base">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-4 mt-auto border-t border-zinc-100 dark:border-zinc-800/50">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white font-medium hover:bg-white hover:text-black border border-black transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Github</span>
                      </Link>
                      {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white font-medium hover:bg-white hover:text-black border border-black transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="bottom-2 left-1/2 -translate-x-10 top-auto translate-y-0 md:-left-12 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:translate-x-0 w-10 h-10"
          />
          <CarouselNext
            className="bottom-2 left-1/2 translate-x-2 top-auto translate-y-0 md:left-auto md:-right-12 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:translate-x-0 w-10 h-10"
          />
        </Carousel>
      </div>
    </div>
  )
}