import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Raquel Rodrigues | Portfólio",
	description: "Portfólio de Raquel Rodrigues, desenvolvedora de software e entusiasta de tecnologia. Explore meus projetos, habilidades e experiência profissional.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
