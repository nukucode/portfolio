import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PortableText from "react-portable-text";
import Image from "next/image";
import Other from "../../Components/Other";
import client from "../../client";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Blog({ post }) {
  function prettyDate(date) {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      months[date.getUTCMonth()] +
      " " +
      date.getUTCDate() +
      ", " +
      date.getUTCFullYear()
    );
  }

  return (
    <>
    <Head>
            <title>{post?.title}</title>
            <meta name="title" content={post?.title} />
            <meta
              name="keywords"
              content="therogersak, therogersak website, rogers, ankit yadav, therogers, therogersak official, usersploit, hacker , coder, programmer , therogersak , rogersak , therogersak instagram, therogers github, github codes , portfolio therogersak, portfolio"
            />
            <meta
              name="description"
              content="Software Engineer based in India, an undergraduate student at Self."
            />

            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://therogersak.netlify.app/"
            />
            <meta
              property="og:title"
              content={post?.title}
            />
            <meta
              property="og:description"
              content="Software Engineer based in India. therogersak software enginner. therogersak"
            />
            <meta
              property="og:image"
              content={urlFor(post.mainImage).url()}
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content="https://therogersak.netlify.app/"
            />
            <meta
              property="twitter:title"
              content={post?.title}
            />
            <meta
              property="twitter:description"
              content="Software Engineer based in India, an undergraduate student at Self."
            />
            <meta
              property="twitter:image"
              content={urlFor(post.mainImage).url()}
            />
          </Head>
      <div className="bg-black w-full">
        <div className="max-w-7xl mx-auto">
          <Header />
          <div className="max-w-4xl mt-[5rem] mx-auto text-white px-5 ">
            <div className="space-y-5">
              <h1 className=" text-[1.8rem] md:text-[2.5rem] max-w-[600px] font-extrabold">
                {post?.title}
              </h1>
              <div className=" ">
                <div className="flex items-center space-x-3">
                  <Image
                    src={urlFor(post.author.image).url()}
                    width={30}
                    height={30}
                    alt="author_img"
                    className="rounded-full"
                    objectFit="cover"
                  />

                  <div className="flex flex-col sm:space-x-10  sm:flex-row">
                    <p className="text-gray-400  text-sm">
                      <span>{post?.author.name} / </span>
                      <span>{prettyDate(new Date(post._createdAt))}</span>
                    </p>
                    <div className="text-sm text-gray-300"></div>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src={urlFor(post.mainImage).url()}
                  objectFit="contain"
                  width={900}
                  height={700}
                  alt={post.title}
                  loading="lazy"
                  className="border rounded-md border-gray-400 shadow-2xl"
                />
              </div>

              <div className="pb-5 leading-8 capitalize  text-gray-400">
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
                  content={post.body}
                  serializers={{
                    h1: (props) => (
                      <h1 className="my-5 text-2xl font-bold" {...props}></h1>
                    ),

                    h2: (props) => (
                      <h1 className="my-5 text-xl font-bold" {...props}></h1>
                    ),

                    h3: (props) => (
                      <h3 className="my-5 text-lg font-bold" {...props}></h3>
                    ),

                    h4: (props) => (
                      <div className="bg-gray-800 shadow-2xl p-5 my-5 rounded-sm relative  break-all ">
                        <p className="whitespace-normal" {...props}></p>

                        <ContentPasteOutlinedIcon className="copy absolute top-3 right-3 font-bold text-white text-[25px]" />
                      </div>
                    ),

                    li: ({ children }) => (
                      <li className="ml-4 list-disc">{children}</li>
                    ),
                    link: ({ children, href }) => (
                      <a href={href} className="text-blue-500 hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          <Other />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Blog;

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
  _id,
  slug {
      current
  }
}`;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  author -> {
    name,
    image
  },
  "comments": *[
    _type == "comment" &&
    post._ref == ^._id && 
    approved == true
  ],
  description,
  mainImage,
  slug,
  body
}`;

  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}
