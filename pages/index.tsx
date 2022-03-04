import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Post from "../components/Post";

import { GetStaticProps } from "next";

export default function Home({ posts }) {
  return (
    <div className="w-full">
      <Head>
        <title>Dev Blog</title>
      </Head>
      {posts.map((post, index) => (
        <Post slug={post.slug} frontmatter={post.frontmatter} key={index} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // temp get files locally until server is set up
  const files = fs.readdirSync(path.join("posts"));

  // get slug and front matter
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
