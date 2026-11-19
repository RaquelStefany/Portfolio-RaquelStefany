"use client";

import { useEffect } from "react";

// Movimentações no estilo Kliqo: header que ganha borda ao rolar, revelação dos blocos na rolagem
// e cards com brilho que segue o mouse + inclinação 3D.
export default function SiteEffects() {
	useEffect(() => {
		const header = document.querySelector<HTMLElement>("[data-header]");
		const scroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
		scroll();
		window.addEventListener("scroll", scroll, { passive: true });

		// Reveal: o que já está na tela aparece na hora, o resto ao entrar na viewport.
		const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add("is-visible");
			reveal.unobserve(entry.target);
		}), { rootMargin: "0px 0px -8% 0px" });
		const observe = () => document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach(el => {
			if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
			else reveal.observe(el);
		});
		observe();
		document.documentElement.classList.add("reveal-ready");
		// Conteúdo que muda com o idioma pode trocar elementos: observa os novos.
		const mo = new MutationObserver(observe);
		mo.observe(document.body, { childList: true, subtree: true });

		// Spotlight + inclinação 3D (até 6°) nos cards.
		const spot = (event: PointerEvent) => {
			const card = (event.target as Element).closest<HTMLElement>(".fx-card");
			if (!card) return;
			const rect = card.getBoundingClientRect();
			card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
			card.style.setProperty("--my", `${event.clientY - rect.top}px`);
			if (!card.classList.contains("fx-tilt")) return;
			card.style.setProperty("--ry", `${((event.clientX - rect.left) / rect.width - 0.5) * 12}deg`);
			card.style.setProperty("--rx", `${((event.clientY - rect.top) / rect.height - 0.5) * -12}deg`);
		};
		document.addEventListener("pointermove", spot, { passive: true });

		return () => {
			window.removeEventListener("scroll", scroll);
			reveal.disconnect();
			mo.disconnect();
			document.removeEventListener("pointermove", spot);
		};
	}, []);

	return null;
}
