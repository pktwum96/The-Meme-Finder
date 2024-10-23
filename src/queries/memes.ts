import { SupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "../supabase/database.types";
import { Meme, MemeInsert } from "../supabase/types";

export const getAllMemes = (client: SupabaseClient<Database>) => {
  return client.from("memes").select("*").eq("status", "published");
};

export const getMemeById = (
  client: SupabaseClient<Database>,
  memeId: string
) => {
  return client.from("memes").select("*").eq("id", memeId).single();
};

export const getAllMyMemes = (
  client: SupabaseClient<Database>,
  userId: string
) => {
  return client.from("memes").select("*").eq("created_by", userId);
};

export const uploadMemeToSupabase = (
  client: SupabaseClient<Database>,
  selectedFile: File,
  filePath: string
) => {
  return client.storage
    .from("Meme_Bucket") // 'memes' is your storage bucket name
    .upload(filePath, selectedFile);
};

export const createMemeInDatabase = (
  client: SupabaseClient<Database>,
  meme: MemeInsert
) => {
  return client.from("memes").insert(meme).select("*").single();
};

export const submitMemeForReview = (
  client: SupabaseClient<Database>,
  meme: Meme
) => {
  return [
    client.from("reviews").insert({
      created_by: meme.created_by,
      status: "pending",
      meme_id: meme.id,
    }),
    client
      .from("memes")
      .update({
        status: "review",
        created_by: meme.created_by,
      })
      .eq("id", meme.id)
      .select("*")
      .single(),
  ];
};
