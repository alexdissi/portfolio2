"use client";

import { motion } from "framer-motion";

export const PageWrapper = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    }}
    exit={{ opacity: 0, y: -20 }}
  >
    {children}
  </motion.div>
);
