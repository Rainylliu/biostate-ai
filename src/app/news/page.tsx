import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In the News - biostate.AI",
  description: "Latest news and press coverage about biostate.AI.",
};

const newsItems = [
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/10/545.svg",
    date: "October 29, 2025",
    title:
      "Biostate AI\u2019s Indian Subsidiary Bayosthiti Partners with Narayana Health to Build World\u2019s Largest India-Specific Cardiac AI Dataset",
    excerpt:
      "Landmark 12,000-patient study addresses critical gap in global healthcare \u2026\u2026",
    link: "https://www.businesswire.com/news/home/20251029898069/en/Biostate-AIs-Indian-Subsidiary-Bayosthiti-Partners-with-Narayana-Health-to-Build-Worlds-Largest-India-Specific-Cardiac-AI-Dataset",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-16.svg",
    date: "September 18, 2025",
    title:
      "Biostate AI Launches K-Dense Beta, Harvard Validates AI That Compresses Research Cycles from Years to Days",
    excerpt:
      "Biostate AI has officially launched K-Dense Beta, an advanced multi-agent artificial intelligence \u2026\u2026",
    link: "https://www.unite.ai/biostate-ai-launches-k-dense-beta-harvard-validates-ai-that-compresses-research-cycles-from-years-to-days/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/24324.svg",
    date: "September 18, 2025",
    title:
      "Biostate AI launches AI agent that compresses research cycles from years to days",
    excerpt:
      "Biostate AI, a company accelerating biological research through AI models, today announced the launch of K-Dense Beta \u2026\u2026",
    link: "https://www.htworld.co.uk/news/biostate-ai-ai-agent-that-compresses-research-cycles-from-years-to-days-stock25/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-18.svg",
    date: "September 18, 2025",
    title:
      "Biostate AI\u2019s K-Dense accelerates scientific research cycles with AI",
    excerpt:
      "Biostate AI has launched K-Dense Beta, an artificial intelligence system designed to condense biological research cycles \u2026\u2026",
    link: "https://itbrief.co.nz/story/biostate-ai-s-k-dense-accelerates-scientific-research-cycles-with-ai",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-19.svg",
    date: "September 18, 2025",
    title: "K-Dense Analyst: Towards Fully Automated Scientific Analysis",
    excerpt:
      "The complexity of modern bioinformatics analysis has created a critical gap between data generation and \u2026\u2026",
    link: "https://arxiv.org/abs/2508.07043",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/78.svg",
    date: "September 18, 2025",
    title:
      "Biostate AI Launches K-Dense Beta, validated with Harvard",
    excerpt:
      "Harvard Medical School aging study demonstrates Biostate\u2019s AI agent achieves industry-leading accuracy while\u2026\u2026",
    link: "https://finance.yahoo.com/news/biostate-ai-launches-k-dense-123000921.html",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-21.svg",
    date: "September 18, 2025",
    title: "Biostate AI Launches K-Dense Beta",
    excerpt:
      "Biostate AI, a company accelerating biological research through innovative AI models, today announced the launch of K-Dense Beta, a comprehensive multi-agent AI research \u2026\u2026",
    link: "https://www.citybiz.co/article/746364/biostate-ai-launches-k-dense-beta/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-22.svg",
    date: "July 24, 2025",
    title:
      "Biostate AI expands RNA-based precision medicine with new partnerships",
    excerpt:
      "Global collaborations boost dataset powering AI diagnostics for cancer, cardiovascular and autoimmune diseases",
    link: "https://discover-pharma.com/biostate-ai-expands-rna-based-precision-medicine-with-new-partnerships-across-china-india-and-the-us/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-23.svg",
    date: "July 24, 2025",
    title:
      "Biostate AI unlocks molecular doors to global health \u2014 from Boston to Bengaluru",
    excerpt:
      "The biotechnology startup has secured strategic research partnerships in the U.S. and India, and a joint venture in China, dramatically expanding \u2026\u2026",
    link: "https://www.globenewswire.com/news-release/2025/07/24/3121102/0/en/Biostate-AI-unlocks-molecular-doors-to-global-health-with-alliances-from-Boston-to-Bengaluru.html",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-7.svg",
    date: "July 24, 2025",
    title: "Biostate AI Unlocks Molecular Doors to Global Health from Boston to Bengaluru",
    excerpt: "Biostate AI uses RNA sequencing, a snapshot of gene activity, to build AI models that \u2026\u2026",
    link: "https://www.citybiz.co/article/722333/biostate-ai-unlocks-molecular-doors-to-global-health-with-alliances-from-boston-to-bengaluru/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/12.svg",
    date: "May 26, 2025",
    title: "Biostate AI Raises $12M for RNA Foundation Model in Molecular Diagnostics",
    excerpt: "Biostate AI has raised $12 million in Series A funding to scale its RNA sequencing platform \u2026\u2026",
    link: "https://www.biopharmatrend.com/post/1274-biostate-ai-raises-12m-to-build-rna-based-foundation-model-for-molecular-diagnostics/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-1-2.svg",
    date: "May 21, 2025",
    title: "Biostate AI Secures $12M in Series A Funding Led by Accel",
    excerpt: "Biotech startup Biostate AI has raised $12 million in a Series A funding round led by Accel. Gaingels, Mana Ventures, and InfoEdge Ventures joined \u2026\u2026",
    link: "https://orangered-okapi-860138.hostingersite.com/blogs/biostate-ai-secures-12m-in-series-a-funding-led-by-accel/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-2-2.svg",
    date: "May 20, 2025",
    title: "Biostate AI Secures $12M to Optimize RNA Sequencing, Precision Medicine",
    excerpt: "Biostate AI, an innovator at the intersection of artificial intelligence and RNA sequencing raises $12M in \u2026\u2026",
    link: "https://hitconsultant.net/2025/05/20/biostate-ai-secures-12m-to-optimize-rna-sequencing/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/3453.svg",
    date: "May 20, 2025",
    title: "Biostate AI closes $12M to bring the Netflix model to molecular diagnostics",
    excerpt: "The company is reimagining the fragmented reality of molecular research by building the world\u2019s largest RNA\u2026\u2026",
    link: "https://www.globenewswire.com/news-release/2025/05/20/3085007/0/en/Biostate-AI-closes-12M-to-bring-the-Netflix-model-to-molecular-diagnostics.html",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/678.svg",
    date: "May 20, 2025",
    title: "Biostate AI closes $12M to bring the Netflix model to molecular diagnostics",
    excerpt: "Biostate AI, a leading innovator in artificial intelligence and RNA sequencing, announced the successful completion\u2026\u2026",
    link: "https://www.giant.health/blog/1235/biostate-ai-closes-12m-to-bring-the-netflix-model-",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-5-3.svg",
    date: "May 20, 2025",
    title: "Biostate AI Raises $12M Series A to Train the ChatGPT of Molecular Medicine",
    excerpt: "Biostate AI, a molecular diagnostics startup combining next-generation RNA sequencing (RNAseq) with generative\u2026\u2026",
    link: "https://www.unite.ai/biostate-ai-raises-12m-series-a-to-train-the-chatgpt-of-molecular-medicine/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-6-3.svg",
    date: "May 20, 2025",
    title: "Biostate AI Secures $12M to Optimize RNA Sequencing, Precision Medicine",
    excerpt: "Biostate AI, an innovator at the intersection of artificial intelligence and RNA sequencing raises $12M in \u2026\u2026",
    link: "https://ramaonhealthcare.com/biostate-ai-secures-12m-to-optimize-rna-sequencing-precision-medicine/",
  },
  {
    image: "https://www.biostate.ai/wp-content/uploads/2025/11/Mask-group-14.svg",
    date: "May 20, 2025",
    title: "Biostate AI Secures $12M to Optimize RNA Sequencing, Precision Medicine",
    excerpt: "Biostate AI, an innovator at the intersection of artificial intelligence and RNA sequencing raises $12M in \u2026\u2026",
    link: "https://ramaonhealthcare.com/biostate-ai-secures-12m-to-optimize-rna-sequencing-precision-medicine/",
  },
];

export default function NewsPage() {
  return (
    <div style={{ fontFamily: "'Manrope', Arial, Helvetica, sans-serif" }}>
      {/* Header Banner */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/News_header.svg"
          alt="In The News"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* News Grid */}
      <section style={{ padding: "60px 0 80px", maxWidth: "1340px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
          className="news-grid"
        >
          {newsItems.map((item, index) => (
            <article key={index} style={{ display: "flex", flexDirection: "column" }}>
              {/* Image */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", borderRadius: "16px", overflow: "hidden", position: "relative" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "transform 0.3s ease",
                  }}
                  className="news-card-img"
                />
                {/* Date overlay */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    background: "rgba(255,255,255,0.9)",
                    borderRadius: "20px",
                    padding: "6px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#666",
                  }}
                >
                  {item.date}
                </span>
              </a>

              {/* Title */}
              <h4 style={{ margin: "20px 0 12px", fontSize: "18px", fontWeight: 600, lineHeight: 1.4, color: "#1a1a1a" }}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-title-link"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.title}
                </a>
              </h4>

              {/* Excerpt */}
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#666", margin: "0 0 16px", flex: 1 }}>
                {item.excerpt}
              </p>

              {/* Read More */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-read-more"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Read More</span>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1l6 6-6 6" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
