'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, type ReactNode } from 'react';
import type { ProjectHealthId } from '@/lib/project-health';
import { ProjectLiveStatus } from '@/components/project-live-status';

type RadarItem = {
  name: string;
  status: string;
};

type ProjectRadarProps = {
  label: string;
  items: {
    core: RadarItem;
    clavispass: RadarItem;
    clavispassHub: RadarItem;
    pdfMerge: RadarItem;
  };
  liveStatusLabels: {
    checking: string;
    online: string;
    offline: string;
  };
};

type RadarPointProps = {
  id: string;
  href: string;
  item: RadarItem;
  healthId?: ProjectHealthId;
  liveStatusLabels: ProjectRadarProps['liveStatusLabels'];
  className: string;
  panelClassName: string;
  activePanel: string | null;
  setActivePanel: (id: string | null) => void;
};

const longPressDelay = 430;

export function ProjectRadar({
  label,
  items,
  liveStatusLabels
}: ProjectRadarProps) {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      aria-label={label}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) {
          setActivePanel(null);
        }
      }}
    >
      <div className="absolute inset-8 rounded-full border border-primary/20" />
      <div className="absolute inset-16 rounded-full border border-brand-secondary/25" />
      <div className="absolute inset-0 animate-signal-spin rounded-full border border-dashed border-primary/25" />

      <RadarPoint
        id="core"
        href="#project-arratel-core"
        item={items.core}
        liveStatusLabels={liveStatusLabels}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        className="absolute inset-[34%] flex items-center justify-center rounded-full brand-gradient text-white shadow-[0_0_70px_hsl(var(--brand-secondary)/0.4)] hover:scale-105 focus-visible:ring-primary"
        panelClassName="left-1/2 top-full mt-4 w-[156px] -translate-x-1/2 text-left group-hover:translate-y-1 group-focus-visible:translate-y-1"
      >
        <Image
          src="/arratel-logo-white.svg"
          alt=""
          width={88}
          height={88}
          className="h-14 w-14 object-contain sm:h-18 sm:w-18"
          aria-hidden="true"
        />
      </RadarPoint>

      <RadarPoint
        id="clavispass"
        href="#project-clavispass"
        item={items.clavispass}
        healthId="clavispass"
        liveStatusLabels={liveStatusLabels}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        className="absolute right-[20%] top-[40%] h-4 w-4 rounded-full bg-brand-secondary shadow-[0_0_24px_hsl(var(--brand-secondary)/0.75)] hover:scale-125 focus-visible:ring-brand-secondary"
        panelClassName="right-6 top-1/2 w-[166px] -translate-y-1/2 group-hover:-translate-x-1 group-focus-visible:-translate-x-1"
      />

      <RadarPoint
        id="pdf-merge"
        href="#project-pdf-merge"
        item={items.pdfMerge}
        liveStatusLabels={liveStatusLabels}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        className="absolute bottom-[22%] left-[24%] h-4 w-4 rounded-full bg-foreground/70 shadow-[0_0_20px_rgba(15,23,42,0.32)] hover:scale-125 focus-visible:ring-foreground"
        panelClassName="left-6 top-1/2 w-[158px] -translate-y-1/2 group-hover:translate-x-1 group-focus-visible:translate-x-1"
      />

      <RadarPoint
        id="clavispass-hub"
        href="#project-clavispass-hub"
        item={items.clavispassHub}
        liveStatusLabels={liveStatusLabels}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        className="absolute bottom-[18%] right-[24%] h-4 w-4 rounded-full bg-primary/75 shadow-[0_0_22px_hsl(var(--primary)/0.48)] hover:scale-125 focus-visible:ring-primary"
        panelClassName="right-6 top-1/2 w-[176px] -translate-y-1/2 group-hover:-translate-x-1 group-focus-visible:-translate-x-1"
      />
    </div>
  );
}

function RadarPoint({
  id,
  href,
  item,
  healthId,
  liveStatusLabels,
  className,
  panelClassName,
  activePanel,
  setActivePanel,
  children
}: RadarPointProps & { children?: ReactNode }) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressedRef = useRef(false);
  const isActive = activePanel === id;

  function clearLongPressTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  return (
    <Link
      href={href}
      aria-label={item.name}
      onPointerDown={() => {
        longPressedRef.current = false;
        clearLongPressTimer();
        timerRef.current = setTimeout(() => {
          longPressedRef.current = true;
          setActivePanel(id);
        }, longPressDelay);
      }}
      onPointerUp={clearLongPressTimer}
      onPointerCancel={clearLongPressTimer}
      onPointerLeave={clearLongPressTimer}
      onClick={(event) => {
        if (longPressedRef.current) {
          event.preventDefault();
          longPressedRef.current = false;
        }
      }}
      onFocus={() => setActivePanel(id)}
      className={`group outline-none ring-offset-4 ring-offset-background transition-transform focus-visible:ring-2 ${className}`}
    >
      {children}
      <div
        className={`pointer-events-none absolute rounded-md border border-border/70 bg-background/90 p-3 opacity-0 shadow-[0_18px_38px_-28px_rgba(15,23,42,0.32)] backdrop-blur transition-all group-hover:opacity-100 group-focus-visible:opacity-100 ${
          isActive ? 'opacity-100' : ''
        } ${panelClassName}`}
      >
        <p className="text-sm font-semibold text-foreground">{item.name}</p>
        <ProjectLiveStatus
          fallback={item.status}
          healthId={healthId}
          labels={liveStatusLabels}
          variant="text"
        />
      </div>
    </Link>
  );
}
