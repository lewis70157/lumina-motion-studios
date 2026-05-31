import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import reel5 from "@/assets/reel-5.jpg";
import reel6 from "@/assets/reel-6.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "future-of-ai-video",
    title: "The Future of AI Video Generation in Brand Storytelling",
    excerpt: "How generative video models are reshaping commercial pipelines and unlocking new creative directions.",
    category: "AI Video",
    readTime: "6 min",
    date: "May 2026",
    image: reel1,
    body: [
      "Generative video has moved from novelty to a real production tool. Studios that integrate it early are already shipping campaigns at half the cost and twice the iteration speed.",
      "We treat AI as a partner — not a replacement. The director still owns the vision; the model accelerates exploration, mood boards, and animatics.",
      "In this piece we break down our hybrid pipeline: prompt design, plate generation, compositing, and human-led grade.",
    ],
  },
  {
    slug: "cgi-product-pipeline",
    title: "Inside Our CGI Product Commercial Pipeline",
    excerpt: "From hero shot reference to final grade — the full breakdown of a 30-second product film.",
    category: "3D CGI",
    readTime: "8 min",
    date: "Apr 2026",
    image: reel2,
    body: [
      "Every product film starts with a single question: what's the one frame people will remember?",
      "We work backwards from that hero shot — lighting, lensing, materials all serve that moment.",
      "Houdini for sims, Octane for the look, Nuke for the finish. This is how the sausage gets made.",
    ],
  },
  {
    slug: "2d-motion-trends-2026",
    title: "2D Motion Design Trends Dominating 2026",
    excerpt: "Liquid morphing, kinetic typography 2.0, and the return of cel-shaded character work.",
    category: "2D Animation",
    readTime: "5 min",
    date: "Mar 2026",
    image: reel3,
    body: [
      "Flat is dead — long live tactile. 2026 is all about motion that feels physical.",
      "We're seeing brands move away from sterile minimalism toward textured, hand-crafted frames.",
      "Here are the five trends defining our reels this year.",
    ],
  },
  {
    slug: "color-grading-cinematic",
    title: "The Color Grading Secrets Behind Cinematic Edits",
    excerpt: "Why your edit feels flat — and the three-step grading approach we use on every project.",
    category: "Video Editing",
    readTime: "7 min",
    date: "Feb 2026",
    image: reel4,
    body: [
      "Grade is the last 10% that delivers 90% of the feeling.",
      "We approach every project in three passes: balance, look, polish.",
      "Here's how we keep skin tones honest while pushing the world toward our reference.",
    ],
  },
  {
    slug: "render-farm-optimization",
    title: "How We Cut Render Times by 60% Without Losing Quality",
    excerpt: "Smart sampling, denoising, and pipeline tricks every CGI studio should be using.",
    category: "3D CGI",
    readTime: "9 min",
    date: "Jan 2026",
    image: reel5,
    body: [
      "Render time is the silent killer of creative iteration.",
      "We rebuilt our farm around adaptive sampling, OptiX denoising, and distributed Houdini sims.",
      "Here's the playbook.",
    ],
  },
  {
    slug: "behind-the-scenes-launch",
    title: "Behind The Scenes: Our Biggest Product Launch Yet",
    excerpt: "Three weeks, four cities, one global launch film. The chaos, the craft, the lessons.",
    category: "Case Study",
    readTime: "10 min",
    date: "Dec 2025",
    image: reel6,
    body: [
      "A global product launch is half logistics, half magic.",
      "We followed the team across three continents to deliver a single 90-second film.",
      "These are the moments that didn't make the final cut.",
    ],
  },
];