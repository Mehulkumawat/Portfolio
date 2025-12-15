import { useState } from "react";
import { useAlbums } from "../../hooks/useAlbums";
import { usePhotos } from "../../hooks/usePhotos";

const Photography = () => {
  const { data: albums, isLoading, error } = useAlbums();
  const [activeAlbumId, setActiveAlbumId] = useState<string | null>(null);

  const {
    data: photos,
    isLoading: photosLoading,
  } = usePhotos(activeAlbumId);

  return (
    <section className="min-h-[60vh]">
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
          Photography
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Moments captured along the way.
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Albums from travels, streets, and everyday life — stories told
          through light and composition.
        </p>
      </header>

      {/* Albums */}
      {isLoading && <p className="text-sm text-gray-500">Loading albums…</p>}
      {error && (
        <p className="text-sm text-red-500">Failed to load albums.</p>
      )}

      {albums && (
        <div className="mb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {albums.map((album) => (
            <button
              key={album.id}
              onClick={() =>
                setActiveAlbumId(
                  activeAlbumId === album.id ? null : album.id
                )
              }
              className={`rounded-2xl border p-5 text-left transition ${
                activeAlbumId === album.id
                  ? "border-black bg-white"
                  : "border-gray-200 bg-white/60 hover:bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold">{album.title}</h3>
              {album.location && (
                <p className="mt-1 text-sm text-gray-500">
                  {album.location}
                </p>
              )}
              {album.description && (
                <p className="mt-2 text-sm text-gray-600">
                  {album.description}
                </p>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Photos */}
      {activeAlbumId && (
        <>
          {photosLoading && (
            <p className="text-sm text-gray-500">Loading photos…</p>
          )}

          {photos && (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {photos.map((photo) => (
                <figure
                  key={photo.id}
                  className="overflow-hidden rounded-xl bg-gray-100"
                >
                  <img
                    src={photo.image_url}
                    alt={photo.caption ?? "Photography"}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                  {(photo.caption || photo.story) && (
                    <figcaption className="p-3">
                      {photo.caption && (
                        <p className="text-sm font-medium">
                          {photo.caption}
                        </p>
                      )}
                      {photo.story && (
                        <p className="mt-1 text-xs text-gray-600">
                          {photo.story}
                        </p>
                      )}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Photography;
