import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Quote - biostate.AI",
  description: "Request a quote from biostate.AI.",
};

export default function GetQuotePage() {
  return (
    <div>
      {/* Page Header Banner */}
      <section
        style={{
          position: "relative",
          width: "calc(100% - 48px)",
          margin: "0 auto",
          marginTop: "12px",
          height: "320px",
        }}
      >
        {/* Main banner shape with notches carved out */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            borderRadius: "25px",
            /* Top-left notch: clip out a rectangle */
            clipPath: `path("
              M 140 0
              L 140 0
              Q 140 0 140 0
              L calc(100% - 25) 0
              Q 100% 0 100% 25
              L 100% calc(55% - 25)
              Q 100% 55% calc(100% - 25) 55%
              L calc(88%) 55%
              Q calc(88% - 25) 55% calc(88% - 25) calc(55% + 25)
              L calc(88% - 25) calc(100% - 25)
              Q calc(88% - 25) 100% calc(88% - 50) 100%
              L 25 100%
              Q 0 100% 0 calc(100% - 25)
              L 0 calc(30% + 25)
              Q 0 30% 25 30%
              L calc(140 - 25) 30%
              Q 140 30% 140 calc(30% - 25)
              Z
            ")`,
          }}
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/headerbg.png"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Purple-blue gradient overlay at 60% opacity */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(140, 100, 220, 0.6), rgba(100, 170, 230, 0.6))",
            }}
          />
        </div>

        {/* Top-left white notch overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "140px",
            height: "30%",
            background: "#ffffff",
            borderBottomRightRadius: "25px",
            zIndex: 2,
          }}
        />

        {/* Bottom-right white notch overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "12%",
            height: "45%",
            background: "#ffffff",
            borderTopLeftRadius: "25px",
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 600,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            / Get Quote /
          </h1>

          {/* Large "Quote" outline text on the right */}
          <div
            style={{
              position: "absolute",
              right: "calc(12% + 10px)",
              top: "10%",
              fontFamily: "'Manrope', Arial, Helvetica, sans-serif",
              fontSize: "clamp(80px, 10vw, 130px)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.35)",
              writingMode: "vertical-rl",
              letterSpacing: "0.05em",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            Quote
          </div>
        </div>
      </section>
    </div>
  );
}
