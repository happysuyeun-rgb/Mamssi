"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FileJson, FileSpreadsheet, Sparkles } from "lucide-react";
import FlowerCard from "@/components/cards/FlowerCard";

// 임시 데이터 - 나중에 API로 교체될 지점
interface FlowerData {
  id: string;
  name: string;
  bloomDate: string;
  empathyCount: number;
  emotion: string;
}

const dummyFlowers: FlowerData[] = [
  {
    id: "1",
    name: "봄비",
    bloomDate: "2025-11-05",
    empathyCount: 12,
    emotion: "🌸",
  },
  {
    id: "2",
    name: "햇살",
    bloomDate: "2025-10-28",
    empathyCount: 8,
    emotion: "☀️",
  },
  {
    id: "3",
    name: "안개",
    bloomDate: "2025-10-15",
    empathyCount: 5,
    emotion: "🌫️",
  },
  {
    id: "4",
    name: "별빛",
    bloomDate: "2025-10-01",
    empathyCount: 15,
    emotion: "⭐",
  },
];

// 주간 감정 달력 데이터 (임시)
const weeklyEmotions = [
  ["😊", "😌", "😊", "😢", "😊", "😌", "😊"],
  ["😌", "😊", "😢", "😊", "😌", "😊", "😊"],
  ["😊", "😢", "😊", "😌", "😊", "😊", "😌"],
  ["😊", "😊", "😌", "😊", "😢", "😊", "😊"],
];

const emotionCellVariants = {
  rest: {},
  hover: {},
};

const emotionEmojiVariants = {
  rest: { scale: 1.45, opacity: 0.95 }, // 디폴트 70% 확대 (0.85 * 1.7)
  hover: {
    scale: 2.38,
    opacity: 1,
    filter: "drop-shadow(0 0 12px rgba(229,193,133,0.6))",
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

const emotionGlowVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

/** 주간 감성 달력 - 단순 사각형 셀, 호버 시 이모지 Spring 효과 + 은은한 광채 */
function EmotionGardenCell({ emotion, index }: { emotion: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
    >
      <motion.div
        data-flower-particle
        data-emotion={emotion}
        variants={emotionCellVariants}
        initial="rest"
        whileHover="hover"
        className="group relative aspect-square flex items-center justify-center cursor-pointer
                   rounded-lg bg-white/5 border border-white/10
                   shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                   hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
      >
        {/* 호버 시 이모지 - Spring 부풀어 오름 + 은은한 광채 */}
        <motion.span
          variants={emotionEmojiVariants}
          className="relative z-10 text-2xl select-none block"
        >
          {emotion}
        </motion.span>
        {/* 호버 시 은은한 광채 링 */}
        <motion.div
          variants={emotionGlowVariants}
          className="absolute inset-0 rounded-lg pointer-events-none
                     bg-[radial-gradient(circle_at_50%_50%,rgba(229,193,133,0.2)_0%,transparent_70%)]"
        />
      </motion.div>
    </motion.div>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  delay: number;
}

function StatCard({ label, value, suffix = "", delay }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const springValue = useSpring(0, { damping: 30, stiffness: 100 });

  useEffect(() => {
    springValue.set(value);
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [value, springValue]);

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <p className="text-[#FCFBF7]/60 font-sans text-sm mb-2">{label}</p>
      <p className="text-[#E5C185] font-sans font-bold text-3xl">
        {displayValue}
        {suffix && <span className="text-xl ml-1">{suffix}</span>}
      </p>
    </motion.div>
  );
}

interface DataExportButtonProps {
  format: "json" | "csv";
  onExport: () => void;
}

function DataExportButton({ format, onExport }: DataExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleExport = () => {
    setIsExporting(true);

    if (!buttonRef.current) {
      onExport();
      setIsExporting(false);
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // JSON: 꽃가루 흩어짐 → 파일 아이콘으로 모이는 입자 애니메이션
    if (format === "json") {
      const flowerElements = document.querySelectorAll("[data-flower-particle]");
      const particles: HTMLDivElement[] = [];

      if (flowerElements.length === 0) {
        onExport();
        setIsExporting(false);
        return;
      }

      flowerElements.forEach((el) => {
        const emotion = el.getAttribute("data-emotion") || "🌸";
        const r = el.getBoundingClientRect();
        const startX = r.left + r.width / 2;
        const startY = r.top + r.height / 2;

        const particle = document.createElement("div");
        particle.className = "fixed pointer-events-none z-[9999] text-2xl flex items-center justify-center";
        particle.textContent = emotion;
        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;
        particle.style.transform = "translate(-50%, -50%)";
        particle.style.transition = "none";
        particle.style.filter = "drop-shadow(0 0 6px rgba(229,193,133,0.5))";
        document.body.appendChild(particle);
        particles.push(particle);

        // Phase 1: 꽃가루처럼 흩어짐 (0.4s)
        const scatterAngle = Math.random() * Math.PI * 2;
        const scatterDist = 60 + Math.random() * 80;
        const scatterX = startX + Math.cos(scatterAngle) * scatterDist;
        const scatterY = startY + Math.sin(scatterAngle) * scatterDist;

        requestAnimationFrame(() => {
          particle.style.transition = "all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)";
          particle.style.left = `${scatterX}px`;
          particle.style.top = `${scatterY}px`;
          particle.style.transform = "translate(-50%, -50%) scale(1.2)";
          particle.style.opacity = "0.9";
        });
      });

      // Phase 2: 파일 아이콘으로 모임 (0.7s)
      setTimeout(() => {
        particles.forEach((particle) => {
          particle.style.transition = "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          particle.style.left = `${centerX}px`;
          particle.style.top = `${centerY}px`;
          particle.style.transform = "translate(-50%, -50%) scale(0)";
          particle.style.opacity = "0";
        });

        setTimeout(() => {
          particles.forEach((p) => p.remove());
          setIsExporting(false);
          onExport();
        }, 750);
      }, 500);
    } else {
      // CSV: 기존 간단한 애니메이션
      const particles = Array.from({ length: 12 }, (_, i) => {
        const particle = document.createElement("div");
        particle.className = "fixed w-2 h-2 rounded-full bg-[#E5C185] pointer-events-none z-50";
        const angle = (Math.PI * 2 * i) / 12;
        const radius = 80 + Math.random() * 40;
        particle.style.left = `${centerX + Math.cos(angle) * radius}px`;
        particle.style.top = `${centerY + Math.sin(angle) * radius}px`;
        document.body.appendChild(particle);
        requestAnimationFrame(() => {
          particle.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
          particle.style.left = `${centerX}px`;
          particle.style.top = `${centerY}px`;
          particle.style.transform = "translate(-50%, -50%) scale(0)";
          particle.style.opacity = "0";
        });
        return particle;
      });
      setTimeout(() => {
        particles.forEach((p) => p.remove());
        setIsExporting(false);
        onExport();
      }, 900);
    }
  };

  const Icon = format === "json" ? FileJson : FileSpreadsheet;
  const label = format === "json" ? "JSON" : "CSV";

  return (
    <motion.button
      ref={buttonRef}
      className="relative px-6 py-3 bg-white/5 border border-white/10 rounded-lg 
                 text-[#FCFBF7] font-sans font-medium hover:border-[#E5C185]/30 
                 hover:bg-white/10 transition-all duration-300 flex items-center gap-2
                 overflow-hidden"
      onClick={handleExport}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isExporting}
    >
      <Icon size={18} className="relative z-10" />
      <span className="relative z-10">{label}</span>
      {isExporting && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white/5 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Sparkles size={20} className="text-[#E5C185]" />
        </motion.div>
      )}
    </motion.button>
  );
}

export default function InsightDashboard() {
  const [stats, setStats] = useState({
    records: 0,
    empathy: 0,
    flowers: 0,
  });

  // 통계 데이터 (임시)
  useEffect(() => {
    setStats({
      records: 8,
      empathy: 4,
      flowers: 2,
    });
  }, []);

  const handleExport = (format: "json" | "csv") => {
    // 실제로는 API 호출 또는 데이터 생성 로직
    const data = {
      flowers: dummyFlowers,
      weeklyEmotions,
      stats,
    };

    if (format === "json") {
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `mamssi-data-${new Date().toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      // CSV 변환
      const csv = [
        ["꽃 이름", "개화 날짜", "받은 공감 수"],
        ...dummyFlowers.map((f) => [f.name, f.bloomDate, f.empathyCount.toString()]),
      ]
        .map((row) => row.join(","))
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `mamssi-data-${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#1D352D] py-20 px-4 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-white/5 opacity-30" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
             backgroundSize: "40px 40px",
           }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#FCFBF7] font-sans font-light text-4xl md:text-5xl mb-4">
            당신의 마음은{" "}
            <span className="text-[#E5C185] font-medium">데이터</span>가 되고,{" "}
            <span className="text-[#E5C185] font-medium">아름다운 자산</span>이 됩니다.
          </h2>
        </motion.div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard label="기록" value={stats.records} suffix="" delay={0.1} />
          <StatCard label="받은 공감" value={stats.empathy} suffix="" delay={0.2} />
          <StatCard label="개화한 꽃" value={stats.flowers} suffix="송이" delay={0.3} />
        </div>

        {/* 주간 감성 달력 - 원본 디자인 */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-[#FCFBF7] font-sans font-medium text-2xl mb-8 text-center">
            주간 감성 달력
          </h3>
          <div className="flex gap-6">
            <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-7 gap-3">
                {weeklyEmotions.flat().map((emotion, index) => (
                  <EmotionGardenCell key={index} emotion={emotion} index={index} />
                ))}
              </div>
            </div>
            {/* 레벨 표시 */}
            <div className="flex flex-col justify-between text-[#FCFBF7]/60 font-sans text-sm py-2">
              <span>Lv.0</span>
              <span>Lv.1</span>
              <span>Lv.2</span>
              <span>Lv.3</span>
              <span>Lv.4</span>
              <span>Lv.5</span>
            </div>
          </div>
        </motion.div>

        {/* 감정꽃 앨범 */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-[#FCFBF7] font-sans font-medium text-2xl mb-6 text-center">
            감정꽃 앨범
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyFlowers.map((flower, index) => (
              <FlowerCard
                key={flower.id}
                name={flower.name}
                bloomDate={flower.bloomDate}
                empathyCount={flower.empathyCount}
                emotion={flower.emotion}
                delay={0.7 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Data Export Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-[#FCFBF7] font-sans font-medium text-2xl mb-3">
            나의 정서적 주권을 직접 소유하세요
          </h3>
          <p className="text-[#FCFBF7]/60 font-sans text-sm mb-6">
            당신의 감정 데이터를 JSON 또는 CSV 형식으로 내보낼 수 있습니다.
          </p>
          <div className="flex items-center justify-center gap-4">
            <DataExportButton format="json" onExport={() => handleExport("json")} />
            <DataExportButton format="csv" onExport={() => handleExport("csv")} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

