import Header from "@/components/Header";
import Bio from "@/components/Bio";
import GitForMinecraft from "@/components/GitForMinecraft";
import CodeMafia from "@/components/CodeMafia";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Bio />
        <GitForMinecraft />
        <CodeMafia />
        <Projects />
        <Work />
        <Activities />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
