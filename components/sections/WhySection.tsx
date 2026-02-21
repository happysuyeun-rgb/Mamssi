"use client";

import { motion } from "framer-motion";

export default function WhySection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden
                 bg-gradient-to-b from-[#2d4a42] via-[#244238] to-[#1D352D]"
    >
      <div className="max-w-2xl mx-auto text-center space-y-10">
        {/* 질문형 헤드라인 - fade + translateY */}
        <motion.h2
          className="text-[#FCFBF7] font-sans font-light text-2xl md:text-3xl leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          왜 이 앱을 만들었을까요?
        </motion.h2>

        {/* 연결 문장 */}
        <motion.p
          className="text-[#FCFBF7]/70 font-sans text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          감정은 바꾸거나 고쳐야 하는 것이 아니라,
          <br className="hidden sm:block" />
          그저 머물 수 있는 자리가 필요할 때가 있습니다.
        </motion.p>

        {/* 인용 카드 - 아이보리/밝은 그린, breathing 애니메이션 */}
        <motion.blockquote
          className="relative bg-[#F5F5F0] border border-[#E5C185]/20 rounded-2xl px-8 py-10 md:px-12 md:py-12
                     text-[#1D352D]/90 font-sans text-lg md:text-xl leading-relaxed italic
                     shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            opacity: { duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          animate={{
            scale: [1, 1.01, 1],
          }}
        >
          <span className="text-[#E5C185]/60 text-4xl absolute -top-1 left-6 font-serif">"</span>
          <p className="relative z-10">
            마음씨는 그런 자리를 만들고 싶었습니다.
            <br />
            감정이 내려앉고, 스스로를 돌아볼 수 있는
            <br />
            조용한 공간.
          </p>
          <span className="text-[#E5C185]/60 text-4xl absolute -bottom-2 right-6 font-serif">"</span>
        </motion.blockquote>

        {/* 마무리 연결 문장 */}
        <motion.p
          className="text-[#FCFBF7]/60 font-sans text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          그래서 씨앗을 심고, 물을 주고, 꽃을 피우는
          <br />
          작은 여정을 함께합니다.
        </motion.p>
      </div>
    </section>
  );
}
