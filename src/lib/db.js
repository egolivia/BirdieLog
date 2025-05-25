// src/lib/db.js
import { MongoClient } from "mongodb";
import { DB_URI } from "$env/static/private";
import { ObjectId } from "mongodb";

const client = new MongoClient(DB_URI);
await client.connect();

export const db = client.db("BirdieLog");



export async function getClubById(id) {
  const collection = db.collection("clubs");

  let objectId;
  try {
    objectId = new ObjectId(id);
  } catch (e) {
    console.warn("❗ Ungültige ObjectId:", id);
    return { name: "Unbekannter Platz" };
  }

  const club = await collection.findOne({ _id: objectId });

  if (!club) {
    console.warn("❗ Club nicht gefunden für ID:", id);
    return { name: "Unbekannter Platz" };
  }

  return {
    ...club,
    _id: club._id.toString()
  };
}

export async function getAllScorecards() {
  const cards = await db.collection('scorecards').find().toArray();
  return cards.map(card => ({
    ...card,
    _id: card._id.toString(),
    clubID: card.clubID.toString() // ❗ MUSS String sein
  }));
}


export async function getScorecardById(id) {
  let objectId;
  try {
    objectId = new ObjectId(id);
  } catch (e) {
    console.warn("❗ Ungültige Scorecard-ID:", id);
    return null;
  }

  const card = await db.collection("scorecards").findOne({ _id: objectId });
  if (!card) return null;

  return {
    ...card,
    _id: card._id.toString(),
    clubID: card.clubID.toString(),
    scores: card.scores ?? [] // fallback falls scores fehlt
  };
}



export async function getAllScorecardsWithClubs() {
  const scorecards = await db.collection("scorecards").find().toArray();

  const clubIds = scorecards.map(card => new ObjectId(card.clubID));
  const clubs = await db.collection("clubs").find({ _id: { $in: clubIds } }).toArray();

  const clubMap = new Map(clubs.map(club => [club._id.toString(), club]));

  return scorecards.map(card => ({
    ...card,
    _id: card._id.toString(),
    club: {
      name: clubMap.get(card.clubID)?.clubName ?? "Unbekannter Club"
    }
  }));
}

export async function getAllClubs() {
  const clubs = await db.collection("clubs").find().toArray();
  return clubs.map(club => ({
    ...club,
    _id: club._id.toString()
  }));
}


export async function insertScorecard(scorecard) {
  await db.collection('scorecards').insertOne(scorecard);
}


export async function deleteScorecard(id) {
  const collection = db.collection("scorecards");
  await collection.deleteOne({ _id: new ObjectId(id) });
}
export async function getRandomQuizQuestions(count = 6) {
  const questions = await db.collection("quizzes")
    .aggregate([{ $sample: { size: count } }])
    .toArray();

  return questions.map(q => ({
    ...q,
    _id: q._id.toString()
  }));
}


