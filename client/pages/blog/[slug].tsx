import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "react-feather";

const PostPage = ({ frontmatter: { title, date }, slug, content }) => {
  return (
    <div className="flex flex-col flex-1 items-center bg-gray-400 pb-8">
      <div className="mt-8 mb-8 bg-gray-200 rounded-md pb-42">
        <Image
          src="https://picsum.photos/600/200"
          className="rounded-t-md"
          alt="filler"
          width={600}
          height={300}
        />
        <div className="mb-4">
          <h1 className="text-4xl mb-2">{title}</h1>
          <span className="mr-3">
            <User className="inline mr-1" />
            Travis Pandos
          </span>
          <span className="mx-2">
            <Calendar className="inline mr-1" />
            {date}
          </span>
        </div>
      </div>
      <div
        className="prose max-w-none lg:prose-xl bg-gray-200 px-8 rounded-md w-3/4"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
};

export default PostPage;
