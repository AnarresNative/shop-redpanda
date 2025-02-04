// app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface Post {
  title: string;
  date: string;
  contentHtml: string;
}

async function getPostData(slug: string): Promise<Post> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title,
    date: data.date,
    contentHtml,
  };
}

// Allow params to be either a plain object or a promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Note: Do not destructure `params` in the function signature.
export default async function PostPage(props: PageProps) {
  const { slug } = await props.params; // props.params is guaranteed to be a Promise now
  const post = await getPostData(slug);

  return (
    <article style={{ padding: '1rem' }}>
      <h1>{post.title}</h1>
      <p>
        <small>{new Date(post.date).toLocaleDateString()}</small>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
