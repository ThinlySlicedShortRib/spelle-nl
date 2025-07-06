import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoryTag({ category, onClick, className = "" }) {
  const params = useParams();
  const locale = params.locale || "en";

  const tagContent = (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-blue-300 mr-2 mb-2 cursor-pointer hover:bg-[var(--brand-active)] hover:text-white transition group ${category.color || ""} ${className}`}
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      {category.name}
      {category.count ? <span className="ml-2 text-gray-400 group-hover:text-white">({category.count})</span> : null}
    </span>
  );

  // If onClick is provided, use the span directly
  if (onClick) {
    return tagContent;
  }

  // Otherwise, wrap in a Link for navigation
  return (
    <Link href={`/${locale}/categories/${category.slug}`}>
      {tagContent}
    </Link>
  );
} 