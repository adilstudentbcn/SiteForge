import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoThumbnail1 from "@assets/stock_images/modern_tech_product__a2fc052a.jpg";
import videoThumbnail2 from "@assets/stock_images/modern_tech_product__ef30447c.jpg";
import videoThumbnail3 from "@assets/stock_images/modern_tech_product__62b9be48.jpg";

interface VideoItem {
  id: number;
  thumbnail: string;
  title: string;
  duration: string;
}

const videos: VideoItem[] = [
  { id: 1, thumbnail: videoThumbnail1, title: "Platform Overview", duration: "3:45" },
  { id: 2, thumbnail: videoThumbnail2, title: "Getting Started Guide", duration: "5:20" },
  { id: 3, thumbnail: videoThumbnail3, title: "Advanced Features", duration: "7:15" },
];

export default function VideoSection() {
  const handlePlayVideo = (videoId: number) => {
    console.log(`Playing video ${videoId}`);
  };

  return (
    <section className="py-24 relative" id="videos">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold tracking-tight">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch our video tutorials and discover how to make the most of our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div 
            className="relative group overflow-hidden rounded-3xl aspect-video cursor-pointer hover-elevate transition-all duration-500 md:col-span-2"
            onClick={() => handlePlayVideo(1)}
            data-testid="video-featured"
          >
            <img 
              src={videos[0].thumbnail} 
              alt={videos[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm hover-elevate active-elevate-2 shadow-[var(--glow-primary)] group-hover:scale-110 transition-transform"
                data-testid="button-play-featured"
              >
                <Play className="w-8 h-8 fill-current" />
              </Button>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-1">
                  {videos[0].title}
                </h3>
                <p className="text-muted-foreground">{videos[0].duration} minutes</p>
              </div>
            </div>

            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-colors duration-300" />
          </div>

          {videos.slice(1).map((video, index) => (
            <div
              key={video.id}
              className="relative group overflow-hidden rounded-2xl aspect-video cursor-pointer hover-elevate transition-all duration-500"
              onClick={() => handlePlayVideo(video.id)}
              data-testid={`video-${video.id}`}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm hover-elevate shadow-[var(--glow-primary)] group-hover:scale-110 transition-transform"
                  data-testid={`button-play-${video.id}`}
                >
                  <Play className="w-6 h-6 fill-current" />
                </Button>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold font-display text-foreground mb-1">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">{video.duration}</p>
              </div>

              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
