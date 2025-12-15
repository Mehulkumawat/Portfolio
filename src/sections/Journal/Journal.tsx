import { useState } from "react";
import { useJournal } from "../../hooks/useJournals";

const Journal = () => {
  const { data: entries, isLoading, error } = useJournal();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="min-h-[60vh]">
      {/* Header */}
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
          Journal
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Thoughts, notes, and learnings.
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          A space where I write about tech, travel, and experiences.
        </p>
      </header>

      {/* Loading */}
      {isLoading && (
        <p className="text-sm text-gray-500">Loading journal…</p>
      )}

      {/* Error */}
        {error && (
        <div className="text-sm text-red-500">
            <p>Something went wrong while loading journals.</p>
            <p className="mt-1 text-xs text-red-400">
            {error.message}
            </p>
        </div>
        )}

      {/* Empty state */}
      {entries && entries.length === 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white/60 p-6 text-center">
          <p className="text-sm text-gray-600">
            Nothing here yet.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            This space is reserved for future thoughts and reflections.
          </p>
        </div>
      )}

      {/* Journal entries */}
      {entries && entries.length > 0 && (
        <div className="space-y-6">
          {entries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-2xl border border-gray-200 bg-white/60 p-6"
            >
              <button
                onClick={() =>
                  setOpenId(openId === entry.id ? null : entry.id)
                }
                className="w-full text-left"
              >
                <h3 className="text-lg font-semibold">
                  {entry.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {new Date(entry.published_at).toDateString()}
                </p>

                {entry.summary && (
                  <p className="mt-3 text-sm text-gray-600">
                    {entry.summary}
                  </p>
                )}
              </button>

              {openId === entry.id && (
                <div className="mt-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {entry.content}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Journal;
