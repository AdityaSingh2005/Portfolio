import React from 'react'
import contactsData from '../../data/contactsData.json'
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react'

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'email': return <Mail className="w-5 h-5" />
    case 'phone': return <Phone className="w-5 h-5" />
    case 'location': return <MapPin className="w-5 h-5" />
    case 'linkedin': return <Linkedin className="w-5 h-5" />
    default: return <ExternalLink className="w-5 h-5" />
  }
}

export default function Contacts() {
  return (
    <div className="w-full max-w-6xl px-6 py-12 pb-24">
      <h2 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-zinc-100">
        Contact Information
      </h2>

      <div className="mt-10 w-full rounded-lg border border-zinc-100 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-md dark:border-zinc-800 transition-all duration-300 hover:border-indigo-100 dark:hover:border-instagram-900">
        <div className="grid gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {contactsData.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.type === 'external' ? '_blank' : undefined}
              rel={contact.type === 'external' ? 'noopener noreferrer' : undefined}
              className="flex flex-col gap-3 group relative"
            >
              <div className="flex items-center gap-3 text-zinc-400">
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800">
                  {getIcon(contact.label)}
                </div>
                <span className="text-sm font-medium uppercase tracking-wide opacity-70">
                  {contact.label}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-600 transition-colors duration-200 break-words leading-tight">
                  {contact.value}
                </span>
              </div>

            </a>
          ))}
        </div>
      </div>
    </div>
  )
}