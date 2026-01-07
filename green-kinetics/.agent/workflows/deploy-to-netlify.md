---
description: Deploying PowerLink Solutions to Netlify
---

# Deploying to Netlify

Your project is configured for easy deployment on Netlify.

### Option 1: Drag and Drop (Not recommended for Next.js SSR)
Since this is a Next.js App Router project with Server Side Rendering, you should **NOT** use drag-and-drop. You should connect it to a Git repository.

### Option 2: Deploy via Git (Recommended)

1.  **Push your code** to GitHub, GitLab, or Bitbucket.
2.  **Log in to Netlify**.
3.  Click **"Add new site"** -> **"Import an existing project"**.
4.  Select your Git provider and repository.
5.  **Build Settings:** Netlify should automatically detect Next.js.
    *   **Build command:** `npm run build`
    *   **Publish directory:** `.next`
6.  Click **Deploy**.

### Manual CLI Deployment

If you have the Netlify CLI installed:

1.  Run `netlify login`
2.  Run `netlify init`
3.  Follow the prompts (Create & configure a new site).
4.  Run `netlify deploy --prod`

### Configuration Notes

*   **`netlify.toml`**: We have verified this file is correctly configured for Next.js.
*   **Env Vars**: If you add any environment variables (like API keys), remember to add them in Netlify Site Settings > Environment Variables.
