// This is our reusable FeatureCard component.
// It accepts an icon, a title, and a description as "props" (properties).

// We need to tell TypeScript what kind of props to expect.
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    // The main card container with styling.
    <div className="bg-[#111111] p-6 rounded-lg border border-white/10 flex flex-col gap-4">
      <div>
        {/* We'll display the icon we passed in here */}
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}