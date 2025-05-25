import { getAllScorecards, getClubById, getAllClubs, insertScorecard } from '$lib/db';
import { redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function load() {
  const rawScorecards = await getAllScorecards();
  const clubs = await getAllClubs();

  const scorecardsWithClub = await Promise.all(
    rawScorecards.map(async (card) => {
      let clubName = "Unbekannter Platz";
      try {
        const club = await getClubById(card.clubID.toString());
        if (club) clubName = club.clubName;
      } catch (e) {
        console.warn("❗ Fehlerhafte clubID:", card.clubID);
      }

      return {
        ...card,
        clubID: card.clubID.toString(),
        clubName
      };
    })
  );

  return { scorecards: scorecardsWithClub, clubs };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const scores = formData.getAll('scores[]').map((s) => Number(s));
    const rawClubId = formData.get('clubID');

    const scorecard = {
      _id: new ObjectId(),
      date: formData.get('date'),
      clubID: new ObjectId(rawClubId),
      scores,
      scoreTotal: scores.reduce((sum, val) => sum + val, 0),
      comment: formData.get('comment')
    };

    console.log("⛳ Neue Scorecard:", scorecard); // 👈 Wird das geloggt?

    await insertScorecard(scorecard);

    throw redirect(303, '/scorecards');
  }
};
