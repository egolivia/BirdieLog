import { getAllScorecards } from '$lib/db';

export async function load() {
  const scorecards = await getAllScorecards();
  return { scorecards };
}
