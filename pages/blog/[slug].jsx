import React from "react";
import client from "../../client";

export const getStaticPaths = async () => {
    const resBlog = await client.fetch(`*[_type in ["blogEntry"] ]`);
    const data = await resBlog;

    const paths = data.map((e) => {
        return {
            params: { slug: e.blog_settings.slug.current },
        };
    });
    // console.log(paths);
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const res = await client.fetch(`*[_type == "blogEntry" && blog_settings.slug.current == "${slug}"]
    `);
    const data = await res;
    // console.log(slug, res);

    return {
        props: {
            post: data[0],
        },
    };
};

const BlogPage = ({ post }) => {
    return (
        <div>
            <h1>TEST</h1>
            {/* {console.log(data)} */}
            {post.title}
        </div>
    );
};

export default BlogPage;
