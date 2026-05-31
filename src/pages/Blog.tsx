import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { posts } from "@/data/blog";

const Blog = () => {
  return (
    <PageTransition>
      <div className="bg-background min-h-screen noise-bg">
        <Navbar />
        <section className="pt-40 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <span className="font-display text-[10px] tracking-[0.5em] uppercase text-primary">Insights</span>
              <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 text-foreground leading-[0.95]">
                Stories from<br />
                <span className="text-gradient">the studio.</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mt-6">
                Process breakdowns, trend reports, and behind-the-scenes from our work in CGI, animation, and AI video.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-border/30 bg-muted/10 hover:border-primary/40 transition-all duration-500 h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display text-[10px] tracking-[0.3em] uppercase text-primary">{post.category}</span>
                        <span className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{post.date}</span>
                        <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;