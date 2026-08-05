"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { staggerContainer } from "@/lib/motion";

// Custom animation variant matching the requested 20px upward fade-in stagger
const cardFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

// Mock data for bento grid cards matching the specifications
const bentoBlogs = [
  {
    id: 1,
    title: "Loan options every MSME should know",
    category: "Loans",
    readTime: "6 min read",
    date: "May 20, 2024",
    image: "/bento/bento-stairs.png",
    slug: "loan-options-every-msme-should-know",
    featured: true,
    background: "bg-gradient-to-br from-indigo-950 via-[#3b1c6e] to-[#250d40]",
    badgeBg: "bg-white/90 text-purple-900 border border-white/20",
    textColors: {
      title: "text-white font-display",
      meta: "text-purple-200/80",
      arrow: "text-white border-white/30 hover:border-white/60 hover:bg-white/10",
    },
  },
  {
    id: 2,
    title: "GST compliance made simple",
    category: "GST & Tax",
    readTime: "4 min read",
    date: "May 18, 2024",
    image: "/bento/bento-plant.png",
    slug: "gst-compliance-made-simple",
    featured: false,
    background: "bg-[#e3f6ed]", // Mint
    badgeBg: "bg-white text-emerald-800 border border-emerald-100/80 shadow-[0_1px_2px_rgba(29,131,72,0.06)]",
    textColors: {
      title: "text-ink font-display",
      meta: "text-slate",
      arrow: "text-ink border-ink/15 hover:border-ink/30 hover:bg-ink/5",
    },
  },
  {
    id: 3,
    title: "Choosing the right business structure",
    category: "Business Setup",
    readTime: "5 min read",
    date: "May 15, 2024",
    image: "/bento/bento-lamp.png",
    slug: "choosing-the-right-business-structure",
    featured: false,
    background: "bg-[#fdf5e2]", // Yellow
    badgeBg: "bg-white text-amber-800 border border-amber-100/80 shadow-[0_1px_2px_rgba(217,140,15,0.06)]",
    textColors: {
      title: "text-ink font-display",
      meta: "text-slate",
      arrow: "text-ink border-ink/15 hover:border-ink/30 hover:bg-ink/5",
    },
  },
  {
    id: 4,
    title: "Govt schemes for your growth",
    category: "MSME Schemes",
    readTime: "5 min read",
    date: "May 13, 2024",
    image: "/bento/bento-charts.png",
    slug: "govt-schemes-for-your-growth",
    featured: false,
    background: "bg-[#eaf4fc]", // Blue
    badgeBg: "bg-white text-blue-800 border border-blue-100/80 shadow-[0_1px_2px_rgba(30,62,114,0.06)]",
    textColors: {
      title: "text-ink font-display",
      meta: "text-slate",
      arrow: "text-ink border-ink/15 hover:border-ink/30 hover:bg-ink/5",
    },
  },
  {
    id: 5,
    title: "Smart financial habits for MSMEs",
    category: "Management",
    readTime: "5 min read",
    date: "May 11, 2024",
    image: "/bento/bento-chair.png",
    slug: "smart-financial-habits-for-msmes",
    featured: false,
    background: "bg-[#f3effa]", // Lavender
    badgeBg: "bg-white text-purple-800 border border-purple-100/80 shadow-[0_1px_2px_rgba(124,58,237,0.06)]",
    textColors: {
      title: "text-ink font-display",
      meta: "text-slate",
      arrow: "text-ink border-ink/15 hover:border-ink/30 hover:bg-ink/5",
    },
  },
];

// Helper: Custom Magnetic Link Button
function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 20, mass: 0.5 });
  const y = useSpring(my, { stiffness: 200, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const width = r.width;
    const height = r.height;
    const clientX = e.clientX - r.left - width / 2;
    const clientY = e.clientY - r.top - height / 2;
    mx.set(clientX * 0.28);
    my.set(clientY * 0.28);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

// Category Badge Component
function CategoryBadge({
  category,
  badgeBg,
}: {
  category: string;
  badgeBg: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${badgeBg}`}
    >
      {category}
    </span>
  );
}

// Circular Arrow Button Component
function ReadMoreButton({ className }: { className: string }) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${className}`}
    >
      <ArrowRight
        size={18}
        strokeWidth={2.25}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12"
      />
    </div>
  );
}

// Featured Card Component (Card 1)
function FeaturedBlogCard({
  title,
  category,
  date,
  readTime,
  slug,
  image,
  background,
  badgeBg,
  textColors,
}: (typeof bentoBlogs)[0]) {
  return (
    <motion.div variants={cardFadeUp} className="md:col-span-7 h-full">
      <Link
        href={`/blog/${slug}`}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] md:rounded-[32px] p-5 md:p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-raised ${background}`}
        style={{ translate: "0px", rotate: "0deg", scale: 1 }} // Prevent stacking context shift
      >
        {/* Subtle white highlight overlay to brighten bg on hover */}
        <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

        {/* Card Upper Half: Large Rounded Image */}
        <div className="relative aspect-[2.4/1] w-full overflow-hidden rounded-[14px] bg-indigo-950/40">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>

        {/* Card Lower Half: Text & Meta */}
        <div className="mt-4 flex flex-1 flex-col justify-between">
          <div>
            <div className="mb-2">
              <CategoryBadge category={category} badgeBg={badgeBg} />
            </div>
            <h3 className={`text-lg md:text-xl font-semibold leading-tight ${textColors.title}`}>
              {title}
            </h3>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className={`text-xs md:text-sm font-medium ${textColors.meta}`}>
              {readTime} &bull; {date}
            </span>
            <ReadMoreButton className={textColors.arrow} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Standard Bento Card Component (Cards 2-5)
function BlogCard({
  card,
  colSpan,
  heightClass,
  imagePosition,
}: {
  card: (typeof bentoBlogs)[0];
  colSpan: string;
  heightClass: string;
  imagePosition: "side" | "bottom" | "side-lamp";
}) {
  const { title, category, date, readTime, slug, image, background, badgeBg, textColors } = card;

  // Check if button belongs to bottom left or bottom right
  const isArrowLeft = imagePosition === "bottom" || imagePosition === "side-lamp";

  return (
    <motion.div variants={cardFadeUp} className={`${colSpan} ${heightClass}`}>
      <Link
        href={`/blog/${slug}`}
        className={`group relative block h-full overflow-hidden rounded-[28px] md:rounded-[32px] p-5 md:p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-raised ${background}`}
        style={{ translate: "0px", rotate: "0deg", scale: 1 }} // Prevent stacking context shift
      >
        {/* Subtle white highlight overlay to brighten bg on hover */}
        <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-10" />

        {/* Card Background Image (Illustration) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-right-bottom transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Text Details */}
        <div className="relative z-20 flex flex-col justify-between h-full w-full pointer-events-none">
          <div className="pointer-events-auto">
            <div className="mb-3">
              <CategoryBadge category={category} badgeBg={badgeBg} />
            </div>
            <h3 className={`text-lg md:text-xl font-semibold leading-tight text-ink max-w-[65%] md:max-w-[70%] ${textColors.title}`}>
              {title}
            </h3>
          </div>

          <div className={`mt-6 pointer-events-auto ${isArrowLeft ? "flex flex-col gap-4" : "flex items-end justify-between"}`}>
            <span className={`text-xs md:text-sm font-medium ${textColors.meta}`}>
              {readTime} &bull; {date}
            </span>
            <div className={isArrowLeft ? "self-start" : "self-end"}>
              <ReadMoreButton className={textColors.arrow} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


// Left side Editorial Block Component
function HeroContent() {
  return (
    <div className="flex flex-col justify-between h-full lg:sticky lg:top-28">
      <div>
        {/* Eyebrow styled exactly like other landing page sections */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate">
          <span className="h-2.5 w-2.5 rounded-full bg-marigold" aria-hidden />
          Latest Insights
        </div>

        <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.08] text-ink sm:text-[44px] lg:text-[54px] xl:text-[60px] tracking-tight">
          Ideas
          <br />
          that drive
          <br />
          small
          <br />
          businesses
          <br />
          <span className="text-marigold font-serif italic lowercase">forward.</span>
        </h2>

        {/* Subheading styled exactly like other landing page sections */}
        <p className="mt-4 text-base leading-relaxed text-slate max-w-xs lg:text-lg">
          Actionable insights on MSME loans, GST, registrations and business growth.
        </p>
      </div>

      <div className="mt-8 lg:mt-12">
        <MagneticButton
          href="/blog"
          className="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-indigo hover:bg-ink px-7 py-4 text-base font-bold text-white shadow-raised transition-colors duration-300"
        >
          <span>View All Blogs</span>
          <ArrowRight size={18} strokeWidth={2.25} aria-hidden />
        </MagneticButton>
      </div>
    </div>
  );
}

// Main Bento Grid Component (Right column)
function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
      {/* Row 1: Card 1 (Purple - col-span-7) and Card 2 (Mint - col-span-5) */}
      <FeaturedBlogCard {...bentoBlogs[0]} />
      <BlogCard
        card={bentoBlogs[1]}
        colSpan="md:col-span-5"
        heightClass="h-[280px] md:h-[300px] lg:h-[310px]"
        imagePosition="side"
      />

      {/* Row 2: Card 3 (Yellow - col-span-5), Card 4 (Blue - col-span-4), Card 5 (Lavender - col-span-3) */}
      <BlogCard
        card={bentoBlogs[2]}
        colSpan="md:col-span-5"
        heightClass="h-[280px] md:h-[320px] lg:h-[330px]"
        imagePosition="side-lamp"
      />
      <BlogCard
        card={bentoBlogs[3]}
        colSpan="md:col-span-4"
        heightClass="h-[280px] md:h-[320px] lg:h-[330px]"
        imagePosition="bottom"
      />
      <BlogCard
        card={bentoBlogs[4]}
        colSpan="md:col-span-3"
        heightClass="h-[280px] md:h-[320px] lg:h-[330px]"
        imagePosition="bottom"
      />
    </div>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="px-5 py-12 lg:px-8 lg:py-16 overflow-hidden bg-paper-deep/15">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 lg:grid-cols-10 xl:gap-16 items-stretch"
        >
          {/* Left Column (30%) */}
          <motion.div variants={cardFadeUp} className="lg:col-span-3">
            <HeroContent />
          </motion.div>

          {/* Right Column (70%) */}
          <div className="lg:col-span-7">
            <BentoGrid />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
