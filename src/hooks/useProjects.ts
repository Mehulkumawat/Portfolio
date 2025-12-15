import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";

export type Project = {
  id: string;
  title: string;
  description: string | null;
  live_link: string | null;
  github_link: string | null;
  tech_stack: string[] | null;
  featured: boolean | null;
  created_at: string;
};

export const useProjects = () =>
  useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      return data as Project[];
    },
  });
