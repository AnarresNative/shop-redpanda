// app/blog/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import Background_text from '@/components/background_text';
import Srfooter from '@/components/footer';
import Navbar from '@/components/navbar';

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.existsSync(postsDirectory)
    ? fs.readdirSync(postsDirectory)
    : [];

  const posts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath);
      const { data } = matter(fileContents);
      return {
        title: data.title,
        date: data.date,
        slug: data.slug,
        synopsis: data.synopsis, // new field
        image: data.image,       // new field
      };
    })
    // Sort posts so that the newest are first.
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <Navbar />
    <div style={{ padding: '1rem' }}>
      <Background_text background_text="Blog" />
      <h1
        className="text-9xl font-bold mb-6 text-brand-warm-600"
        style={{ position: 'relative', zIndex: 10 }}
      >
        Blog Posts
      </h1>
      {/* Container with a fixed height and vertical scroll */}
      <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2rem',
                borderBottom: '1px solid #ddd',
                paddingBottom: '1rem',
                background: '#faf5eb',
              }}
            >
              {/* Left: Image */}
              <div style={{ flex: '0 0 150px' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={150}
                  height={100} // Adjust the height as needed for your design or aspect ratio.
                  style={{ borderRadius: '4px' }}
                />
              </div>
              {/* Right: Text */}
              <div style={{ marginLeft: '1rem' }}>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p style={{ color: '#666' }}>{post.synopsis}</p>
                <p style={{ fontSize: '0.9rem', color: '#999' }}>
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Srfooter />
    </div>
  );
}
