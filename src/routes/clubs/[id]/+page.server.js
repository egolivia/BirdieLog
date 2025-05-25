import { db } from "$lib/db";
import { ObjectId } from "mongodb";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const id = params.id;

  let club;
  try {
    club = await db.collection("clubs").findOne({ _id: new ObjectId(id) });

    if (!club) throw error(404, "Club nicht gefunden");

    // 🔥 WICHTIG: Nur serialisierbare Daten zurückgeben!
    return {
      club: {
        ...club,
        _id: club._id.toString() // <<< das behebt dein Problem
      }
    };
  } catch (err) {
    console.error("Fehler beim Laden des Clubs:", err);
    throw error(400, "Ungültige Club-ID");
  }
}
