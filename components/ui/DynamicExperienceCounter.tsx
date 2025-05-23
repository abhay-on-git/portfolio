import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DynamicExperienceCounter = () => {
  const [experience, setExperience] = useState({ years: 2, months: 0 });
  const [days, setDays] = useState(0);
  const [nextMilestone, setNextMilestone] = useState(0);
  const [daysUntilNext, setDaysUntilNext] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const startDate = new Date("2022-11-01");

    const updateExperience = () => {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      const totalMonths = Math.floor(diffDays / 30.44);
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      // Calculate next milestone (every 6 months)
      const nextMilestoneMonths = Math.ceil(totalMonths / 6) * 6;
      const daysToNext = Math.max(
        0,
        Math.ceil(nextMilestoneMonths * 30.44 - diffDays)
      );

      setExperience({ years, months });
      setDays(diffDays);
      setNextMilestone(nextMilestoneMonths);
      setDaysUntilNext(daysToNext);
    };

    updateExperience();

    // Update every second for the running effect
    const interval = setInterval(() => {
      updateExperience();
      setIsRunning((prev) => !prev); // Toggle for animation
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatExperience = () => {
    if (experience.months === 0) {
      return `${experience.years} year${experience.years !== 1 ? "s" : ""}`;
    } else if (experience.months === 6) {
      return `${experience.years}.5 years`;
    } else {
      return `${experience.years} year${experience.years !== 1 ? "s" : ""} ${
        experience.months
      } month${experience.months !== 1 ? "s" : ""}`;
    }
  };

  const progressPercentage = Math.round(
    ((nextMilestone * 30.44 - daysUntilNext) / (nextMilestone * 30.44)) * 100
  );

  return (
    <div className="relative mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden p-2"
      >
        <div className="relative z-10">
            {/* Experience in Years */}
          <AnimatePresence mode="wait">
            <motion.p
              key={formatExperience()}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm md:text-base max-w-md"
            >
              Experience - {formatExperience()}
            </motion.p>
          </AnimatePresence>
          {/* Main experience display */}
          <div className="flex items-center gap-4 mt-4">
            <motion.div
              animate={{
                scale: isRunning ? [1, 1.05, 1] : 1,
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full">
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-full h-full bg-green-400 rounded-full"
                />
              </div>
              <span className="text-green-500 text-sm font-mono">LIVE</span>
            </motion.div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm  text-neutral-500 dark:text-neutral-400 font-mono"
            >
              {days.toLocaleString()} days & counting...
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DynamicExperienceCounter;
