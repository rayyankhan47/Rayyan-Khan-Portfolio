import { ExternalLink } from "lucide-react";
import VideoThumbnailModal from "@/components/VideoThumbnailModal";

const CODE_MAFIA_VIDEO_ID = "sFrKx15_XEM";

const CodeMafia = () => {
  return (
    <section className="content-container py-8">
      <div className="project-card">
        <div className="flex flex-col md:flex-row gap-6">
          <VideoThumbnailModal videoId={CODE_MAFIA_VIDEO_ID} />
          
          <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
              🎮 Currently Building
            </span>
            <span className="text-xs font-mono text-warning-foreground bg-warning/20 border border-warning/30 px-2 py-0.5 rounded">
              🏆 Hackathon Winner!
            </span>
          </div>
            <h3 className="font-mono text-lg font-medium text-foreground mb-2">
              CodeMafia
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Building "Among Us" for coders alongside my friend Ahmad al-Jabi. Our demo video went viral with <strong className="font-extrabold">200k+</strong> views and we have <strong className="font-extrabold">870+</strong> interested users! Interested in playing with your friends on a Discord night?
            </p>
            <a
              href="https://tally.so/r/aQ2kq9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Sign up here
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeMafia;
