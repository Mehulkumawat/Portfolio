import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

export type Skill = {
  id: string;
  category: string;
  name: string;
  level: string | null;
  created_at: string;
};

export const useSkills = () =>
  useQuery<Skill[], Error>({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("category", { ascending: true })
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data as Skill[];
    },
  });
