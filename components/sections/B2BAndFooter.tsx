"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import FaqItem from "@/components/cards/FaqItem";

const faqData = [
  {
    question: "익명성이 정말 보장되나요?",
    answer:
      "모든 감정 기록은 암호화되어 저장되며, 공감숲에서는 철저히 익명으로 활동합니다.",
  },
  {
    question: "감정꽃은 언제 피어나나요?",
    answer:
      "100일간의 여정 동안 당신의 기록과 공감이 모여 세상에 단 하나뿐인 꽃으로 개화합니다.",
  },
  {
    question: "데이터 내보내기는 무엇인가요?",
    answer:
      "당신의 정서적 흐름을 JSON/CSV 파일로 소장하여 스스로 관리할 수 있도록 돕는 기능입니다.",
  },
];

export default function B2BAndFooter() {
  const handleContact = () => {
    window.location.href = "mailto:contact@mamssi.com?subject=제휴 및 도입 문의";
  };

  return (
    <>
      {/* B2B & Social Value Section */}
      <section className="relative bg-[#1D352D] py-20 px-4 overflow-hidden">
        {/* 배경 숲 실루엣 */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0 L120 50 L100 100 L80 50 Z' fill='%23E5C185' opacity='0.3'/%3E%3Cpath d='M50 50 L70 100 L50 150 L30 100 Z' fill='%23E5C185' opacity='0.2'/%3E%3Cpath d='M150 50 L170 100 L150 150 L130 100 Z' fill='%23E5C185' opacity='0.2'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
              backgroundRepeat: "repeat",
            }}
          />
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Main Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#FCFBF7] font-sans font-light text-4xl md:text-5xl mb-8">
              개인의 치유를 넘어,{" "}
              <span className="text-[#E5C185] font-medium">
                건강한 사회를 위한 인프라
              </span>
              로.
            </h2>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 기관/기업 제휴 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[#E5C185] font-sans font-medium text-2xl mb-4">
                기관/기업 제휴
              </h3>
              <p className="text-[#FCFBF7]/80 font-sans text-base leading-relaxed">
                임직원의 번아웃 관리부터 조직 정서 컨설팅까지, 익명 정서 데이터를
                기반으로 한 독자적인 솔루션을 제공합니다.
              </p>
            </motion.div>

            {/* 사회적 가치 */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-[#E5C185] font-sans font-medium text-2xl mb-4">
                사회적 가치
              </h3>
              <p className="text-[#FCFBF7]/80 font-sans text-base leading-relaxed">
                정서 취약계층의 고립을 예방하고 디지털 웰니스 생태계를 구축합니다.
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 border-2 border-[#E5C185] text-[#E5C185] font-sans font-medium rounded-full 
                         transition-all duration-300 hover:bg-[#E5C185] hover:text-[#1D352D] 
                         backdrop-blur-sm hover:shadow-lg hover:shadow-[#E5C185]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContact}
            >
              제휴 및 도입 문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-[#1D352D] py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#FCFBF7] font-sans font-light text-4xl md:text-5xl mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-[#FCFBF7]/60 font-sans text-base">
              궁금한 점이 있으신가요?
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/20 border-t border-white/10 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Slogan */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FCFBF7] font-sans font-light text-2xl md:text-3xl mb-2">
              씨앗 하나, 감정 하나.
            </p>
            <p className="text-[#E5C185] font-sans font-medium text-2xl md:text-3xl">
              매일 나를 키워요.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#FCFBF7]/80 font-sans text-sm">
              프로젝트 디렉터 이서아
            </p>
            <span className="hidden md:inline text-[#FCFBF7]/40">|</span>
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                         text-[#FCFBF7] font-sans text-sm hover:border-[#E5C185]/30 
                         hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContact}
            >
              <Mail size={16} />
              <span>이메일 문의</span>
            </motion.button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[#FCFBF7]/40 font-sans text-xs">
              © 2026 마음, 씨 (Mamssi). All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}

