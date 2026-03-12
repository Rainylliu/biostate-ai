"use client";

import { useState } from "react";

interface Publication {
  url: string;
  categories: string[];
  title: string;
  journal: string;
  date: string;
  year: number;
}

const allItems: Publication[] = [
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10593184/pdf/nihms-1934340.pdf", categories: ["Implanted biomaterials"], title: "Screening hydrogels for antifibrotic properties by implanting cellularly barcoded alginates in mice and a non-human primate", journal: "Nature Biomedical Engineering", date: "Apr 27, 2023", year: 2023 },
  { url: "https://www.nature.com/articles/s41467-022-33510-7.pdf", categories: ["Cardiovascular Health", "Deep WGS Analysis"], title: "Whole genome sequence analysis of blood lipid levels in > 66,000 individuals", journal: "Nature Communications", date: "Oct 11, 2022", year: 2022 },
  { url: "https://www.nature.com/articles/s41467-022-29500-4.pdf", categories: ["Algorithm-Driven Design", "Multiplex Diagnostics"], title: "Designing highly multiplex PCR primer sets with simulated annealing design using dimer likelihood estimation (SADDLE)", journal: "Nature Communications", date: "Apr 11, 2022", year: 2022 },
  { url: "https://www.nature.com/articles/s41467-022-29487-y.pdf", categories: ["Molecular Barcoding", "Precision Oncology"], title: "Ensemble of nucleic acid absolute quantitation modules for copy number variation detection and RNA profiling", journal: "Nature Communications", date: "Apr 04, 2022", year: 2022 },
  { url: "https://www.science.org/doi/pdf/10.1126/sciadv.abm1032", categories: ["Cell Biology"], title: "Clinically translatable cytokine delivery platform for eradication of intraperitoneal tumors", journal: "Science Advances", date: "Mar 02, 2022", year: 2022 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9336539/pdf/nihms-1813800.pdf", categories: ["Liquid Biopsy", "Molecular Diagnostics"], title: "Limitations and opportunities of technologies for the analysis of cell-free DNA in cancer diagnostics", journal: "Nature Biomedical Engineering", date: "Jan 31, 2022", year: 2022 },
  { url: "https://www.nature.com/articles/s41467-021-26308-6.pdf", categories: ["MRD Monitoring", "Rare Mutation Detection"], title: "Calibration-free NGS quantitation of mutations below 0.01% VAF", journal: "Nature Communications", date: "Oct 21, 2021", year: 2021 },
  { url: "https://www.nature.com/articles/s41467-021-24497-8.pdf", categories: ["Computational Methods", "Molecular Dynamics simulations"], title: "A deep learning model for predicting next-generation sequencing depth from DNA sequence", journal: "Nature Communications", date: "Jul 19, 2021", year: 2021 },
  { url: "https://www.nature.com/articles/s41551-021-00755-4.pdf", categories: ["Point-of-Care Testing (POCT)", "Portable Diagnostics"], title: "Highly multiplexed rapid DNA detection with single-nucleotide specificity via convective PCR in a portable device", journal: "Nature Biomedical Engineering", date: "Jul 01, 2021", year: 2021 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9631981/pdf/nihms-1813799.pdf", categories: ["Cancer diagnostics"], title: "Selective multiplexed enrichment for the detection and quantitation of low-fraction DNA variants via low-depth sequencing", journal: "Nature Biomedical Engineering", date: "May 03, 2021", year: 2021 },
  { url: "https://www.nature.com/articles/s41467-020-18842-6.pdf", categories: ["DNA Data Storage"], title: "Metastable hybridization-based DNA information storage to allow rapid and permanent erasure", journal: "Nature Communications", date: "Oct 06, 2020", year: 2020 },
  { url: "https://www.nature.com/articles/s41467-018-04870-w.pdf", categories: ["Oligo Purification"], title: "Simultaneous and stoichiometric purification of hundreds of oligonucleotides", journal: "Nature Communications", date: "Jun 25, 2018", year: 2018 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5739081/pdf/nihms908084.pdf", categories: ["Molecular Kinetics"], title: "Predicting DNA hybridization kinetics from sequence", journal: "Nature Chemistry", date: "Jan 01, 2018", year: 2018 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5969535/pdf/nihms932422.pdf", categories: ["Blocker Displacement Amplification (BDA)", "Oncology Diagnostics"], title: "Multiplexed enrichment of rare DNA variants via sequence-selective and temperature-robust amplification", journal: "Nature Biomedical Engineering", date: "Sep 04, 2017", year: 2017 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5788029/pdf/nihms932420.pdf", categories: ["Genetic Disorders", "Modular Probes"], title: "Modular probes for enriching and detecting complex nucleic acid sequences", journal: "Nature Chemistry", date: "", year: 2017 },
  { url: "https://www.science.org/doi/pdf/10.1126/sciadv.1602128", categories: ["Biochemistry"], title: "Sub\u2013100-nm metafluorophores with digitally tunable optical properties self-assembled from DNA", journal: "Science Advances", date: "Jun 21, 2017", year: 2017 },
  { url: "https://www.nature.com/articles/ncomms10319.pdf", categories: ["Thermodynamics"], title: "Native characterization of nucleic acid motif thermodynamics via non-covalent catalysis", journal: "Nature Communications", date: "Jan 19, 2016", year: 2016 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4666732/pdf/nihms726951.pdf", categories: ["Multiplex Optimization", "Programmable Hybridization"], title: "Continuously tunable nucleic acid hybridization probes", journal: "Nature Methods", date: "Oct 19, 2015", year: 2015 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4479422/pdf/nihms683310.pdf", categories: ["Programmable Hybridization"], title: "Simulation-guided DNA probe design for consistently ultraspecific hybridization", journal: "Nature Chemistry", date: "May 25, 2015", year: 2015 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3844531/pdf/nihms520628.pdf", categories: ["Modular Probes", "Single-Nucleotide Specificity"], title: "Conditionally fluorescent molecular probes for detecting single base changes in double-stranded DNA", journal: "Nature Chemistry", date: "Jul 28, 2013", year: 2013 },
  { url: "https://www.nature.com/articles/ncomms2965.pdf", categories: ["DNA Nanotechnology"], title: "Integrating DNA strand-displacement circuitry with DNA tile self-assembly", journal: "Nature Communications", date: "Jun 12, 2013", year: 2013 },
  { url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4238961/pdf/nihms633154.pdf", categories: ["Robust sequence discrimination"], title: "Optimizing the specificity of nucleic acid hybridization", journal: "Nature Chemistry", date: "Jan 22, 2012", year: 2012 },
  { url: "https://www.dna.caltech.edu/~pwkr/dna-nanotech-reviews/2011-seelig-zhang-strand-displacement-nchem.pdf", categories: ["DNA Nanotechnology", "Strand-Displacement Reactions"], title: "Dynamic DNA nanotechnology using strand-displacement reactions", journal: "Nature Chemistry", date: "Jan 24, 2011", year: 2011 },
  { url: "https://www.science.org/action/downloadSupplement?doi=10.1126%2Fscience.1148532&file=zhang.som.pdf", categories: ["Molecular Circuitry", "Programmable Hybridization"], title: "Engineering entropy-driven reactions and networks catalyzed by DNA", journal: "Science", date: "Nov 16, 2007", year: 2007 },
  { url: "https://courses.cs.washington.edu/courses/cse599x/10sp/circuits.pdf", categories: ["Enzyme-Free Logic", "Molecular Computing"], title: "Enzyme-free nucleic acid logic circuits", journal: "Science", date: "Dec 08, 2006", year: 2006 },
];

const PER_PAGE = 8;

type SortKey = "newest" | "oldest" | "title_az" | "title_za" | "journal_az" | "journal_za";

function getSortedItems(sort: SortKey): Publication[] {
  const items = [...allItems];
  switch (sort) {
    case "newest":     return items.sort((a, b) => b.year - a.year);
    case "oldest":     return items.sort((a, b) => a.year - b.year);
    case "title_az":   return items.sort((a, b) => a.title.localeCompare(b.title));
    case "title_za":   return items.sort((a, b) => b.title.localeCompare(a.title));
    case "journal_az": return items.sort((a, b) => a.journal.localeCompare(b.journal));
    case "journal_za": return items.sort((a, b) => b.journal.localeCompare(a.journal));
    default: return items;
  }
}

export default function PublicationsList() {
  const [currentSort, setCurrentSort] = useState<SortKey>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const sorted = getSortedItems(currentSort);
  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const pageItems = sorted.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const handleSortChange = (value: string) => {
    setCurrentSort(value as SortKey);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("pub-sort-bar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Sort Bar */}
      <div id="pub-sort-bar" className="pub-filter-bar">
        <div className="pub-filter-group">
          <div className="pub-filter-label">Sort by</div>
          <select
            className="pub-sort-select"
            value={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title_az">Title A–Z</option>
            <option value="title_za">Title Z–A</option>
            <option value="journal_az">Journal A–Z</option>
            <option value="journal_za">Journal Z–A</option>
          </select>
        </div>
      </div>

      {/* Publication List */}
      <div className="pub-list">
        {pageItems.map((item, idx) => (
          <div key={idx} className="pub-item">
            <div className="pub-item-categories">
              {item.categories.map((cat, ci) => (
                <span key={ci} className="pub-category-tag">{cat}</span>
              ))}
            </div>
            <h3 className="pub-item-title">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h3>
            <p className="pub-item-meta">
              {item.journal}{item.date ? ` | ${item.date}` : ""}
            </p>
            <span className="pub-read-more">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span className="pub-cta-arrow pub-cta-arrow-left">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 1h9v9M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="pub-cta-text">Read Full Article</span>
                <span className="pub-cta-arrow pub-cta-arrow-right">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 1h9v9M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="pub-pagination" role="navigation" aria-label="Pagination">
          {currentPage > 1 && (
            <button
              className="pub-page-btn pub-page-prev"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pub-page-btn pub-page-num ${page === currentPage ? "pub-page-current" : ""}`}
              onClick={() => handlePageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className="pub-page-btn pub-page-next"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          )}
        </nav>
      )}
    </div>
  );
}
