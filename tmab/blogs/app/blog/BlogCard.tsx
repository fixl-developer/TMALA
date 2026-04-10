import Link from "next/link";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  categoryLabel: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAtFormatted: string;
  readTime: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          border: "1px solid var(--blog-border)",
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.25s, box-shadow 0.25s",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
        }}
      >
        <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#f0f0f0" }}>
          <img
            src={post.coverImage}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 700,
              color: "var(--blog-blue)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "8px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {post.categoryLabel}
          </div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--blog-text)",
              lineHeight: 1.35,
              margin: "0 0 8px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {post.title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#696969",
              lineHeight: 1.5,
              margin: "0 0 14px",
              fontFamily: "'Inter', sans-serif",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "var(--blog-text)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                fontWeight: 800,
                color: "#E8FF47",
                flexShrink: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {post.author.avatar.charAt(0)}
            </div>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#3d3d3d", fontFamily: "'Inter', sans-serif" }}>
              {post.author.name}
            </span>
            <span style={{ fontSize: "11px", color: "#b0b0b0" }}>·</span>
            <span style={{ fontSize: "11px", color: "var(--blog-light)", fontFamily: "'Inter', sans-serif" }}>
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
