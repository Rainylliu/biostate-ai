import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold font-heading tracking-tight">
              biostate<span className="text-accent">.</span>AI
            </span>
            <p className="mt-4 text-sm text-brand-350 leading-relaxed">
              Connecting samples, data, and decisions to redefine precision
              health.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-brand-350">
              <li><Link href="/about-us" className="hover:text-accent transition-colors">Team</Link></li>
              <li><Link href="/publication" className="hover:text-accent transition-colors">Publications</Link></li>
              <li><Link href="/news" className="hover:text-accent transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-brand-350">
              <li><Link href="/rna" className="hover:text-accent transition-colors">RNA Sequencing</Link></li>
              <li><Link href="/dna" className="hover:text-accent transition-colors">DNA Sequencing</Link></li>
              <li><Link href="/ai" className="hover:text-accent transition-colors">AI Platform</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Get Started
            </h4>
            <Link
              href="/get-quote"
              className="inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-700 text-center text-sm text-brand-350">
          &copy; {new Date().getFullYear()} Biostate AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
