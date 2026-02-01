"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FlowerCardProps {
  name: string;
  bloomDate: string;
  empathyCount: number;
  emotion: string; // 감정 이모지
  delay?: number;
}

export default function FlowerCard({
  name,
  bloomDate,
  empathyCount,
  emotion,
  delay = 0,
}: FlowerCardProps) {
  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 
                 hover:border-[#E5C185]/30 transition-all duration-300 cursor-pointer
                 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(229, 193, 133, 0.2)",
      }}
    >
      {/* Gold 광채 효과 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#E5C185]/0 via-[#E5C185]/0 to-[#E5C185]/0 
                   rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(229, 193, 133, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* 감정 이모지 - JSON 내보내기 입자 애니메이션용 */}
        <div data-flower-particle data-emotion={emotion} className="text-6xl mb-4 text-center">
          {emotion}
        </div>

        {/* 꽃 이름 */}
        <h3 className="text-[#FCFBF7] font-sans font-medium text-xl mb-2 text-center">
          {name}
        </h3>

        {/* 개화 날짜 */}
        <p className="text-[#FCFBF7]/60 font-sans text-sm mb-4 text-center">
          {bloomDate}
        </p>

        {/* 받은 공감 수 */}
        <div className="flex items-center justify-center gap-2 text-[#E5C185]">
          <Heart size={16} className="fill-[#E5C185]" />
          <span className="font-sans font-medium text-sm">
            {empathyCount}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

