"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, Volume1, VolumeX, Maximize, Minimize, RotateCcw } from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  className?: string;
}

interface WebkitFullScreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
}

interface WebkitDocument extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  webkitFullscreenElement?: Element;
}

export default function CustomVideoPlayer({
  src,
  poster = "/assets/images/landing-video-poster.webp",
  title = "Care Packs Video",
  autoPlay = false,
  className = "",
}: CustomVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideControlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Play / Pause Toggle
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch((err) => {
          console.warn("Video playback was prevented:", err);
        });
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  }, []);

  // Volume slider change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    const video = videoRef.current;
    if (!video) return;

    video.volume = newVol;
    setVolume(newVol);
    if (newVol === 0) {
      video.muted = true;
      setIsMuted(true);
    } else {
      video.muted = false;
      setIsMuted(false);
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted || volume === 0) {
      const restoreVol = volume === 0 ? 0.8 : volume;
      video.muted = false;
      video.volume = restoreVol;
      setIsMuted(false);
      setVolume(restoreVol);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  // Fullscreen Toggle
  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current as WebkitFullScreenElement | null;
    const doc = document as WebkitDocument;
    if (!container) return;

    if (!doc.fullscreenElement && !doc.webkitFullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch((err) => console.warn(err));
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen().catch((err) => console.warn(err));
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen().catch((err) => console.warn(err));
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen().catch((err) => console.warn(err));
      }
    }
  }, []);

  // Listen for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as WebkitDocument;
      setIsFullscreen(Boolean(doc.fullscreenElement || doc.webkitFullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Video event handlers
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

  const handleEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  // Handle seeking along progress bar
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Auto-hide controls when playing after 2.5s of inactivity
  const triggerUserActivity = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }
    if (isPlaying) {
      hideControlsTimerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (hideControlsTimerRef.current) {
        clearTimeout(hideControlsTimerRef.current);
      }
    };
  }, []);

  // Keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "k" || e.key === "K") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "m" || e.key === "M") {
      e.preventDefault();
      toggleMute();
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newVol = Math.min(1, volume + 0.1);
      if (videoRef.current) {
        videoRef.current.volume = newVol;
        videoRef.current.muted = false;
      }
      setVolume(newVol);
      setIsMuted(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newVol = Math.max(0, volume - 0.1);
      if (videoRef.current) {
        videoRef.current.volume = newVol;
        if (newVol === 0) videoRef.current.muted = true;
      }
      setVolume(newVol);
      setIsMuted(newVol === 0);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (videoRef.current) {
        videoRef.current.currentTime = Math.min(duration, currentTime + 5);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (videoRef.current) {
        videoRef.current.currentTime = Math.max(0, currentTime - 5);
      }
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const currentVolume = isMuted ? 0 : volume;
  const isControlsVisible = !isPlaying || showControls;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={title}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseMove={triggerUserActivity}
      onMouseEnter={triggerUserActivity}
      onTouchStart={triggerUserActivity}
      className={`relative w-full aspect-video bg-[#0d0d0f] rounded-2xl md:rounded-[24px] overflow-hidden select-none outline-none group shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-black/5 ${className}`}
    >
      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        autoPlay={autoPlay}
        preload="metadata"
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onEnded={handleEnded}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* High-Resolution Poster Overlay (displayed prior to user pressing play) */}
      {!hasStarted && poster && (
        <img
          src={poster}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 transition-opacity duration-300"
        />
      )}

      {/* Large Center Play Overlay (when paused or ended) */}
      {(!isPlaying || !hasStarted) && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[2px] transition-all duration-300 cursor-pointer z-20 group/overlay"
        >
          <button
            type="button"
            aria-label={currentTime >= duration && duration > 0 ? "Replay video" : "Play video"}
            className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#ec008c] hover:bg-[#d6007e] text-white shadow-[0_10px_35px_rgba(236,0,140,0.45)] transform transition-transform duration-300 group-hover/overlay:scale-110 active:scale-95 cursor-pointer"
          >
            {/* Ambient Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-[#ec008c] animate-ping opacity-30 pointer-events-none" />
            {currentTime >= duration && duration > 0 ? (
              <RotateCcw className="w-9 h-9 md:w-11 md:h-11 ml-0.5" />
            ) : (
              <Play className="w-9 h-9 md:w-11 md:h-11 ml-1 fill-white" />
            )}
          </button>
        </div>
      )}

      {/* Buffering Spinner */}
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none z-20">
          <div className="w-12 h-12 border-4 border-white/20 border-t-[#ec008c] rounded-full animate-spin" />
        </div>
      )}

      {/* Bottom Controls Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pt-12 pb-4 px-4 md:px-6 z-30 transition-opacity duration-300 ${
          isControlsVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Progress Timeline Scrubber */}
        <div className="relative w-full mb-3 flex items-center group/scrub">
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            aria-label="Video timeline scrubber"
            className="w-full h-1.5 md:h-2 bg-white/25 hover:bg-white/35 rounded-full appearance-none cursor-pointer focus:outline-none accent-[#ec008c] transition-all"
            style={{
              background: `linear-gradient(to right, #ec008c ${progressPercent}%, rgba(255,255,255,0.25) ${progressPercent}%)`,
            }}
          />
        </div>

        {/* Controls Row: Play/Pause, Time, Volume Slider, Fullscreen */}
        <div className="flex items-center justify-between text-white">
          {/* Left: Play/Pause, Time Display */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="p-2 rounded-full hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 md:w-6 md:h-6 fill-white" />
              ) : (
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-white ml-0.5" />
              )}
            </button>

            {/* Time Display */}
            <div className="text-xs md:text-sm font-medium tracking-wide text-white/90 select-none">
              <span>{formatTime(currentTime)}</span>
              <span className="mx-1 text-white/50">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right: Volume (Mute + Slider) & Fullscreen */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Volume Control (Speaker Icon + Slider) */}
            <div className="flex items-center gap-2 group/volume bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-full backdrop-blur-sm transition-colors">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted || volume === 0 ? "Unmute" : "Mute"}
                className="p-1 rounded-full hover:text-[#ec008c] transition-colors focus:outline-none cursor-pointer"
              >
                {isMuted || currentVolume === 0 ? (
                  <VolumeX className="w-5 h-5 text-white/90" />
                ) : currentVolume < 0.5 ? (
                  <Volume1 className="w-5 h-5 text-white/90" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white/90" />
                )}
              </button>

              {/* Volume Slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.02"
                value={currentVolume}
                onChange={handleVolumeChange}
                aria-label="Volume slider"
                className="w-16 md:w-20 h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer focus:outline-none accent-[#ec008c]"
                style={{
                  background: `linear-gradient(to right, #ec008c ${currentVolume * 100}%, rgba(255,255,255,0.3) ${
                    currentVolume * 100
                  }%)`,
                }}
              />
            </div>

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              className="p-2 rounded-full hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Maximize className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
