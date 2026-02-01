"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Droplet, X } from "lucide-react";

// 임시 데이터 - 나중에 API로 교체될 지점
interface AnonymousPost {
  id: string;
  content: string;
  x: number; // 화면 상의 위치 (%)
  y: number; // 화면 상의 위치 (%)
  size: number; // 씨앗 크기 (px)
  delay: number; // 애니메이션 딜레이 (초)
}

const dummyPosts: AnonymousPost[] = [
  {
    id: "1",
    content: "작은 루틴을 7일 채웠어요. 꾸준함이 나를 바꾼대요.",
    x: 15,
    y: 20,
    size: 60,
    delay: 0,
  },
  {
    id: "2",
    content: "오늘 하루도 버텼어요. 내일은 더 나아질 거예요.",
    x: 85,
    y: 30,
    size: 80,
    delay: 0.5,
  },
  {
    id: "3",
    content: "친구에게 고마운 마음을 전했어요. 작은 용기가 큰 변화를 만들었어요.",
    x: 20,
    y: 70,
    size: 70,
    delay: 1,
  },
  {
    id: "4",
    content: "아침에 일어나서 햇살을 봤어요. 작은 행복이 모여 큰 기쁨이 되네요.",
    x: 75,
    y: 65,
    size: 55,
    delay: 1.5,
  },
  {
    id: "5",
    content: "어제보다 오늘이 조금 더 나아졌어요. 하루하루가 소중해요.",
    x: 50,
    y: 50,
    size: 65,
    delay: 2,
  },
  {
    id: "6",
    content: "누군가의 따뜻한 말 한마디가 하루를 바꿨어요.",
    x: 10,
    y: 45,
    size: 50,
    delay: 0.3,
  },
  {
    id: "7",
    content: "새로운 도전을 시작했어요. 두려움보다 기대가 커요.",
    x: 90,
    y: 55,
    size: 75,
    delay: 0.8,
  },
];

const benefitCards = [
  {
    title: "익명의 안전함",
    description: "누구에게도 말할 수 없던 진심을 자유롭게 표현하세요",
    icon: "🌳",
  },
  {
    title: "따뜻한 공감",
    description: "익명의 공감 한 방울이 당신의 마음 씨앗을 키워요",
    icon: "🌸",
  },
  {
    title: "안전한 구조",
    description: "게스트는 읽기만 가능합니다. 로그인 사용자만 작성할 수 있으며, 내 글만 수정·삭제할 수 있습니다. 신고 기능이 있습니다.",
    icon: "🛡️",
  },
];

interface TooltipProps {
  post: AnonymousPost;
  position: { x: number; y: number };
  onClose: () => void;
  onWater: () => void;
}

function Tooltip({ post, position, onClose, onWater }: TooltipProps) {
  const [isWatering, setIsWatering] = useState(false);

  const handleWater = () => {
    setIsWatering(true);
    onWater();
    setTimeout(() => setIsWatering(false), 1000);
  };

  return (
    <motion.div
      className="absolute z-50 bg-[#1D352D]/95 backdrop-blur-md border border-[#E5C185]/30 rounded-2xl p-4 max-w-xs shadow-2xl"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-[#FCFBF7]/60 hover:text-[#FCFBF7] transition-colors"
      >
        <X size={16} />
      </button>
      
      <p className="text-[#FCFBF7] text-sm leading-relaxed pr-6 mb-3">
        {post.content}
      </p>
      
      <button
        onClick={handleWater}
        className="flex items-center gap-2 px-4 py-2 bg-[#E5C185]/10 border border-[#E5C185]/30 rounded-lg 
                   text-[#E5C185] hover:bg-[#E5C185]/20 transition-all duration-300 
                   hover:scale-105 active:scale-95 relative overflow-hidden"
        disabled={isWatering}
      >
        <Droplet size={16} />
        <span className="text-sm font-medium">물주기</span>
        
        {/* Ripple 효과 */}
        <AnimatePresence>
          {isWatering && (
            <motion.div
              className="absolute inset-0 rounded-lg"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "radial-gradient(circle, rgba(255, 183, 178, 0.6) 0%, transparent 70%)",
              }}
            />
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

interface ToastProps {
  message: string;
  onClose: () => void;
}

function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 
                 bg-[#1D352D]/95 backdrop-blur-md border border-[#E5C185]/30 
                 rounded-full px-6 py-3 shadow-2xl"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-[#FCFBF7] text-sm font-medium">{message}</p>
    </motion.div>
  );
}

interface AnonymousSeedProps {
  post: AnonymousPost;
  onClick: (post: AnonymousPost, event: React.MouseEvent) => void;
}

function AnonymousSeed({ post, onClick }: AnonymousSeedProps) {
  return (
    <motion.button
      className="absolute rounded-full cursor-pointer focus:outline-none 
                 focus:ring-2 focus:ring-[#E5C185]/50 focus:ring-offset-2 focus:ring-offset-white"
      style={{
        left: `${post.x}%`,
        top: `${post.y}%`,
        width: `${post.size}px`,
        height: `${post.size}px`,
        transform: "translate(-50%, -50%)",
      }}
      onClick={(e) => onClick(post, e)}
      animate={{
        y: [0, -30, 0],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 3 + post.delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: post.delay,
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 183, 178, 0.6) 0%, rgba(255, 183, 178, 0.2) 50%, transparent 100%)",
          boxShadow: "0 0 20px rgba(255, 183, 178, 0.3)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 20px rgba(255, 183, 178, 0.3)",
            "0 0 30px rgba(255, 183, 178, 0.5)",
            "0 0 20px rgba(255, 183, 178, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}

export default function GonggamForest() {
  const [selectedPost, setSelectedPost] = useState<{
    post: AnonymousPost;
    position: { x: number; y: number };
  } | null>(null);
  const [showToast, setShowToast] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSeedClick = (post: AnonymousPost, event: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setSelectedPost({
      post,
      position: { x, y },
    });
  };

  const handleWater = () => {
    setShowToast(true);
    setTimeout(() => {
      setSelectedPost(null);
    }, 500);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white 
                 flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Floating Anonymous Seeds 배경 */}
      <div className="absolute inset-0">
        {dummyPosts.map((post) => (
          <AnonymousSeed
            key={post.id}
            post={post}
            onClick={handleSeedClick}
          />
        ))}
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <motion.h2
          className="text-[#1D352D] text-3xl md:text-4xl lg:text-5xl font-sans font-semibold leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          누구에게도 말할 수 없던{" "}
          <span className="text-[#2D6A4F] font-semibold">진심</span>,{" "}
          <br />
          이곳에선{" "}
          <span className="text-[#2D6A4F] font-semibold">꽃</span>이 됩니다.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[#1D352D]/80 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          익명이라는 안전한 숲에서 당신의 감정을 꺼내보세요. 당신의 따뜻한 공감 한 방울은
          타인뿐만 아니라 당신의 마음 씨앗도 함께 키웁니다.
        </motion.p>

        {/* Benefit Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#F5F5F0] backdrop-blur-sm border border-[#E5C185]/30 
                         rounded-2xl p-6 hover:border-[#E5C185]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="text-[#E5C185] font-sans font-medium text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-[#1D352D]/70 font-sans text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {selectedPost && (
          <Tooltip
            post={selectedPost.post}
            position={selectedPost.position}
            onClose={() => setSelectedPost(null)}
            onWater={handleWater}
          />
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <Toast
            message="공감 한 방울이 전해졌어요"
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

