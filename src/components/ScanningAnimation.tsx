import { motion } from "motion/react";

export function ScanningAnimation() {
  const transition = {
    duration: 2,
    ease: [0.55, 0, 0.1, 1],
    repeat: Infinity,
    repeatType: "reverse" as const,
  };

  return (
    <div className="relative w-[100px] h-[100px] flex items-center justify-center">
      {/* 
        Container for the entire document icon.
        The document is 60x76px.
        Positioning it relative to this wrapper.
      */}
      <div className="relative w-[60px] h-[76px]">
        {/* 
          1. Static Document Background 
          Matches the "Group" in the Figma design.
        */}
        <div className="absolute inset-0 bg-white border border-[#eef1f4] rounded-[6px] box-border">
          {/* Internal lines */}
          <div className="absolute bg-[#eef1f4] h-[5px] left-[6px] top-[14px] w-[23px] rounded-[2px]" />
          <div className="absolute bg-[#eef1f4] h-[5px] left-[6px] top-[23px] w-[13px] rounded-[2px]" />
          <div className="absolute bg-[#eef1f4] h-[5px] left-[6px] top-[32px] w-[48px] rounded-[2px]" />
          <div className="absolute bg-[#eef1f4] h-[5px] left-[6px] top-[41px] w-[39px] rounded-[2px]" />
        </div>

        {/* 
          2. Animation Container (Mask)
          Matches the document shape (rounded-6px) and clips the scanning line.
          This replaces the SVG mask technique for simplicity and better performance.
        */}
        <div className="absolute inset-0 rounded-[6px] overflow-hidden pointer-events-none z-10">
          {/* 
            The Moving Scanner Group
            State 1 (Top): y = 8px (relative to document top)
            State 2 (Bottom): y = 66px (relative to document top)
            
            Calculation:
            Original Line Top 1: 22px. Document Top: 14px. Diff: 8px.
            Original Line Top 2: 80px. Document Top: 14px. Diff: 66px.
          */}
          <motion.div
            initial={{ y: 8 }}
            animate={{ y: 66 }}
            transition={transition}
            className="absolute left-[-8px] w-[77px]"
          >
            {/* Blue Scan Line */}
            <div className="absolute top-0 w-full h-[2px] bg-[#3f68ff] rounded-[6px]" />

            {/* Gradient Fade */}
            {/* 
               State 1: Height 29px, Opacity 0.2
               State 2: Height 15px, Opacity 0.1
            */}
            <motion.div
              className="absolute top-[1px] w-full bg-gradient-to-b from-[#3f68ff] to-transparent"
              initial={{ height: 29, opacity: 0.2 }}
              animate={{ height: 15, opacity: 0.1 }}
              transition={transition}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
