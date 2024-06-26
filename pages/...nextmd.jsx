import NextMarkdown from "next-markdown";

const nextmd = NextMarkdown({ pathToContent: "./pages-markdown" });

export const getStaticPaths = nextmd.getStaticPaths;
export const getStaticProps = nextmd.getStaticProps;

export default function MarkdownPage({ frontMatter, html, subPaths }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}