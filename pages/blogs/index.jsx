export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/blogs/page/1",
      permanent: false,
    },
  };
}

export default function Blogs() {
  return null;
}

// import Link from "next/link";
// import Head from "next/head";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";


// const Blogs = ({ blogs, recentBlogs, todaysBlogs }) => {

//     const [currentPage, setCurrentPage] = useState(1);
//     const blogsPerPage = 10;

//     const indexOfLast = currentPage * blogsPerPage;
//     const indexOfFirst = indexOfLast - blogsPerPage;
//     const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);
//    const totalPages = Math.ceil(blogs.length / blogsPerPage);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     return (
//         <>
//         <Head>
//             <title>Blogs Page - IruHost</title>
//             <meta name="robots" content="index, follow" />
//             <meta name="description" content="Read the latest blogs on IruHost..." />
//             <link rel="canonical" href="https://www.iruhost.com/blogs" />
//         </Head>
//         <section className="h-28 w-screen bg-accent flex justify-center items-center">
//             <h1 className="text-5xl text-text font-semibold">Blogs</h1>
//         </section>
//         <section className="min-h-screen h-max w-screen bg-accent">
//             <div className="h-max w-full flex flex-col sm:flex-row items-start gap-3 pl-0 sm:pl-5">
//                 <div className="h-max w-full sm:w-[75%] border-t border-grey flex flex-col-reverse sm:flex-row items-start">
//                     <div className="relative w-full sm:w-[30%] h-max">
//                         <div className="abosolute top-0 left-0 h-max w-max py-2 px-3 bg-grey mb-5">
//                             <h2 className="text-accent text-sm text-semibold">Today's Pick</h2>
//                         </div>
//                         {
//                             todaysBlogs.map((recentBlog, index) => (
//                                 <Link key={index} href={`/blogs/${recentBlog.slug}`} className="pr-5 w-full h-max mb-3">
//                                     <div className="h-[150px] w-full mb-3">
//                                         <Image src={`https://backend.iruhost.com/uploads/${recentBlog.image}`} alt={recentBlog.title} className="object-cover rounded" fill />
//                                     </div>
//                                     <div className="w-full h-max">
//                                         <h2 className="font-bold text-base text-text mb-2 text-justify">{recentBlog.title}</h2>
//                                         <p className="text-grey font-normal text-sm">{recentBlog.writer}</p>
//                                     </div>
//                                 </Link>
//                             ))
//                         }
//                     </div>
//                     <div className="sm:w-[70%] h-max mt-10 mx-3 sm:mx-10">
//                     {
//                         currentBlogs.map((blog, index) => (
//                             <Link key={index} href={`/blogs/${blog.slug}`} className="pr-0 sm:pr-5 w-full h-max mb-3">
//                                 <div className="h-[300px] w-full mb-3">
//                                     <Image src={`https://backend.iruhost.com/uploads/${blog.image}`} alt={blog.title} fill className="object-cover rounded" />
//                                 </div>
//                                 <div className="w-full h-max mb-5">
//                                     <h2 className="font-bold text-2xl text-text mb-2 text-justify">{blog.title}</h2>
//                                     <div
//                                     dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 100) + "..." }}
//                                     ></div>
//                                     <p className="text-grey font-normal text-sm">{blog.writer}</p>
//                                 </div>
//                             </Link>
//                         ))
//                     }
//                     </div>
//                 </div>
//                 <aside className="w-full sm:w-[25%] h-max border-t border-grey relative">
//                     <div className="abosolute top-0 left-0 h-max w-max py-2 px-3 bg-grey mb-5">
//                         <h2 className="text-accent text-sm text-semibold">Most Recent</h2>
//                     </div>
//                     <div className="w-full h-full pr-5">
//                         {
//                             recentBlogs.map((recentBlog, index) => (
//                                 <Link key={index} href={`/blogs/${recentBlog.slug}`} className="pr-5 w-full h-max mb-3">
//                                     <div className="h-[150px] w-full mb-3">
//                                         <Image src={`https://backend.iruhost.com/uploads/${recentBlog.image}`} fill alt={recentBlog.title} className="object-cover rounded" />
//                                     </div>
//                                     <div className="w-full h-max">
//                                         <h2 className="font-bold text-base text-text mb-2 text-justify">{recentBlog.title}</h2>
//                                         <p className="text-grey font-normal text-sm">{recentBlog.writer}</p>
//                                     </div>
//                                 </Link>
//                             ))
//                         }
//                     </div>
//                 </aside>
//             </div>
//             <div className="h-max w-full py-10 flex items-center justify-center">
//                 <ul className="h-max w-max flex items-center">
//                     <li className="h-max w-max">
//                         <button
//                         className={`py-2 px-5 rounded bg-primary text-accent text-base mr-5 disabled:opacity-50
//                             ${currentPage === 1 ? "hidden" : ""}
//                             `}
//                         disabled={currentPage === 1}
//                         onClick={() => paginate(currentPage - 1)}
//                         >
//                         Prev
//                         </button>
//                     </li>
//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
//                         <li key={num} className="h-max w-max">
//                         <button
//                             onClick={() => paginate(num)}
//                             className={`p-2 rounded mx-2 ${
//                             num === currentPage
//                                 ? "bg-primary text-accent"
//                                 : "bg-text text-accent"
//                             }`}
//                         >
//                             {num}
//                         </button>
//                         </li>
//                     ))}
//                     <li className="h-max w-max">
//                         <button
//                         className={`py-2 px-5 rounded bg-primary text-accent text-base ml-5 disabled:opacity-50
//                             ${currentPage === totalPages ? "hidden" : ""}
//                             `}
//                         disabled={currentPage === totalPages}
//                         onClick={() => paginate(currentPage + 1)}
//                         >
//                         Next
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </section>
//         </>
//      );
// }
 
// export default Blogs;

// export async function getStaticProps() {
//     try {
//         const [blogsRes, recentRes, todayRes] = await Promise.all([
//             axios.get("https://backend.iruhost.com/api/get-blogs"),
//             axios.get("https://backend.iruhost.com/api/get-recent-blogs"),
//             axios.get("https://backend.iruhost.com/api/get-todays-blogs"),
//         ]);
        
//         return {
//             props: {
//                 blogs: blogsRes.data,
//                 recentBlogs: recentRes.data,
//                 todaysBlogs: todayRes.data,
//             },
//             revalidate: 60, // regenerate every 60 seconds
//         };
//     } catch (error) {
//         return {
//             props: {
//                 blogs: [],
//                 recentBlogs: [],
//                 todaysBlogs: [],
//             },
//             revalidate: 60,
//         };
//     }
// }