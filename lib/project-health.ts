export const projectHealthChecks = {
  clavispass: {
    url: 'https://clavispass.arratel.dev/api/health'
  }
} as const;

export type ProjectHealthId = keyof typeof projectHealthChecks;

export type ProjectHealthPayload = {
  status?: string;
  product?: string;
  brand?: string;
  deploymentMode?: string;
  timestamp?: string;
};

export type ProjectHealthResult = {
  project: ProjectHealthId;
  status: 'online' | 'offline';
  product?: string;
  brand?: string;
  deploymentMode?: string;
  timestamp?: string;
  checkedAt: string;
};

export function isProjectHealthId(value: string): value is ProjectHealthId {
  return value in projectHealthChecks;
}

export async function getProjectHealth(
  project: ProjectHealthId
): Promise<ProjectHealthResult> {
  const checkedAt = new Date().toISOString();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);

  try {
    const response = await fetch(projectHealthChecks[project].url, {
      cache: 'no-store',
      signal: controller.signal
    });

    if (!response.ok) {
      return { project, status: 'offline', checkedAt };
    }

    const payload = (await response.json()) as ProjectHealthPayload;
    const isOnline = payload.status?.toLowerCase() === 'ok';

    return {
      project,
      status: isOnline ? 'online' : 'offline',
      product: payload.product,
      brand: payload.brand,
      deploymentMode: payload.deploymentMode,
      timestamp: payload.timestamp,
      checkedAt
    };
  } catch {
    return { project, status: 'offline', checkedAt };
  } finally {
    clearTimeout(timeout);
  }
}
