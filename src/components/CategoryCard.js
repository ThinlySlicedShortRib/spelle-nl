import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category, href, onClick, className = "", layout = "vertical" }) {
  const isHorizontal = layout === "horizontal";
  
  const content = (
    <div className={`bg-gray-700 hover:bg-[#29285C] rounded-lg p-6 transition-all duration-200 group cursor-pointer ${isHorizontal ? 'flex flex-row items-center space-x-4' : 'flex flex-col items-center text-center space-y-3'} ${className}`}
         onClick={onClick}
         tabIndex={0}
         role="button"
    >
      <div className={`${isHorizontal ? 'w-12 h-12 flex-shrink-0' : 'w-12 h-12'} flex items-center justify-center ${isHorizontal ? '' : 'mb-2'}`}>
        <Image 
          src={category.icon || "/img-placeholder.svg"} 
          alt={category.title || category.name} 
          width={48} 
          height={48}
          className="group-hover:scale-110 transition-transform duration-200"
          onError={(e) => {
            e.target.src = "/img-placeholder.svg";
          }}
        />
      </div>
      <div className={isHorizontal ? 'flex flex-col' : ''}>
        <h3 className="text-white font-semibold text-lg">{category.title || category.name}</h3>
        <p className="text-gray-400 text-sm">{category.gameCount || 0} games</p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
} 