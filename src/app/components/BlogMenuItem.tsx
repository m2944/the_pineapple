// app/components/BlogMenuItem.tsx
import Link from 'next/link';
import Image from 'next/image';

type BlogMenuItemProps = {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
  onClick: () => void;
};

export default function BlogMenuItem({ imageSrc, title, description, href, onClick }: BlogMenuItemProps) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <div className="flex-shrink-0 mr-4">
        <Image 
          src={imageSrc}
          alt={title}
          width={64} // 4rem
          height={64} // 4rem
          className="rounded-md object-cover w-16 h-16"
        />
      </div>
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
}