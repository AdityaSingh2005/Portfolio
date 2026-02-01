import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogsData from '../../data/blogsData.json';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

export default function Blogs() {
  // Take only the first two blogs
  const displayBlogs = blogsData.slice(0, 2);

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <h2 className="mb-12 text-4xl font-bold text-center">Blogs</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Blog Cards */}
        {displayBlogs.map((blog) => (
          <div
            key={blog.id}
            className="group flex h-full flex-col overflow-hidden rounded-md border bg-card text-card-foreground transition-all"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 line-clamp-2 text-xl font-semibold leading-tight">
                {blog.title}
              </h3>

              <p className="mb-6 line-clamp-3 flex-1 text-muted-foreground text-sm">
                {blog.description}
              </p>

              <div className="mt-auto">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-md"
                >
                  <Link href={blog.link} target="_blank" rel="noopener noreferrer">
                    Read
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Read More / View All Section */}
        <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-md border bg-muted/30 p-8 text-center transition-all hover:bg-muted/50">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <ArrowUpRight className="h-8 w-8 text-primary" />
          </div>
          <p className="mb-6 max-w-[200px] text-muted-foreground">
            Check out more of my articles and technical deep dives on Medium.
          </p>
          <Button asChild size="lg" className="rounded-md">
            <Link href="https://medium.com/@adiii11" target="_blank" rel="noopener noreferrer">
              Visit Blog Page
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}