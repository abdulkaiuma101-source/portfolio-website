/**
 * Fetch latest posts from a Headless WordPress site via its REST API.
 * Returns an array of post objects: { tag, title, desc, link }
 */
export async function getWordPressPosts(wpUrl, count = 6) {
  try {
    const res = await fetch(
      `${wpUrl}/wp-json/wp/v2/posts?per_page=${count}&_fields=id,title,excerpt,link,categories`,
      { next: { revalidate: 3600 } } // Cache for 1 hour, auto-refresh
    );
    if (!res.ok) return [];
    const posts = await res.json();

    return posts.map((post) => ({
      tag: "From the Blog",
      title: post.title.rendered.replace(/&amp;/g, "&").replace(/&#8217;/g, "'"),
      desc: post.excerpt.rendered
        .replace(/<[^>]+>/g, "")     // Strip HTML tags
        .replace(/\[&hellip;\]/g, "…") // Clean ellipsis
        .slice(0, 160)
        .trim(),
      link: post.link,
    }));
  } catch (err) {
    console.error("WordPress fetch failed:", err);
    return [];
  }
}
