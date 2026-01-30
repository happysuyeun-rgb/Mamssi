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
      className="border-b border-white/10 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[#FCFBF7] font-sans font-medium text-lg pr-8 group-hover:text-[#E5C185] transition-colors duration-300">
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
            <p className="text-[#FCFBF7]/80 font-sans text-base leading-relaxed pb-6 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

