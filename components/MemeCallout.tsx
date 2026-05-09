'use client';

import { motion } from 'framer-motion';
import SystemMessage from './SystemMessage';

interface MemePanelProps {
  imageEmoji?: string;
  imageSrc?: string;
  topText: string;
  bottomText: string;
  alt?: string;
}

/**
 * Single meme panel with classic Impact top/bottom captions.
 * Image source is either a real /public image (preferred) or a giant emoji
 * fallback so the design works before user supplies real meme art.
 *
 * TODO(user): drop real meme images in /public/memes/ and pass via imageSrc.
 */
function MemePanel({ imageEmoji, imageSrc, topText, bottomText, alt }: MemePanelProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ rotate: -1, transition: { duration: 0.2 } }}
      className="relative bg-black border-4 border-parchment-muted aspect-square flex flex-col items-center justify-center overflow-hidden"
    >
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={alt ?? `${topText} ${bottomText}`}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
      ) : (
        <span
          className="absolute inset-0 flex items-center justify-center text-9xl select-none opacity-90"
          aria-hidden
        >
          {imageEmoji ?? '🐱'}
        </span>
      )}

      {/* Top caption */}
      <figcaption
        className="absolute top-3 left-3 right-3 text-center font-meme uppercase text-2xl sm:text-3xl text-white tracking-wide leading-tight pointer-events-none"
        style={{
          textShadow:
            '2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000, 0 0 6px rgba(0,0,0,0.8)',
        }}
      >
        {topText}
      </figcaption>

      {/* Bottom caption */}
      <figcaption
        className="absolute bottom-3 left-3 right-3 text-center font-meme uppercase text-2xl sm:text-3xl text-white tracking-wide leading-tight pointer-events-none"
        style={{
          textShadow:
            '2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000, 0 0 6px rgba(0,0,0,0.8)',
        }}
      >
        {bottomText}
      </figcaption>
    </motion.figure>
  );
}

/**
 * MemeCallout - personality block on the main page. Two meme panels in
 * the DCC tone, plus a system message tying them to the leveling theme.
 *
 * Original meme-style art only by default. To swap in real images, drop
 * files into /public/memes/ and set imageSrc on the panels.
 */
export default function MemeCallout() {
  return (
    <section className="py-16 md:py-20 px-4 relative">
      <div className="container-custom">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-cyan-glow text-sm mb-3 tracking-widest">
            [ /CHARACTER/PERSONALITY ]
          </p>
          <h2
            className="font-display text-2xl sm:text-3xl md:text-4xl text-parchment mb-4"
            style={{ textShadow: '0 0 12px rgba(245, 185, 74, 0.4)' }}
          >
            ALSO INCLUDED IN BUILD
          </h2>
          <p className="font-mono text-sm text-parchment-dim">
            Personality, taste, and a working sense of humor. Not on the resume.
            Definitely on the team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <MemePanel
            imageEmoji="🧠"
            topText="When the model"
            bottomText="just works"
          />
          <MemePanel
            imageEmoji="📉"
            topText="When the metric"
            bottomText="goes the other way"
          />
        </div>

        <div className="max-w-3xl">
          <SystemMessage tone="sponsor" prefix="[Sponsor]:">
            This Crawler is brought to you by caffeine, second monitors, and
            a deeply unreasonable belief that good products are possible.
          </SystemMessage>
        </div>
      </div>
    </section>
  );
}
