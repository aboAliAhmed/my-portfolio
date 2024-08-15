import Boi from "@/components/pages/boi";
import ContactUs from "@/components/pages/contact-us";
import Header from "@/components/pages/header";
import Projects from "@/components/pages/projects";
import Skills from "@/components/pages/skills";

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
