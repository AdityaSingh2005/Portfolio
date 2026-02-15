import React from 'react'
import { ArrowRight, FileText } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="font-geist-sans flex min-h-screen flex-col items-center justify-center bg-white p-8">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-2xl font-normal text-gray-800">Hello,</p>
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">
          I am Aditya Singh
        </h1>
        <p className="text-2xl font-medium text-amber-600">
          Software Engineer
        </p>

        <div className="mt-4 flex items-center gap-2">
        <a
          href="https://drive.google.com/file/d/1meGJlfhzlr2qsQwDh1Uw9Nt447aNdLMA/view?pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-38 justify-center group rounded-lg bg-gray-900 px-6 py-3 text-base font-normal text-white transition hover:bg-gray-800"
        >
          Resume <FileText className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/adiii11/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-38 justify-center group rounded-lg bg-gray-900 px-6 py-3 text-base font-normal text-white transition hover:bg-gray-800"
        >
          LinkedIn <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        </div>
      </div>
    </div>
  )
}