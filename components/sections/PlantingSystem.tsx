"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// 나중에 실제 일러스트로 교체될 지점
const growthAssets = {
  level0: "/images/growth/seed.png", // 씨앗
  level1: "/images/growth/sprout.png", // 새싹
  level2: "/images/growth/stem.png", // 줄기
  level3: "/images/growth/bud.png", // 꽃봉오리
  level4: "/images/growth/flower.png", // 활짝 핀 꽃
  level5: "/images/growth/blooming.png", // 만개한 꽃
};

interface GrowthStep {
  id: number;
  title: string;
  description: string;
  points?: string;
  level: number;
}

const growthSteps: GrowthStep[] = [
  {
    id: 1,
    title: "작은 씨앗에 마음 담기",
    description: "하루 한 번, 오늘의 감정을 선택하고 5자 이상의 기록으로 씨앗을 심습니다.",
    points: "+5pt",
    level: 0,
  },
  {
    id: 2,
    title: "서로의 정원에 물주기",
    description: "공감숲에서 따뜻한 물을 주고받으며 씨앗을 키웁니다. 남을 위로하면 나도 함께 자랍니다.",
    points: "+2pt",
    level: 2,
  },
  {
    id: 3,
    title: "단단해지는 마음의 줄기",
    description: "20일간의 진심 어린 기록과 공감은 씨앗을 꽃봉오리로 진화시킵니다.",
    level: 3,
  },
  {
    id: 4,
    title: "세상에 단 하나뿐인 꽃",
    description: "100일의 여정 끝에 당신의 감정 패턴을 닮은 고유한 감정꽃이 피어납니다. 이는 당신의 소중한 정서적 자산이 됩니다.",
    level: 5,
  },
];

// 성장 단계별 시각적 표현 (임시 - 나중에 이미지로 교체)
function GrowthVisual({ level }: { level: number }) {
  const getVisualContent = () => {
    switch (level) {
      case 0:
        return (
          <motion.div
            className="w-48 h-48 rounded-full mx-auto"
            style={{
              background: "radial-gradient(circle, rgba(255, 183, 178, 0.8) 0%, rgba(255, 183, 178, 0.2) 100%)",
              boxShadow: "0 0 40px rgba(255, 183, 178, 0.4)",
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      case 1:
        return (
          <motion.div className="flex flex-col items-center gap-2">
            <motion.div
              className="w-32 h-32 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255, 183, 178, 0.6) 0%, rgba(255, 183, 178, 0.2) 100%)",
              }}
            />
            <motion.div
              className="w-2 h-16 bg-gradient-to-b from-[#E5C185] to-[#244238] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div className="flex flex-col items-center gap-2">
            <motion.div
              className="w-24 h-24 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255, 183, 178, 0.5) 0%, rgba(255, 183, 178, 0.2) 100%)",
              }}
            />
            <motion.div
              className="w-3 h-24 bg-gradient-to-b from-[#E5C185] to-[#244238] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        );
      case 3:
        return (
          <motion.div className="flex flex-col items-center gap-2">
            <motion.div
              className="w-20 h-20 rounded-full border-2 border-[#E5C185]"
              style={{
                background: "radial-gradient(circle, rgba(229, 193, 133, 0.3) 0%, transparent 100%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-3 h-28 bg-gradient-to-b from-[#E5C185] to-[#244238] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        );
      case 4:
        return (
          <motion.div className="flex flex-col items-center gap-2">
            <motion.div
              className="w-32 h-32 rounded-full relative"
              style={{
                background: "radial-gradient(circle, rgba(255, 183, 178, 0.6) 0%, rgba(229, 193, 133, 0.3) 100%)",
                boxShadow: "0 0 60px rgba(255, 183, 178, 0.5)",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#E5C185]/40" />
              </div>
            </motion.div>
            <motion.div
              className="w-3 h-32 bg-gradient-to-b from-[#E5C185] to-[#244238] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        );
      case 5:
        return (
          <motion.div className="flex flex-col items-center gap-2">
            <motion.div
              className="w-40 h-40 rounded-full relative"
              style={{
                background: "radial-gradient(circle, rgba(255, 183, 178, 0.8) 0%, rgba(229, 193, 133, 0.5) 50%, rgba(255, 183, 178, 0.3) 100%)",
                boxShadow: "0 0 80px rgba(255, 183, 178, 0.6), 0 0 120px rgba(229, 193, 133, 0.4)",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-24 h-24 rounded-full bg-[#E5C185]/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="w-4 h-36 bg-gradient-to-b from-[#E5C185] to-[#244238] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center h-full min-h-[400px]">
      <motion.div
        key={level}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {getVisualContent()}
      </motion.div>
    </div>
  );
}

interface ProgressBarProps {
  progress: any; // MotionValue<number> (0 ~ 1)
}

function ProgressBar({ progress }: ProgressBarProps) {
  const levels = [0, 1, 2, 3, 4, 5];
  const progressHeight = useTransform(progress, [0, 1], [0, 100]);
  const heightString = useTransform(progressHeight, (h) => `${h}%`);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = progressHeight.on("change", (latest) => {
      setCurrentProgress(latest);
    });
    return () => unsubscribe();
  }, [progressHeight]);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
      <div className="relative w-2 h-96 bg-[#244238] rounded-full overflow-hidden border border-white/10">
        {/* 진행도 바 */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#E5C185] to-[#E5C185]/60 rounded-full"
          style={{
            height: heightString,
          }}
        />
        
        {/* 레벨 마커 */}
        {levels.map((level) => {
          const levelPosition = (level / 5) * 100;
          const isActive = currentProgress >= levelPosition;
          
          return (
            <div
              key={level}
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ bottom: `${levelPosition}%` }}
            >
              <motion.div
                className={`w-4 h-4 rounded-full border-2 ${
                  isActive
                    ? "bg-[#E5C185] border-[#E5C185]"
                    : "bg-[#244238] border-white/20"
                }`}
                animate={{
                  scale: isActive ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* 레벨 텍스트 */}
      <div className="absolute right-12 top-0 h-96 flex flex-col justify-between py-2">
        {levels.map((level) => {
          const levelPosition = (level / 5) * 100;
          const isActive = currentProgress >= levelPosition;
          
          return (
            <motion.span
              key={level}
              className={`text-xs font-medium ${
                isActive ? "text-[#E5C185]" : "text-white/30"
              }`}
              animate={{
                opacity: isActive ? 1 : 0.3,
              }}
            >
              Lv.{level}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

interface StepCardProps {
  step: GrowthStep;
  index: number;
  scrollProgress: number;
}

function StepCard({ step, index }: Omit<StepCardProps, "scrollProgress">) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8 
                 hover:border-[#E5C185]/30 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0.3,
        y: isInView ? 0 : 20,
        scale: isInView ? 1 : 0.95,
      }}
      transition={{ duration: 0.6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E5C185]/10 border border-[#E5C185]/30 
                       flex items-center justify-center text-[#E5C185] font-bold text-lg">
          {step.id}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-[#FCFBF7] font-sans font-medium text-xl">
              {step.title}
            </h3>
            {step.points && (
              <span className="text-[#E5C185] font-sans font-semibold text-sm 
                             bg-[#E5C185]/10 px-3 py-1 rounded-full border border-[#E5C185]/30">
                {step.points}
              </span>
            )}
          </div>
          <p className="text-[#FCFBF7]/80 font-sans text-base leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PlantingSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 각 단계별 스크롤 구간에 따른 레벨 결정
  // Step 1: 0-25% -> Level 0-1
  // Step 2: 25-50% -> Level 2
  // Step 3: 50-75% -> Level 3
  // Step 4: 75-100% -> Level 3-5
  const activeLevel = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 5]);

  const [visualLevel, setVisualLevel] = useState(0);

  useEffect(() => {
    const unsubscribe = activeLevel.on("change", (latest) => {
      setVisualLevel(Math.round(latest));
    });
    return () => unsubscribe();
  }, [activeLevel]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(400vh-1300px)] bg-gradient-to-b from-[#244238] to-[#1D352D] 
                 overflow-hidden"
    >
      {/* 진행도 바 */}
      <ProgressBar progress={scrollYProgress} />

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* 좌측: Sticky 시각적 요소 */}
          <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="w-full">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[#FCFBF7] font-sans font-light text-3xl md:text-4xl mb-2">
                  성장의 여정
                </h2>
                <p className="text-[#FCFBF7]/60 font-sans text-sm">
                  Level {visualLevel} / 5
                </p>
              </motion.div>
              
              <GrowthVisual level={visualLevel} />
            </div>
          </div>

          {/* 우측: Scrollable 카드들 */}
          <div className="space-y-8 pt-20 pb-8">
            {growthSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

