"use client";

import { motion } from "framer-motion";
import Seed from "@/components/visuals/Seed";

// 나중에 실제 이미지로 교체될 지점
const seedImg = "/images/seed.png";
const sproutImg = "/images/sprout.png";

const mainCopy = "100일 후, 당신의 감정은 꽃이 됩니다.";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1D352D] flex flex-col items-center justify-center overflow-hidden">
      {/* 배경 그라데이션 오버레이 (선택사항) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D352D] via-[#1D352D] to-[#1a2e26] opacity-50" />
      
      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4">
        {/* 씨앗 컴포넌트 */}
        <Seed className="mb-8" />
        
        {/* 메인 카피 텍스트 */}
        <motion.h1
          className="text-[#FCFBF7] text-4xl md:text-5xl lg:text-6xl font-sans font-light text-center leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mainCopy.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* CTA 버튼 */}
        <motion.button
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
        </motion.button>
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

