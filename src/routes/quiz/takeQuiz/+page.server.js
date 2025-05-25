import { getRandomQuizQuestions } from '$lib/db';

export async function load() {
  const questions = await getRandomQuizQuestions(6);
  return { questions };
}