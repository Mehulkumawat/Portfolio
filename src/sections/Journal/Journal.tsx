import { useState } from "react";

type JournalEntry = {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
};

const entries: JournalEntry[] = [
  {
    id: "dev-and-design",
    title: "Balancing clean UI with real-world constraints",
    date: "2025-11-20",
    category: "Development",
    summary:
      "Some thoughts on writing code that not only works, but also feels good to use and maintain.",
    content:
      "There’s a constant tradeoff between pushing for the perfect UI and shipping something that is good enough, stable, and maintainable. I’m learning to design components and flows that are simple on the surface, but still powerful under the hood. A lot of it comes down to naming, structure, and resisting the urge to over-engineer.",
  },
  {
    id: "photography-mindset",
    title: "What photography taught me about attention",
    date: "2025-10-05",
    category: "Photography",
    summary:
      "Looking through a lens changes how I notice light, people, and details—even when I’m not holding a camera.",
    content:
      "Photography slows me down. I start noticing how light hits a wall, how people move in a market, how colors balance in a frame. That mindset is surprisingly useful when building interfaces—paying attention to spacing, rhythm, and how someone’s eye will move across the screen.",
  },
  {
    id: "travel-notes",
    title: "Travel, routes, and the in-between moments",
    date: "2025-08-12",
    category: "Travel",
    summary:
      "Not every trip is about the destination. Sometimes the best moments happen in the in-between.",
    content:
      "Long roads, chai stops, random conversations with strangers—those parts of travel inspire me a lot. They remind me that progress isn’t always linear, and that detours can still take you somewhere important. I try to keep that same patience and curiosity when I’m learning new tools or tackling tricky bugs.",
  },
];

const Journal = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="min-h-[60vh]">
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
          Journal
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Notes from building, traveling, and observing.
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Short reflections from code, photography, and travel—meant more as
          honest notes than polished essays. Later, this will be editable from
          an admin panel.
        </p>
      </header>

      <div className="space-y-4">
        {entries.map((entry) => {
          const isOpen = entry.id === openId;
          return (
            <article
              key={entry.id}
              className="rounded-2xl border border-gray-200 bg-white/60 p-5 shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs text-gray-500">
                    {new Date(entry.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    · {entry.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {entry.summary}
                  </p>
                </div>

                <div className="flex md:flex-col gap-2 md:items-end">
                  <button
                    onClick={() => handleToggle(entry.id)}
                    className="text-sm rounded-full border border-gray-300 px-3 py-1 hover:bg-black hover:text-white transition"
                  >
                    {isOpen ? "Hide" : "Read"}
                  </button>
                </div>
              </div>

              {isOpen && (
                <div className="mt-4 border-t border-gray-200 pt-3">
                  <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                    {entry.content}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Journal;
