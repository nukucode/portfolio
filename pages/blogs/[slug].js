import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Image from "next/image";
import Other from "../../Components/Other";
import client from "../../client";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import SyntaxHighlighter from "react-syntax-highlighter";
const BlockContent = require("@sanity/block-content-to-react");
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Link from "next/link";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;

      if (style === "h1") {
        return (
          <h1 className="text-black font-bold text-2xl py-5">
            {props.children}
          </h1>
        );
      }

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          {
            className: `heading-${level} text-[#333] text-xl font-bold my-2 py-3`,
          },
          props.children
        );
      }

      if (style === "blockquote") {
        return <blockquote className="quote">{props.children}</blockquote>;
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
    code: ({ node = {} }) => {
      const { code, language } = node;
      if (!code) {
        return null;
      }
      return (
        <SyntaxHighlighter
          customStyle={{
            padding: "2rem",
            lineHeight: "25px",
            borderRadius: "5px",
            margin: "2rem 0",
            boxShadow: "rgba(0, 0, 0, 0.55) 0px 5px 20px",
          }}
          showLineNumbers={true}
          language={language || "javascript"}
          style={nightOwl}
        >
          {code}
        </SyntaxHighlighter>
      );
    },
  },
  list: (props) =>
    props.type === "bullet" ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    ),
  listItem: (props) =>
    props.type === "bullet" ? (
      <li className="list-disc">{props.children}</li>
    ) : (
      <li className="list-disc">{props.children}</li>
    ),
  marks: {
    strong: (props) => <strong className="">{props.children}</strong>,
    em: (props) => <em className="text-red-500">{props.children}</em>,

    link: (props) => (
      <Link href={props.mark.href}>
        <a target="_blank" className="text-[#0000EE]">
          {props.children}
        </a>
      </Link>
    ),
  },
};

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
        <meta property="og:url" content="https://therogersak.netlify.app/" />
        <meta property="og:title" content={post?.title} />
        <meta
          property="og:description"
          content="Software Engineer based in India. therogersak software enginner. therogersak"
        />
        <meta property="og:image" content={urlFor(post.mainImage).url()} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://therogersak.netlify.app/"
        />
        <meta property="twitter:title" content={post?.title} />
        <meta
          property="twitter:description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />
        <meta property="twitter:image" content={urlFor(post.mainImage).url()} />
      </Head>
      <div className="w-full">
        <Header />
        <div className="max-w-7xl my-[1rem] mx-auto">
          <div className="max-w-4xl mt-[3rem] mx-auto px-5 ">
            <div className="space-y-5">
              <h1 className="uppercase text-[2rem] md:text-[2.8rem] text-black max-w-[700px] font-extrabold pb-[0.8rem]">
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
                    <p className="text-sm">
                      <span className="font-bold text-black">
                        {post?.author.name} /{" "}
                      </span>
                      <span className="">
                        {prettyDate(new Date(post._createdAt))}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  src={urlFor(post.mainImage).url()}
                  width={1000}
                  height={600}
                  alt={post.title}
                  loading="lazy"
                  className="border rounded-md border-gray-400 shadow-2xl"
                  objectFit="cover"
                />
              </div>

              <div className="pb-5 leading-8  text-gray-600">
                <BlockContent
                  blocks={post.body}
                  imageOptions={{ w: 320, h: 240, fit: "max" }}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
                  serializers={serializers}
                />
              </div>
              <h1 className="uppercase text-[5vw] text-center font-extrabold pb-[2rem]">
                Thanks For Reading
              </h1>
            </div>
          </div>
          <Other />
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
