import LandingPage from "@/components/landingPage";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";
import Certifications from "@/components/certifications/certifications";
import Skills from "@/components/skills/skills";
import Blogs from "@/components/blogs/blogs";
import Contacts from "@/components/contacts/contacts";
import PageDecorations from "@/components/decorations/PageDecorations";

export default function Home() {
  return (
    <div className="relative">
      {/* Scrollable graffiti: each decoration starts in one section and ends in another */}
      {/* <PageDecorations /> */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start">
        <LandingPage />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Blogs />
        <Contacts />
      </div>
    </div>
  );
}
