"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Seed from "@/components/visuals/Seed";

// 나중에 실제 이미지로 교체될 지점
const seedImg = "/images/seed.png";
const sproutImg = "/images/sprout.png";

const mainCopy = "100일 후, 당신의 감정은 꽃이 됩니다.";
const chars = mainCopy.split("");
const flowerIndex = mainCopy.indexOf("꽃");

export default function Hero() {
  const [displayLength, setDisplayLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStartTyping(true), 500);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    if (displayLength >= chars.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530);
      return () => clearInterval(cursorInterval);
    }

    const timer = setTimeout(() => {
      setDisplayLength((prev) => prev + 1);
    }, 80);

    return () => clearTimeout(timer);
  }, [displayLength, startTyping]);

  return (
    <section className="relative min-h-screen bg-[#1D352D] flex flex-col items-center justify-center overflow-hidden">
      {/* 배경 그라데이션 오버레이 (선택사항) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D352D] via-[#1D352D] to-[#1a2e26] opacity-50" />
      
      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4">
        {/* 씨앗 컴포넌트 */}
        <Seed className="mb-8" />
        
        {/* 메인 카피 텍스트 - 타이핑 효과 */}
        <h1 className="text-[#FCFBF7] text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-center leading-relaxed min-h-[1.2em]">
          {chars.slice(0, displayLength).map((char, index) => (
            <span key={index} className="inline-block">
              {index === flowerIndex ? (
                <span
                  className="font-bold"
                  style={{
                    background: "linear-gradient(135deg, #FFB6C1 0%, #FF69B4 50%, #FF1493 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {char}
                </span>
              ) : (
                char === " " ? "\u00A0" : char
              )}
            </span>
          ))}
          {displayLength < chars.length && (
            <span
              className={`inline-block w-0.5 h-[0.9em] bg-[#E5C185] ml-0.5 align-middle ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.1s" }}
            />
          )}
        </h1>
        
        {/* CTA 버튼 */}
        <motion.a
          href="https://mamssi-app.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border-2 border-[#E5C185] text-[#E5C185] font-sans font-medium rounded-full 
                     transition-all duration-300 hover:bg-[#E5C185] hover:text-[#1D352D] 
                     backdrop-blur-sm hover:shadow-lg hover:shadow-[#E5C185]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          내 마음의 씨앗 심기
        </motion.a>
      </div>
      
      {/* 스크롤 인디케이터 (선택사항) */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#E5C185]/50 rounded-full flex justify-center"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-[#E5C185] rounded-full mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

