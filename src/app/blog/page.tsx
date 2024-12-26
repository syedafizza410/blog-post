import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const posts = [
  {
    slug: "why-cats-love-boxes",
    title: "Why Cats Love Boxes",
    description: "Exploring the mystery of cats and their obsession with boxes.",
    image: "/pic8.webp",
  },
  {
    slug: "understanding-purring",
    title: "Understanding Purring",
    description: "Why do cats purr? Is it always a sign of happiness?",
    image: "/pic10.webp",
  },
  {
    slug: "cat-communication",
    title: "Cat Communication",
    description: "Learn how cats communicate with humans and other cats.",
    image: "/pic9.webp",
  },
  {
    slug: "the-secrets-of-cat-naps",
    title: "The Secrets Of Cat Naps",
    description: "Why Do Cats Sleep So Much, and What Do Their Sleeping Habits Reveal About Them?",
    image: "/pic16.jpg",
  },
  {
    slug: "the-cat's-whiskers",
    title: "The Cat's Whiskers",
    description: "More Than Just Adorable Features—Why Whiskers Are Essential to Your Cat’s Life",
    image: "/pic15.jpg",
  },
  {
    slug: "the-language-of-a-cat's-tail",
    title: "The Language Of A Cat's Tail",
    description: "What Your Cat’s Tail Movements Reveal About Their Mood and Intentions",
    image: "/pic17.jpg",
  },
  {
    slug: "why-do-cat's-love-sunbathing",
    title: "Why Do Cats Love Sunbathing?",
    description: "The Science Behind Cats’ Love for Warmth and Sunlight",
    image: "/pic14.webp",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8"
     style={{
      backgroundImage: "url('/pic4.jpg')",
     }}>
      <div className="max-w-3xl mx-auto px-4">
        <ul className="space-y-4">
          <a href="/" className="flex justify-left lg:left-96  text-blue-900">
                  <FaArrowLeft className="mr-2" size={50} />
                </a>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block p-4 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeInZoom"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 lg:h-80 object-cover"
                />
                <h2 className="text-2xl font-semibold text-blue-600 font-bold">{post.title}</h2>
                <p className="text-gray-900">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
