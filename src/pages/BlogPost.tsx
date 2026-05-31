import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { posts } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="bg-background min-h-screen noise-bg">
        <Navbar />
        <article className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-xs font-display tracking-[0.2em] uppercase mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to insights
              </Link>
              <span className="font-display text-[10px] tracking-[0.5em] uppercase text-primary">{post.category}</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 text-foreground leading-[1.05]">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 mt-6 text-xs font-display tracking-[0.2em] uppercase text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="aspect-[16/9] rounded-2xl overflow-hidden mt-12 mb-12 border border-border/30"
            >
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </motion.div>

            <div className="prose prose-invert max-w-none space-y-6">
              {post.body.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-foreground/80 text-lg leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;