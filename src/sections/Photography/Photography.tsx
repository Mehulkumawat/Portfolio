import { useState } from "react";

type AlbumPhoto = {
  id: string;
  title: string;
  story: string;
};

type Album = {
  id: string;
  title: string;
  location?: string;
  description: string;
  photos: AlbumPhoto[];
};

const albums: Album[] = [
  {
    id: "evening-city",
    title: "Evening City Lights",
    location: "Jaipur, India",
    description:
      "Slow evenings, busy roads, warm light. A set of frames that feel like pausing in the middle of movement.",
    photos: [
      {
        id: "1",
        title: "Street corner glow",
        story: "Shops closing, lights staying on a little longer than needed.",
      },
      {
        id: "2",
        title: "Reflections on glass",
        story: "People, cars, and colors layered in a single window reflection.",
      },
    ],
  },
  {
    id: "at-home",
    title: "At Home",
    location: "Home",
    description:
      "The small angles, textures, and quiet moods that usually go unnoticed when you’re rushing through the day.",
    photos: [
      {
        id: "1",
        title: "Morning window",
        story: "Soft light, dust in the air, and a slow start.",
      },
      {
        id: "2",
        title: "Kitchen tiles",
        story: "Patterns and color in the most ordinary corner of the house.",
      },
    ],
  },
  {
    id: "on-the-road",
    title: "On the Road",
    location: "Highways",
    description:
      "Photos from the in-between: not quite where you started, not yet where you’re going.",
    photos: [
      {
        id: "1",
        title: "Rear-view blur",
        story: "The feeling of leaving something familiar behind.",
      },
      {
        id: "2",
        title: "Highway curve",
        story: "The calm just before a new city appears on the horizon.",
      },
    ],
  },
];

const Photography = () => {
  const [openAlbumId, setOpenAlbumId] = useState<string | null>(null);

  const handleToggleAlbum = (id: string) => {
    setOpenAlbumId((current) => (current === id ? null : id));
  };

  return (
    <section className="min-h-[60vh]">
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
          Photography
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Albums from the way I see the world.
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Instead of random photos, these albums group moments by mood, place,
          or story. Later, each of these can become a curated set with real
          images and longer notes.
        </p>
      </header>

      <div className="space-y-6">
        {albums.map((album) => {
          const isOpen = album.id === openAlbumId;

          return (
            <article
              key={album.id}
              className="rounded-2xl border border-gray-200 bg-white/60 p-5 shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                {/* Left: album meta */}
                <div className="max-w-xl">
                  <h3 className="text-lg font-semibold">{album.title}</h3>
                  {album.location && (
                    <p className="text-xs text-gray-500 mt-1">
                      {album.location}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {album.description}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    {album.photos.length} photo
                    {album.photos.length > 1 ? "s" : ""} in this album
                  </p>
                </div>

                {/* Right: actions */}
                <div className="flex md:flex-col gap-2 md:items-end">
                  <button
                    onClick={() => handleToggleAlbum(album.id)}
                    className="text-sm rounded-full border border-gray-300 px-3 py-1 hover:bg-black hover:text-white transition"
                  >
                    {isOpen ? "Hide album" : "View album"}
                  </button>
                </div>
              </div>

              {/* Expanded photos */}
              {isOpen && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {album.photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-3 flex flex-col gap-2"
                    >
                      {/* Placeholder thumbnail */}
                      <div className="h-32 rounded-lg bg-gray-200/80 flex items-center justify-center text-xs text-gray-500">
                        Photo placeholder
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{photo.title}</p>
                        <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                          {photo.story}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Photography;
