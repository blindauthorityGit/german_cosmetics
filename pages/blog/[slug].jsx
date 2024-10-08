import React from "react";
import client from "../../client";
import Head from "next/head";
import { useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

import Navbar from "../../components/nav/navbar";
import BehandlungTop from "../../components/sections/behandlungTop";
import PageHero from "../../components/sections/pageHero";
import Footer from "../../components/sections/footer";
import ImageBox from "../../components/sections/imageBox";
import LinkBox from "../../components/sections/linkBox";
import BlogSwiperMore from "../../components/sections/blogSwiperMore";
import BlogOverviewElement from "../../components/sections/blogOvervieElement";
import FullWidthSwiper from "../../components/sections/fullWidthSwiper";
import StackedImgs from "../../components/sections/stackedImgs";
import InlineImgs from "../../components/sections/inlineImgs";
import Breadcrumbs from "../../components/sections/breadcrumbs";

import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

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
    const resMain = await client.fetch(
        `*[_type in ["aesthetic_home", "cosmetics_kontakt", "cosmetics_settings", "aesthetic_komponente"]&& _id != "12ef8e69-f114-48e0-a647-63158111ee86" ]`
    );
    const resData = await resMain;

    const blogData = await client.fetch(`*[_type in ["blogEntry"] ]`);
    const resBlog = await blogData;

    return {
        props: {
            post: data[0],
            resData,
            blogData,
        },
    };
};

const BlogPage = ({ post, resData, blogData }) => {
    return (
        <>
            <Head>
                <title>{post.seo.seo_title}</title>
                <meta name="description" content={post.seo.description} />
            </Head>
            <Navbar
                strasse={resData[2].adresse.strasse}
                ort={resData[2].adresse.ort}
                phone={resData[2].kontakt.phone}
                email={resData[2].kontakt.email}
                value={resData[2].oeffnungszeiten}
                logoLight={urlFor(resData[3].logo.logo_light)}
                logoDark={urlFor(resData[3].logo.logo_dark)}
            ></Navbar>
            <PageHero headline={post.title} showButton={false}>
                <div className="relative w-full h-full lg:max-h-[550px]">
                    <Image
                        src={urlFor(post.blog_settings.featuredImg).url()}
                        fill
                        style={{ objectFit: "cover" }} // To ensure it covers the whole space
                        alt="hero"
                    />
                </div>
            </PageHero>
            <Breadcrumbs
                first="Blog"
                firstHref="/blog"
                second={post.blog_settings.slug.current}
                secondHref={post.blog_settings.slug.current}
            ></Breadcrumbs>
            <BehandlungTop
                klasse="pt-2"
                date={post.blog_settings.date.split("-").reverse().join("-")}
                headline={post.title}
                valueLeft={post.blog_settings.content}
            ></BehandlungTop>
            {post.blog_settings.gallery && post.blog_settings.gallery.display === "carousel" && (
                <FullWidthSwiper data={post.blog_settings.gallery.images} width="1485" height="816"></FullWidthSwiper>
            )}
            {post.blog_settings.gallery && post.blog_settings.gallery.display === "stacked" && (
                <StackedImgs style="2rem!important" data={post.blog_settings.gallery.images}></StackedImgs>
            )}
            {post.blog_settings.gallery && post.blog_settings.gallery.display === "inline" && (
                <InlineImgs style="2rem!important" data={post.blog_settings.gallery.images}></InlineImgs>
            )}

            <BlogSwiperMore data={blogData} slug={post.blog_settings.slug.current}>
                <div className="absolute w-[100%] h-[240px] bg-[#EEF0F2] top-0 sm:top-[20%]"></div>
            </BlogSwiperMore>

            <Footer
                logo={urlFor(resData[3].logo.logo_light)}
                strasse={resData[2].adresse.strasse}
                ort={resData[2].adresse.ort}
                phone={resData[2].kontakt.phone}
                email={resData[2].kontakt.email}
                value={resData[2].oeffnungszeiten}
            ></Footer>
        </>
    );
};

export default BlogPage;
