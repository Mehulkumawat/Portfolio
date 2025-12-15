import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

export type JournalEntry = {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  content: string;
  published_at: string;
};

export const useJournal = () =>
  useQuery<JournalEntry[], Error>({
    queryKey: ["journal"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("journals")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data as JournalEntry[];
    },
  });
