import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface VideoThumbnailModalProps {
  videoId: string;
  className?: string;
}

const VideoThumbnailModal = ({ videoId, className }: VideoThumbnailModalProps) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "relative w-full md:w-48 h-32 rounded-md overflow-hidden border border-border",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "transition-opacity hover:opacity-90",
            className
          )}
          aria-label="Watch video"
        >
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="h-5 w-5 fill-current ml-0.5" />
            </span>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 gap-0 border-0 bg-black overflow-hidden">
        <div className="relative aspect-video w-full">
          <iframe
            src={embedUrl}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoThumbnailModal;
