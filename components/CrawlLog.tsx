'use client';

import { motion } from 'framer-motion';
import { levelEvents, triggerLabel, triggerIcon, LevelUpEvent } from '@/data/levels';
import { powersById } from '@/data/powers';
import SystemMessage from './SystemMessage';

/**
 * CrawlLog - vertical timeline of every level-up event from Lv 01 to current.
 * On desktop the entries alternate left/right around a center system-line.
 */
export default function CrawlLog() {
  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-cyan-glow text-sm mb-3 tracking-widest"
          >
            [ /CHARACTER/CRAWL_LOG ]
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-parchment mb-4"
            style={{ textShadow: '0 0 12px rgba(245, 185, 74, 0.4)' }}
          >
            CRAWL LOG
          </motion.h2>
          <p className="font-mono text-sm text-parchment-dim">
            Every level-up since Lv 01. Powers gained, jobs taken, degrees
            earned. The dungeon keeps the receipts.
          </p>
        </div>

        <div className="relative">
          {/* Center spine on desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(245, 185, 74, 0.5) 8%, rgba(245, 185, 74, 0.5) 92%, transparent 100%)',
            }}
          />

          <ol className="space-y-8 md:space-y-14">
            {levelEvents.map((event, i) => (
              <CrawlLogEntry key={event.level} event={event} index={i} />
            ))}
          </ol>
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <SystemMessage tone="cyan" prefix="[Log End]:">
            End of log. Crawler is currently active. Next level-up pending.
          </SystemMessage>
        </div>
      </div>
    </section>
  );
}

interface EntryProps {
  event: LevelUpEvent;
  index: number;
}

function CrawlLogEntry({ event, index }: EntryProps) {
  const isLeft = index % 2 === 0;
  const isCurrent = index === levelEvents.length - 1;

  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-12">
      {/* Center node */}
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center w-10 h-10 panel-system z-10">
        <span className="font-display text-xs text-system">
          {String(event.level).padStart(2, '0')}
        </span>
      </div>

      {/* Entry card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`${
          isLeft ? 'md:col-start-1 md:pr-8' : 'md:col-start-2 md:pl-8'
        } ${isCurrent ? 'panel-cyan' : 'panel-system'} p-5 md:p-6 relative`}
      >
        {/* Mobile: level badge inline */}
        <div className="flex items-center gap-3 mb-3 md:hidden">
          <span className="font-display text-xs px-2 py-1 panel-system text-system">
            LV {String(event.level).padStart(2, '0')}
          </span>
          <span className="font-mono text-xs text-parchment-dim">{event.date}</span>
        </div>

        {/* Header */}
        <div className="hidden md:flex items-center justify-between font-mono text-xs text-parchment-dim mb-2">
          <span>{event.date}</span>
          <span className="flex items-center gap-1">
            <span aria-hidden>{triggerIcon[event.trigger]}</span>
            {triggerLabel[event.trigger]}
          </span>
        </div>

        <h3 className="font-display text-base sm:text-lg text-parchment mb-1 leading-snug">
          <span aria-hidden className="mr-2">{event.icon}</span>
          {event.title}
        </h3>

        {event.location && (
          <p className="font-mono text-xs text-cyan-terminal mb-3">
            {'// '}
            {event.location}
          </p>
        )}

        <p className="text-sm text-parchment-dim mb-4 leading-relaxed">
          {event.description}
        </p>

        {/* Power unlocked */}
        {event.powerUnlocked && (
          <div className="font-mono text-xs panel-cyan px-3 py-2 mb-2 text-cyan-terminal">
            <span className="text-cyan-glow font-semibold mr-2">[Unlocked]:</span>
            {event.powerUnlocked.note}
          </div>
        )}

        {/* Powers upgraded */}
        {event.powersUpgraded && event.powersUpgraded.length > 0 && (
          <div className="font-mono text-xs panel-system px-3 py-2 mb-2 text-system">
            <span className="text-system-glow font-semibold mr-2">[+]:</span>
            {event.powersUpgraded
              .map((u) => `${powersById[u.powerId]?.name ?? u.powerId} → ${u.newRank}`)
              .join(' · ')}
          </div>
        )}

        {/* Loot */}
        {event.loot && event.loot.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {event.loot.map((item) => (
              <span
                key={item}
                className="font-mono text-[11px] px-2 py-1 bg-stone-deep border border-xp/40 text-xp"
              >
                🎁 {item}
              </span>
            ))}
          </div>
        )}

        {/* Mobile trigger label at bottom */}
        <div className="md:hidden font-mono text-xs text-parchment-dim mt-4 flex items-center gap-1">
          <span aria-hidden>{triggerIcon[event.trigger]}</span>
          {triggerLabel[event.trigger]}
        </div>
      </motion.div>

      {/* Spacer column */}
      {isLeft ? <div className="hidden md:block md:col-start-2" /> : <div className="hidden md:block md:col-start-1 md:row-start-1" />}
    </li>
  );
}
