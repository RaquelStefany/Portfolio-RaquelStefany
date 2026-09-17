import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Raquel Rodrigues | Portfólio",
	description:
		"Portfólio de Raquel Rodrigues: Analista de Sistemas, Inteligência Artificial & Prompt Engineering e Gestora de Tráfego. Explore projetos, habilidades e trajetória profissional.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
			<body className="bg-[#0f131d] text-[#dfe2f1] font-sans antialiased selection:bg-[#10b981] selection:text-[#00422b]">
				{children}
			</body>
		</html>
	);
}
