// app/components/FeatureCard.tsx

// The component's props are updated to accept a video source string
type FeatureCardProps = {
  videoSrc: string;
  title: string;
  description: string;
};

export default function FeatureCard({ videoSrc, title, description }: FeatureCardProps) {
  return (
    // The main card container with styling
    <div className="bg-gray-900 p-6 rounded-lg border border-white/10 flex flex-col gap-4 text-center">
      
      {/* The title is now at the top */}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      
      {/* The new video element */}
      <div className="aspect-video overflow-hidden rounded-md">
        <video 
          src={videoSrc}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* The description is at the bottom */}
      <p className="text-gray-400">{description}</p>
    </div>
  );
}