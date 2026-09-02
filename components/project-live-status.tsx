'use client';

import { useEffect, useState } from 'react';
import type { ProjectHealthId, ProjectHealthResult } from '@/lib/project-health';

type ProjectLiveStatusLabels = {
  checking: string;
  online: string;
  offline: string;
};

type ProjectLiveStatusProps = {
  fallback: string;
  healthId?: ProjectHealthId;
  labels: ProjectLiveStatusLabels;
  variant?: 'badge' | 'text';
};

export function ProjectLiveStatus({
  fallback,
  healthId,
  labels,
  variant = 'badge'
}: ProjectLiveStatusProps) {
  const [health, setHealth] = useState<ProjectHealthResult | null>(null);
  const [isChecking, setIsChecking] = useState(Boolean(healthId));

  useEffect(() => {
    if (!healthId) {
      return;
    }

    const project = healthId;
    let isMounted = true;

    async function loadHealth() {
      setIsChecking(true);

      try {
        const response = await fetch(`/api/project-health?project=${healthId}`, {
          cache: 'no-store'
        });

        if (!response.ok) {
          throw new Error('Project health request failed');
        }

        const result = (await response.json()) as ProjectHealthResult;

        if (isMounted) {
          setHealth(result);
        }
      } catch {
        if (isMounted) {
          setHealth({
            project,
            status: 'offline',
            checkedAt: new Date().toISOString()
          });
        }
      } finally {
        if (isMounted) {
          setIsChecking(false);
        }
      }
    }

    loadHealth();

    return () => {
      isMounted = false;
    };
  }, [healthId]);

  if (!healthId) {
    return <StatusShell label={fallback} variant={variant} tone="fallback" />;
  }

  if (isChecking && !health) {
    return <StatusShell label={labels.checking} variant={variant} tone="checking" />;
  }

  const isOnline = health?.status === 'online';
  const title = health
    ? [
        health.product,
        health.deploymentMode,
        health.timestamp ? `Health: ${health.timestamp}` : null
      ]
        .filter(Boolean)
        .join(' | ')
    : undefined;

  return (
    <StatusShell
      label={isOnline ? labels.online : labels.offline}
      title={title}
      variant={variant}
      tone={isOnline ? 'online' : 'offline'}
    />
  );
}

function StatusShell({
  label,
  title,
  variant,
  tone
}: {
  label: string;
  title?: string;
  variant: 'badge' | 'text';
  tone: 'checking' | 'fallback' | 'offline' | 'online';
}) {
  const labelClassName =
    tone === 'checking' || tone === 'offline'
      ? 'text-muted-foreground'
      : 'text-primary';

  if (variant === 'text') {
    return (
      <span
        title={title}
        className={`mt-1 inline-flex text-[11px] font-semibold uppercase tracking-[0.12em] ${labelClassName}`}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      title={title}
      className={`inline-flex rounded-md border border-primary/20 bg-primary/8 px-2.5 py-1 text-xs font-semibold ${labelClassName}`}
    >
      {label}
    </span>
  );
}
