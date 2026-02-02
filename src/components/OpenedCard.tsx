"use client";

import CelebrationIcon from "@/assets/icons/celebration.svg";
import AutorenewIcon from "@/assets/icons/autorenew.svg";

interface OpenedCardProps {
  onClose: () => void;
}

export default function OpenedCard({ onClose }: OpenedCardProps) {
  return (
    <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto"}}>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          overflow: "hidden",
          minHeight: "550px",
        }}
        className="flex-col md:flex-row"
      >
        {/* Left Panel */}
        <div
          style={{
            flex: 1,
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
          }}
          className="md:border-r md:border-[#f5f0f2] md:p-14"
        >
          {/* Celebration Icon */}
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "rgba(244, 37, 123, 0.05)",
                color: "#f4257b",
              }}
            >
              <CelebrationIcon width={28} height={28} />
            </div>
          </div>

          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "50px",
              backgroundColor: "rgba(244, 37, 123, 0.1)",
              color: "#f4257b",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "20px",
              width: "fit-content",
            }}
          >
            Od 1998
          </span>

          {/* Title */}
          <h1
            style={{
              color: "#181114",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
            className="text-4xl md:text-[54px]"
          >
            Wszystkiego <span style={{ color: "#f4257b" }}>najlepszego</span>
            <br />
            z okazji 28 urodzin, Siostrzyczko!
          </h1>

          {/* Gradient Line */}
          <div
            style={{
              width: "56px",
              height: "4px",
              background: "linear-gradient(to right, #f4257b, #a855f7)",
              borderRadius: "50px",
              marginBottom: "24px",
            }}
          />

          {/* Description */}
          <p
            style={{
              color: "rgba(24, 17, 20, 0.6)",
              fontSize: "16px",
              lineHeight: 1.6,
              maxWidth: "360px",
            }}
          >
            Za kolejny rok wspaniałych przygód, śmiechu i radości. Świat jest jaśniejszy dzięki Tobie.
          </p>
        </div>

        {/* Right Panel */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff0f5",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "24px",
          }}
          className="md:p-14"
        >
          {/* Balloons Row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ opacity: 0.6 }}>
              <svg fill="none" height="50" viewBox="0 0 60 80" width="40">
                <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="#9F7AEA" fillOpacity="0.9" />
                <path d="M30 60L32 72" stroke="#181114" strokeOpacity="0.2" strokeWidth="2" />
                <circle cx="18" cy="15" fill="white" fillOpacity="0.4" r="5" />
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <div style={{ width: "10px", height: "10px", backgroundColor: "#facc15", borderRadius: "50%", marginTop: "24px" }} />
              <div style={{ opacity: 0.8 }}>
                <svg fill="none" height="70" viewBox="0 0 60 80" width="52">
                  <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="url(#balloon_pink)" fillOpacity="0.9" />
                  <path d="M30 60L28 75" stroke="#181114" strokeOpacity="0.2" strokeWidth="2" />
                  <circle cx="20" cy="18" fill="white" fillOpacity="0.4" r="6" />
                  <defs>
                    <linearGradient id="balloon_pink" x1="30" x2="30" y1="0" y2="60" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F4257B" />
                      <stop offset="1" stopColor="#FF7582" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Message Card */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)",
                padding: "16px 24px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transform: "0.5deg",
              }}
            >
              <p
                style={{
                  fontFamily: "Caveat, cursive",
                  color: "#181114",
                  fontSize: "30px",
                  lineHeight: 1.4,
                }}
              >
                &quot;Kochana Siostrzyczko, życzę Ci, żeby każdy kolejny dzień przynosił Ci uśmiech, a życie było pełne ludzi, którzy kochają Cię tak mocno jak ja. Bądź zawsze sobą — bo jesteś wspaniała dokładnie taka, jaka jesteś. Wypij dziś szampana za siebie, a w weekend świętujemy razem!&quot;
              </p>
              <p
                style={{
                  fontFamily: "Caveat, cursive",
                  color: "#181114",
                  fontSize: "24px",
                  marginTop: "16px",
                  textAlign: "right",
                }}
              >
                buziaki
              </p>
            </div>

            {/* Decorations */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", padding: "0 16px" }}>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "7px solid transparent",
                  borderRight: "7px solid transparent",
                  borderBottom: "14px solid #60a5fa",
                  transform: "rotate(12deg)",
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#f4257b",
                  transform: "rotate(45deg)",
                  opacity: 0.5,
                }}
              />
            </div>
          </div>

          {/* Sent By */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  color: "#f4257b",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "4px",
                }}
              >
                Wysłane przez
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "linear-gradient(to bottom right, #fcd34d, #f97316)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: 700,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  SK
                </div>
                <span style={{ color: "#8a6072", fontWeight: 500 }}>Szymon Kotarba</span>
              </div>
            </div>
          </div>

          {/* Replay Button */}
          <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(244, 37, 123, 0.1)", display: "flex", justifyContent: "center" }}>
            <button
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px 28px",
                backgroundColor: "white",
                color: "#f4257b",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "14px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(244, 37, 123, 0.2)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              className="group hover:shadow-lg hover:-translate-y-0.5"
            >
              <AutorenewIcon width={18} height={18} className="group-hover:animate-spin" />
              <span>Odtwórz ponownie</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
