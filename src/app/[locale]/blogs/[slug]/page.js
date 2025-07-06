import Image from "next/image";
import Link from "next/link";
import { t } from '@/utils/translations';
import AdBanner from '@/components/AdBanner';

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "top-10-must-play-games-2024": {
    id: 601,
    title: "Top 10 Must-Play Games of 2024",
    slug: "top-10-must-play-games-2024",
    image: "/img-placeholder.svg",
    excerpt: "Discover the most exciting games that are taking the gaming world by storm this year.",
    content: `
      <p>The gaming landscape in 2024 has been nothing short of spectacular, with developers pushing the boundaries of what's possible in interactive entertainment. From breathtaking open-world adventures to innovative indie gems, this year has delivered some truly remarkable experiences.</p>
      
      <h2>1. Cyberpunk 2077: Phantom Liberty</h2>
      <p>CD Projekt Red's redemption story continues with this exceptional expansion. Phantom Liberty not only fixes the base game's issues but adds a compelling spy thriller narrative that rivals the best in the genre. The new district of Dogtown is a masterclass in environmental storytelling.</p>
      
      <h2>2. Baldur's Gate 3</h2>
      <p>Larian Studios has created what many consider the definitive RPG experience. With its deep character customization, branching storylines, and tactical combat, Baldur's Gate 3 sets a new standard for what's possible in the genre.</p>
      
      <h2>3. Starfield</h2>
      <p>Bethesda's ambitious space exploration game offers players an entire galaxy to explore. While it may not be perfect, the sheer scope and freedom it provides make it a must-play for fans of open-world games.</p>
      
      <h2>4. Spider-Man 2</h2>
      <p>Insomniac Games delivers another superhero masterpiece. The expanded map, improved web-swinging mechanics, and compelling narrative make this one of the best superhero games ever made.</p>
      
      <h2>5. Alan Wake 2</h2>
      <p>Remedy Entertainment's long-awaited sequel is a masterclass in survival horror. The game's unique dual-protagonist structure and mind-bending narrative make it a standout in the genre.</p>
      
      <h2>6. Super Mario Bros Wonder</h2>
      <p>Nintendo proves that 2D platformers can still feel fresh and innovative. The Wonder Flower mechanic adds delightful surprises to every level, making this one of the most creative Mario games in years.</p>
      
      <h2>7. Assassin's Creed Mirage</h2>
      <p>Ubisoft returns to the series' roots with this focused, narrative-driven experience. The return to a more linear structure and emphasis on stealth makes this a refreshing change of pace.</p>
      
      <h2>8. Final Fantasy XVI</h2>
      <p>Square Enix's latest entry in the legendary series takes a bold new direction with its action-oriented combat and mature storytelling. The game's epic scale and emotional depth make it a memorable experience.</p>
      
      <h2>9. Street Fighter 6</h2>
      <p>Capcom's latest fighting game entry is a masterclass in accessibility and depth. The new Drive system adds strategic depth while the World Tour mode provides an engaging single-player experience.</p>
      
      <h2>10. Mortal Kombat 1</h2>
      <p>NetherRealm Studios' reboot of the iconic fighting series brings fresh mechanics and a compelling story mode. The Kameo system adds a new layer of strategy to the classic formula.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we move through 2024, the gaming industry continues to evolve and innovate. These games represent the best of what the medium has to offer, combining technical excellence with creative vision. Whether you're a casual player or a hardcore enthusiast, there's something on this list for everyone.</p>
      
      <p>The future of gaming looks brighter than ever, with developers continuing to push boundaries and create experiences that resonate with players worldwide. Stay tuned for more updates and reviews as we continue to explore the best games of 2024.</p>
    `,
    author: "Gaming Expert",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Gaming News",
    tags: ["2024", "Top Games", "Reviews", "Gaming"]
  },
  "evolution-of-mobile-gaming": {
    id: 602,
    title: "The Evolution of Mobile Gaming",
    slug: "evolution-of-mobile-gaming",
    image: "/img-placeholder.svg",
    excerpt: "How mobile games have transformed from simple puzzles to complex multiplayer experiences.",
    content: `
      <p>Mobile gaming has come a long way since the days of Snake on Nokia phones. What started as simple time-killers has evolved into a multi-billion dollar industry that rivals traditional gaming platforms in both revenue and player engagement.</p>
      
      <h2>The Early Days</h2>
      <p>In the early 2000s, mobile games were limited by hardware constraints. Simple puzzle games like Tetris and basic arcade-style games dominated the market. These games were designed to be played in short bursts, perfect for commutes or waiting rooms.</p>
      
      <h2>The Smartphone Revolution</h2>
      <p>The introduction of smartphones with touchscreens and app stores revolutionized mobile gaming. Games like Angry Birds and Temple Run demonstrated the potential of touch-based controls and intuitive gameplay mechanics.</p>
      
      <h2>The Rise of Free-to-Play</h2>
      <p>The free-to-play model, pioneered by games like Clash of Clans, changed the industry forever. This model made games accessible to everyone while providing monetization through in-app purchases and advertisements.</p>
      
      <h2>Console-Quality Experiences</h2>
      <p>Today's mobile devices are powerful enough to run games that rival console experiences. Games like Genshin Impact and PUBG Mobile offer complex gameplay mechanics, stunning graphics, and massive multiplayer experiences.</p>
      
      <h2>The Future of Mobile Gaming</h2>
      <p>With the advent of cloud gaming services and 5G networks, mobile gaming is poised for another revolution. Players can now stream console-quality games directly to their phones, blurring the lines between mobile and traditional gaming.</p>
      
      <h2>Impact on the Industry</h2>
      <p>Mobile gaming has democratized game development, allowing independent developers to reach millions of players worldwide. The success of games like Among Us and Fall Guys on mobile platforms has shown that great gameplay transcends platform boundaries.</p>
      
      <p>As we look to the future, mobile gaming will continue to evolve and innovate, offering players new ways to experience their favorite games and discover new ones.</p>
    `,
    author: "Tech Writer",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Mobile Gaming",
    tags: ["Mobile", "Evolution", "Technology", "Gaming"]
  },
  "best-strategy-games-beginners": {
    id: 603,
    title: "Best Strategy Games for Beginners",
    slug: "best-strategy-games-beginners",
    image: "/img-placeholder.svg",
    excerpt: "Perfect entry points for newcomers to the strategy genre.",
    content: `
      <p>Strategy games can be intimidating for newcomers, with their complex mechanics and steep learning curves. However, there are plenty of excellent strategy games that are perfect for beginners while still offering depth and challenge.</p>
      
      <h2>What Makes a Good Beginner Strategy Game?</h2>
      <p>A good beginner strategy game should have clear tutorials, intuitive mechanics, and gradual complexity progression. It should also provide immediate feedback and allow players to learn from their mistakes without being overly punishing.</p>
      
      <h2>Top Picks for Beginners</h2>
      
      <h3>1. Civilization VI</h3>
      <p>While Civilization VI is complex, it's also one of the most accessible 4X games. The game provides excellent tutorials and tooltips, and players can start with simpler victory conditions before tackling more complex strategies.</p>
      
      <h3>2. Into the Breach</h3>
      <p>This turn-based strategy game is perfect for beginners because it shows you exactly what will happen before you make your move. The game's deterministic nature makes it easy to understand and plan your strategies.</p>
      
      <h3>3. XCOM 2</h3>
      <p>While XCOM 2 can be challenging, its turn-based nature gives players time to think and plan. The game's clear mechanics and visual feedback make it easier to understand than real-time strategy games.</p>
      
      <h3>4. Stellaris</h3>
      <p>Paradox Interactive's space strategy game is surprisingly accessible for newcomers. The game starts simple and gradually introduces complexity, allowing players to learn at their own pace.</p>
      
      <h2>Tips for New Strategy Players</h2>
      <p>Start with games that offer good tutorials and don't be afraid to play on easier difficulty settings. Focus on learning one aspect of the game at a time, and don't worry about making mistakes - they're part of the learning process.</p>
      
      <p>Strategy games offer some of the most rewarding experiences in gaming, and with the right entry point, anyone can enjoy the genre's depth and complexity.</p>
    `,
    author: "Strategy Guru",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Strategy Games",
    tags: ["Strategy", "Beginners", "Gaming", "Tips"]
  }
};

// Related blogs data
const relatedBlogs = [
  {
    id: 604,
    title: "Gaming Trends to Watch in 2024",
    slug: "gaming-trends-2024",
    image: "/img-placeholder.svg",
    excerpt: "From AI integration to cloud gaming, here's what's shaping the future of gaming.",
    author: "Industry Analyst",
    date: "2024-01-08",
    readTime: "7 min read"
  },
  {
    id: 605,
    title: "How to Build the Perfect Gaming Setup",
    slug: "perfect-gaming-setup",
    image: "/img-placeholder.svg",
    excerpt: "Essential tips and recommendations for creating an optimal gaming environment.",
    author: "Setup Specialist",
    date: "2024-01-05",
    readTime: "10 min read"
  },
  {
    id: 606,
    title: "The Psychology Behind Addictive Games",
    slug: "psychology-addictive-games",
    image: "/img-placeholder.svg",
    excerpt: "Understanding what makes certain games so compelling and engaging.",
    author: "Psychologist",
    date: "2024-01-03",
    readTime: "9 min read"
  }
];

// Metadata for SEO
export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const blog = blogPosts[slug];
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${blog.title} - Spelle.nl Blog`,
    description: blog.excerpt,
    keywords: blog.tags?.join(', ') || 'gaming, blog, news',
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      locale: locale,
      publishedTime: blog.date,
      authors: [blog.author],
    },
  };
}

export default async function BlogPage({ params }) {
  const { locale, slug } = await params;
  const blog = blogPosts[slug];
  
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-6">The requested blog post could not be found.</p>
          <Link 
            href={`/${locale}/blogs`}
            className="bg-[var(--brand-active)] text-white px-6 py-3 rounded-lg hover:bg-[var(--brand-active)]/80 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--brand-background)] via-[#121252] to-[var(--brand-background)] p-12">
      {/* Hero Section */}
      <div className="relative p-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 pt-16 pb-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li>
                  <Link href={`/${locale}`} className="hover:text-white transition-colors">
                    {t(locale, 'nav.home', 'Home')}
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href={`/${locale}/blogs`} className="hover:text-white transition-colors">
                    {t(locale, 'nav.blogs', 'Blogs')}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">{blog.title}</li>
              </ol>
            </nav>
            
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[var(--brand-active)] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
                <span className="text-gray-400 text-sm">{blog.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{blog.author.charAt(0)}</span>
                  </div>
                  <span>{blog.author}</span>
                </div>
                <span>{new Date(blog.date).toLocaleDateString(locale, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdBanner showPlaceholder={true} className="text-center" />
      
      {/* Article Content */}
      <div className="py-10">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
          
          {/* Tags */}
          {blog.tags && (
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-white font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-[var(--brand-active)] hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <AdBanner showPlaceholder={true} className="text-center" />
      
      {/* Related Blogs */}
      <div className="py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedBlog) => (
              <Link
                key={relatedBlog.id}
                href={`/${locale}/blogs/${relatedBlog.slug}`}
                className="block bg-gray-700 hover:bg-[#29285C] rounded-lg overflow-hidden transition-all duration-200 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={relatedBlog.image} 
                    alt={relatedBlog.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-[var(--brand-active)] transition-colors">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {relatedBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{relatedBlog.author}</span>
                    <span>{relatedBlog.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 