import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PortableText from "react-portable-text";
import Image from "next/image";
import Other from "../../Components/Other";
import client from "../../client";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import SyntaxHighlighter from "react-syntax-highlighter";
const BlockContent = require("@sanity/block-content-to-react");
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level} text-black text-xl font-bold my-2` },
          props.children
        );
      }

      if (style === "blockquote") {
        return <blockquote>- {props.children}</blockquote>;
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
          wrapLongLines
          customStyle={{
            padding: "2rem",
            borderRadius: "5px",
            margin: "2rem 0",
            boxShadow: "rgba(0, 0, 0, 0.55) 0px 20px 68px",
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
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    )),
  listItem: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <li>{props.children}</li>
    ) : (
      <li>{props.children}</li>
    )),
  marks: {
    strong: (props) =>
      console.log("strong", props) || <strong>{props.children}</strong>,
    em: (props) => console.log("em", props) || <em>{props.children}</em>,
    code: (props) =>
      console.log("code", props) || <code>{props.children}</code>,
  },
};

function Blog({ post }) {
  console.log(post.body);

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
        <div className="max-w-7xl mt-[1rem] mx-auto">
          <div className="max-w-4xl mt-[3rem] mx-auto px-5 ">
            <div className="space-y-5">
              <h1 className=" text-[1.8rem] md:text-[2.5rem] text-black max-w-[600px] font-extrabold">
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
                    <p className="text-green-400  text-sm">
                      <span>{post?.author.name} / </span>
                      <span>{prettyDate(new Date(post._createdAt))}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  src={urlFor(post.mainImage).url()}
                  objectFit="contain"
                  width={1000}
                  height={700}
                  alt={post.title}
                  loading="lazy"
                  className="border rounded-md border-gray-400 shadow-2xl"
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
