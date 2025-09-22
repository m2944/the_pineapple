// app/components/FeatureCard.tsx

type FeatureCardProps = {
  videoSrc: string;
  title: string;
  description: string;
};

export default function FeatureCard({ videoSrc, title, description }: FeatureCardProps) {
  return (
    // Updated styles for the light theme
    <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col gap-4 text-center shadow-sm">
      
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      
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

      <p className="text-gray-600">{description}</p>
    </div>
  );
}