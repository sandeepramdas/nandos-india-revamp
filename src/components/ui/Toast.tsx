'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ isVisible, message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-green-500 dark:border-green-600 p-4 pr-12 min-w-[320px] relative overflow-hidden transition-colors">
            {/* Success animation background */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0 bg-green-500/20 rounded-full"
            />

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>

              <div className="flex-1">
                <p className="font-bold text-brand-charcoal dark:text-white">Added to Cart!</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{message}</p>
              </div>

              <ShoppingCart className="w-5 h-5 text-brand-red dark:text-brand-orange animate-bounce" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-brand-charcoal dark:text-white" />
            </button>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-fire origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
