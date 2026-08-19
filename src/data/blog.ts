import blogNearshore from "@/assets/blog-nearshore.jpg";
import blogSalesforce from "@/assets/blog-salesforce.jpg";
import blogModernization from "@/assets/blog-modernization.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "nearshore-engineering-that-actually-scales",
    title: "Nearshore engineering that actually scales",
    category: "Team Building",
    date: "June 12, 2026",
    readTime: "6 min read",
    excerpt:
      "Why time-zone alignment, senior-first hiring and long-term teams beat traditional outsourcing for U.S. engineering organizations.",
    image: blogNearshore,
    sections: [
      {
        heading: "Outsourcing is not the same as team extension",
        paragraphs: [
          "Traditional outsourcing optimizes for cost per hour. Team extension optimizes for continuity: the same engineers, in the same standups, owning the same systems quarter after quarter.",
          "That difference shows up in delivery. Engineers who understand your domain make better trade-offs, spot regressions earlier, and need far less specification to move.",
        ],
      },
      {
        heading: "Time zones are an engineering decision",
        paragraphs: [
          "When your team overlaps by six or more hours, code review, pairing and incident response happen the same day instead of the next one. Latency in communication compounds into latency in delivery.",
          "Nearshore teams in Latin America give U.S. companies that overlap without the coordination overhead of fully asynchronous collaboration.",
        ],
      },
      {
        heading: "Hire senior-first, then scale around it",
        paragraphs: [
          "A small group of senior engineers with clear technical leadership creates the standards, the review culture and the architecture that let a team grow without losing quality.",
          "We start with senior profiles and tech leads, then scale capacity with mid-level engineers who inherit an already-healthy delivery process.",
        ],
      },
    ],
  },
  {
    slug: "apex-and-lwc-engineering-standards",
    title: "Apex and LWC: engineering standards for enterprise orgs",
    category: "Salesforce",
    date: "May 28, 2026",
    readTime: "7 min read",
    excerpt:
      "Practical standards for keeping large Salesforce implementations testable, performant and maintainable as the platform grows.",
    image: blogSalesforce,
    sections: [
      {
        heading: "Treat the org like a codebase",
        paragraphs: [
          "Enterprise Salesforce implementations fail slowly: a trigger here, a flow there, and after two years nobody can predict what a record update will do.",
          "Version control, CI, deterministic test data and a single trigger handler per object turn the org back into something engineers can reason about.",
        ],
      },
      {
        heading: "Bulkification and governor limits by default",
        paragraphs: [
          "Every Apex entry point should be written as if it will receive 200 records, because eventually it will. Query outside loops, batch DML, and move heavy work to queueable or batch jobs.",
          "Performance issues in Salesforce rarely appear in development. They appear on the busiest day of the quarter.",
        ],
      },
      {
        heading: "LWC components that survive redesigns",
        paragraphs: [
          "Keep components presentational, push data access into Apex services, and expose configuration through metadata rather than hardcoded values.",
          "The result is a component library your admins can reuse without engineering effort for every new screen.",
        ],
      },
    ],
  },
  {
    slug: "modernizing-legacy-operations-software",
    title: "Modernizing legacy operations software without stopping the business",
    category: "Modernization",
    date: "April 30, 2026",
    readTime: "5 min read",
    excerpt:
      "A strangler-pattern approach to replacing mission-critical legacy systems while operations keep running every day.",
    image: blogModernization,
    sections: [
      {
        heading: "Big-bang rewrites rarely land",
        paragraphs: [
          "Operations software runs the business every day. A rewrite that only delivers value at the end asks the business to accept months of risk for no incremental benefit.",
          "Incremental replacement delivers value continuously and keeps the rollback path short.",
        ],
      },
      {
        heading: "Strangle the system, module by module",
        paragraphs: [
          "Put an API layer in front of the legacy system, move one workflow at a time behind it, and route traffic gradually. Each migrated module is independently testable and independently reversible.",
          "Scheduling, dispatch and mobile field workflows are usually the highest-value first candidates because they touch daily operations directly.",
        ],
      },
      {
        heading: "Measure operations, not just code",
        paragraphs: [
          "Track on-time completion, cycle time and rework alongside technical metrics. Modernization is only successful when the operational numbers move.",
          "Those metrics also make the case for the next phase of investment.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
