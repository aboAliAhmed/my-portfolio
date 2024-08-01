import Boi from "@/components/boi";
import ContactUs from "@/components/contact-us";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return ( 
    <main className="bg-gradient-lbg dark:bg-gradient-dbg animate-gradient">
      <Header />
      <Boi />
      <Skills />
      <Projects />
      <ContactUs />
    </main>
  );
}
