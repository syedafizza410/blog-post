import Image from "next/image";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
        <Image
          src="/pic2.jpg"
          alt="Cat Nature Logo"
          width={500}
          height={600}
          className="mx-auto mb-6 hover:shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeInZoom"
        />
      <div className="max-w-3xl mx-auto px-4 text-center mt-28">
        <h1 className="text-5xl font-bold text-blue-900 hover:underline mb-6">
          Welcome to Cats Nature Blog
        </h1>
        <p className="text-3xl text-black hover:underline">
          Dive into the world of cats and discover interesting facts, behavior,
          and much more.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-700 text-white text-xl font-medium py-3 px-6 rounded-lg mt-6 shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeInZoom"
        >
           Login to View Blogs
        </a>
      </div>
      <Image
          src="/pic1.jpg"
          alt="Cat Nature Logo"
          width={400}
          height={100}
          className="mx-auto mb-6 mt-20 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeInZoom"
        />
    </div>
  );
}
