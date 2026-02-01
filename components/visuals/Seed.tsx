"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface SeedProps {
  className?: string;
}

export default function Seed({ className = "" }: SeedProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const floatingY = useMotionValue(0);
  
  // 부드러운 마우스 추적을 위한 스프링
  const springConfig = { damping: 50, stiffness: 100 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  // 스크롤 기반 변환
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.3]);
  const scrollYPosition = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  // Floating 애니메이션을 위한 motion value 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() / 1000;
      floatingY.set(Math.sin(time * 0.5) * 20);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [floatingY]);

  // 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // 중앙 기준 상대 위치 (-1 ~ 1 범위로 정규화)
      const normalizedX = (clientX - centerX) / centerX;
      const normalizedY = (clientY - centerY) / centerY;
      
      // 파라락스 효과: 마우스 반대 방향으로 움직임
      mouseX.set(-normalizedX * 30);
      mouseY.set(-normalizedY * 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 스크롤 Y, 파라락스 Y, Floating Y를 합친 최종 Y 위치
  const finalY = useMotionValue(0);

  // 모든 Y 값을 합치는 effect
  useEffect(() => {
    const updateFinalY = () => {
      const scroll = scrollYPosition.get();
      const parallax = parallaxY.get();
      const float = floatingY.get();
      finalY.set(scroll + parallax + float);
    };

    const unsubscribeScroll = scrollYPosition.on("change", updateFinalY);
    const unsubscribeParallax = parallaxY.on("change", updateFinalY);
    const unsubscribeFloat = floatingY.on("change", updateFinalY);

    // 초기 값 설정
    updateFinalY();

    return () => {
      unsubscribeScroll();
      unsubscribeParallax();
      unsubscribeFloat();
    };
  }, [scrollYPosition, parallaxY, floatingY, finalY]);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        x: parallaxX,
        y: finalY,
        scale,
        opacity,
      }}
    >
      {/* 나중에 씨앗 SVG/Lottie로 교체될 지점 */}
      <motion.div
        className="w-[200px] h-[200px] rounded-full relative"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 20px rgba(255, 183, 178, 0.3)",
            "0 0 40px rgba(255, 183, 178, 0.5)",
            "0 0 20px rgba(255, 183, 178, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(255, 183, 178, 0.8) 0%, rgba(255, 183, 178, 0.4) 50%, rgba(255, 183, 178, 0.1) 100%)",
        }}
      >
        {/* 내부 빛 효과 */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255, 183, 178, 1) 0%, transparent 70%)",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

