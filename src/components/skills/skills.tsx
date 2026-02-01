import React from 'react'
import skillsData from '../../data/skillsData.json'

export default function Skills() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-zinc-100">
        Technical Expertise
      </h2>

      <div className="flex flex-col gap-10">
        {skillsData.map((categoryGroup, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-zinc-800">
              {categoryGroup.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {categoryGroup.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300 rounded-md text-sm font-medium transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}