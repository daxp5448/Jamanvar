"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Sparkles, ShieldCheck, Flame } from "lucide-react";
import Image from "next/image";

export function BrandFilmSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-jamanvar-navy-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-jamanvar-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-jamanvar-saffron-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Watermark Emblem in Background */}
      <div className="absolute -top-12 -left-12 w-80 h-80 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/jamanvar/watermark-emblem.png"
          alt=""
          width={320}
          height={320}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jamanvar-saffron-500/15 border border-jamanvar-saffron-500/30 text-jamanvar-saffron-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE BRAND IDENTITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Crafted for the Soul of <span className="font-serif italic font-normal text-jamanvar-saffron-400">Indian Hospitality.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Experience the harmony of traditional Gujarati culinary values and modern digital POS intelligence.
          </p>
        </div>

        {/* Eye-Easing Cinema Showcase Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Outer Royal Frame with ambient backlight */}
          <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/20 via-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl">
            <div className="relative rounded-2xl sm:rounded-[22px] overflow-hidden bg-black aspect-video flex items-center justify-center group shadow-inner">
              <video
                ref={videoRef}
                src="/videos/brand-animation.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />

              {/* Floating Media Controls Overlay */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20 opacity-90 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-full bg-jamanvar-navy-950/80 hover:bg-jamanvar-navy-900 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-jamanvar-saffron-400" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-full bg-jamanvar-navy-950/80 hover:bg-jamanvar-navy-900 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-jamanvar-saffron-400" />}
                </button>
              </div>

              {/* Bottom Subtle Brand Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-jamanvar-navy-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-white/90 font-bold">JAMANVAR MOTION IDENTITY</span>
              </div>
            </div>
          </div>

          {/* Key Feature Trio Underneath Video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-jamanvar-saffron-500/20 text-jamanvar-saffron-400 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Authentic Culinary Heritage</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Designed specifically around Indian banquet styles, thali courses, and high-rush dinner services.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Engineered by KelvionTech</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Robust enterprise architecture ensuring sub-second printing and fail-safe offline data storage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Delightful Guest Experience</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Fast KOT dispatch and WhatsApp E-Billing make every customer visit smooth and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
