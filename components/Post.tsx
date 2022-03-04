import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface Posts {
  slug: string;
  frontmatter: Frontmatter;
}

export interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
}

const Post: React.FC<Posts> = ({ frontmatter, slug }) => {
  return (
    <div className="p-4">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src="https://picsum.photos/400/200"
            alt=""
            width={400}
            height={200}
          />
        </a>
        <h2 className="mt-2 ml-4 text-gray-600">Posted: {frontmatter.date}</h2>
        <div className="p-5">
          <Link href={`/blog/${slug}`} passHref>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {frontmatter.title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {frontmatter.excerpt}
          </p>
          <Link href={`/blog/${slug}`} passHref>
            <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
