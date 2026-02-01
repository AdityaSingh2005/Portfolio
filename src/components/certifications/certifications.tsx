import React from 'react'
import Image from 'next/image'
import certificationsData from '../../data/certificationsData.json'
import { ExternalLink } from 'lucide-react'

export default function Certifications() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-zinc-100">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="flex items-center group gap-4 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-all duration-300 group"
          >
            <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-sm border border-zinc-100 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Issued on {cert.issuedOn}
              </p>
            </div>

            <div className="ml-auto block md:hidden group-hover:block">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:underline"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}