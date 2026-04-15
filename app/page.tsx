"use client";

import React, { useState, useEffect } from "react";
import {
	Mail,
	Code2,
	Database,
	Terminal,
	ChevronRight,
	MapPin,
	GraduationCap,
	Briefcase,
	Award,
	Languages,
	X,
	Menu,
	Eye,
	Info,
	GitBranch,
	Library,
	Wrench,
	Monitor,
	BookOpen,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

type Locale = "pt" | "en";

type Project = {
	id: number;
	title: string;
	description: string;
	fullDescription: string;
	highlights: string[];
	technologies: string[];
	tag: string;
	images: { src: string; alt: string }[];
};

export default function Home() {
	const [lang, setLang] = useState<Locale>("pt");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null,
	);

	useEffect(() => {
		if (selectedProject) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [selectedProject]);

	const content = {
		pt: {
			nav: ["Início", "Sobre", "Habilidades", "Projetos", "Experiência"],
			navLinks: [
				"inicio",
				"sobre",
				"habilidades",
				"projetos",
				"experiencia",
			],
			role: "Desenvolvedora Full Stack & Analista de Sistemas",
			summary:
				"Profissional de TI com foco em desenvolvimento web e análise de sistemas Full Stack. Sólida base em back-end (PHP/Python) e modelagem SQL. Perfil analítico voltado para resolução de problemas complexos e otimização de processos logísticos.",
			stats: { exp: "Anos Exp.", projects: "Projetos" },
			modal: {
				close: "Fechar",
				techTitle: "Tecnologias Utilizadas",
				internalNote: "Sistema Interno",
			},
			sections: {
				about: "Perfil Analítico",
				skills: "Competências Técnicas",
				projects: "Projetos em Destaque",
				experience: "Experiência",
				education: "Formação Acadêmica",
				highlights: "Cursos e Certificações",
				footer: "Vamos construir algo incrível?",
			},
			skillCategories: {
				languages: "Linguagens",
				frameworks: "Frameworks",
				databases: "Banco de Dados",
				versioning: "Versionamento",
				libraries: "Bibliotecas",
				tools: "Ferramentas",
				systems: "Sistemas",
			},
			certifications: [
				{ name: "Engenharia de Software", school: "Alura" },
				{ name: "Especialização Front-End", school: "Alura" },
				{ name: "SQL Avançado", school: "HackerRank" },
				{ name: "SQL Database Specialist", school: "DIO" },
				{ name: "Versionamento com Git e GitHub", school: "DIO" },
				{ name: "CC50 – Ciência da Computação", school: "Harvard" },
				{ name: "Crystal Reports", school: "Datapar" },
				{ name: "Sistemas Operacionais", school: "Fundação Bradesco" },
				{ name: "Excel Básico", school: "São Judas Tadeu" },
			],
			projectList: [
				{
					id: 1,
					title: "GelogSystem",
					description:
						"Sistema logístico focado na otimização de processos operacionais e integração de dados em tempo real.",
					fullDescription:
						"Desenvolvi este sistema para centralizar a operação do Grupo Gelog. O foco principal foi a automação de rotinas que antes eram manuais, garantindo que o banco de dados SQL Server estivesse sempre sincronizado com o ERP principal.",
					highlights: [
						"Integração entre sistemas internos",
						"Automação de rotinas",
						"Sincronização de dados",
					],
					technologies: [
						"HTML",
						"CSS",
						"JavaScript",
						"PHP",
						"CodeIgniter",
						"SQL Server",
						"Python",
					],
					tag: "Logística",
					images: [
						{
							src: "/projects/gelogsystem/login.png",
							alt: "Login",
						},
						{
							src: "/projects/gelogsystem/dashboard.png",
							alt: "Dashboard",
						},
						{
							src: "/projects/gelogsystem/processos.png",
							alt: "Processos",
						},
					],
				},
				{
					id: 2,
					title: "EltexsSystem",
					description:
						"Sistema logístico voltado ao gerenciamento completo de operações, incluindo faturamento e financeiro.",
					fullDescription:
						"Um ERP completo que cuida desde a proposta comercial até o faturamento final. Implementei módulos de análise de fluxo de caixa e custos operacionais reais, ajudando na tomada de decisão da diretoria.",
					highlights: [
						"Controle de propostas",
						"Gestão financeira",
						"Análise de fluxo",
					],
					technologies: [
						"HTML",
						"CSS",
						"JavaScript",
						"PHP",
						"Laravel",
						"SQL Server",
					],
					tag: "ERP",
					images: [
						{
							src: "/projects/eltexssystem/login.png",
							alt: "Login",
						},
						{
							src: "/projects/eltexssystem/dashboard.png",
							alt: "Dashboard",
						},
						{
							src: "/projects/eltexssystem/processos.png",
							alt: "Processos",
						},
					],
				},
				{
					id: 3,
					title: "Mercedes x Gelog",
					description:
						"Plataforma de follow-up operacional para monitoramento em tempo real de etapas logísticas para a Mercedes-Benz.",
					fullDescription:
						"Plataforma exclusiva para o cliente Mercedes-Benz acompanhar suas cargas. Inclui registro de ocorrências, controle de prazos rigorosos e KPIs de atendimento.",
					highlights: [
						"Tracking em tempo real",
						"Controle de incidentes",
						"Transparência operacional",
					],
					technologies: [
						"HTML",
						"CSS",
						"JavaScript",
						"PHP",
						"CodeIgniter",
						"SQL Server",
						"Python",
					],
					tag: "Dashboard",
					images: [
						{
							src: "/projects/mercedesgelog/login.png",
							alt: "Login",
						},
						{
							src: "/projects/mercedesgelog/dashboard.png",
							alt: "Dashboard",
						},
						{
							src: "/projects/mercedesgelog/processos.png",
							alt: "Processos",
						},
					],
				},
			],
			experienceList: [
				{
					company: "Grupo Gelog",
					role: "Analista de Sistemas Jr",
					period: "Julho 2023 - Atualmente",
					desc: "Análise de requisitos, consultas avançadas SQL e desenvolvimento de relatórios gerenciais com Crystal Reports.",
				},
				{
					company: "FenTI Services & Consulting",
					role: "Web Developer - Freelancer",
					period: "Março 2024 - Atualmente",
					desc: "Desenvolvimento e manutenção de sistemas web, implementação de melhorias e integração com banco de dados e APIs.",
				},
				{
					company: "Fatec Baixada Santista Lara",
					role: "Desenvolvedora Full Stack",
					period: "Abril 2023 - Dezembro 2025",
					desc: "Desenvolvimento de aplicações web completas (front-end e back-end), estruturação de banco de dados e versionamento com Git.",
				},
			],
			educationList: [
				{
					title: "Análise e Desenvolvimento de Sistemas",
					institution: "Universidade Católica de Santos",
					period: "2024 - 2026",
				},
				{
					title: "Sistemas para Internet",
					institution: "Fatec Baixada Santista Lara",
					period: "2023 - Interrompido para foco em carreira",
				},
				{
					title: "Técnico em Desenvolvimento de Sistemas",
					institution: "Etec Dra. Ruth Cardoso",
					period: "2021 - 2022",
				},
			],
			footerDesc:
				"Estou sempre aberta a novos desafios em desenvolvimento web, análise de dados e integrações.",
		},
		en: {
			nav: ["Home", "About", "Skills", "Projects", "Experience"],
			navLinks: [
				"inicio",
				"sobre",
				"habilidades",
				"projetos",
				"experiencia",
			],
			role: "Full Stack Developer & Systems Analyst",
			summary:
				"Information Technology professional with experience in web development and systems analysis, working on Full Stack projects. Solid foundation in back-end development with PHP and Python, SQL database modeling and manipulation.",
			stats: { exp: "Years Exp.", projects: "Projects" },
			modal: {
				close: "Close",
				techTitle: "Technologies Used",
				internalNote: "Internal System",
			},
			sections: {
				about: "Analytical Profile",
				skills: "Technical Skills",
				projects: "Featured Projects",
				experience: "Experience",
				education: "Academic Education",
				highlights: "Courses and Certifications",
				footer: "Let's build something amazing?",
			},
			skillCategories: {
				languages: "Languages",
				frameworks: "Frameworks",
				databases: "Databases",
				versioning: "Versioning",
				libraries: "Libraries",
				tools: "Tools",
				systems: "Systems",
			},
			certifications: [
				{ name: "Software Engineering", school: "Alura" },
				{ name: "Front-End Specialization", school: "Alura" },
				{ name: "Advanced SQL", school: "HackerRank" },
				{ name: "SQL Database Specialist", school: "DIO" },
				{ name: "Version Control with Git and GitHub", school: "DIO" },
				{ name: "CC50 – Computer Science", school: "Harvard" },
				{ name: "Crystal Reports", school: "Datapar" },
				{ name: "Operating Systems", school: "Fundação Bradesco" },
				{ name: "Basic Excel", school: "São Judas Tadeu" },
			],
			projectList: [
				{
					id: 1,
					title: "GelogSystem",
					description:
						"Logistics system developed for Grupo Gelog focused on optimizing and streamlining operational processes.",
					fullDescription:
						"I developed this system to centralize Grupo Gelog's operations. The primary focus was automating manual routines, ensuring the SQL Server database was consistently synchronized with the main ERP.",
					highlights: [
						"Internal systems integration",
						"Routine automation",
						"Data synchronization",
					],
					technologies: [
						"HTML",
						"CSS",
						"JavaScript",
						"PHP",
						"CodeIgniter",
						"SQL Server",
						"Python",
					],
					tag: "Logistics",
					images: [
						{
							src: "/projects/gelogsystem/login.png",
							alt: "Login",
						},
						{
							src: "/projects/gelogsystem/dashboard.png",
							alt: "Dashboard",
						},
						{
							src: "/projects/gelogsystem/processos.png",
							alt: "Processes",
						},
					],
				},
				{
					id: 2,
					title: "EltexsSystem",
					description:
						"Logistics system focused on complete operations management, billing and financial control.",
					fullDescription:
						"A comprehensive ERP that manages everything from commercial proposals to final billing. I implemented cash flow analysis modules and real operational cost tracking.",
					highlights: [
						"Commercial proposal control",
						"Financial management",
						"Cost analysis",
					],
					technologies: [
						"HTML",
						"CSS",
						"JavaScript",
						"PHP",
						"Laravel",
						"SQL Server",
					],
					tag: "ERP",
					images: [
						{
							src: "/projects/eltexssystem/login.png",
							alt: "Login",
						},
						{
							src: "/projects/eltexssystem/dashboard.png",
							alt: "Dashboard",
						},
						{
							src: "/projects/eltexssystem/processos.png",
							alt: "Processes",
						},
					],
				},
				{
					id: 3,
					title: "Mercedes x Gelog",
					description:
						"Online platform to monitor logistics operations between Mercedes and Grupo Gelog in real-time.",
					fullDescription:
						"An exclusive platform for Mercedes-Benz to track their cargo. It includes incident logging, strict deadline control, and service KPIs.",
					highlights: [
						"Real-time monitoring",
						"Incident control",
						"Operational transparency",
					],
					technologies: [
						"HTML",
						"CSS",
						"JavaScript",
						"PHP",
						"CodeIgniter",
						"SQL Server",
						"Python",
					],
					tag: "Dashboard",
					images: [
						{
							src: "/projects/mercedesgelog/login.png",
							alt: "Login",
						},
						{
							src: "/projects/mercedesgelog/dashboard.png",
							alt: "Dashboard",
						},
						{
							src: "/projects/mercedesgelog/processos.png",
							alt: "Processes",
						},
					],
				},
			],
			experienceList: [
				{
					company: "Grupo Gelog",
					role: "Junior Systems Analyst",
					period: "July 2023 - Present",
					desc: "Requirements analysis, advanced SQL querying and management reports development (Crystal Reports).",
				},
				{
					company: "FenTI Services & Consulting",
					role: "Web Developer - Freelancer",
					period: "March 2024 - Present",
					desc: "Web systems development and maintenance, implementation of improvements, and database/API integration.",
				},
				{
					company: "Fatec Baixada Santista Lara",
					role: "Full Stack Developer",
					period: "April 2023 - December 2025",
					desc: "End-to-end web application development, database structuring and versioning with Git.",
				},
			],
			educationList: [
				{
					title: "Systems Analysis and Development",
					institution: "Catholic University of Santos",
					period: "2024 - 2026",
				},
				{
					title: "Internet Systems",
					institution: "Fatec Baixada Santista Lara",
					period: "2023 - Interrupted to focus on career",
				},
				{
					title: "Systems Development Technician",
					institution: "Etec Dra. Ruth Cardoso",
					period: "2021 - 2022",
				},
			],
			footerDesc:
				"I am always open to new challenges in web development, data analysis, and integrations.",
		},
	};

	const t = content[lang];

	const personalData = {
		name: "Raquel Rodrigues",
		location: "São Vicente - SP, Brazil",
		email: "raquelstefany.work@gmail.com",
		linkedin: "https://www.linkedin.com/in/raquelstefany",
		github: "https://www.github.com/RaquelStefany",
	};

	const skillsData = [
		{
			key: "languages",
			icon: <Code2 className="text-emerald-400" />,
			skills: ["PHP", "Python", "JavaScript", "HTML", "CSS"],
		},
		{
			key: "frameworks",
			icon: <Monitor className="text-cyan-400" />,
			skills: [
				"Flask",
				"CodeIgniter",
				"Laravel",
				"TailwindCSS",
				"BootStrap",
			],
		},
		{
			key: "databases",
			icon: <Database className="text-purple-400" />,
			skills: ["SQL Server", "MySQL"],
		},
		{
			key: "versioning",
			icon: <GitBranch className="text-orange-400" />,
			skills: ["Git", "GitHub", "Azure DevOps"],
		},
		{
			key: "libraries",
			icon: <Library className="text-pink-400" />,
			skills: ["jQuery", "Pandas", "AgGrid", "AgCharts"],
		},
		{
			key: "tools",
			icon: <Wrench className="text-yellow-400" />,
			skills: ["Crystal Reports", "Power Automate", "PowerBI"],
		},
		{
			key: "systems",
			icon: <Terminal className="text-blue-400" />,
			skills: ["Rodopar", "Microled", "Benner"],
		},
	];

	return (
		<div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden scroll-smooth">
			{selectedProject && (
				<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
					<div
						className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
						onClick={() => setSelectedProject(null)}
					/>

					<div className="relative bg-slate-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 shadow-2xl">
						<div className="sticky top-0 bg-slate-900 p-6 border-b border-slate-800 flex justify-between items-center z-10">
							<div>
								<span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">
									{selectedProject.tag}
								</span>
								<h2 className="text-2xl sm:text-3xl font-bold">
									{selectedProject.title}
								</h2>
							</div>
							<button
								onClick={() => setSelectedProject(null)}
								className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white cursor-pointer"
							>
								<X className="w-8 h-8" />
							</button>
						</div>

						<div className="p-6 sm:p-10">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
								<div className="space-y-6">
									{selectedProject.images.map(
										(
											imgLabel: {
												src: string;
												alt: string;
											},
											idx: number,
										) => (
											<div
												key={idx}
												className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 flex flex-col items-center justify-center"
											>
												<div className="absolute top-2 left-2 bg-slate-900/80 px-2 py-1 rounded text-[10px] font-mono text-emerald-400">
													{imgLabel.alt}
												</div>
												<img
													src={imgLabel.src}
													alt={imgLabel.alt}
													style={{
														objectFit: "cover",
													}}
												/>
											</div>
										),
									)}
									<div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-400/80 flex items-center gap-3">
										<Info className="w-4 h-4 shrink-0" />
										<span>
											{t.modal.internalNote}: Imagens
											reais omitidas por questões de
											confidencialidade de dados sensíveis
											da empresa.
										</span>
									</div>
								</div>

								<div className="space-y-8">
									<div>
										<h3 className="text-xl font-bold mb-4 text-emerald-400">
											{lang === "pt"
												? "Sobre o Projeto"
												: "About the Project"}
										</h3>
										<p className="text-slate-400 leading-relaxed italic">
											&ldquo;
											{selectedProject.fullDescription}
											&rdquo;
										</p>
									</div>

									<div>
										<h3 className="text-lg font-bold mb-4 flex items-center gap-2">
											<Code2 className="w-5 h-5 text-cyan-400" />{" "}
											{t.modal.techTitle}
										</h3>
										<div className="flex flex-wrap gap-2">
											{selectedProject.technologies.map(
												(tech: string) => (
													<span
														key={tech}
														className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-xs border border-slate-700 hover:text-emerald-400 transition-colors cursor-pointer"
													>
														{tech}
													</span>
												),
											)}
										</div>
									</div>

									<div>
										<h3 className="text-lg font-bold mb-4">
											{lang === "pt"
												? "Principais Entregas"
												: "Key Deliverables"}
										</h3>
										<ul className="space-y-3">
											{selectedProject.highlights.map(
												(h: string, i: number) => (
													<li
														key={i}
														className="flex items-start gap-3 text-slate-300"
													>
														<ChevronRight className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
														<span className="text-sm">
															{h}
														</span>
													</li>
												),
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
				<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
					<span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
						RaquelRodrigues.dev
					</span>

					<div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
						{t.nav.map((item, idx) => (
							<a
								key={item}
								href={`#${t.navLinks[idx]}`}
								className="hover:text-emerald-400 transition-colors"
							>
								{item}
							</a>
						))}

						<div className="flex items-center gap-2 ml-4 border-l border-slate-800 pl-6">
							<Languages className="w-4 h-4 text-slate-500" />
							<button
								onClick={() => setLang("pt")}
								className={
									lang === "pt"
										? "text-emerald-400"
										: "text-slate-500 hover:text-slate-300"
								}
							>
								PT
							</button>
							<span className="text-slate-800">/</span>
							<button
								onClick={() => setLang("en")}
								className={
									lang === "en"
										? "text-emerald-400"
										: "text-slate-500 hover:text-slate-300"
								}
							>
								EN
							</button>
						</div>
					</div>

					<button
						className="md:hidden p-2 text-slate-400 hover:text-emerald-400"
						onClick={() => setIsMenuOpen(true)}
					>
						<Menu className="w-6 h-6" />
					</button>
				</div>
			</nav>

			<div
				className={`fixed inset-0 z-[60] bg-slate-950/95 transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
			>
				<div className="flex flex-col h-full p-8">
					<div className="flex justify-between items-center mb-12">
						<span className="text-xl font-bold text-emerald-400">
							RaquelRodrigues.dev
						</span>
						<button
							onClick={() => setIsMenuOpen(false)}
							className="p-2 text-slate-400"
						>
							<X className="w-8 h-8" />
						</button>
					</div>
					<div className="flex flex-col space-y-8 text-2xl font-bold uppercase tracking-wider">
						{t.nav.map((item, idx) => (
							<a
								key={item}
								href={`#${t.navLinks[idx]}`}
								onClick={() => setIsMenuOpen(false)}
								className="hover:text-emerald-400"
							>
								{item}
							</a>
						))}
					</div>
					<div className="mt-auto pt-12 border-t border-slate-800 flex gap-4 text-lg font-bold">
						<button
							onClick={() => {
								setLang("pt");
								setIsMenuOpen(false);
							}}
							className={
								lang === "pt"
									? "text-emerald-400 underline underline-offset-8"
									: "text-slate-500"
							}
						>
							PT
						</button>
						<button
							onClick={() => {
								setLang("en");
								setIsMenuOpen(false);
							}}
							className={
								lang === "en"
									? "text-emerald-400 underline underline-offset-8"
									: "text-slate-500"
							}
						>
							EN
						</button>
					</div>
				</div>
			</div>

			<section
				id="inicio"
				className="pt-32 md:pt-48 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center"
			>
				<div className="inline-block p-1 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 mb-6">
					<div className="bg-slate-950 rounded-full p-2">
						<div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-800 flex items-center justify-center">
							<img
								src="/me.jpg"
								alt="RaquelRodrigues"
								style={{ borderRadius: "100%" }}
							/>
							{/* <Terminal className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" /> */}
						</div>
					</div>
				</div>
				<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
					{personalData.name}
				</h1>
				<p className="text-lg md:text-2xl text-emerald-400 font-mono mb-8 px-4">
					&gt; {t.role}
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md md:max-w-none">
					<a
						href={personalData.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition-all border border-slate-700"
					>
						<FiLinkedin className="w-5 h-5" /> LinkedIn
					</a>
					<a
						href={personalData.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition-all border border-slate-700"
					>
						<FiGithub className="w-5 h-5" /> GitHub
					</a>
					<a
						href={`mailto:${personalData.email}`}
						className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-900/20 font-bold"
					>
						<Mail className="w-5 h-5" />{" "}
						{lang === "pt" ? "Contato" : "Contact"}
					</a>
				</div>
			</section>

			<section
				id="sobre"
				className="py-20 px-4 sm:px-6 max-w-4xl mx-auto"
			>
				<div className="bg-slate-900/50 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10">
					<div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
						<div className="flex-1">
							<h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
								<span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
								{t.sections.about}
							</h2>
							<p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6">
								{t.summary}
							</p>
							<div className="flex items-center gap-2 text-slate-500">
								<MapPin className="w-4 h-4 text-emerald-500" />
								<span className="text-sm">
									{personalData.location}
								</span>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
							<div className="p-4 bg-slate-800 rounded-2xl text-center border border-slate-700">
								<div className="text-emerald-400 font-bold text-2xl mb-1">
									2+
								</div>
								<div className="text-[10px] uppercase text-slate-500 tracking-wider font-bold">
									{t.stats.exp}
								</div>
							</div>
							<div className="p-4 bg-slate-800 rounded-2xl text-center border border-slate-700">
								<div className="text-cyan-400 font-bold text-2xl mb-1">
									10+
								</div>
								<div className="text-[10px] uppercase text-slate-500 tracking-wider font-bold">
									{t.stats.projects}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="habilidades" className="py-24 px-6 max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					{t.sections.skills}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{skillsData.map((cat) => (
						<div
							key={cat.key}
							className="p-6 bg-slate-900 rounded-3xl border border-slate-800 hover:border-slate-600 transition-all group"
						>
							<div className="mb-4 p-3 bg-slate-800 w-fit rounded-2xl group-hover:scale-110 transition-transform">
								{cat.icon}
							</div>
							<h3 className="text-lg font-bold mb-4 text-slate-100">
								{
									t.skillCategories[
										cat.key as keyof typeof t.skillCategories
									]
								}
							</h3>
							<div className="flex flex-wrap gap-2">
								{cat.skills.map((s) => (
									<span
										key={s}
										className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-xs border border-slate-700 hover:text-emerald-400 transition-colors cursor-pointer"
									>
										{s}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			<section id="projetos" className="py-24 bg-slate-900/30">
				<div className="max-w-6xl mx-auto px-6">
					<div className="mb-12 text-center md:text-left">
						<h2 className="text-3xl md:text-4xl font-bold mb-2">
							{t.sections.projects}
						</h2>
						<p className="text-slate-500 text-sm md:text-base">
							{lang === "pt"
								? "Focados em sistemas logísticos e gestão empresarial."
								: "Focused on logistics systems and corporate management."}
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{t.projectList.map((proj) => (
							<div
								key={proj.id}
								className="group relative flex flex-col bg-slate-800 rounded-3xl border border-slate-700 hover:translate-y-[-4px] md:hover:translate-y-[-8px] transition-all duration-300 overflow-hidden"
							>
								<div className="p-6 md:p-8 flex-1">
									<div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">
										{proj.tag}
									</div>
									<h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
										{proj.title}
									</h3>
									<p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">
										{proj.description}
									</p>
									<ul className="space-y-2 mb-6">
										{proj.highlights
											.slice(0, 2)
											.map((h, j) => (
												<li
													key={j}
													className="flex items-start gap-2 text-[11px] md:text-xs text-slate-300"
												>
													<ChevronRight className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />{" "}
													{h}
												</li>
											))}
									</ul>
								</div>
								<div className="px-6 md:px-8 py-4 md:py-6 border-t border-slate-700 bg-slate-800/50">
									<button
										onClick={() => setSelectedProject(proj)}
										className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-emerald-600 rounded-xl text-sm font-bold transition-all group/btn cursor-pointer"
									>
										<Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
										{lang === "pt"
											? "Ver Detalhes"
											: "View Details"}
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="experiencia" className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
					<div>
						<h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4">
							<Briefcase className="text-emerald-400 shrink-0" />{" "}
							{t.sections.experience}
						</h2>
						<div className="space-y-12">
							{t.experienceList.map((exp, i) => (
								<div
									key={i}
									className="relative pl-8 border-l-2 border-slate-800 group"
								>
									<div className="absolute w-4 h-4 bg-slate-900 border-2 border-emerald-500 rounded-full -left-[9px] top-1 group-hover:bg-emerald-500 transition-colors"></div>
									<div className="text-xs font-bold text-emerald-400 mb-1">
										{exp.period}
									</div>
									<h3 className="text-lg md:text-xl font-bold">
										{exp.role}
									</h3>
									<div className="text-slate-400 font-medium mb-3">
										{exp.company}
									</div>
									<p className="text-slate-500 text-sm leading-relaxed">
										{exp.desc}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-16">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4">
								<GraduationCap className="text-cyan-400 shrink-0" />{" "}
								{t.sections.education}
							</h2>
							<div className="space-y-4">
								{t.educationList.map((ed, i) => (
									<div
										key={i}
										className="p-5 md:p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors"
									>
										<h3 className="font-bold text-base md:text-lg mb-1">
											{ed.title}
										</h3>
										<div className="text-cyan-400 text-sm mb-2">
											{ed.institution}
										</div>
										<div className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
											{ed.period}
										</div>
									</div>
								))}
							</div>
						</div>

						<div>
							<h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4">
								<Award className="text-purple-400 shrink-0" />{" "}
								{t.sections.highlights}
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{t.certifications.map((cert, i) => (
									<div
										key={i}
										className="flex flex-col p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all hover:translate-x-1 group"
									>
										<div className="flex items-start gap-3">
											<div className="mt-1 p-1 bg-slate-700/50 rounded-md text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
												<BookOpen className="w-3 h-3" />
											</div>
											<div>
												<div className="text-xs md:text-sm font-bold text-slate-200">
													{cert.name}
												</div>
												<div className="text-[10px] md:text-xs text-slate-500 font-medium mt-0.5 uppercase tracking-wide">
													{cert.school}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="py-16 md:py-24 border-t border-slate-900 text-center bg-slate-950">
				<div className="max-w-4xl mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">
						{t.sections.footer}
					</h2>
					<div className="flex flex-col items-center gap-6 mb-12">
						<p className="text-slate-500 text-sm md:text-lg leading-relaxed">
							{t.footerDesc}
						</p>
						<div className="flex gap-4 md:gap-6 mt-4">
							<a
								href={personalData.github}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-slate-900 rounded-full hover:bg-emerald-500 hover:text-white transition-all text-slate-400"
								aria-label="GitHub"
							>
								<FiGithub className="w-6 h-6" />
							</a>
							<a
								href={personalData.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all text-slate-400"
								aria-label="LinkedIn"
							>
								<FiLinkedin className="w-6 h-6" />
							</a>
							<a
								href={`mailto:${personalData.email}`}
								className="p-3 bg-slate-900 rounded-full hover:bg-emerald-500 hover:text-white transition-all text-slate-400"
								aria-label="Email"
							>
								<Mail />
							</a>
						</div>
					</div>
					<div className="text-slate-600 text-[10px] md:text-xs font-mono tracking-widest uppercase">
						&copy; {new Date().getFullYear()}&nbsp;- RAQUEL
						RODRIGUES &bull; BRAZIL &bull; BUILT WITH NEXT.JS
					</div>
				</div>
			</footer>
		</div>
	);
}
