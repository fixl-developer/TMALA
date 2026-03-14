"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Helper functions
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);
const smoothstep = (a: number, b: number, t: number) => {
  const x = clamp((t - a) / (b - a), 0, 1);
  return x * x * (3 - 2 * x);
};

const hash = (n: number) => {
  const x = Math.sin(n) * 43758.5453;
  return x - Math.floor(x);
};

const noise2 = (x: number, y: number) => {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = hash(ix + iy * 57), b = hash(ix + 1 + iy * 57);
  const c = hash(ix + (iy + 1) * 57), d = hash(ix + 1 + (iy + 1) * 57);
  return lerp(lerp(a, b, ux), lerp(c, d, ux), uy);
};

const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
};

const PHASES = [
  { t: 0, n: 'Surface', d: 'You are outside the machine' },
  { t: 0.12, n: 'Approaching', d: 'The screen draws you in' },
  { t: 0.28, n: 'Screen Awakens', d: 'Lid opens — consciousness boots' },
  { t: 0.45, n: 'Entering', d: 'Breaking through the glass' },
  { t: 0.58, n: 'Inside the IDE', d: 'Code becomes reality here' },
  { t: 0.72, n: 'Neural Layer', d: 'Synapses firing at light speed' },
  { t: 0.88, n: 'The Core', d: 'Heart of artificial intelligence' },
];

export function AIStudioCanvasHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(PHASES[0]);
  const [neurons, setNeurons] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    let T = 0;
    let P = 0;
    let lastT = 0;
    let animationId: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particles
    const NPART = 280;
    const pts: Array<{
      x: number; y: number; vx: number; vy: number;
      r: number; hue: number; op: number; speed: number;
    }> = [];
    for (let i = 0; i < NPART; i++) {
      pts.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00025,
        vy: (Math.random() - 0.5) * 0.00025,
        r: 0.4 + Math.random() * 2.2,
        hue: Math.random() < 0.6 ? 175 : Math.random() < 0.5 ? 220 : 270,
        op: 0.15 + Math.random() * 0.6,
        speed: 0.5 + Math.random()
      });
    }

    const tickParticles = () => {
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
      });
    };

    // Big neural network nodes
    const BIG_NODES: Array<{
      lx: number; ly: number; cnt: number; li: number;
      phase: number; speed: number; active: boolean;
      hue: number; pulse: number;
    }> = [];
    
    const LAYERS = [5, 9, 12, 14, 12, 9, 5];
    LAYERS.forEach((cnt, li) => {
      for (let ni = 0; ni < cnt; ni++) {
        BIG_NODES.push({
          lx: li / (LAYERS.length - 1),
          ly: ni / (cnt - 1),
          cnt, li,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 1.2,
          active: Math.random() > 0.25,
          hue: Math.random() < 0.5 ? 175 : Math.random() < 0.5 ? 220 : 270,
          pulse: 0
        });
      }
    });

    // Data streams
    const streams = Array.from({ length: 25 }, () => ({
      x: Math.random(), y: Math.random(),
      len: 0.04 + Math.random() * 0.08,
      speed: 0.003 + Math.random() * 0.004,
      chars: Array.from({ length: 12 }, () =>
        Math.random() < 0.5 ? Math.floor(Math.random() * 10) : 'ABCDEF0123456789'[Math.floor(Math.random() * 16)]
      ),
      hue: Math.random() < 0.6 ? 175 : 220,
      op: 0.1 + Math.random() * 0.4
    }));

    const getProgress = () => {
      if (!heroRef.current) return 0;
      return clamp(window.scrollY / (heroRef.current.offsetHeight - H), 0, 1);
    };

    // Drawing functions
    const drawBG = (p: number) => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);

      let glowH = 220, glowA = 0.04;
      if (p < 0.3) { glowH = 220; glowA = 0.04; }
      else if (p < 0.6) { glowH = 175; glowA = 0.06; }
      else if (p < 0.8) { glowH = 270; glowA = 0.08; }
      else { glowH = 175; glowA = 0.1; }

      const bg = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, W * 0.6);
      bg.addColorStop(0, `hsla(${glowH},100%,8%,${glowA})`);
      bg.addColorStop(0.5, `hsla(${glowH},100%,4%,${glowA * 0.5})`);
      bg.addColorStop(1, 'transparent');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Desk surface
      const deskFade = smoothstep(0.28, 0.42, p) * (1 - smoothstep(0.55, 0.65, p));
      if (deskFade > 0.01) {
        const dy = H * lerp(0.72, 0.62, smoothstep(0.3, 0.5, p));
        const dg = ctx.createLinearGradient(0, dy, 0, H);
        dg.addColorStop(0, `rgba(4,10,22,${deskFade})`);
        dg.addColorStop(1, `rgba(2,6,14,${deskFade})`);
        ctx.fillStyle = dg;
        ctx.fillRect(0, dy, W, H - dy);
      }
    };

    const drawParticles = (p: number) => {
      const fade = Math.max(
        smoothstep(0, 0.05, p) - smoothstep(0.1, 0.2, p),
        smoothstep(0.65, 0.78, p)
      );
      if (fade < 0.01) return;
      pts.forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x * W, pt.y * H, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${pt.hue},100%,70%,${pt.op * fade})`;
        ctx.fill();
      });
    };

    const drawLaptop = (prog: number, t: number) => {
      const z = smoothstep(0, 0.45, prog);
      if (z < 0.005) return;

      const scale = lerp(0.04, 1, easeOut(z));
      const cx = W * 0.5, cy = H * 0.5;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      const bw = W * 0.7, bh = bw * 0.045;
      const sw = bw * 0.96, sh = sw * 0.65;

      // Lid
      const lidT = clamp(smoothstep(0.05, 0.38, prog), 0, 1);
      const scaleYLid = lerp(0.02, 1, ease(lidT));

      ctx.save();
      ctx.translate(0, -sh * 0.5 - bh * 0.5);
      ctx.scale(1, scaleYLid);

      const shellGrad = ctx.createLinearGradient(-sw / 2, -sh / 2, sw / 2, sh / 2);
      shellGrad.addColorStop(0, '#1a2234');
      shellGrad.addColorStop(0.5, '#0f1825');
      shellGrad.addColorStop(1, '#080f1a');
      ctx.fillStyle = shellGrad;
      roundRect(ctx, -sw / 2, -sh / 2, sw, sh, sw * 0.018);
      ctx.fill();

      ctx.strokeStyle = `rgba(0,255,204,${lerp(0.15, 0.5, scaleYLid)})`;
      ctx.lineWidth = 1.5 / scale;
      roundRect(ctx, -sw / 2, -sh / 2, sw, sh, sw * 0.018);
      ctx.stroke();

      // Screen content
      const screenOn = smoothstep(0.34, 0.5, prog);
      if (screenOn > 0.01 && scaleYLid > 0.5) {
        const screenPad = sw * 0.04;
        const innerW = sw - screenPad * 2, innerH = sh - screenPad * 2;

        ctx.save();
        roundRect(ctx, -sw / 2 + screenPad, -sh / 2 + screenPad, innerW, innerH, sw * 0.01);
        ctx.clip();

        const sbg = ctx.createRadialGradient(0, 0, 0, 0, 0, sw * 0.6);
        sbg.addColorStop(0, `rgba(0,30,80,${screenOn})`);
        sbg.addColorStop(0.5, `rgba(0,15,40,${screenOn})`);
        sbg.addColorStop(1, `rgba(2,5,15,${screenOn})`);
        ctx.fillStyle = sbg;
        ctx.fillRect(-sw / 2 + screenPad, -sh / 2 + screenPad, innerW, innerH);

        ctx.restore();
      }

      ctx.restore(); // lid

      // Base
      const baseG = ctx.createLinearGradient(-bw / 2, -bh / 2, bw / 2, bh / 2);
      baseG.addColorStop(0, '#1e2a3e');
      baseG.addColorStop(0.5, '#141f30');
      baseG.addColorStop(1, '#0c1520');
      ctx.fillStyle = baseG;
      roundRect(ctx, -bw / 2, -bh / 2, bw, bh, bh * 0.3);
      ctx.fill();

      ctx.restore();
    };

    const drawBigNeural = (p: number, t: number) => {
      const fade = smoothstep(0.72, 0.88, p);
      if (fade < 0.01) return;

      const cx2 = W * 0.5, cy2 = H * 0.5;
      const sx2 = W * lerp(0.3, 0.46, easeOut(fade));
      const sy2 = H * lerp(0.28, 0.4, easeOut(fade));

      BIG_NODES.forEach(n => {
        n.pulse = 0.5 + 0.5 * Math.sin(t * n.speed + n.phase);
      });

      // Connections
      BIG_NODES.forEach(a => {
        BIG_NODES.forEach(b => {
          if (b.li !== a.li + 1 || !a.active || !b.active) return;
          const ax2 = cx2 + (a.lx - 0.5) * sx2 * 2;
          const ay2 = cy2 + (a.ly - 0.5) * sy2 * 2;
          const bx2 = cx2 + (b.lx - 0.5) * sx2 * 2;
          const by2 = cy2 + (b.ly - 0.5) * sy2 * 2;

          const la = 0.15 * fade * a.pulse;
          const lg = ctx.createLinearGradient(ax2, ay2, bx2, by2);
          lg.addColorStop(0, `hsla(${a.hue},100%,60%,${la})`);
          lg.addColorStop(0.5, `hsla(175,100%,70%,${la * 1.4})`);
          lg.addColorStop(1, `hsla(${b.hue},100%,60%,${la})`);
          ctx.strokeStyle = lg;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(ax2, ay2);
          ctx.lineTo(bx2, by2);
          ctx.stroke();
        });
      });

      // Nodes
      BIG_NODES.forEach(n => {
        const nx2 = cx2 + (n.lx - 0.5) * sx2 * 2;
        const ny2 = cy2 + (n.ly - 0.5) * sy2 * 2;
        const nr = n.active ? lerp(4, 8, n.pulse) : 3;

        if (n.active) {
          const grd = ctx.createRadialGradient(nx2, ny2, 0, nx2, ny2, nr * 6);
          grd.addColorStop(0, `hsla(${n.hue},100%,70%,${0.2 * fade * n.pulse})`);
          grd.addColorStop(1, 'transparent');
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(nx2, ny2, nr * 6, 0, Math.PI * 2);
          ctx.fill();
        }

        const ng = ctx.createRadialGradient(nx2 - nr * 0.3, ny2 - nr * 0.3, 0, nx2, ny2, nr);
        ng.addColorStop(0, `hsla(${n.hue},100%,90%,${fade})`);
        ng.addColorStop(1, `hsla(${n.hue},100%,55%,${fade * 0.8})`);
        ctx.fillStyle = n.active ? ng : `rgba(10,30,60,${fade * 0.5})`;
        ctx.beginPath();
        ctx.arc(nx2, ny2, nr, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawVignette = () => {
      const v = ctx.createRadialGradient(W * 0.5, H * 0.5, H * 0.25, W * 0.5, H * 0.5, H * 0.85);
      v.addColorStop(0, 'transparent');
      v.addColorStop(1, 'rgba(0,0,0,.75)');
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, W, H);
    };

    const loop = (ts: number) => {
      const dt = Math.min((ts - lastT) / 1000, 0.05);
      lastT = ts;
      T += dt;
      tickParticles();

      const target = getProgress();
      P += (target - P) * 0.055;

      ctx.clearRect(0, 0, W, H);

      drawBG(P);
      drawParticles(P);
      drawLaptop(P, T);
      drawBigNeural(P, T);
      drawVignette();

      // Update React state
      setProgress(Math.round(P * 100));
      
      let pi = 0;
      PHASES.forEach((ph, i) => { if (P >= ph.t) pi = i; });
      setPhase(PHASES[pi]);
      
      const nActive = Math.round(lerp(0, BIG_NODES.length, smoothstep(0.7, 0.9, P)));
      setNeurons(nActive);

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animCursor = () => {
      setSmoothMouse(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15
      }));
      requestAnimationFrame(animCursor);
    };
    const id = requestAnimationFrame(animCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(id);
    };
  }, [mousePos]);

  const scrollToNext = () => {
    const startPosition = window.pageYOffset;
    const targetPosition = startPosition + window.innerHeight;
    const distance = targetPosition - startPosition;
    const duration = 2000;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, startPosition + (distance * ease));
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed w-2 h-2 bg-[#00ffcc] rounded-full pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 12px #00ffcc, 0 0 30px rgba(0,255,204,.5)'
        }}
      />
      <div
        className="fixed w-8 h-8 border border-[#00ffcc]/30 rounded-full pointer-events-none z-[9998] transition-all duration-150"
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <section ref={heroRef} className="h-[800vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          
          {/* HUD Overlay */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Logo */}
            <div className="absolute top-9 left-11 flex items-center gap-3 animate-fade-in">
              <div className="w-9 h-9 relative opacity-0 animate-[appear_0.8s_ease_forwards_0.3s]">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                  <rect x="1" y="1" width="34" height="34" rx="8" stroke="rgba(0,255,204,.5)" strokeWidth="1.2"/>
                  <circle cx="18" cy="18" r="5" fill="none" stroke="#00ffcc" strokeWidth="1.5"/>
                  <circle cx="18" cy="18" r="2" fill="#00ffcc"/>
                </svg>
              </div>
              <span className="font-['Space_Mono'] text-[0.72rem] tracking-[0.45em] uppercase text-white/75 opacity-0 animate-[appear_0.8s_ease_forwards_0.6s]">
                AI STUDIO
              </span>
            </div>

            {/* Top Right Stats */}
            <div className="absolute top-9 right-11 flex items-center gap-8 opacity-0 animate-[appear_1s_ease_forwards_0.8s]">
              <div className="font-['Space_Mono'] text-[0.58rem] tracking-[0.18em] uppercase text-[#00ffcc]/40 flex items-center gap-2">
                <div className="w-[5px] h-[5px] rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-pulse" />
                System Online
              </div>
              <div className="font-['Space_Mono'] text-[0.58rem] tracking-[0.18em] uppercase text-[#00ffcc]/40">
                Neurons: {neurons}
              </div>
              <div className="font-['Space_Mono'] text-[0.58rem] tracking-[0.18em] uppercase text-[#00ffcc]/40">
                {progress}%
              </div>
            </div>

            {/* Main Title */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap"
              style={{ opacity: Math.max(0, 1 - progress / 100 * 12) }}
            >
              <div className="font-['Space_Mono'] text-[0.62rem] tracking-[0.5em] uppercase text-[#00ffcc] opacity-0 animate-[slideUp_0.8s_ease_forwards_0.4s] mb-5">
                Next-Gen Intelligence Platform
              </div>
              <div className="text-[clamp(4.5rem,11vw,10rem)] font-black leading-[0.88] text-white opacity-0 animate-[slideUp_1s_ease_forwards_0.6s] tracking-tight">
                <span className="bg-gradient-to-r from-[#00ffcc] via-[#0088ff] to-[#aa44ff] bg-clip-text text-transparent">AI</span>
                <br />
                Studio
              </div>
              <div className="mt-7 text-[clamp(0.8rem,1.3vw,0.95rem)] font-light tracking-[0.2em] uppercase text-white/65 opacity-0 animate-[slideUp_0.8s_ease_forwards_1s]">
                Scroll to enter the neural realm
              </div>
            </div>

            {/* Phase Indicator */}
            <div className="absolute bottom-12 left-11">
              <div className="font-['Space_Mono'] text-[0.55rem] tracking-[0.3em] uppercase text-[#00ffcc]/35 mb-2">
                Current Layer
              </div>
              <div className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold text-[#00ffcc] tracking-wide leading-none transition-all duration-350">
                {phase.n}
              </div>
              <div className="font-['Space_Mono'] text-[0.6rem] text-white/60 mt-1 tracking-[0.12em] transition-opacity duration-350">
                {phase.d}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-12 right-11 flex items-center gap-5">
              <span className="font-['Space_Mono'] text-[0.6rem] text-[#00ffcc]/50 tracking-[0.1em] min-w-[2.5rem] text-right">
                {progress}%
              </span>
              <div className="w-[100px] h-[1.5px] bg-[#00ffcc]/10 rounded-full relative overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#0088ff] to-[#00ffcc] rounded-full shadow-[0_0_8px_#00ffcc] transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Scroll Hint */}
            <div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-400"
              style={{ opacity: progress < 4 ? 1 : 0 }}
            >
              <span className="font-['Space_Mono'] text-[0.52rem] tracking-[0.4em] uppercase text-white/55">
                ENTER
              </span>
              <div className="w-[1px] h-[50px] bg-gradient-to-b from-[#00ffcc] to-transparent animate-[drip_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes appear {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drip {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </>
  );
}
