"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.1, rotate: -6 }}
      whileTap={{ scale: 0.94 }}
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-raised sm:right-6 sm:bottom-6"
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-success"
        animate={{ scale: [1, 1.35, 1], opacity: [0.45, 0, 0.45] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />
      <MessageCircle size={26} strokeWidth={2.25} aria-hidden className="relative" />
    </motion.a>
  );
}
