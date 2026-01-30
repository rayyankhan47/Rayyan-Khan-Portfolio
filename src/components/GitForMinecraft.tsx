import { ExternalLink } from "lucide-react";
import VideoThumbnailModal from "@/components/VideoThumbnailModal";

const GIT_FOR_MINECRAFT_VIDEO_ID = "ZdM-iNpv3nU";

const GitForMinecraft = () => {
  return (
    <section className="content-container py-8">
      <div className="project-card">
        <div className="flex flex-col md:flex-row gap-6">
          <VideoThumbnailModal videoId={GIT_FOR_MINECRAFT_VIDEO_ID} />
          
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
              Git for Minecraft
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Built a Minecraft-native development environment that introduces version control and 3D diffing to Minecraft. The demo video went viral with <strong className="font-extrabold">220k+</strong> views!
            </p>
            <a
              href="https://youtu.be/ZdM-iNpv3nU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Watch the demo here
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitForMinecraft;
