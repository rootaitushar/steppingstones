import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  WPPost,
  WORDPRESS_API_URL,
  formatPostDate,
  getFeaturedImage,
} from "@/lib/wordpress";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) return;

    const controller = new AbortController();

    async function fetchPost() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${WORDPRESS_API_URL}/${postId}?_embed`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load this post right now.");
        }

        const data: WPPost = await response.json();
        setPost(data);
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error(err);
          setError("Unable to load this post right now. Please try again later.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPost();

    return () => controller.abort();
  }, [postId]);

  return (
    <div className="py-16 md:py-24 bg-muted/20 min-h-[70vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link to="/">
            <Button
              variant="ghost"
              className="group relative overflow-hidden rounded-full border border-primary/20 bg-white/70 px-8 py-3 text-primary shadow-sm transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-xl"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="relative flex items-center gap-2 text-base font-semibold tracking-wide">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </span>
            </Button>
          </Link>
          {post?.date && (
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {formatPostDate(post.date)}
            </p>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center text-destructive font-semibold">{error}</div>
        ) : post ? (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] bg-white shadow-2xl shadow-primary/10 overflow-hidden"
          >
            {getFeaturedImage(post) && (
              <div className="h-72 w-full overflow-hidden">
                <img
                  src={getFeaturedImage(post)}
                  alt={post.title.rendered}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="p-8 md:p-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                {formatPostDate(post.date)}
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold text-primary mb-6"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content?.rendered ?? "" }} />
            </div>
          </motion.article>
        ) : (
          <div className="text-center text-muted-foreground">Post not found.</div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
