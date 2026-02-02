"use client";

import Image from "next/image";
import CelebrationIcon from "@/assets/icons/celebration.svg";
import StarIcon from "@/assets/icons/star.svg";
import ArrowUpIcon from "@/assets/icons/arrow_upward.svg";

interface ClosedCardProps {
  onOpen: () => void;
}

export default function ClosedCard({ onOpen }: ClosedCardProps) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "#f8f5f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "480px",
          width: "100%",
        }}
      >
        {/* Card */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3.5/5",
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 20px 40px -10px rgba(244, 37, 123, 0.15), 0 0 20px rgba(0,0,0,0.05)",
            cursor: "pointer",
            transition: "all 0.5s ease",
          }}
          className="hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Background Image */}
          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTmkyDnJmEV22e6_N5zruN5htGRGJ-7Zbc51vJHRHyreOS0tHjb_F6vovYPHgFeunvxbhiApZbr53sM4avgLtm5vRvEamWE_1Ke5_-KR6KP3jGRXWyd4th_PYE4snQ3G5wpNz-GSkrxfjOQT9Hfzqt0rt65yXYSB9yTpGX07CT9c8oZa5skPARRm9noeDgIwbtVIoCNFtBT_OgLrIbB3MZ715j7ygH0Ghg8sHkGhn27Y1PzeA9IWBnqVzPsrtSTM89M3m5h2h8Rh0" alt="Birthday background" fill style={{ objectFit: "cover" }} priority />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.6))",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
              textAlign: "center",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 50%, transparent 75%)",
            }}
          >
            <p
              style={{
                color: "#f4257b",
                fontSize: "20px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "8px",
                textShadow: "0 1px 2px rgba(255,255,255,0.5)",
              }}
            >
              To Twój Dzień
            </p>
            <h1
              style={{
                color: "#181114",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              Wszystkiego Najlepszego!
            </h1>

            {/* Number 28 - no hover zoom */}
            <div
              style={{
                position: "relative",
                margin: "16px 0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(250, 204, 21, 0.2)",
                  filter: "blur(32px)",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  position: "relative",
                  fontSize: "160px",
                  lineHeight: 1,
                  fontWeight: 900,
                  background: "linear-gradient(to bottom right, #fcd34d, #eab308, #d97706)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                }}
              >
                28
              </span>

              {/* Celebration icon */}
              <div
                style={{
                  position: "absolute",
                  top: "-16px",
                  right: "-16px",
                  color: "#a78bfa",
                }}
              >
                <CelebrationIcon width={40} height={40} />
              </div>

              {/* Star icon */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "-32px",
                  color: "#f4257b",
                }}
              >
                <StarIcon width={32} height={32} />
              </div>
            </div>

            <p
              style={{
                marginTop: "16px",
                color: "#8a6072",
                fontWeight: 500,
                fontSize: "18px",
                maxWidth: "200px",
              }}
            >
              Za kolejny rok bycia wspaniałą!
            </p>
          </div>
        </div>

        {/* Button */}
        <div style={{ position: "relative", marginTop: "-24px", zIndex: 20 }}>
          <button
            onClick={onOpen}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              height: "56px",
              paddingLeft: "24px",
              paddingRight: "32px",
              backgroundColor: "#f4257b",
              color: "white",
              borderRadius: "50px",
              border: "none",
              boxShadow: "0 10px 15px -3px rgba(244, 37, 123, 0.3)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            className="hover:bg-pink-600 hover:scale-105"
          >
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowUpIcon width={20} height={20} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Kliknij aby otworzyć
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
