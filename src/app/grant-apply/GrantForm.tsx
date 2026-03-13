"use client";

import { useState, useEffect } from "react";

const font = "'Manrope', Arial, Helvetica, sans-serif";

const labelStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: "16px",
  fontWeight: 700,
  color: "#222222",
  marginBottom: "8px",
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

const subLabelStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: "13px",
  fontWeight: 400,
  color: "#666666",
  marginTop: "6px",
  display: "block",
};

const radioLabelStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: "15px",
  color: "#333333",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
};

const sectionDividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #e0e0e0",
  margin: "40px 0",
};

const WES_USAGE_OPTIONS = [
  "Yes, routinely",
  "Yes, occasionally",
  "No, but planning to",
  "No, not currently",
  "Other",
];

const BIOINFORMATICS_OPTIONS = [
  "Yes, with extra charge",
  "No, we do it in-house",
  "No, we have other external collaborator",
  "Other",
];

const PRIORITIES_OPTIONS = [
  "Turnaround time",
  "Cost-effectiveness",
  "Data quality / coverage",
  "Ability to process low-quality or FFPE samples",
  "Bioinformatics support",
  "Grant / funding assistance",
  "Regulatory compliance",
  "Flexible sample input types",
  "Other",
];

const SPECIES_OPTIONS = ["Human", "Mouse", "Rat", "Other"];

const SAMPLE_COUNT_OPTIONS = ["1–10", "11–30", "31–60", "61–100", "100+"];

const EARLY_ACCESS_OPTIONS = [
  "Yes",
  "Maybe, I'd like to learn more",
  "No",
];

const GRANT_PROGRAM_OPTIONS = ["Yes", "Possibly", "No"];

const COLLABORATION_OPTIONS = ["Yes", "Not yet, but planning to", "No"];

export default function GrantForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [wesUsage, setWesUsage] = useState("");
  const [wesUsageOther, setWesUsageOther] = useState("");
  const [platform, setPlatform] = useState("");
  const [bioinformatics, setBioinformatics] = useState("");
  const [bioinformaticsOther, setBioinformaticsOther] = useState("");
  const [priorities, setPriorities] = useState<string[]>([]);
  const [prioritiesOther, setPrioritiesOther] = useState("");
  const [species, setSpecies] = useState("");
  const [speciesOther, setSpeciesOther] = useState("");
  const [sampleCount, setSampleCount] = useState("");
  const [challenges, setChallenges] = useState("");
  const [earlyAccess, setEarlyAccess] = useState("");
  const [grantProgram, setGrantProgram] = useState("");
  const [researchGoal, setResearchGoal] = useState("");
  const [collaboration, setCollaboration] = useState("");
  const [anythingElse, setAnythingElse] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const top = document.getElementById("grant-top");
      if (top) {
        top.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, [submitted]);

  const togglePriority = (option: string) => {
    setPriorities((prev) =>
      prev.includes(option)
        ? prev.filter((p) => p !== option)
        : prev.length < 3
          ? [...prev, option]
          : prev
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzMaWMQPiumdGXyY2Ym-ub_uwCE2d8ieeSYYldf9xEY9uT2yYBohWurafq8-2DAsETi/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formType: "grant-application",
            recipientEmail: "contact@biostate.ai",
            firstName,
            lastName,
            institution,
            email,
            wesUsage,
            wesUsageOther,
            platform,
            bioinformatics,
            bioinformaticsOther,
            priorities,
            prioritiesOther,
            species,
            speciesOther,
            sampleCount,
            challenges,
            earlyAccess,
            grantProgram,
            researchGoal,
            collaboration,
            anythingElse,
          }),
        }
      );
      setSubmitted(true);
    } catch {
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 24px 80px",
          minHeight: "60vh",
        }}
      >
        <h3
          style={{
            fontFamily: font,
            fontSize: "28px",
            fontWeight: 700,
            color: "#111111",
            marginBottom: "16px",
          }}
        >
          Thank you!
        </h3>
        <p
          style={{
            fontFamily: font,
            fontSize: "16px",
            color: "#555555",
            lineHeight: 1.7,
          }}
        >
          Your grant application has been submitted successfully.
          <br />A confirmation will be sent to {email}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "0 0 80px",
      }}
    >
      {/* Name */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Name <span style={{ color: "#e53935" }}>*</span>
        </label>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ flex: 1 }}>
            <input
              type="text"
              style={inputStyle}
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span style={subLabelStyle}>First</span>
          </div>
          <div style={{ flex: 1 }}>
            <input
              type="text"
              style={inputStyle}
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span style={subLabelStyle}>Last</span>
          </div>
        </div>
      </div>

      {/* Institution / Organization */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Institution / Organization <span style={{ color: "#e53935" }}>*</span>
        </label>
        <input
          type="text"
          style={inputStyle}
          required
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />
      </div>

      {/* Email Address */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Email Address <span style={{ color: "#e53935" }}>*</span>
        </label>
        <input
          type="email"
          style={inputStyle}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <hr style={sectionDividerStyle} />

      {/* Are you currently using WES? */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Are you currently using Whole Exome Sequencing (WES) in your work?{" "}
          <span style={{ color: "#e53935" }}>*</span>
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "8px",
          }}
        >
          {WES_USAGE_OPTIONS.map((option) => (
            <label key={option} style={radioLabelStyle}>
              <input
                type="radio"
                name="wesUsage"
                value={option}
                checked={wesUsage === option}
                onChange={(e) => setWesUsage(e.target.value)}
                style={{ accentColor: "#8258c8" }}
              />
              {option}
            </label>
          ))}
        </div>
        {wesUsage === "Other" && (
          <div style={{ marginTop: "16px" }}>
            <input
              type="text"
              style={inputStyle}
              placeholder="Please specify"
              value={wesUsageOther}
              onChange={(e) => setWesUsageOther(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Which platform for WES? */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Which platform do you currently use or plan to use for WES (if any)?
        </label>
        <input
          type="text"
          style={inputStyle}
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
      </div>

      {/* Bioinformatics analysis */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Do you typically include bioinformatics analysis with your WES
          services?
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "8px",
          }}
        >
          {BIOINFORMATICS_OPTIONS.map((option) => (
            <label key={option} style={radioLabelStyle}>
              <input
                type="radio"
                name="bioinformatics"
                value={option}
                checked={bioinformatics === option}
                onChange={(e) => setBioinformatics(e.target.value)}
                style={{ accentColor: "#8258c8" }}
              />
              {option}
            </label>
          ))}
        </div>
        {bioinformatics === "Other" && (
          <div style={{ marginTop: "16px" }}>
            <input
              type="text"
              style={inputStyle}
              placeholder="Please specify"
              value={bioinformaticsOther}
              onChange={(e) => setBioinformaticsOther(e.target.value)}
            />
          </div>
        )}
      </div>

      <hr style={sectionDividerStyle} />

      {/* Top 3 priorities */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          What are your top 3 priorities in a WES service?{" "}
          <span style={{ color: "#e53935" }}>*</span>
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "8px",
          }}
        >
          {PRIORITIES_OPTIONS.map((option) => (
            <label key={option} style={radioLabelStyle}>
              <input
                type="checkbox"
                checked={priorities.includes(option)}
                onChange={() => togglePriority(option)}
                style={{ accentColor: "#8258c8" }}
              />
              {option}
            </label>
          ))}
        </div>
        {priorities.includes("Other") && (
          <div style={{ marginTop: "16px" }}>
            <input
              type="text"
              style={inputStyle}
              placeholder="Please specify"
              value={prioritiesOther}
              onChange={(e) => setPrioritiesOther(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Sample species */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          What sample species are you working with for WES?{" "}
          <span style={{ color: "#e53935" }}>*</span>
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "8px",
          }}
        >
          {SPECIES_OPTIONS.map((option) => (
            <label key={option} style={radioLabelStyle}>
              <input
                type="radio"
                name="species"
                value={option}
                checked={species === option}
                onChange={(e) => setSpecies(e.target.value)}
                style={{ accentColor: "#8258c8" }}
              />
              {option}
            </label>
          ))}
        </div>
        {species === "Other" && (
          <div style={{ marginTop: "16px" }}>
            <input
              type="text"
              style={inputStyle}
              placeholder="Please specify"
              value={speciesOther}
              onChange={(e) => setSpeciesOther(e.target.value)}
            />
          </div>
        )}
      </div>

      <hr style={sectionDividerStyle} />

      {/* How many samples */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          How many samples are you planning to sequence in the next 6–12 months?{" "}
          <span style={{ color: "#e53935" }}>*</span>
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "8px",
          }}
        >
          {SAMPLE_COUNT_OPTIONS.map((option) => (
            <label key={option} style={radioLabelStyle}>
              <input
                type="radio"
                name="sampleCount"
                value={option}
                checked={sampleCount === option}
                onChange={(e) => setSampleCount(e.target.value)}
                style={{ accentColor: "#8258c8" }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Challenges / pain points */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          What are your main challenges or pain points with WES today?
        </label>
        <input
          type="text"
          style={inputStyle}
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
        />
      </div>

      {/* Early access interest */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Would you be interested in early access to Biostate AI&apos;s WES
          service (launching Oct/Nov 2025)?{" "}
          <span style={{ color: "#e53935" }}>*</span>
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "8px",
          }}
        >
          {EARLY_ACCESS_OPTIONS.map((option) => (
            <label key={option} style={radioLabelStyle}>
              <input
                type="radio"
                name="earlyAccess"
                value={option}
                checked={earlyAccess === option}
                onChange={(e) => setEarlyAccess(e.target.value)}
                style={{ accentColor: "#8258c8" }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* WES Grant Program interest */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Would you be interested in applying for our WES Grant Program(free WES
          for up to 60 samples)?{" "}
          <span style={{ color: "#e53935" }}>*</span>
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "8px",
          }}
        >
          {GRANT_PROGRAM_OPTIONS.map((option) => (
            <label key={option} style={radioLabelStyle}>
              <input
                type="radio"
                name="grantProgram"
                value={option}
                checked={grantProgram === option}
                onChange={(e) => setGrantProgram(e.target.value)}
                style={{ accentColor: "#8258c8" }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <hr style={sectionDividerStyle} />

      {/* Research goal and significance */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Please briefly describe the goal and significance of your research,
          and outline your ideal follow-up study assuming the current study is
          successful. <span style={{ color: "#e53935" }}>*</span>
        </label>
        <textarea
          rows={4}
          style={{
            ...inputStyle,
            borderRadius: "20px",
            resize: "vertical",
          }}
          required
          value={researchGoal}
          onChange={(e) => setResearchGoal(e.target.value)}
        />
      </div>

      {/* Collaboration letter */}
      <div style={{ marginBottom: "32px" }}>
        <label style={labelStyle}>
          Are you planning to apply for any grants where we could support with a
          collaboration letter (e.g., NIH)?
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "8px",
          }}
        >
          {COLLABORATION_OPTIONS.map((option) => (
            <label key={option} style={radioLabelStyle}>
              <input
                type="radio"
                name="collaboration"
                value={option}
                checked={collaboration === option}
                onChange={(e) => setCollaboration(e.target.value)}
                style={{ accentColor: "#8258c8" }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Anything else */}
      <div style={{ marginBottom: "48px" }}>
        <label style={labelStyle}>
          Is there anything else you&apos;d like to share with us?
        </label>
        <textarea
          rows={4}
          style={{
            ...inputStyle,
            borderRadius: "20px",
            resize: "vertical",
          }}
          value={anythingElse}
          onChange={(e) => setAnythingElse(e.target.value)}
        />
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          className="book-a-call-btn"
          disabled={submitting}
          style={{
            background: "linear-gradient(135deg, #8258c8, #2c84c8)",
            color: "#ffffff",
            cursor: submitting ? "wait" : "pointer",
            border: "none",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "Submitting..." : "Submit Application"}
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
      </div>
    </form>
  );
}
