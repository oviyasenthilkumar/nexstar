// import Image from 'next/image';

// const blogs = [
//   {
//     title: 'Why Value is Collaborative in a Multipolar World',
//     desc: 'In a multipolar world, where power is distributed among multiple states rather than concentrated in a single entity, value is inherently collaborative.',
//     image: '/Trending Blogs/first.png',
//     link: '#',
//     tag: 'Industry News',
//   },
//   {
//     title: 'Technology as Open Progress: The Future of Business',
//     desc: 'In a multipolar world, where power is distributed among multiple states rather than concentrated in a single entity, value is inherently collaborative.',
//     image: '/Trending Blogs/second.png',
//     link: '#',
//     tag: 'Industry News',
//   },
//   {
//     title: 'From Silos to Ecosystems: A Natural Revolution',
//     desc: 'In a multipolar world, where power is distributed among multiple states rather than concentrated in a single entity, value is inherently collaborative.',
//     image: '/Trending Blogs/third.png',
//     link: '#',
//     tag: 'Industry News',
//   },
// ];

// export default function TrendingBlogs() {
//   return (
//     <section className="w-full py-16 bg-gradient-to-b from-white to-[#f6f8ff] flex flex-col items-center">
//       <h2 className="text-black text-5xl font-bold text-center mb-4">Trending Blogs</h2>
//       <p className="text-center text-gray-500 max-w-2xl mb-12">
//         Explore our insights into the era of ecosystems. Here, we share ideas that challenge assumptions and redefine paradigms:
//       </p>
//       <div className="flex flex-col md:flex-row gap-8 justify-center mb-10 w-full max-w-6xl">
//         {blogs.map((blog, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-2xl shadow-md flex flex-col w-full md:w-1/3 max-w-sm mx-auto"
//           >
//             <div className="h-48 w-full relative rounded-t-2xl overflow-hidden">
//               <Image
//                 src={blog.image}
//                 alt={blog.title}
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 priority={idx === 0}
//               />
//             </div>
//             <div className="p-6 flex flex-col flex-1">
//               <h3 className="text-black font-semibold text-lg mb-2 leading-snug">{blog.title}</h3>
//               <p className="text-gray-600 text-sm mb-4 flex-1">{blog.desc}</p>
//               <div className="flex items-center justify-between mt-auto">
//                 <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded">{blog.tag}</span>
//                 <a
//                   href={blog.link}
//                   className="text-[#3B4FFF] font-semibold text-sm flex items-center gap-1 hover:underline"
//                 >
//                   Read More
//                   <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="ml-1">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="bg-[#3B4FFF] text-white px-10 py-3 rounded-full font-semibold text-lg shadow hover:bg-[#2536c7] transition">
//         View All
//       </button>
//     </section>
//   );
// }
import Image from "next/image";

const blogs = [
  {
    title: "Why Value is Collaborative in a Multipolar World",
    desc: "In a multipolar world, where power is distributed among multiple states rather than concentrated in a single entity, value is inherently collaborative.",
    image: "/Trending Blogs/first.png",
    link: "#",
    tag: "Industry News",
  },
  {
    title: "Technology as Open Progress: The Future of Business",
    desc: "In a multipolar world, where power is distributed among multiple states rather than concentrated in a single entity, value is inherently collaborative.",
    image: "/Trending Blogs/second.png",
    link: "#",
    tag: "Industry News",
  },
  {
    title: "From Silos to Ecosystems: A Natural Revolution",
    desc: "In a multipolar world, where power is distributed among multiple states rather than concentrated in a single entity, value is inherently collaborative.",
    image: "/Trending Blogs/third.png",
    link: "#",
    tag: "Industry News",
  },
];

export default function TrendingBlogs() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-[#f6f8ff] flex flex-col items-center">
      <h2
        className="
          text-black
          font-sora
          text-[28px] sm:text-[32px] md:text-[48px]
          font-semibold
          text-center
          mb-4
          w-full sm:w-[372px] mx-auto
          leading-[35px] md:leading-[44px]
          opacity-100
          whitespace-normal md:whitespace-nowrap
        "
      >
        Trending Blogs
      </h2>
      <p className="text-center font-normal text-gray-500 max-w-xl mb-12">
        Explore our insights into the era of ecosystems. Here, we share ideas
        that challenge assumptions and redefine paradigms:
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-10 w-full max-w-6xl px-4">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md flex flex-col w-full md:w-1/3 max-w-sm mx-auto transition hover:shadow-lg"
          >
            <div className="h-48 w-full relative rounded-t-2xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-black font-sora font-semibold text-xl mb-2 leading-snug line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-[#5C5E60] font-league-spartan font-normal text-lg mb-4 flex-1 line-clamp-3">
                {blog.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="bg-gray-100 text-[#7B808A] text-sm font-league-spartan font-mdedium  px-3 py-1 rounded">
                  {blog.tag}
                </span>
                <a
                  href={blog.link}
                  className="text-[#545CF6] font-semibold text-xl flex items-center gap-1 hover:underline transition"
                >
                  Read More
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#545CF6] font-semibold text-xl text-white px-10 py-3 rounded-full font-semibold text-lg shadow hover:bg-[#545CF6] transition">
        View All
      </button>
    </section>
  );
}


