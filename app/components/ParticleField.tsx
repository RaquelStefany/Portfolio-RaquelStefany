"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; r: number; c: number; a: number; da: number };

// Fundo de partículas da página inteira (mesmo efeito do site da Kliqo: "links" + "grab" + "push"),
// nas cores do portfólio. Fica fixo atrás do conteúdo e pausa com a aba oculta.
// Com "reduzir movimento" ligado no sistema, continua se movendo, mas mais devagar e sem parallax.
const PALETTE = ["78,222,163", "76,215,246", "173,198,255"]; // #4edea3 · #4cd7f6 · #adc6ff
const LINK = "76,215,246";

export default function ParticleField() {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;
		const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
		const speed = reduced ? 0.4 : 1;

		let w = 0, h = 0, raf = 0, running = false;
		let particles: Particle[] = [];
		const mouse = { x: -9999, y: -9999 };
		const make = (x = Math.random() * w, y = Math.random() * h): Particle => ({
			x, y,
			vx: (Math.random() - 0.5) * 0.6 * speed, vy: (Math.random() - 0.5) * 0.6 * speed,
			r: 1 + Math.random() * 2, c: Math.floor(Math.random() * 3),
			a: 0.15 + Math.random() * 0.45, da: (Math.random() - 0.5) * 0.008,
		});

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = window.innerWidth; h = window.innerHeight;
			canvas.width = w * dpr; canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.round(Math.min(110, Math.max(28, (w * h) / 10700)));
			particles = Array.from({ length: count }, () => make());
		};

		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			const link = 150, grab = 200;
			const px = !reduced && mouse.x > -999 ? (mouse.x / w - 0.5) * -24 : 0;
			const py = !reduced && mouse.y > -999 ? (mouse.y / h - 0.5) * -24 : 0;
			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				p.x += p.vx; p.y += p.vy; p.a += p.da * speed;
				if (p.a < 0.1 || p.a > 0.6) p.da *= -1;
				if (p.x < 0 || p.x > w) p.vx *= -1;
				if (p.y < 0 || p.y > h) p.vy *= -1;
				const x = p.x + px * (p.r / 3), y = p.y + py * (p.r / 3);
				for (let j = i + 1; j < particles.length; j++) {
					const q = particles[j];
					const d = Math.hypot(p.x - q.x, p.y - q.y);
					if (d < link) {
						ctx.strokeStyle = `rgba(${LINK},${(1 - d / link) * 0.2})`;
						ctx.lineWidth = 1;
						ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(q.x + px * (q.r / 3), q.y + py * (q.r / 3)); ctx.stroke();
					}
				}
				const md = Math.hypot(x - mouse.x, y - mouse.y);
				if (md < grab) {
					ctx.strokeStyle = `rgba(${PALETTE[0]},${(1 - md / grab) * 0.5})`;
					ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
				}
				ctx.fillStyle = `rgba(${PALETTE[p.c]},${p.a})`;
				ctx.beginPath(); ctx.arc(x, y, p.r, 0, Math.PI * 2); ctx.fill();
			}
		};

		const loop = () => { draw(); if (running) raf = requestAnimationFrame(loop); };
		const start = () => { if (running) return; running = true; raf = requestAnimationFrame(loop); };
		const stop = () => { running = false; cancelAnimationFrame(raf); };

		resize(); start();
		const onVis = () => (document.hidden ? stop() : start());
		const move = (e: PointerEvent) => { if (e.pointerType === "mouse") { mouse.x = e.clientX; mouse.y = e.clientY; } };
		const leave = () => { mouse.x = mouse.y = -9999; };
		// "push": clicar no fundo adiciona 4 partículas (cliques em links, botões e campos não contam)
		const push = (e: MouseEvent) => {
			if ((e.target as Element).closest("a, button, input, select, textarea, label, dialog, summary, [role='button']")) return;
			particles.push(...Array.from({ length: 4 }, () => make(e.clientX, e.clientY)));
			if (particles.length > 160) particles.splice(0, particles.length - 160);
		};
		window.addEventListener("resize", resize);
		window.addEventListener("pointermove", move, { passive: true });
		document.documentElement.addEventListener("pointerleave", leave);
		document.addEventListener("click", push);
		document.addEventListener("visibilitychange", onVis);
		return () => {
			stop();
			window.removeEventListener("resize", resize);
			window.removeEventListener("pointermove", move);
			document.documentElement.removeEventListener("pointerleave", leave);
			document.removeEventListener("click", push);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, []);

	return <canvas ref={ref} className="particle-field" aria-hidden="true" />;
}
