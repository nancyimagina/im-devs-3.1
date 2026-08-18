import { useEffect, useRef } from "react";

type Props = {
  /** 0 = interconnected globe (Staff Augmentation), 1 = structured lattice (Salesforce) */
  state: number;
  className?: string;
};

type P = {
  // current
  x: number;
  y: number;
  z: number;
  // targets per state
  ax: number;
  ay: number;
  az: number;
  bx: number;
  by: number;
  bz: number;
  hub: boolean;
};

const COUNT = 420;

function buildParticles(): P[] {
  const pts: P[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < COUNT; i++) {
    // Sphere (fibonacci)
    const t = 1 - (i / (COUNT - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - t * t));
    const th = golden * i;
    const ax = Math.cos(th) * r;
    const ay = t;
    const az = Math.sin(th) * r;

    // Structured lattice: stacked rings forming a cloud-ish cylinder core
    const layer = i % 7;
    const idx = Math.floor(i / 7);
    const per = Math.ceil(COUNT / 7);
    const ang = (idx / per) * Math.PI * 2;
    const rad = 0.35 + 0.55 * Math.abs(Math.sin((layer / 6) * Math.PI));
    const bx = Math.cos(ang) * rad;
    const by = (layer / 6 - 0.5) * 1.25;
    const bz = Math.sin(ang) * rad;

    pts.push({
      x: ax,
      y: ay,
      z: az,
      ax,
      ay,
      az,
      bx,
      by,
      bz,
      hub: i % 17 === 0,
    });
  }
  return pts;
}

export default function ParticleGlobe({ state, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles = buildParticles();
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, active: false };
    let mix = stateRef.current;
    let rot = 0;
    let raf = 0;
    let w = 0;
    let h = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.tx = 0;
      pointer.ty = 0;
      pointer.active = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      mix += (stateRef.current - mix) * 0.055;
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      if (!reduce) rot += 0.0022;

      const radius = Math.min(w, h) * 0.38;
      const cx = w / 2;
      const cy = h / 2;
      const tilt = -0.35 + pointer.y * 0.35;
      const yaw = rot + pointer.x * 0.5;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);

      ctx.clearRect(0, 0, w, h);

      const proj: { x: number; y: number; s: number; hub: boolean }[] = [];
      for (const p of particles) {
        const tx = p.ax + (p.bx - p.ax) * mix;
        const ty = p.ay + (p.by - p.ay) * mix;
        const tz = p.az + (p.bz - p.az) * mix;
        p.x += (tx - p.x) * 0.12;
        p.y += (ty - p.y) * 0.12;
        p.z += (tz - p.z) * 0.12;

        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const persp = 1.9 / (1.9 + z2);
        proj.push({
          x: cx + x1 * radius * persp,
          y: cy + y1 * radius * persp,
          s: persp,
          hub: p.hub,
        });
      }

      // Connections between nearby projected points
      ctx.lineWidth = 0.6;
      for (let i = 0; i < proj.length; i += 2) {
        const a = proj[i]!;
        if (a.s < 0.85) continue;
        for (let j = i + 2; j < proj.length; j += 2) {
          const b = proj[j]!;
          if (b.s < 0.85) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 2100) {
            const alpha = (1 - d2 / 2100) * 0.22 * a.s;
            ctx.strokeStyle = `rgba(146, 242, 82, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of proj) {
        const size = (p.hub ? 2.4 : 1.15) * p.s;
        const alpha = Math.max(0, Math.min(1, (p.s - 0.6) * 1.6));
        if (p.hub) {
          ctx.fillStyle = `rgba(146, 242, 82, ${(alpha * 0.95).toFixed(3)})`;
          ctx.shadowColor = "rgba(146, 242, 82, 0.8)";
          ctx.shadowBlur = 10 * p.s;
        } else {
          ctx.fillStyle = `rgba(234, 255, 228, ${(alpha * 0.55).toFixed(3)})`;
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
