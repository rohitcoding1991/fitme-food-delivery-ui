"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        document.body.classList.remove('fixed');
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                        className="!fixed !inset-0 !z-50 flex !items-center !justify-center bg-[--loading-bg]"
                >
                    <motion.p
                        decoding="sync"
                        loading="eager"
                        initial={{ opacity: 1, scale: 1 }}
                        exit={{
                            opacity: [1, 0, 0],
                            scale: [1, 0.75, 0],
                        }}
                        transition={{ duration: 0.5 }}
                        className=" !text-2xl Poppins700 !text-[--saffron-400] animate-pulse"
                    >
                        Loading....
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default LoadingScreen;