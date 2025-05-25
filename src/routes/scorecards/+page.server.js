import { getAllScorecards, getClubById } from '$lib/db';

export async function load() {
  const rawScorecards = await getAllScorecards();

  const scorecardsWithClub = await Promise.all(
    rawScorecards.map(async (card) => {
      let clubName = "Unbekannter Platz";
      try {
        const club = await getClubById(card.clubID);
        if (club) clubName = club.clubName;
      } catch (e) {
        console.warn("❗ Fehlerhafte clubID:", card.clubID);
      }
      


      return {
        ...card,
        clubName
      };
    })
  );
  console.log("📊 Geladene Scorecards:", scorecardsWithClub);

  return { scorecards: scorecardsWithClub };
}
