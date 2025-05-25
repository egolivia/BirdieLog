import { ObjectId } from 'mongodb';
import { error, redirect } from '@sveltejs/kit';
import { db } from '$lib/db';

export async function load({ params }) {
  const id = params.id;

  // Scorecard-ID kann ObjectId oder UUID sein
  let query;
  if (ObjectId.isValid(id)) {
    query = { _id: new ObjectId(id) };
  } else {
    query = { _id: id };
  }

  // Scorecard laden
  const scorecard = await db.collection("scorecards").findOne(query);
  if (!scorecard) {
    throw error(404, 'Scorecard nicht gefunden');
  }

  // Club-ID korrekt als ObjectId behandeln
  let clubId = scorecard.clubID;
  if (typeof clubId === 'string' && ObjectId.isValid(clubId)) {
    clubId = new ObjectId(clubId);
  }

  // Club laden
  const club = await db.collection("clubs").findOne({ _id: clubId });
  if (!club) {
    throw error(404, 'Zugehöriger Club nicht gefunden');
  }

  return {
    scorecard: {
      ...scorecard,
      _id: scorecard._id.toString(),
      clubID: scorecard.clubID.toString()
    },
    club: {
      ...club,
      _id: club._id.toString()
    }
  };
}

// ✅ Action zum Löschen der Scorecard
export const actions = {
  default: async ({ params }) => {
    const id = params.id;

    let query;
    if (ObjectId.isValid(id)) {
      query = { _id: new ObjectId(id) };
    } else {
      query = { _id: id };
    }

    await db.collection("scorecards").deleteOne(query);

    // Weiterleitung mit Erfolgs-Flag
    throw redirect(303, '/scorecards?deleted=1');
  }
};
