// app/music/page.tsx

import React from "react";

export default function Music() {
  return (
    <div className="space-y-4">
      {/* SoundCloud Embed */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title="soundcloud"
          width="100%"
          height="166"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1458463900&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
        />
        <p className="text-gray-500 text-center text-xs mt-2">
          <a
            href="https://soundcloud.com/justinkahrs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500"
          >
            justinkahrs
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/justinkahrs/cezar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500"
          >
            cezar
          </a>
        </p>
      </div>

      {/* Spotify Embed */}
      <iframe
        title="spotify"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/4S9KLaUwqvORgG1gqbUadD?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
