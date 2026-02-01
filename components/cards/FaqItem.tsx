"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FaqItem({ question, answer, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-white/[0.08] last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="w-full py-7 flex items-center justify-between gap-4 text-left group px-6 md:px-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[#FCFBF7] font-sans font-semibold text-lg tracking-wide leading-relaxed group-hover:text-[#E5C185] transition-colors duration-300">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={24}
            className="text-[#FCFBF7]/60 group-hover:text-[#E5C185] transition-colors duration-300"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#FCFBF7]/80 font-sans text-base tracking-wide leading-loose pb-7 px-6 md:px-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

