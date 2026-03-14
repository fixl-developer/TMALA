"use client";
import { ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { useAuthModal } from "@/components/auth-modal";

export function AIStudioSpacesSection() {
  const { openAuth } = useAuthModal();
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen?.();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "#111111" }}>

      {/* Full-width card */}
      <div className="mx-4 sm:mx-8 my-10 rounded-3xl overflow-hidden shadow-2xl border border-violet-500/15">
        <div
          className="relative w-full flex flex-col lg:flex-row"
          style={{
            background: "linear-gradient(135deg, #1a003d 0%, #26005a 35%, #180a50 65%, #0a0528 100%)",
            minHeight: 480,
          }}
        >
          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Radial violet glow on left */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_80%_at_20%_50%,rgba(139,92,246,0.22),transparent)]" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* ── LEFT: Text Panel ── */}
          <div className="relative flex-shrink-0 w-full lg:w-[40%] flex flex-col justify-center p-10 lg:p-14 z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/35 mb-6 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-violet-300" />
              <span className="text-xs uppercase tracking-[0.35em] text-violet-300 font-semibold">AI Studio</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-bold leading-none">NEW</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight tracking-tight">
              AI Studio<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">
                Workspace
              </span>
            </h2>

            <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-[340px]">
              All your talent. All your workflows. One intelligent command center — built for agencies that want to move smarter, together.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Unified roster",
                "Live bookings",
                "AI automation",
                "Real-time collab",
              ].map((f) => (
                <span
                  key={f}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/8 border border-white/12 text-white/80 font-medium"
                >
                  {f}
                </span>
              ))}
            </div>

            <button
              onClick={() => openAuth()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 shadow-[0_8px_28px_rgba(124,58,237,0.45)] w-fit"
            >
              Explore Studio <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* ── RIGHT: Video Player ── no background, parent gradient shows through */}
          <div className="flex-1 relative overflow-hidden" style={{ minHeight: 440 }}>

            {/* Video frame */}
            <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-8 z-20">
              <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-violet-500/20 shadow-[0_0_60px_rgba(124,58,237,0.25)]">

                <video
                  ref={videoRef}
                  src="https://assets.mixkit.co/videos/19639/19639-720.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={muted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                />

                {/* Bottom fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Unmute pill (top-right) */}
                {muted && (
                  <button
                    onClick={handleMuteToggle}
                    className="absolute top-3 right-3 z-30 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] text-white/75 border border-white/10 hover:border-violet-500/40 hover:bg-black/80 hover:text-white transition-all duration-200"
                  >
                    Unmute
                  </button>
                )}

                {/* Controls bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 z-20">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause */}
                    <button
                      onClick={handlePlayPause}
                      className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-violet-500/50 transition-colors flex-shrink-0 border border-white/10"
                    >
                      {playing ? (
                        <Pause className="w-3 h-3 text-white" />
                      ) : (
                        <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                      )}
                    </button>

                    {/* Time + Progress */}
                    <div className="flex-1 flex items-center gap-2">
                      <span className="text-[10px] text-white/75 font-mono flex-shrink-0 min-w-[28px]">
                        {formatTime(currentTime)}
                      </span>
                      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full transition-all duration-100"
                          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-white/65 font-mono flex-shrink-0 min-w-[28px]">
                        {formatTime(duration)}
                      </span>
                    </div>

                    {/* Volume */}
                    <button
                      onClick={handleMuteToggle}
                      className="p-1.5 text-white/70 hover:text-violet-400 transition-colors flex-shrink-0"
                    >
                      {muted ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Fullscreen */}
                    <button
                      onClick={handleFullscreen}
                      className="p-1.5 text-white/70 hover:text-violet-400 transition-colors flex-shrink-0"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
