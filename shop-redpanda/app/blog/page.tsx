// app/blog/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Background_text from '@/components/background_text';
import Footer from '@/components/footer';

// Create an async function to fetch posts from the file system.
async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.existsSync(postsDirectory) ? fs.readdirSync(postsDirectory) : [];
  
  const posts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        title: data.title,
        date: data.date,
        slug: data.slug,
      };
    })
    // Sort posts so that the newest are first.
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function BlogPage() {
  // Fetch posts on the server.
  const posts = await getPosts();

  return (
    <div style={{ padding: '1rem' }}>
      <Background_text background_text={"Blog"}/>
      <h1 className="text-9xl font-bold mb-6 text-brand-warm-600/100 relative z-10" >Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li className="z-50 capitalize" key={post.slug} style={{ marginBottom: '1rem' }}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
            <small> Date: {new Date(post.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
