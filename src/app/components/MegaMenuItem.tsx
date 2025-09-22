// app/components/MegaMenuItem.tsx
import Link from 'next/link';

type MegaMenuItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  onClick: () => void; // Added the onClick prop
};

export default function MegaMenuItem({ icon, title, description, href, onClick }: MegaMenuItemProps) {
  return (
    <Link 
      href={href} 
      onClick={onClick} // Applied the onClick prop here
      className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <div className="flex-shrink-0 text-green-600 mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
}