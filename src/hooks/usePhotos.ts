import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

export type Photo = {
  id: string;
  album_id: string;
  image_url: string;
  caption: string | null;
  story: string | null;
  created_at: string;
};

export const usePhotos = (albumId: string | null) =>
  useQuery<Photo[], Error>({
    queryKey: ["photos", albumId],
    enabled: !!albumId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .eq("album_id", albumId!)
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data as Photo[];
    },
  });
