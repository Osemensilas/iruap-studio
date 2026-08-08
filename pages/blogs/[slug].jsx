import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '../../styles/Blog.module.css';
import Head from "next/head";

const Blog = ({ blog, slug }) => {

    const [relatedBlog, setRelatedBlog] = useState([]);
    const [otherBlogs, setOtherBlogs] = useState([]);

    const stripHtml = (html) => html?.replace(/<[^>]+>/g, "") || "";


    useEffect(() => {

        if (!slug) return;

        const fetchRelated = async () => {
            let url = "https://backend.iruhost.com/api/get-related-blogs";

            try{
                const response = await axios.post(url, {slug: slug}, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                if (response.data.status === 'success'){
                    setRelatedBlog(response.data.result);
                }
                
            }catch(error){
                console.log("Error fetching related blogs: ", error);
            }
        }

        const fetchOtherBlog = async () => {
            let url = "https://backend.iruhost.com/api/get-other-blogs";

            try{
                const response = await axios.post(url, {slug: slug}, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                if (response.data.status === 'success'){
                    setOtherBlogs(response.data.result);
                }
                
            }catch(error){
                console.log("Error fetching other blogs: ", error);
            }
        }

        fetchRelated();
        fetchOtherBlog();
    }, [slug]);

    return ( 
        <>
        <Head>
            <title>{blog.title} - IruHost Blog</title>
            <meta
                name="description"
                content={blog?.content ? stripHtml(blog.content).slice(0,150) : "IruHost Blog"}
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://iruhost.com/blogs/${slug}`} />
        </Head>
        <section className="h-max min-h-screen w-full bg-accent">
            <article className="h-max w-full">
                <div className="h-max w-full bg-background sm:px-10 px-3 py-10">
                <div className="h-max w-full flex flex-col sm:flex-row items-center">
                    <div className="h-max w-full sm:w-1/2 mb-5 sm:mb-0">
                    <p className="text-grey mb-5 text-sm">
                        By {blog?.writer || "Unknown Author"}{" "}
                        <span className="ml-4">
                        Posted: {blog?.created_at || "N/A"}
                        </span>
                    </p>
                    <h1 className="text-3xl text-accent text-justify font-semibold">
                        {blog?.title}
                    </h1>
                    </div>
                    <div className="h-max w-full sm:w-1/2 flex justify-center">
                    <img
                        src={`https://backend.iruhost.com/uploads/${blog?.image}`}
                        alt={blog?.title || "Blog Image"}
                        className="h-[300px] sm:h-[400px] w-full sm:w-[95%] rounded"
                    />
                    </div>
                </div>
                </div>

                <div className="h-max w-full mt-5 flex items-start pb-10">
                <div
                    className={`${styles.blogContainer} text-text w-full sm:w-[70%] px-10 my-5 text-justify text-base`}
                    dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
                ></div>

                <aside className="w-[30%] h-max relative hidden sm:block">
                    <div className="absolute top-0 left-0 h-max w-max py-2 px-3 bg-grey mb-5">
                    <h2 className="text-accent text-sm text-semibold">
                        Related Posts
                    </h2>
                    </div>
                    <div className="w-full h-full pr-5">
                    {(relatedBlog || []).map((item, index) => (
                        <Link
                        key={index}
                        href={`/blogs/${item.slug}`}
                        className="pr-5 w-full h-max mb-3"
                        >
                        <div className="h-max w-full mb-3">
                            <img
                            src={`https://backend.iruhost.com/uploads/${item.image}`}
                            alt={item.title}
                            className="w-full h-[150px] rounded"
                            />
                        </div>
                        <div className="w-full h-max">
                            <h2 className="font-bold text-base text-text mb-2 text-justify">
                            {item.title}
                            </h2>
                            <p className="text-grey font-normal text-sm">
                            {item.writer}
                            </p>
                        </div>
                        </Link>
                    ))}
                    </div>
                </aside>
                </div>
            </article>

            <div className="w-full h-max pb-10">
                <h2 className="text-base text-text font-bold my-10 text-center">
                Read More
                </h2>
                <div className="h-max w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 px-10">
                {(otherBlogs || []).map((item, index) => (
                    <Link
                    key={index}
                    href={`/blogs/${item.slug}`}
                    className="pr-5 w-full h-max mb-3"
                    >
                    <div className="h-max w-full mb-3">
                        <img
                        src={`https://backend.iruhost.com/uploads/${item.image}`}
                        alt={item.title}
                        className="w-full h-[150px] rounded"
                        />
                    </div>
                    <div className="w-full h-max">
                        <h2 className="font-bold text-base text-text mb-2 text-justify">
                        {item.title}
                        </h2>
                        <p className="text-grey font-normal text-sm">
                        {item.writer}
                        </p>
                        <div
                        dangerouslySetInnerHTML={{
                            __html: item.content?.slice(0, 100) + "...",
                        }}
                        ></div>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
            </section>
        </>
     );
}
 
export default Blog;

export async function getServerSideProps(context) {
    const { slug } = context.params;

    try {
        const res = await axios.get(
            `https://backend.iruhost.com/api/get-blog/${slug}`
        );

        if (res.data.status === "success") {
            return {
                props: {
                    blog: res.data.result,
                    slug
                },
            };
        }
    } catch (error) {
        console.log("SSR Error:", error);
    }

    return {
        notFound: true,
    };
}