export default function Section10Video() {
  return (
    <section
      style={{
        padding: "40px 20px 80px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <video
        src="/images/timer_full.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          maxWidth: 1200,
          width: "100%",
          height: "auto",
          borderRadius: 20,
        }}
      />
    </section>
  );
}
