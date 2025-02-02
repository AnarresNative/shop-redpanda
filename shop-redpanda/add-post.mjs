#!/usr/bin/env node
// add-post.mjs

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

(async () => {
  try {
    // Prompt the user for post details.
    const { title, slug, content } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the post title:',
      },
      {
        type: 'input',
        name: 'slug',
        message: 'Enter the post slug (URL-friendly, e.g., "my-first-post"):',
      },
      {
        type: 'editor',
        name: 'content',
        message: 'Enter the post content (your default editor will open):',
      },
    ]);

    // Get the current date.
    const date = new Date().toISOString();

    // Create Markdown content with YAML frontmatter.
    const mdContent = `---
title: "${title}"
date: "${date}"
slug: "${slug}"
---
${content}
`;

    // Define the path to the /posts folder (create it if it doesn't exist).
    const postsDirectory = path.join(process.cwd(), 'posts');
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory);
    }

    // Write the new Markdown file.
    const filePath = path.join(postsDirectory, `${slug}.md`);
    fs.writeFileSync(filePath, mdContent);

    console.log(`Post created successfully at ${filePath}`);
  } catch (error) {
    console.error('Error creating post:', error);
  }
})();
