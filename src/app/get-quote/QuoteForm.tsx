"use client";

import { useState } from "react";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const SAMPLE_TYPES = [
  "Purified RNA",
  "Tissues",
  "Cell lines",
  "Whole Blood",
  "PBMC",
  "Paxgene",
  "FFPE",
  "Other (Please specify below)",
];

const ORGANISMS = ["Human", "Mouse", "Rat", "Other (Please specify)"];

const font = "'Manrope', Arial, Helvetica, sans-serif";

const labelStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: "16px",
  fontWeight: 700,
  color: "#222222",
  marginBottom: "8px",
  display: "block",
};

const subLabelStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: "13px",
  fontWeight: 400,
  color: "#666666",
  marginTop: "6px",
  display: "block",
};

const inputStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: "15px",
  color: "#333333",
  width: "100%",
  padding: "14px 18px",
  border: "1px solid #d0d0d0",
  borderRadius: "30px",
  outline: "none",
  background: "#ffffff",
  boxSizing: "border-box",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 18px center",
  paddingRight: "44px",
  cursor: "pointer",
};

const sectionDividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #e0e0e0",
  margin: "40px 0",
};

interface SampleRow {
  count: string;
  type: string;
}

export default function QuoteForm() {
  const [sampleRows, setSampleRows] = useState<SampleRow[]>([
    { count: "", type: "Purified RNA" },
  ]);
  const [concentration, setConcentration] = useState("");

  const otherCount = sampleRows.filter(
    (r) => r.type === "Other (Please specify below)"
  ).length;

  const addSampleRow = () => {
    setSampleRows([...sampleRows, { count: "", type: "Purified RNA" }]);
  };

  const updateSampleRow = (
    index: number,
    field: keyof SampleRow,
    value: string
  ) => {
    const updated = [...sampleRows];
    updated[index] = { ...updated[index], [field]: value };
    setSampleRows(updated);
  };

  return (
    <form
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "0 24px 80px",
      }}
    >
      {/* Name */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Name <span style={{ color: "#e53935" }}>*</span>
        </label>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ flex: 1 }}>
            <input type="text" style={inputStyle} required />
            <span style={subLabelStyle}>First</span>
          </div>
          <div style={{ flex: 1 }}>
            <input type="text" style={inputStyle} required />
            <span style={subLabelStyle}>Last</span>
          </div>
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Email <span style={{ color: "#e53935" }}>*</span>
        </label>
        <input type="email" style={inputStyle} required />
      </div>

      {/* Additional Emails */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>Additional Emails to CC in quote email</label>
        <input type="text" style={inputStyle} />
      </div>

      {/* Address */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>Address</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <input type="text" style={inputStyle} />
            <span style={subLabelStyle}>Address Line 1</span>
          </div>
          <div>
            <input type="text" style={inputStyle} />
            <span style={subLabelStyle}>Address Line 2</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ flex: 1 }}>
              <input type="text" style={inputStyle} />
              <span style={subLabelStyle}>City</span>
            </div>
            <div style={{ flex: 1 }}>
              <select style={selectStyle} defaultValue="">
                <option value="" disabled>
                  -- Select state --
                </option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <span style={subLabelStyle}>State</span>
            </div>
          </div>
          <div style={{ maxWidth: "calc(50% - 8px)" }}>
            <input type="text" style={inputStyle} />
            <span style={subLabelStyle}>Zip Code</span>
          </div>
        </div>
      </div>

      {/* Organism */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Organism &ndash; Drop down Options
        </label>
        <select
          style={{ ...selectStyle, maxWidth: "calc(60%)" }}
          defaultValue="Human"
        >
          {ORGANISMS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <hr style={sectionDividerStyle} />

      {/* Sample Types */}
      <div style={{ marginBottom: "16px" }}>
        <h3
          style={{
            fontFamily: font,
            fontSize: "24px",
            fontWeight: 700,
            color: "#111111",
            margin: "0 0 24px",
          }}
        >
          Sample Types
        </h3>

        {sampleRows.map((row, i) => (
          <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
              {i === 0 && (
                <label
                  style={{
                    ...labelStyle,
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  # of samples
                </label>
              )}
              <input
                type="number"
                min="0"
                style={inputStyle}
                value={row.count}
                onChange={(e) => updateSampleRow(i, "count", e.target.value)}
              />
            </div>
            <div style={{ flex: 1 }}>
              {i === 0 && (
                <label
                  style={{
                    ...labelStyle,
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Select sample type
                </label>
              )}
              <select
                style={selectStyle}
                value={row.type}
                onChange={(e) => updateSampleRow(i, "type", e.target.value)}
              >
                {SAMPLE_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addSampleRow}
          style={{
            fontFamily: font,
            fontSize: "14px",
            fontWeight: 500,
            color: "#555555",
            background: "none",
            border: "1px solid #d0d0d0",
            borderRadius: "8px",
            padding: "6px 16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ fontSize: "16px" }}>&#8853;</span> Add
        </button>
      </div>

      {/* Conditional: If Other selected — one row per Other */}
      {otherCount > 0 && (
        <>
          <hr style={sectionDividerStyle} />
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                fontFamily: font,
                fontSize: "24px",
                fontWeight: 700,
                color: "#111111",
                margin: "0 0 24px",
              }}
            >
              If you selected &ldquo;Other,&rdquo; please specify below
            </h3>
            {Array.from({ length: otherCount }).map((_, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                <div style={{ flex: 1 }}>
                  {i === 0 && (
                    <label
                      style={{
                        ...labelStyle,
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      # of samples
                    </label>
                  )}
                  <input type="number" min="0" style={inputStyle} />
                </div>
                <div style={{ flex: 1 }}>
                  {i === 0 && (
                    <label
                      style={{
                        ...labelStyle,
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      Other (Please specify)
                    </label>
                  )}
                  <input type="text" style={inputStyle} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <hr style={sectionDividerStyle} />

      {/* QC Options */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>QC options &ndash; Tick one option</label>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "8px" }}
        >
          <label
            style={{
              fontFamily: font,
              fontSize: "15px",
              color: "#333333",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input type="radio" name="qc" value="standard" style={{ accentColor: "#8258c8" }} />
            Standard QC - Qubit Concentration Measure for all sample, No Bio/ Nanodrop
          </label>
          <label
            style={{
              fontFamily: font,
              fontSize: "15px",
              color: "#333333",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input type="radio" name="qc" value="complete" style={{ accentColor: "#8258c8" }} />
            Complete QC - Qubit Concentration and BioA/ Nano Drop for all samples before proceeding
            with Library preparation.
          </label>
        </div>
      </div>

      {/* Notes and Comments */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>Notes and Comments</label>
        <textarea
          rows={6}
          style={{
            ...inputStyle,
            borderRadius: "20px",
            resize: "vertical",
          }}
        />
      </div>

      {/* Sample concentration range */}
      <div style={{ marginBottom: "48px" }}>
        <label style={labelStyle}>Sample concentration range</label>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "8px" }}
        >
          <label
            style={{
              fontFamily: font,
              fontSize: "15px",
              color: "#333333",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="concentration"
              value="above"
              checked={concentration === "above"}
              onChange={(e) => setConcentration(e.target.value)}
              style={{ accentColor: "#8258c8" }}
            />
            {"All samples are above Conc. \u2265 16 ng/\u00B5L (min 10 \u00B5L)"}
          </label>
          <label
            style={{
              fontFamily: font,
              fontSize: "15px",
              color: "#333333",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="concentration"
              value="below"
              checked={concentration === "below"}
              onChange={(e) => setConcentration(e.target.value)}
              style={{ accentColor: "#8258c8" }}
            />
            {"All samples are below Conc. \u2265 16 ng/\u00B5L (min 10 \u00B5L)"}
          </label>
          <label
            style={{
              fontFamily: font,
              fontSize: "15px",
              color: "#333333",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="concentration"
              value="some"
              checked={concentration === "some"}
              onChange={(e) => setConcentration(e.target.value)}
              style={{ accentColor: "#8258c8" }}
            />
            {"Some samples are below Conc. \u2265 16 ng/\u00B5L (min 10 \u00B5L)"}
          </label>
        </div>

        {/* Conditional: show when "Some samples are below" is selected */}
        {concentration === "some" && (
          <div style={{ marginTop: "24px" }}>
            <label style={labelStyle}>Please specify the sample numbers</label>
            <input type="text" style={inputStyle} />
          </div>
        )}
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          className="book-a-call-btn"
          style={{
            background: "linear-gradient(135deg, #8258c8, #2c84c8)",
            color: "#ffffff",
            cursor: "pointer",
            border: "none",
          }}
        >
          Request Quote
          <span className="book-a-call-arrow">
            <span className="book-a-call-arrow-inner">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H5M12 4V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H5M12 4V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </button>
        <p
          style={{
            fontFamily: font,
            fontSize: "13px",
            color: "#999999",
            marginTop: "12px",
          }}
        >
          By submitting, you agree to Biostate&apos;s{" "}
          <a
            href="#"
            style={{ color: "#45d0bd", textDecoration: "none" }}
          >
            Terms &amp; Conditions
          </a>
          .
        </p>
      </div>
    </form>
  );
}
