import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

export type Album = {
  id: string;
  title: string;
  location: string | null;
  description: string | null;
  created_at: string;
};

export const useAlbums = () =>
  useQuery<Album[], Error>({
    queryKey: ["albums"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("albums")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Album[];
    },
  });
