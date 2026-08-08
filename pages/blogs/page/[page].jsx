import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import Image from "next/image";

const Blogs = ({ blogs, recentBlogs, todaysBlogs, currentPage, totalPages }) => {
    return (
        <>
        <Head>
            <title>Blogs - Page {currentPage} | IruHost</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Read the latest blogs on IruHost..." />
            <link rel="canonical" href={`https://www.iruhost.com/blogs/page/${currentPage}`} />
        </Head>

        <section className="h-28 flex justify-center items-center bg-accent">
            <h1 className="text-5xl font-semibold">Blogs</h1>
        </section>

        <section className="min-h-screen bg-accent">
            <div className="flex flex-col sm:flex-row gap-3 sm:pl-5">

                {/* LEFT */}
                <div className="w-full sm:w-[75%] flex flex-col-reverse sm:flex-row border-t">

                    {/* Today's Pick */}
                    <div className="w-full sm:w-[30%]">
                        <h2 className="bg-grey p-2 mb-5">Today's Pick</h2>

                        {todaysBlogs.map((blog) => (
                            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
                                <div className="mb-4">
                                    <div className="h-[150px] relative">
                                        <Image src={`https://backend.iruhost.com/uploads/${blog.image}`} fill alt={blog.title} className="object-cover" />
                                    </div>
                                    <h3>{blog.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Main Blogs */}
                    <div className="sm:w-[70%] mt-10 mx-3 sm:mx-10">
                        {blogs.map((blog) => (
                            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
                                <div className="mb-10">
                                    <div className="h-[300px] relative">
                                        <Image src={`https://backend.iruhost.com/uploads/${blog.image}`} fill alt={blog.title} className="object-cover" />
                                    </div>

                                    <h2 className="text-2xl font-bold">{blog.title}</h2>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: blog.content.slice(0, 120) + "..."
                                        }}
                                    />

                                    <p>{blog.writer}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

                {/* Sidebar */}
                <aside className="w-full sm:w-[25%] border-t">
                    <h2 className="bg-grey p-2 mb-5">Most Recent</h2>

                    {recentBlogs.map((blog) => (
                        <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
                            <div className="mb-4">
                                <div className="h-[150px] relative">
                                    <Image src={`https://backend.iruhost.com/uploads/${blog.image}`} fill alt={blog.title} className="object-cover" />
                                </div>
                                <h3>{blog.title}</h3>
                            </div>
                        </Link>
                    ))}
                </aside>
            </div>

            {/* ✅ SEO PAGINATION */}
            <div className="py-10 flex justify-center">
                <ul className="flex gap-2">

                    {currentPage > 1 && (
                        <Link href={`/blogs/page/${currentPage - 1}`}>
                            <li className="px-4 py-2 bg-primary text-white rounded">Prev</li>
                        </Link>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <Link key={num} href={`/blogs/page/${num}`}>
                            <li className={`px-4 py-2 rounded ${num === currentPage ? "bg-primary text-white" : "bg-gray-300"}`}>
                                {num}
                            </li>
                        </Link>
                    ))}

                    {currentPage < totalPages && (
                        <Link href={`/blogs/page/${currentPage + 1}`}>
                            <li className="px-4 py-2 bg-primary text-white rounded">Next</li>
                        </Link>
                    )}

                </ul>
            </div>

        </section>
        </>
    );
};

export default Blogs;


export async function getStaticPaths() {
    const res = await axios.get("https://backend.iruhost.com/api/get-blogs");
    const blogs = res.data;

    const blogsPerPage = 10;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { page: (i + 1).toString() }
    }));

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    const page = parseInt(params.page) || 1;
    const blogsPerPage = 10;

    try {
        const [blogsRes, recentRes, todayRes] = await Promise.all([
            axios.get("https://backend.iruhost.com/api/get-blogs"),
            axios.get("https://backend.iruhost.com/api/get-recent-blogs"),
            axios.get("https://backend.iruhost.com/api/get-todays-blogs"),
        ]);

        const allBlogs = blogsRes.data;

        const start = (page - 1) * blogsPerPage;
        const paginatedBlogs = allBlogs.slice(start, start + blogsPerPage);

        return {
            props: {
                blogs: paginatedBlogs,
                recentBlogs: recentRes.data,
                todaysBlogs: todayRes.data,
                currentPage: page,
                totalPages: Math.ceil(allBlogs.length / blogsPerPage),
            },
            revalidate: 60,
        };

    } catch (error) {
        return {
            props: {
                blogs: [],
                recentBlogs: [],
                todaysBlogs: [],
                currentPage: page,
                totalPages: 1,
            },
            revalidate: 60,
        };
    }
}