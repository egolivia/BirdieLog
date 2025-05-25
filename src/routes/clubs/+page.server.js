import { db } from "$lib/db";

export async function load() {
  const clubs = await db.collection("clubs").find().toArray();

  // _id für Serialisierung umwandeln
  const serializableClubs = clubs.map(club => ({
    ...club,
    _id: club._id.toString()
  }));

  return { clubs: serializableClubs };
}
 