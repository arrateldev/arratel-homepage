import { getProjectHealth, isProjectHealthId } from '@/lib/project-health';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const project = searchParams.get('project');

  if (!project || !isProjectHealthId(project)) {
    return Response.json({ error: 'Unknown project' }, { status: 404 });
  }

  const health = await getProjectHealth(project);

  return Response.json(health, {
    headers: {
      'Cache-Control': 's-maxage=30, stale-while-revalidate=60'
    }
  });
}
