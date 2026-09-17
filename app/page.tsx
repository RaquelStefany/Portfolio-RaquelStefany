"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
	Terminal,
	Code2,
	Database,
	Layers,
	BarChart3,
	GitBranch,
	Truck,
	MapPin,
	GraduationCap,
	Briefcase,
	Award,
	X,
	Menu,
	Eye,
	Info,
	CheckCircle2,
	Send,
	Copy,
	Check,
	Sparkles,
	Zap,
	Wrench,
	ExternalLink,
	Globe,
	ArrowUpRight,
	Rocket,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

type Locale = "pt" | "en";

type Project = {
	id: number;
	title: string;
	tag: string;
	badgeLabel: string;
	badgeColor: "primary" | "secondary" | "tertiary";
	description: string;
	fullDescription: string;
	highlights: string[];
	technologies: string[];
	bannerImage: string;
	images: { src: string; alt: string }[];
};

export default function Home() {
	const [lang, setLang] = useState<Locale>("pt");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [copied, setCopied] = useState(false);

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

	const handleCopyEmail = () => {
		const email = "raquelstefany.work@gmail.com";
		if (navigator.clipboard) {
			navigator.clipboard.writeText(email).then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2500);
			});
		} else {
			window.location.href = `mailto:${email}`;
		}
	};

	const startYear = 2023;
	const currentYear = new Date().getFullYear();
	const yearsOfExp = Math.max(1, currentYear - startYear);
	const yearsText = `${yearsOfExp}+`;

	const content = {
		pt: {
			availableBadge: "Disponível para novos projetos & contratações",
			role: "Analista de Sistemas | Inteligência Artificial & Prompt Engineering | Gestora de Tráfego",
			nav: [
				{ label: "Sobre", href: "#sobre" },
				{ label: "Habilidades", href: "#habilidades" },
				{ label: "Projetos", href: "#projetos" },
				{ label: "Experiência", href: "#experiencia" },
				{ label: "Formação", href: "#formacao" },
				{ label: "Contato", href: "#contato" },
			],
			bento: {
				profileTitle: "Perfil Profissional",
				profileBadge: "SYS.ANALYSIS // AI // GROWTH",
				summary:
					"Apaixonada por tecnologia, dados, inteligência artificial e marketing digital. Atuo como Analista de Sistemas e Gestora de Tráfego, conectando sistemas, dados, IA e mídia paga para transformar conhecimento em soluções de alto impacto.",
				locationLabel: "Localização",
				locationValue: "São Vicente - SP, Brazil",
				specialtyLabel: "Especialidade",
				specialtyValue: "Sistemas, IA & Tráfego Pago",
				stat1Num: yearsText,
				stat1Title: "Anos de Experiência",
				stat1Desc: `${yearsOfExp} anos de atuação contínua em sistemas, modelagem SQL e IA.`,
				stat1Badge: `2023 — ${currentYear}`,
				stat2Num: "10+",
				stat2Title: "Entregas & Projetos",
				stat2Desc: "Soluções corporativas em produção, rotinas automatizadas e relatórios estratégicos.",
				stat2Badge: "Soluções em Produção",
				kliqoTitle: "Empreendedorismo & Softhouse",
				kliqoRole: "Fundadora",
				kliqoDesc: "Ecossistema tech com foco em desenvolvimento web, landing pages de alta conversão e inteligência de dados com o Kliqo Insights.",
				kliqoBadge: "Futura Softhouse",
				pillarsTitle: "Pilares Estratégicos",
				pillar1Title: "Sistemas & Back-end",
				pillar1Desc: "Python • PHP • SQL Server",
				pillar2Title: "IA & Prompt Engineering",
				pillar2Desc: "Automação & Produtividade",
				pillar3Title: "Gestão de Tráfego",
				pillar3Desc: "Mídia Paga & Métricas",
			},
			skillsSection: {
				tag: "// STACK & CAPABILITIES",
				title: "Competências Técnicas",
				description:
					"Arquitetura robusta orientada a bancos relacionais, manipulação massiva de dados e ecossistemas web seguros.",
				categories: {
					languages: {
						title: "Linguagens de Programação",
						badge: "CORE LANGUAGES",
						desc: "Desenvolvimento focado em regras de negócio críticas e manipulação assíncrona.",
					},
					frameworks: {
						title: "Frameworks & Web Stack",
						badge: "FRAMEWORKS",
						desc: "Desenvolvimento MVC escalável, APIs RESTful e micro-serviços integrados.",
					},
					databases: {
						title: "Banco de Dados",
						badge: "RELATIONAL",
						desc: "Consultas complexas, procedures, triggers e modelagem de alto volume.",
					},
					libraries: {
						title: "Bibliotecas & Dados",
						badge: "DATA & UI",
						desc: "Gráficos interativos, tabelas dinâmicas corporativas e análise vetorial.",
					},
					tools: {
						title: "Ferramentas & BI",
						badge: "REPORTING",
						desc: "Relatórios gerenciais precisos e pipelines de automação empresarial.",
					},
					versioning: {
						title: "Versionamento & DevOps",
						badge: "DEVOPS",
						desc: "Fluxo GitFlow, revisão de código e esteiras de integração contínua.",
					},
				},
				systemsBar: {
					title: "Sistemas Corporativos & ERPs Integrados",
					desc: "Vivência real no ecossistema operacional de ponta da logística portuária e rodoviária.",
				},
			},
			projectsSection: {
				tag: "// PORTFOLIO & ARCHITECTURE",
				title: "Projetos em Destaque",
				description:
					"Sistemas em larga escala com impacto direto em faturamento, SLA logístico e integridade de dados operacionais.",
				viewBtn: "Ver Detalhes do Projeto",
			},
			kliqoSection: {
				tag: "// VENTURE & FUTURE SOFTHOUSE",
				title: "Kliqo.Tech — Softhouse & Ecossistema de Projetos",
				subtitle:
					"Fundadora do projeto e futura softhouse Kliqo.Tech, com atuação focada em desenvolvimento web, landing pages de alta conversão e na plataforma proprietária Kliqo Insights.",
				websiteBtn: "Acessar kliqo.tech",
				proprietaryTag: "Plataforma Proprietária",
				liveTag: "Online",
				accessProject: "Acessar Projeto",
			},
			experienceSection: {
				tag: "// TRAJETÓRIA PROFISSIONAL",
				title: "Experiência",
			},
			educationSection: {
				tag: "// EDUCAÇÃO & SKILLS",
				title: "Formação Acadêmica",
				certsTitle: "Cursos & Certificações",
			},
			contactSection: {
				tag: "GET IN TOUCH",
				title: "Vamos construir algo incrível?",
				description:
					"Estou sempre aberta a novos desafios em desenvolvimento web Full Stack, análise de dados e integrações corporativas de alto impacto.",
				emailBtn: "Enviar E-mail",
				linkedinBtn: "LinkedIn Message",
				copyBtn: "Copiar Contato",
				copiedBtn: "E-mail Copiado!",
			},
			modal: {
				close: "Fechar",
				aboutTitle: "Sobre o Projeto",
				techTitle: "Tecnologias Utilizadas",
				deliverablesTitle: "Principais Entregas",
				internalNote:
					"Sistema Interno: Telas ilustrativas baseadas nos módulos em produção com dados confidenciais omitidos.",
			},
			footer: {
				role: "Analista de Sistemas | Inteligência Artificial & Prompt Engineering | Gestora de Tráfego",
				location: "São Vicente - SP, Brazil",
				techBadge: "Desenvolvido com Next.js & Tailwind CSS",
				status: "Online",
				copyright: "© 2025 Raquel Rodrigues. Todos os direitos reservados.",
			},
		},
		en: {
			availableBadge: "Available for new projects & full-time roles",
			role: "Systems Analyst | Artificial Intelligence & Prompt Engineering | Traffic Manager",
			nav: [
				{ label: "About", href: "#sobre" },
				{ label: "Skills", href: "#habilidades" },
				{ label: "Projects", href: "#projetos" },
				{ label: "Experience", href: "#experiencia" },
				{ label: "Education", href: "#formacao" },
				{ label: "Contact", href: "#contato" },
			],
			bento: {
				profileTitle: "Professional Profile",
				profileBadge: "SYS.ANALYSIS // AI // GROWTH",
				summary:
					"Passionate about technology, data, artificial intelligence, and digital marketing. I work as a Systems Analyst and Traffic Manager, connecting systems, data, AI, and paid media to transform knowledge into high-impact solutions.",
				locationLabel: "Location",
				locationValue: "São Vicente - SP, Brazil",
				specialtyLabel: "Specialty",
				specialtyValue: "Systems, AI & Paid Traffic",
				stat1Num: yearsText,
				stat1Title: "Years of Experience",
				stat1Desc: `${yearsOfExp} years of hands-on experience in tech and systems.`,
				stat1Badge: `2023 — ${currentYear}`,
				stat2Num: "10+",
				stat2Title: "Delivered Projects",
				stat2Desc: "Production systems, automated pipelines and strategic enterprise reporting.",
				stat2Badge: "Solutions in Production",
				kliqoTitle: "Venture & Software House",
				kliqoRole: "Founder",
				kliqoDesc: "Tech ecosystem focused on web development, high-converting landing pages, and analytics intelligence with Kliqo Insights.",
				kliqoBadge: "Upcoming Software House",
				pillarsTitle: "Strategic Pillars",
				pillar1Title: "Systems & Back-end",
				pillar1Desc: "Python • PHP • SQL Server",
				pillar2Title: "AI & Prompt Engineering",
				pillar2Desc: "Automation & Productivity",
				pillar3Title: "Traffic Management",
				pillar3Desc: "Paid Media & Metrics",
			},
			skillsSection: {
				tag: "// STACK & CAPABILITIES",
				title: "Technical Skills",
				description:
					"Robust architectures oriented around relational databases, high-throughput data pipelines and secure web ecosystems.",
				categories: {
					languages: {
						title: "Programming Languages",
						badge: "CORE LANGUAGES",
						desc: "Engineered around critical business rules, performance, and asynchronous data manipulation.",
					},
					frameworks: {
						title: "Frameworks & Web Stack",
						badge: "FRAMEWORKS",
						desc: "Scalable MVC structures, RESTful APIs, and integrated micro-services.",
					},
					databases: {
						title: "Databases",
						badge: "RELATIONAL",
						desc: "Complex querying, stored procedures, triggers and high-volume indexing.",
					},
					libraries: {
						title: "Libraries & Data",
						badge: "DATA & UI",
						desc: "Interactive data visualization, enterprise grid tables and vectorized processing.",
					},
					tools: {
						title: "Tools & BI",
						badge: "REPORTING",
						desc: "Pixel-perfect management reports and business automated workflows.",
					},
					versioning: {
						title: "Versioning & DevOps",
						badge: "DEVOPS",
						desc: "GitFlow practices, code reviews, and continuous delivery pipelines.",
					},
				},
				systemsBar: {
					title: "Enterprise ERP & Integrated Systems",
					desc: "Direct field experience with prominent Brazilian port and road transport operational suites.",
				},
			},
			projectsSection: {
				tag: "// PORTFOLIO & ARCHITECTURE",
				title: "Featured Projects",
				description:
					"Large-scale systems with direct impact on revenue, logistics SLAs, and operational data integrity.",
				viewBtn: "View Project Details",
			},
			kliqoSection: {
				tag: "// VENTURE & FUTURE SOFTHOUSE",
				title: "Kliqo.Tech — Software House & Ecosystem",
				subtitle:
					"Founder of the Kliqo.Tech venture and upcoming software house, focusing on web development, high-converting landing pages, and the proprietary Kliqo Insights platform.",
				websiteBtn: "Visit kliqo.tech",
				proprietaryTag: "Proprietary Platform",
				liveTag: "Live",
				accessProject: "Visit Project",
			},
			experienceSection: {
				tag: "// CAREER TRAJECTORY",
				title: "Experience",
			},
			educationSection: {
				tag: "// EDUCATION & SKILLS",
				title: "Academic Background",
				certsTitle: "Courses & Certifications",
			},
			contactSection: {
				tag: "GET IN TOUCH",
				title: "Let's build something amazing?",
				description:
					"Always open to discussing new engineering opportunities, Full Stack web development, data analysis, and high-impact enterprise integrations.",
				emailBtn: "Send Email",
				linkedinBtn: "LinkedIn Message",
				copyBtn: "Copy Contact",
				copiedBtn: "Email Copied!",
			},
			modal: {
				close: "Close",
				aboutTitle: "About the Project",
				techTitle: "Technologies Used",
				deliverablesTitle: "Key Deliverables",
				internalNote:
					"Internal System: Preview screens based on production modules with sensitive enterprise data redacted.",
			},
			footer: {
				role: "Systems Analyst | Artificial Intelligence & Prompt Engineering | Traffic Manager",
				location: "São Vicente - SP, Brazil",
				techBadge: "Built with Next.js & Tailwind CSS",
				status: "Online",
				copyright: "© 2025 Raquel Rodrigues. All rights reserved.",
			},
		},
	};

	const t = content[lang];

	const projectsData: Project[] = [
		{
			id: 1,
			title: "GelogSystem",
			tag: lang === "pt" ? "Logística & Otimização" : "Logistics & Optimization",
			badgeLabel: "LOGISTICS & OPTIMIZATION",
			badgeColor: "primary",
			description:
				lang === "pt"
					? "Sistema logístico focado na otimização de processos operacionais e integração contínua de dados em tempo real."
					: "Logistics system designed for Grupo Gelog focused on streamlining operational workflows and real-time database synchronization.",
			fullDescription:
				lang === "pt"
					? "Desenvolvi este sistema para centralizar a operação do Grupo Gelog. O foco principal foi a automação de rotinas críticas que antes eram manuais, garantindo que o banco de dados SQL Server estivesse sempre sincronizado com o ERP principal e operadores portuários."
					: "Developed to centralize Grupo Gelog's operational center. The primary goal was automating high-stakes dispatch routines, ensuring the SQL Server database stayed synchronized with the main ERP.",
			highlights:
				lang === "pt"
					? [
							"Integração de alta performance entre sistemas internos",
							"Automação de rotinas críticas de expedição portuária",
							"Sincronização bidirecional de dados com SQL Server",
						]
					: [
							"High-performance integration between internal systems",
							"Critical dispatch routine automation for port operations",
							"Bidirectional data synchronization with SQL Server",
						],
			technologies: [
				"PHP",
				"CodeIgniter",
				"SQL Server",
				"Python",
				"JavaScript",
				"APIs REST",
				"HTML5/CSS3",
			],
			bannerImage: "/projects/gelogsystem/dashboard.png",
			images: [
				{ src: "/projects/gelogsystem/login.png", alt: "Login Screen" },
				{ src: "/projects/gelogsystem/dashboard.png", alt: "Operational Dashboard" },
				{ src: "/projects/gelogsystem/processos.png", alt: "Process Management" },
			],
		},
		{
			id: 2,
			title: "EltexsSystem",
			tag: lang === "pt" ? "ERP & Financeiro" : "ERP & Financials",
			badgeLabel: "ERP & FINANCIALS",
			badgeColor: "secondary",
			description:
				lang === "pt"
					? "Sistema corporativo voltado ao gerenciamento completo de operações de transporte, faturamento e conciliação bancária."
					: "Comprehensive enterprise system managing commercial transport proposals, billing pipelines, and financial reconciliations.",
			fullDescription:
				lang === "pt"
					? "Um ERP completo que cuida desde a elaboração da proposta comercial até a conciliação bancária final. Implementei módulos de análise de fluxo de caixa, relatórios analíticos e custos operacionais reais, viabilizando tomada de decisão rápida pela diretoria."
					: "An end-to-end ERP orchestrating everything from commercial quotes to final cash flow reconciliation. Built analytical modules tracking real-time operational costs to empower executive decisions.",
			highlights:
				lang === "pt"
					? [
							"Controle rigoroso de propostas comerciais e contratos",
							"Gestão financeira com projeção de fluxo de caixa",
							"Relatórios gerenciais analíticos e conciliação",
						]
					: [
							"Commercial proposal and contract lifecycle tracking",
							"Financial management with cash flow forecasting",
							"Automated billing reports and banking reconciliation",
						],
			technologies: [
				"PHP",
				"Laravel",
				"SQL Server",
				"JavaScript",
				"AgGrid",
				"Bootstrap",
			],
			bannerImage: "/projects/eltexssystem/dashboard.png",
			images: [
				{ src: "/projects/eltexssystem/login.png", alt: "Authentication" },
				{ src: "/projects/eltexssystem/dashboard.png", alt: "Financial Dashboard" },
				{ src: "/projects/eltexssystem/processos.png", alt: "Process & Billing Flow" },
			],
		},
		{
			id: 3,
			title: "Mercedes x Gelog",
			tag: lang === "pt" ? "Follow-up & SLA" : "Follow-up & SLA",
			badgeLabel: "FOLLOW-UP & SLA",
			badgeColor: "tertiary",
			description:
				lang === "pt"
					? "Plataforma de follow-up operacional para monitoramento em tempo real de todas as etapas logísticas dedicadas para a Mercedes-Benz."
					: "Dedicated real-time operational follow-up platform tracking transport milestones and strict SLA metrics for Mercedes-Benz.",
			fullDescription:
				lang === "pt"
					? "Plataforma exclusiva construída para a equipe da Mercedes-Benz acompanhar suas cargas ponto a ponto. Inclui registro imediato de ocorrências, alertas preventivos de atraso, KPIs de atendimento e geração automatizada de relatórios de desempenho."
					: "Exclusive customer portal enabling Mercedes-Benz teams to monitor deliveries in real time. Features incident logging, SLA warning timers, and automated performance KPI summaries.",
			highlights:
				lang === "pt"
					? [
							"Tracking minuto-a-minuto com alertas preventivos",
							"Controle de incidentes e metas rigorosas de SLA",
							"Transparência total e dashboards de KPIs dedicados",
						]
					: [
							"Minute-by-minute tracking with proactive delay alerts",
							"Incident lifecycle logging and tight SLA governance",
							"Operational transparency with dedicated KPI charts",
						],
			technologies: [
				"JavaScript",
				"AgCharts",
				"SQL Server",
				"Python",
				"CodeIgniter",
				"PHP",
			],
			bannerImage: "/projects/mercedesgelog/dashboard.png",
			images: [
				{ src: "/projects/mercedesgelog/login.png", alt: "Portal Login" },
				{ src: "/projects/mercedesgelog/dashboard.png", alt: "Telemetry Dashboard" },
				{ src: "/projects/mercedesgelog/processos.png", alt: "SLA Tracking Workflow" },
			],
		},
	];

	const kliqoVentures = [
		{
			id: "insights",
			title: "Kliqo Insights",
			tag: lang === "pt" ? "Relatórios & Mídia Paga" : "Analytics & Paid Media",
			badgeLabel: lang === "pt" ? "PLATAFORMA PROPRIETÁRIA" : "PROPRIETARY PLATFORM",
			badgeColor: "text-[#4edea3] border-[#4edea3]/30",
			cardBorder: "border-[#4edea3]/30 hover:border-[#4edea3]/60",
			description:
				lang === "pt"
					? "Plataforma avançada focada em relatórios gerenciais e dashboards interativos com métricas consolidadas de plataformas de tráfego pago e anúncios (Meta Ads, Google Ads, ROI/ROAS e conversões)."
					: "Analytical platform delivering automated reports and real-time dashboards consolidating key metrics from paid traffic platforms and ads (Meta Ads, Google Ads, ROI/ROAS).",
			highlights:
				lang === "pt"
					? [
							"Consolidação de métricas de anúncios e mídia paga",
							"Dashboards interativos de ROI, ROAS e conversão",
							"Automação e geração de relatórios estratégicos",
						]
					: [
							"Consolidation of ad metrics and paid media channels",
							"Interactive dashboards for ROI, ROAS, and conversion",
							"Automated generation of executive reports",
						],
			technologies: ["Next.js", "TypeScript", "Meta Ads", "Google Ads", "Analytics"],
			link: "https://kliqo.tech/",
			linkLabel: "kliqo.tech",
			isProprietary: true,
			icon: BarChart3,
			accentColor: "text-[#4edea3]",
		},
		{
			id: "seatracking",
			title: "SeaTracking",
			tag: lang === "pt" ? "Logística Marítima & Telemetria" : "Maritime Logistics & Telemetry",
			badgeLabel: "MARITIME TELEMETRY",
			badgeColor: "text-[#4cd7f6] border-[#4cd7f6]/30",
			cardBorder: "border-[#4cd7f6]/30 hover:border-[#4cd7f6]/60",
			description:
				lang === "pt"
					? "Plataforma moderna de rastreamento marítimo e telemetria logística, desenvolvida para acompanhamento contínuo de cargas, rotas de embarcações e marcos operacionais."
					: "Modern maritime tracking and logistical telemetry platform engineered for continuous cargo monitoring, vessel routes, and operational milestones.",
			highlights:
				lang === "pt"
					? [
							"Rastreamento de embarcações e cargas em tempo real",
							"Acompanhamento de rotas e telemetria operacional",
							"Interface intuitiva com design responsivo",
						]
					: [
							"Real-time vessel and container telemetry",
							"Route progress and milestone monitoring",
							"Intuitive interface with responsive design",
						],
			technologies: ["React", "TypeScript", "TailwindCSS", "Map Telemetry", "REST"],
			link: "https://seatracking.kliqo.tech/",
			linkLabel: "seatracking.kliqo.tech",
			isProprietary: false,
			icon: Truck,
			accentColor: "text-[#4cd7f6]",
		},
		{
			id: "rebeca",
			title: "Clínica Rebeca Duarte",
			tag: lang === "pt" ? "Landing Page • Alta Conversão" : "Landing Page • High Conversion",
			badgeLabel: "LANDING PAGE",
			badgeColor: "text-[#adc6ff] border-[#adc6ff]/30",
			cardBorder: "border-[#adc6ff]/30 hover:border-[#adc6ff]/60",
			description:
				lang === "pt"
					? "Landing page institucional de alta performance para clínica de saúde e estética, projetada com foco em conversão, autoridade médica, apresentação clara de tratamentos e captação de pacientes."
					: "High-performance institutional landing page for a health and aesthetics clinic, engineered for conversion, clinical positioning, and streamlined patient inquiries.",
			highlights:
				lang === "pt"
					? [
							"Landing page com arquitetura orientada à conversão",
							"Apresentação visual elegante e layout moderno",
							"Agendamento direto e canal ágil de contato",
						]
					: [
							"Landing page with conversion-driven architecture",
							"Modern and polished aesthetic design",
							"Direct scheduling and fast acquisition channels",
						],
			technologies: ["Next.js", "React", "TailwindCSS", "TypeScript", "UI/UX"],
			link: "https://clinica-rebeca-duarte.kliqo.tech/",
			linkLabel: "clinica-rebeca-duarte.kliqo.tech",
			isProprietary: false,
			icon: Sparkles,
			accentColor: "text-[#adc6ff]",
		},
		{
			id: "cesar",
			title: "Dentista Dr. César Vinícius",
			tag: lang === "pt" ? "Landing Page • Odontologia" : "Landing Page • Dentistry",
			badgeLabel: "LANDING PAGE",
			badgeColor: "text-[#4edea3] border-[#4edea3]/30",
			cardBorder: "border-[#4edea3]/30 hover:border-[#4edea3]/60",
			description:
				lang === "pt"
					? "Landing page estratégica desenvolvida para consultório odontológico, com estrutura orientada à captação de pacientes, destaque de especialidades clínicas e facilidade de agendamento."
					: "Strategic landing page engineered for a dental clinic, focusing on patient acquisition, clinical specialties showcase, and rapid booking.",
			highlights:
				lang === "pt"
					? [
							"Landing page otimizada para captação de pacientes",
							"Apresentação clara de procedimentos e autoridade",
							"Otimização completa para navegação mobile",
						]
					: [
							"Landing page optimized for new patient conversion",
							"Clear presentation of clinical procedures",
							"Full mobile-first optimization",
						],
			technologies: ["React", "TypeScript", "TailwindCSS", "Responsive UI"],
			link: "https://dentista-dr-cesar-vinicius.kliqo.tech/",
			linkLabel: "dentista-dr-cesar-vinicius.kliqo.tech",
			isProprietary: false,
			icon: Code2,
			accentColor: "text-[#4edea3]",
		},
	];

	const experiences = [
		{
			role: lang === "pt" ? "Fundadora & Desenvolvedora Líder" : "Founder & Lead Developer",
			company: "Kliqo.Tech",
			link: "https://kliqo.tech/",
			period: lang === "pt" ? "2024 - Atualmente" : "2024 - Present",
			current: true,
			dotColor: "bg-[#4edea3]",
			tagColor: "text-[#4edea3] bg-[#262a35] border border-[#4edea3]/30",
			desc:
				lang === "pt"
					? "Fundadora do projeto e futura softhouse Kliqo.Tech (kliqo.tech). Liderança técnica com foco em desenvolvimento web (SeaTracking), landing pages de alta conversão (Clínica Rebeca Duarte e Dr. César Vinícius) e criação da plataforma proprietária Kliqo Insights para dashboards e métricas consolidadas de tráfego pago e anúncios."
					: "Founder of the Kliqo.Tech venture and upcoming software house (kliqo.tech). Leading software architecture focusing on web development (SeaTracking), high-converting landing pages (Clínica Rebeca Duarte, Dr. César Vinícius), and the proprietary Kliqo Insights platform for paid traffic analytics and ad metrics.",
		},
		{
			role: lang === "pt" ? "Analista de Sistemas Jr" : "Junior Systems Analyst",
			company: "Grupo Gelog",
			period: lang === "pt" ? "Julho 2023 - Atualmente" : "July 2023 - Present",
			current: true,
			dotColor: "bg-[#4edea3]",
			tagColor: "text-[#4edea3] bg-[#262a35] border border-[#4edea3]/30",
			desc:
				lang === "pt"
					? "Análise minuciosa de requisitos de negócio, execução de consultas avançadas em SQL Server, desenvolvimento e sustentação de relatórios estratégicos com Crystal Reports e contínua otimização de fluxos operacionais logísticos de alta criticidade."
					: "Detailed business requirements analysis, advanced SQL Server querying and stored procedure engineering, management reporting development using Crystal Reports, and relentless optimization of critical logistics workflows.",
		},
		{
			role: lang === "pt" ? "Web Developer - Freelancer" : "Web Developer - Freelancer",
			company: "FenTI Services & Consulting",
			period: lang === "pt" ? "Março 2024 - Atualmente" : "March 2024 - Present",
			current: false,
			dotColor: "bg-[#4cd7f6]",
			tagColor: "text-[#4cd7f6] bg-[#262a35] border border-[#4cd7f6]/30",
			desc:
				lang === "pt"
					? "Desenvolvimento e sustentação de sistemas web corporativos, implementação ágil de novas funcionalidades sob demanda e integração fluida entre back-end e bancos de dados via APIs REST."
					: "Architecture and support for enterprise web applications, rapid feature delivery, and seamless back-end integration with databases via RESTful endpoints.",
		},
		{
			role: lang === "pt" ? "Desenvolvedora Full Stack" : "Full Stack Developer",
			company: "Fatec Baixada Santista Rubens Lara",
			period: lang === "pt" ? "Abril 2023 - Dezembro 2025" : "April 2023 - December 2025",
			current: false,
			dotColor: "bg-[#adc6ff]",
			tagColor: "text-[#adc6ff] bg-[#262a35] border border-[#adc6ff]/30",
			desc:
				lang === "pt"
					? "Engenharia de aplicações web ponta a ponta (front-end e back-end), estruturação e normalização de esquemas de banco de dados e controle de versão rigoroso baseado em Git."
					: "End-to-end full stack web development, relational database normalization, and collaborative Git workflow governance.",
		},
	];

	const educations = [
		{
			title:
				lang === "pt"
					? "Análise e Desenvolvimento de Sistemas"
					: "Systems Analysis and Development",
			institution: "Universidade Católica de Santos",
			period: "2024 - 2026",
			tagColor: "text-[#4edea3] bg-[#262a35]",
			status: lang === "pt" ? "Em andamento" : "In Progress",
		},
		{
			title: lang === "pt" ? "Sistemas para Internet" : "Internet Systems",
			institution: "Fatec Baixada Santista Rubens Lara",
			period: "2023",
			tagColor: "text-[#86948a] bg-[#262a35]",
			status:
				lang === "pt"
					? "Interrompido para foco no mercado corporativo"
					: "Paused for full market immersion",
		},
		{
			title:
				lang === "pt"
					? "Técnico em Desenvolvimento de Sistemas"
					: "Systems Development Technician",
			institution: "Etec Dra. Ruth Cardoso",
			period: "2021 - 2022",
			tagColor: "text-[#4cd7f6] bg-[#262a35]",
			status: lang === "pt" ? "Concluído" : "Completed",
		},
	];

	const certifications = [
		{ name: "Engenharia de Software", school: "Alura", color: "text-[#4edea3]" },
		{ name: "Especialização Front-End", school: "Alura", color: "text-[#4cd7f6]" },
		{ name: "SQL Avançado", school: "HackerRank", color: "text-[#4edea3]" },
		{ name: "SQL Database Specialist", school: "DIO", color: "text-[#adc6ff]" },
		{ name: "Versionamento Git & GitHub", school: "DIO", color: "text-[#bbcabf]" },
		{ name: "CC50 – Ciência da Computação", school: "Harvard CS50", color: "text-[#4edea3]" },
		{ name: "Crystal Reports", school: "Datapar", color: "text-[#4cd7f6]" },
		{ name: "Sistemas Operacionais", school: "Fundação Bradesco", color: "text-[#86948a]" },
		{ name: "Excel Básico & Planilhas", school: "São Judas Tadeu", color: "text-[#bbcabf]" },
	];

	return (
		<div className="min-h-screen bg-[#0f131d] text-[#dfe2f1] font-sans antialiased selection:bg-[#10b981] selection:text-[#00422b]">
			{/* FIXED HEADER */}
			<header className="fixed top-0 left-0 right-0 z-50 bg-[#0f131d]/85 backdrop-blur-xl border-b border-[#262a35]/70 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
				<div className="max-w-[1180px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
					{/* Brand Logo */}
					<a
						href="#"
						className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]"
					>
						<div className="w-9 h-9 rounded-lg bg-[#1c1f2a] border border-[#262a35] flex items-center justify-center text-[#4edea3] group-hover:bg-[#4edea3] group-hover:text-[#003824] transition-colors shadow-sm">
							<Terminal className="w-5 h-5" />
						</div>
						<div className="flex items-baseline">
							<span className="text-[17px] font-bold tracking-tight text-[#dfe2f1]">
								RaquelRodrigues
							</span>
							<span className="font-mono text-[14px] text-[#4edea3] font-bold">
								.dev
							</span>
						</div>
					</a>

					{/* Desktop Nav Links */}
					<nav className="hidden lg:flex items-center gap-1">
						{t.nav.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="px-3.5 py-1.5 rounded-lg text-[14px] font-medium text-[#bbcabf] hover:text-[#dfe2f1] hover:bg-[#1c1f2a] transition-all"
							>
								{item.label}
							</a>
						))}
					</nav>

					{/* Right Utilities (Language, Socials, Mobile Menu) */}
					<div className="flex items-center gap-3">
						{/* Language Switcher Pill */}
						<div className="flex items-center bg-[#1c1f2a] p-1 rounded-full border border-[#262a35]">
							<button
								onClick={() => setLang("pt")}
								className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold transition-all cursor-pointer ${
									lang === "pt"
										? "bg-[#4edea3] text-[#003824] shadow-sm"
										: "text-[#bbcabf] hover:text-[#dfe2f1]"
								}`}
								type="button"
							>
								PT
							</button>
							<button
								onClick={() => setLang("en")}
								className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold transition-all cursor-pointer ${
									lang === "en"
										? "bg-[#4edea3] text-[#003824] shadow-sm"
										: "text-[#bbcabf] hover:text-[#dfe2f1]"
								}`}
								type="button"
							>
								EN
							</button>
						</div>

						{/* GitHub & LinkedIn Quick Icons */}
						<div className="hidden sm:flex items-center gap-1.5">
							<a
								href="https://www.github.com/RaquelStefany"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub Profile"
								className="w-9 h-9 rounded-lg bg-[#171b26] border border-[#262a35] flex items-center justify-center text-[#bbcabf] hover:text-[#4edea3] hover:bg-[#1c1f2a] transition-colors"
							>
								<FiGithub className="w-[18px] h-[18px]" />
							</a>
							<a
								href="https://www.linkedin.com/in/raquelstefany"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn Profile"
								className="w-9 h-9 rounded-lg bg-[#171b26] border border-[#262a35] flex items-center justify-center text-[#bbcabf] hover:text-[#4cd7f6] hover:bg-[#1c1f2a] transition-colors"
							>
								<FiLinkedin className="w-[18px] h-[18px]" />
							</a>
						</div>

						{/* Mobile Menu Hamburger */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden p-2 rounded-lg bg-[#1c1f2a] border border-[#262a35] text-[#bbcabf] hover:text-[#4edea3]"
							aria-label="Toggle Navigation"
						>
							{isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
						</button>
					</div>
				</div>

				{/* Mobile Dropdown Menu */}
				{isMenuOpen && (
					<div className="lg:hidden bg-[#171b26] border-b border-[#262a35] px-6 py-4 space-y-3">
						<div className="flex flex-col space-y-2">
							{t.nav.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={() => setIsMenuOpen(false)}
									className="px-3 py-2 rounded-lg text-base font-medium text-[#bbcabf] hover:text-[#4edea3] hover:bg-[#1c1f2a] transition-colors"
								>
									{item.label}
								</a>
							))}
						</div>
						<div className="pt-3 border-t border-[#262a35] flex items-center justify-between">
							<div className="flex items-center gap-3">
								<a
									href="https://www.github.com/RaquelStefany"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm text-[#bbcabf] hover:text-[#4edea3]"
								>
									<FiGithub className="w-4 h-4" /> GitHub
								</a>
								<a
									href="https://www.linkedin.com/in/raquelstefany"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-sm text-[#bbcabf] hover:text-[#4cd7f6]"
								>
									<FiLinkedin className="w-4 h-4" /> LinkedIn
								</a>
							</div>
						</div>
					</div>
				)}
			</header>

			{/* MAIN WRAPPER */}
			<main className="w-full pt-20 bg-[#0f131d] min-h-screen">
				{/* AMBIENT RADIAL TOP GLOW */}
				<div className="relative w-full overflow-hidden">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[840px] h-[360px] bg-gradient-to-b from-[#4edea3]/10 via-[#4cd7f6]/5 to-transparent blur-[130px] pointer-events-none -z-10" />

					<div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 py-8 md:py-14">
						{/* ============================================================ */}
						{/* 1. HERO & ANALYTICAL PROFILE (BENTO HEADER)                 */}
						{/* ============================================================ */}
						<section id="sobre" className="flex flex-col gap-6">
							{/* Status Badge & Identity Center */}
							<div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3 pt-4">
								{/* Availability Beacon */}
								<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262a35] border border-[#4edea3]/20 shadow-sm">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
									</span>
									<span className="font-mono text-[11px] sm:text-[12px] text-[#4edea3] uppercase tracking-wider font-bold">
										{t.availableBadge}
									</span>
								</div>

								{/* Avatar with Tech Gradient Ring */}
								<div className="relative my-2">
									<div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-[#4edea3] via-[#4cd7f6] to-[#adc6ff] shadow-2xl flex items-center justify-center">
										<div className="w-full h-full rounded-full bg-[#0a0e18] overflow-hidden flex items-center justify-center relative">
											<Image
												src="/me.jpg"
												alt="Raquel Rodrigues"
												fill
												sizes="(max-width: 640px) 144px, 160px"
												priority
												className="object-cover"
											/>
										</div>
									</div>
									<div className="absolute bottom-0.5 right-0.5 bg-[#262a35] border border-[#4edea3]/40 text-[#4edea3] rounded-full p-1.5 shadow-md">
										<CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
									</div>
								</div>

								{/* Name & Core Title */}
								<div className="space-y-1.5">
									<h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#dfe2f1] tracking-tight">
										Raquel Rodrigues
									</h1>
									<p className="font-mono text-xs sm:text-sm md:text-base text-[#4edea3] flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 font-medium px-4 text-center leading-relaxed max-w-2xl mx-auto">
										<span className="text-[#4cd7f6] shrink-0">&gt;</span>
										<span>{t.role}</span>
									</p>
								</div>

								{/* Action Buttons */}
								<div className="flex flex-wrap items-center justify-center gap-3 mt-3">
									<a
										href="https://www.linkedin.com/in/raquelstefany"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] text-sm font-semibold border border-[#3c4a42]/60 transition-all duration-200 hover:shadow-lg hover:shadow-[#4cd7f6]/10"
									>
										<FiLinkedin className="w-4 h-4 text-[#4cd7f6]" />
										<span>LinkedIn</span>
									</a>
									<a
										href="https://www.github.com/RaquelStefany"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] text-sm font-semibold border border-[#3c4a42]/60 transition-all duration-200 hover:shadow-lg hover:shadow-[#4edea3]/10"
									>
										<FiGithub className="w-4 h-4 text-[#4edea3]" />
										<span>GitHub</span>
									</a>
									<a
										href="#contato"
										className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4edea3] text-[#003824] text-sm font-bold hover:bg-[#6ffbbe] shadow-lg shadow-[#10b981]/20 transition-all duration-200"
									>
										<Send className="w-4 h-4" />
										<span>{lang === "pt" ? "Contato" : "Contact"}</span>
									</a>
								</div>
							</div>

							{/* Analytical Profile Bento Box */}
							<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4 items-stretch">
								{/* Left Main Bento: Narrative and Focus */}
								<div className="lg:col-span-7 bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
									<div className="absolute -right-16 -top-16 w-52 h-52 bg-[#4edea3]/5 rounded-full blur-3xl pointer-events-none" />

									<div className="space-y-4">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2.5">
												<span className="w-3.5 h-1.5 bg-[#4edea3] rounded-full"></span>
												<span className="text-xl sm:text-2xl font-bold text-[#dfe2f1]">
													{t.bento.profileTitle}
												</span>
											</div>
											<span className="font-mono text-[11px] font-semibold text-[#bbcabf] bg-[#262a35] border border-[#3c4a42]/60 px-3 py-1 rounded-md">
												{t.bento.profileBadge}
											</span>
										</div>

										<div className="space-y-4 text-[15px] sm:text-[16px] text-[#bbcabf] leading-relaxed">
											{lang === "pt" ? (
												<>
													<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#262a35] border border-[#4edea3]/30 font-mono text-xs sm:text-sm text-[#4edea3] font-semibold">
														<span>💻</span>
														<span>Analista de Sistemas | IA & Engenharia de Prompt | Gestora de Tráfego</span>
													</div>

													<p className="text-base sm:text-lg font-medium text-[#dfe2f1]">
														Apaixonada por tecnologia, dados, inteligência artificial e marketing digital. 🚀
													</p>

													<p>
														Atuo como <strong className="text-[#dfe2f1] font-semibold">Analista de Sistemas</strong>, trabalhando com desenvolvimento e manutenção de soluções web, utilizando tecnologias como <span className="text-[#4edea3] font-semibold">Python</span>, <span className="text-[#4cd7f6] font-semibold">PHP</span> e <span className="text-[#adc6ff] font-semibold">SQL Server</span>.
													</p>

													<p>
														Tenho experiência com <span className="text-[#dfe2f1] font-medium">Power BI</span>, <span className="text-[#dfe2f1] font-medium">Crystal Reports</span>, consultas SQL, modelagem de dados, análise de logs e resolução de problemas em sistemas.
													</p>

													<p>
														Também exploro a <strong className="text-[#4edea3] font-semibold">Inteligência Artificial</strong> e <strong className="text-[#4cd7f6] font-semibold">Engenharia de Prompt</strong> como ferramentas para otimização de processos, produtividade, desenvolvimento de soluções e resolução de problemas, buscando aplicar IA de forma estratégica no dia a dia.
													</p>

													<p>
														Além da tecnologia, atuo como <strong className="text-[#adc6ff] font-semibold">Gestora de Tráfego</strong>, trabalhando com estratégias de mídia paga, análise de métricas e otimização de campanhas para melhorar resultados.
													</p>

													<p className="pt-2 text-[#dfe2f1] font-medium border-t border-[#262a35]/80">
														Estou sempre aprendendo e explorando novas tecnologias, conectando sistemas, dados, IA e marketing digital para transformar conhecimento em soluções e resultados. 🚀
													</p>
												</>
											) : (
												<>
													<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#262a35] border border-[#4edea3]/30 font-mono text-xs sm:text-sm text-[#4edea3] font-semibold">
														<span>💻</span>
														<span>Systems Analyst | AI & Prompt Engineering | Traffic Manager</span>
													</div>

													<p className="text-base sm:text-lg font-medium text-[#dfe2f1]">
														Passionate about technology, data, artificial intelligence, and digital marketing. 🚀
													</p>

													<p>
														I work as a <strong className="text-[#dfe2f1] font-semibold">Systems Analyst</strong>, developing and maintaining web solutions using technologies like <span className="text-[#4edea3] font-semibold">Python</span>, <span className="text-[#4cd7f6] font-semibold">PHP</span>, and <span className="text-[#adc6ff] font-semibold">SQL Server</span>.
													</p>

													<p>
														Experienced with <span className="text-[#dfe2f1] font-medium">Power BI</span>, <span className="text-[#dfe2f1] font-medium">Crystal Reports</span>, SQL queries, data modeling, log analysis, and system troubleshooting.
													</p>

													<p>
														I also explore <strong className="text-[#4edea3] font-semibold">Artificial Intelligence</strong> and <strong className="text-[#4cd7f6] font-semibold">Prompt Engineering</strong> to optimize workflows, boost productivity, develop solutions, and strategically solve business challenges.
													</p>

													<p>
														Beyond software and data, I act as a <strong className="text-[#adc6ff] font-semibold">Traffic Manager</strong>, crafting paid media strategies, analyzing performance metrics, and optimizing campaigns to drive high-converting results.
													</p>

													<p className="pt-2 text-[#dfe2f1] font-medium border-t border-[#262a35]/80">
														Always learning and exploring new technologies—bridging systems, data, AI, and digital marketing to turn knowledge into impactful solutions and real-world results. 🚀
													</p>
												</>
											)}
										</div>
									</div>

									{/* Terminal mini-stats row */}
									<div className="mt-8 pt-5 border-t border-[#262a35] bg-[#171b26]/70 rounded-xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4edea3] shrink-0">
												<MapPin className="w-5 h-5" />
											</div>
											<div>
												<span className="block font-mono text-[11px] text-[#86948a] uppercase tracking-wider">
													{t.bento.locationLabel}
												</span>
												<span className="text-sm font-semibold text-[#dfe2f1]">
													{t.bento.locationValue}
												</span>
											</div>
										</div>

										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4cd7f6] shrink-0">
												<Sparkles className="w-5 h-5" />
											</div>
											<div>
												<span className="block font-mono text-[11px] text-[#86948a] uppercase tracking-wider">
													{t.bento.specialtyLabel}
												</span>
												<span className="text-sm font-semibold text-[#dfe2f1]">
													{t.bento.specialtyValue}
												</span>
											</div>
										</div>
									</div>
								</div>

								{/* Right Mini Bento: Metrics Panel (4 Proportional Cards) */}
								<div className="lg:col-span-5 flex flex-col gap-3.5 h-full">
									{/* Metric 1 - Dynamic Experience */}
									<div className="flex-1 bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-4 sm:p-4.5 shadow-xl flex flex-col justify-between group hover:bg-[#262a35]/60 hover:border-[#4edea3]/40 transition-all">
										<div className="flex items-center justify-between mb-1.5">
											<span className="font-mono text-[11px] text-[#4edea3] uppercase font-bold tracking-wider">
												{t.bento.stat1Title}
											</span>
											<div className="w-7 h-7 rounded-lg bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4edea3]">
												<Briefcase className="w-3.5 h-3.5" />
											</div>
										</div>
										<div className="my-auto py-0.5">
											<div className="flex items-baseline gap-2">
												<span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#dfe2f1] tracking-tight">
													{t.bento.stat1Num}
												</span>
												<span className="text-xs font-mono text-[#4edea3] uppercase font-semibold">
													{lang === "pt" ? "anos" : "years"}
												</span>
											</div>
											<p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
												{t.bento.stat1Desc}
											</p>
										</div>
										<div className="pt-1.5">
											<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#171b26] border border-[#4edea3]/25 text-[11px] font-mono text-[#4edea3]">
												<span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
												<span>{t.bento.stat1Badge}</span>
											</div>
										</div>
									</div>

									{/* Metric 2 - Projects & Solutions */}
									<div className="flex-1 bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-4 sm:p-4.5 shadow-xl flex flex-col justify-between group hover:bg-[#262a35]/60 hover:border-[#4cd7f6]/40 transition-all">
										<div className="flex items-center justify-between mb-1.5">
											<span className="font-mono text-[11px] text-[#4cd7f6] uppercase font-bold tracking-wider">
												{t.bento.stat2Title}
											</span>
											<div className="w-7 h-7 rounded-lg bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4cd7f6]">
												<Zap className="w-3.5 h-3.5" />
											</div>
										</div>
										<div className="my-auto py-0.5">
											<div className="flex items-baseline gap-2">
												<span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#dfe2f1] tracking-tight">
													{t.bento.stat2Num}
												</span>
												<span className="text-xs font-mono text-[#4cd7f6] uppercase font-semibold">
													{lang === "pt" ? "soluções" : "solutions"}
												</span>
											</div>
											<p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
												{t.bento.stat2Desc}
											</p>
										</div>
										<div className="pt-1.5">
											<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#171b26] border border-[#4cd7f6]/25 text-[11px] font-mono text-[#4cd7f6]">
												<span>✓ {t.bento.stat2Badge}</span>
											</div>
										</div>
									</div>

									{/* Card 3 - Kliqo.Tech Softhouse & Venture */}
									<div className="flex-1 bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-4 sm:p-4.5 shadow-xl flex flex-col justify-between group hover:bg-[#262a35]/60 hover:border-[#4edea3]/40 transition-all">
										<div className="flex items-center justify-between mb-1.5">
											<span className="font-mono text-[11px] text-[#4edea3] uppercase font-bold tracking-wider flex items-center gap-1.5">
												<Rocket className="w-3.5 h-3.5 text-[#4edea3]" />
												{t.bento.kliqoTitle}
											</span>
											<a
												href="https://kliqo.tech/"
												target="_blank"
												rel="noopener noreferrer"
												className="w-7 h-7 rounded-lg bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4edea3] hover:bg-[#4edea3] hover:text-[#003824] transition-colors"
												title="Kliqo.Tech"
											>
												<ExternalLink className="w-3.5 h-3.5" />
											</a>
										</div>
										<div className="my-auto py-0.5">
											<div className="flex items-baseline gap-2">
												<a
													href="https://kliqo.tech/"
													target="_blank"
													rel="noopener noreferrer"
													className="font-mono text-xl sm:text-2xl font-extrabold text-[#dfe2f1] hover:text-[#4edea3] transition-colors flex items-center gap-1.5"
												>
													<span>Kliqo.Tech</span>
													<ExternalLink className="w-3.5 h-3.5 text-[#4edea3]" />
												</a>
												<span className="text-[10px] font-mono text-[#4edea3] bg-[#4edea3]/10 border border-[#4edea3]/25 px-2 py-0.5 rounded font-semibold">
													{t.bento.kliqoRole}
												</span>
											</div>
											<p className="text-xs text-[#bbcabf] mt-1 leading-relaxed">
												{t.bento.kliqoDesc}
											</p>
										</div>
										<div className="pt-1.5 flex flex-wrap items-center gap-1.5">
											<a
												href="https://seatracking.kliqo.tech/"
												target="_blank"
												rel="noopener noreferrer"
												className="px-2 py-0.5 rounded bg-[#171b26] border border-[#3c4a42]/60 text-[10px] font-mono text-[#4cd7f6] hover:border-[#4cd7f6] transition-colors"
											>
												SeaTracking ↗
											</a>
											<span className="px-2 py-0.5 rounded bg-[#171b26] border border-[#3c4a42]/60 text-[10px] font-mono text-[#dfe2f1]">
												Landing Pages
											</span>
											<span className="px-2 py-0.5 rounded bg-[#171b26] border border-[#4edea3]/30 text-[10px] font-mono text-[#4edea3] font-semibold">
												Kliqo Insights
											</span>
										</div>
									</div>

									{/* Card 4 - Strategic Pillars */}
									<div className="flex-1 bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-4 sm:p-4.5 shadow-xl flex flex-col justify-between group hover:bg-[#262a35]/60 hover:border-[#adc6ff]/40 transition-all">
										<div className="flex items-center justify-between mb-1.5">
											<span className="font-mono text-[11px] text-[#adc6ff] uppercase font-bold tracking-wider">
												{t.bento.pillarsTitle}
											</span>
											<div className="w-7 h-7 rounded-lg bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#adc6ff]">
												<Sparkles className="w-3.5 h-3.5" />
											</div>
										</div>
										<div className="space-y-1.5 my-auto">
											<div className="px-2.5 py-1.5 rounded-lg bg-[#171b26]/90 border border-[#262a35] flex items-center justify-between hover:border-[#4edea3]/30 transition-colors">
												<span className="text-xs font-semibold text-[#dfe2f1] flex items-center gap-2">
													<Code2 className="w-3.5 h-3.5 text-[#4edea3]" />
													{t.bento.pillar1Title}
												</span>
												<span className="text-[10px] sm:text-[11px] text-[#bbcabf] font-mono">{t.bento.pillar1Desc}</span>
											</div>
											<div className="px-2.5 py-1.5 rounded-lg bg-[#171b26]/90 border border-[#262a35] flex items-center justify-between hover:border-[#4cd7f6]/30 transition-colors">
												<span className="text-xs font-semibold text-[#dfe2f1] flex items-center gap-2">
													<Sparkles className="w-3.5 h-3.5 text-[#4cd7f6]" />
													{t.bento.pillar2Title}
												</span>
												<span className="text-[10px] sm:text-[11px] text-[#bbcabf] font-mono">{t.bento.pillar2Desc}</span>
											</div>
											<div className="px-2.5 py-1.5 rounded-lg bg-[#171b26]/90 border border-[#262a35] flex items-center justify-between hover:border-[#adc6ff]/30 transition-colors">
												<span className="text-xs font-semibold text-[#dfe2f1] flex items-center gap-2">
													<BarChart3 className="w-3.5 h-3.5 text-[#adc6ff]" />
													{t.bento.pillar3Title}
												</span>
												<span className="text-[10px] sm:text-[11px] text-[#bbcabf] font-mono">{t.bento.pillar3Desc}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* ============================================================ */}
						{/* 2. COMPETÊNCIAS TÉCNICAS (TECH STACK BENTO GRID)            */}
						{/* ============================================================ */}
						<section id="habilidades" className="space-y-6">
							<div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
								<div>
									<div className="flex items-center gap-2 text-[#4edea3] font-mono text-[13px] font-semibold">
										<span>{t.skillsSection.tag}</span>
									</div>
									<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#dfe2f1] mt-1">
										{t.skillsSection.title}
									</h2>
								</div>
								<p className="text-sm text-[#bbcabf] max-w-md leading-relaxed">
									{t.skillsSection.description}
								</p>
							</div>

							{/* 6 Category Bento Matrix */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
								{/* 1: Linguagens (Span 2) */}
								<div className="sm:col-span-2 bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
									<div>
										<div className="flex items-center justify-between mb-3">
											<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4edea3]">
												<Terminal className="w-5 h-5" />
											</div>
											<span className="font-mono text-[11px] font-semibold text-[#86948a] uppercase">
												{t.skillsSection.categories.languages.badge}
											</span>
										</div>
										<h3 className="text-lg font-bold text-[#dfe2f1]">
											{t.skillsSection.categories.languages.title}
										</h3>
										<p className="text-xs text-[#bbcabf] mt-1 mb-5">
											{t.skillsSection.categories.languages.desc}
										</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#4edea3] font-semibold border border-[#4edea3]/30">
											PHP
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30">
											Python
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#adc6ff] font-semibold border border-[#adc6ff]/30">
											JavaScript
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											HTML5
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											CSS3
										</span>
									</div>
								</div>

								{/* 2: Frameworks (Span 2) */}
								<div className="sm:col-span-2 bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
									<div>
										<div className="flex items-center justify-between mb-3">
											<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4cd7f6]">
												<Layers className="w-5 h-5" />
											</div>
											<span className="font-mono text-[11px] font-semibold text-[#86948a] uppercase">
												{t.skillsSection.categories.frameworks.badge}
											</span>
										</div>
										<h3 className="text-lg font-bold text-[#dfe2f1]">
											{t.skillsSection.categories.frameworks.title}
										</h3>
										<p className="text-xs text-[#bbcabf] mt-1 mb-5">
											{t.skillsSection.categories.frameworks.desc}
										</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											Flask
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											CodeIgniter
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#4edea3] font-semibold border border-[#4edea3]/30">
											Laravel
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30">
											TailwindCSS
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											Bootstrap
										</span>
									</div>
								</div>

								{/* 3: Banco de Dados */}
								<div className="bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
									<div>
										<div className="flex items-center justify-between mb-3">
											<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#adc6ff]">
												<Database className="w-5 h-5" />
											</div>
											<span className="font-mono text-[11px] font-semibold text-[#86948a] uppercase">
												{t.skillsSection.categories.databases.badge}
											</span>
										</div>
										<h3 className="text-base font-bold text-[#dfe2f1]">
											{t.skillsSection.categories.databases.title}
										</h3>
										<p className="text-xs text-[#bbcabf] mt-1 mb-4">
											{t.skillsSection.categories.databases.desc}
										</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#4edea3] font-semibold border border-[#4edea3]/30">
											SQL Server
										</span>
										<span className="font-mono text-xs px-3 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											MySQL
										</span>
									</div>
								</div>

								{/* 4: Bibliotecas & Dados */}
								<div className="bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
									<div>
										<div className="flex items-center justify-between mb-3">
											<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4edea3]">
												<BarChart3 className="w-5 h-5" />
											</div>
											<span className="font-mono text-[11px] font-semibold text-[#86948a] uppercase">
												{t.skillsSection.categories.libraries.badge}
											</span>
										</div>
										<h3 className="text-base font-bold text-[#dfe2f1]">
											{t.skillsSection.categories.libraries.title}
										</h3>
										<p className="text-xs text-[#bbcabf] mt-1 mb-4">
											{t.skillsSection.categories.libraries.desc}
										</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30">
											Pandas
										</span>
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											AgGrid
										</span>
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											AgCharts
										</span>
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#86948a] border border-[#3c4a42]/60">
											jQuery
										</span>
									</div>
								</div>

								{/* 5: Ferramentas & BI */}
								<div className="bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
									<div>
										<div className="flex items-center justify-between mb-3">
											<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4cd7f6]">
												<Wrench className="w-5 h-5" />
											</div>
											<span className="font-mono text-[11px] font-semibold text-[#86948a] uppercase">
												{t.skillsSection.categories.tools.badge}
											</span>
										</div>
										<h3 className="text-base font-bold text-[#dfe2f1]">
											{t.skillsSection.categories.tools.title}
										</h3>
										<p className="text-xs text-[#bbcabf] mt-1 mb-4">
											{t.skillsSection.categories.tools.desc}
										</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#4edea3] font-semibold border border-[#4edea3]/30">
											Crystal Reports
										</span>
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											Power Automate
										</span>
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#4cd7f6] border border-[#4cd7f6]/30">
											PowerBI
										</span>
									</div>
								</div>

								{/* 6: Versionamento & DevOps */}
								<div className="bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
									<div>
										<div className="flex items-center justify-between mb-3">
											<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#adc6ff]">
												<GitBranch className="w-5 h-5" />
											</div>
											<span className="font-mono text-[11px] font-semibold text-[#86948a] uppercase">
												{t.skillsSection.categories.versioning.badge}
											</span>
										</div>
										<h3 className="text-base font-bold text-[#dfe2f1]">
											{t.skillsSection.categories.versioning.title}
										</h3>
										<p className="text-xs text-[#bbcabf] mt-1 mb-4">
											{t.skillsSection.categories.versioning.desc}
										</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/60">
											Git
										</span>
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#4edea3] font-semibold border border-[#4edea3]/30">
											GitHub
										</span>
										<span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a35] text-[#adc6ff] border border-[#adc6ff]/30">
											Azure DevOps
										</span>
									</div>
								</div>
							</div>

							{/* 7: Dedicated Systems Bar */}
							<div className="bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-5 md:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
								<div className="flex items-center gap-3.5">
									<div className="w-11 h-11 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#4edea3] shrink-0">
										<Truck className="w-5 h-5" />
									</div>
									<div>
										<h4 className="text-base font-bold text-[#dfe2f1]">
											{t.skillsSection.systemsBar.title}
										</h4>
										<p className="text-xs sm:text-sm text-[#bbcabf]">
											{t.skillsSection.systemsBar.desc}
										</p>
									</div>
								</div>
								<div className="flex flex-wrap items-center gap-2">
									<span className="px-3.5 py-1.5 rounded-lg bg-[#262a35] border border-[#3c4a42]/60 text-[#dfe2f1] font-mono text-xs font-semibold">
										Rodopar
									</span>
									<span className="px-3.5 py-1.5 rounded-lg bg-[#262a35] border border-[#3c4a42]/60 text-[#dfe2f1] font-mono text-xs font-semibold">
										Microled
									</span>
									<span className="px-3.5 py-1.5 rounded-lg bg-[#262a35] border border-[#3c4a42]/60 text-[#dfe2f1] font-mono text-xs font-semibold">
										Benner
									</span>
								</div>
							</div>
						</section>

						{/* ============================================================ */}
						{/* 3. PROJETOS EM DESTAQUE (HIGH DENSITY CARDS)                */}
						{/* ============================================================ */}
						<section id="projetos" className="space-y-6">
							<div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
								<div>
									<div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-[13px] font-semibold">
										<span>{t.projectsSection.tag}</span>
									</div>
									<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#dfe2f1] mt-1">
										{t.projectsSection.title}
									</h2>
								</div>
								<p className="text-sm text-[#bbcabf] max-w-md leading-relaxed">
									{t.projectsSection.description}
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{projectsData.map((project) => {
									const badgeColorClasses =
										project.badgeColor === "primary"
											? "text-[#4edea3] border-[#4edea3]/30"
											: project.badgeColor === "secondary"
												? "text-[#4cd7f6] border-[#4cd7f6]/30"
												: "text-[#adc6ff] border-[#adc6ff]/30";

									const titleHoverColor =
										project.badgeColor === "primary"
											? "group-hover:text-[#4edea3]"
											: project.badgeColor === "secondary"
												? "group-hover:text-[#4cd7f6]"
												: "group-hover:text-[#adc6ff]";

									const bulletColor =
										project.badgeColor === "primary"
											? "text-[#4edea3]"
											: project.badgeColor === "secondary"
												? "text-[#4cd7f6]"
												: "text-[#adc6ff]";

									return (
										<div
											key={project.id}
											className="bg-[#1c1f2a] border border-[#262a35] rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden group hover:border-[#3c4a42] hover:shadow-2xl transition-all duration-300"
										>
											{/* Image Banner */}
											<div className="h-44 bg-[#0a0e18] relative overflow-hidden flex items-center justify-center p-4">
												<div className="absolute inset-0 bg-gradient-to-t from-[#1c1f2a] via-[#1c1f2a]/40 to-transparent z-10" />
												<Image
													src={project.bannerImage}
													alt={project.title}
													fill
													sizes="(max-width: 768px) 100vw, 33vw"
													className="object-cover opacity-65 group-hover:scale-105 transition-transform duration-500"
												/>
												<div className="absolute top-3 left-3 z-20">
													<span
														className={`px-2.5 py-1 rounded-md bg-[#262a35]/90 backdrop-blur font-mono text-[11px] font-bold uppercase tracking-wider border ${badgeColorClasses}`}
													>
														{project.tag}
													</span>
												</div>
											</div>

											{/* Card Body */}
											<div className="p-6 flex-1 flex flex-col justify-between space-y-4">
												<div className="space-y-3">
													<h3
														className={`text-xl sm:text-2xl font-bold text-[#dfe2f1] transition-colors ${titleHoverColor}`}
													>
														{project.title}
													</h3>
													<p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed line-clamp-2">
														{project.description}
													</p>
													<ul className="space-y-2 pt-1 text-[#bbcabf] text-xs">
														{project.highlights.slice(0, 2).map((item, idx) => (
															<li key={idx} className="flex items-start gap-2">
																<span
																	className={`font-mono font-bold ${bulletColor}`}
																>
																	&gt;
																</span>
																<span className="leading-tight">{item}</span>
															</li>
														))}
													</ul>
												</div>

												<div className="space-y-3 pt-3 border-t border-[#262a35]">
													{/* Tech tags preview */}
													<div className="flex flex-wrap gap-1.5">
														{project.technologies.slice(0, 3).map((tech) => (
															<span
																key={tech}
																className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/50"
															>
																{tech}
															</span>
														))}
														{project.technologies.length > 3 && (
															<span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#262a35] text-[#86948a]">
																+{project.technologies.length - 3}
															</span>
														)}
													</div>

													{/* Details Button */}
													<button
														onClick={() => setSelectedProject(project)}
														type="button"
														className="w-full py-2.5 rounded-lg bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border border-[#3c4a42]/60 transition-all cursor-pointer group/btn"
													>
														<Eye className={`w-4 h-4 ${bulletColor} group-hover/btn:scale-110 transition-transform`} />
														<span>{t.projectsSection.viewBtn}</span>
													</button>
												</div>
											</div>
										</div>
									);
								})}
							</div>

							{/* ============================================================ */}
							{/* KLIQO.TECH SOFTHOUSE & VENTURES ECOSYSTEM                     */}
							{/* ============================================================ */}
							<div className="mt-14 pt-12 border-t border-[#262a35] space-y-6">
								<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
									<div>
										<div className="flex items-center gap-2 text-[#4edea3] font-mono text-[13px] font-semibold">
											<Sparkles className="w-4 h-4" />
											<span>{t.kliqoSection.tag}</span>
										</div>
										<h3 className="text-2xl sm:text-3xl font-extrabold text-[#dfe2f1] mt-1 flex items-center gap-3">
											<span>{t.kliqoSection.title}</span>
										</h3>
										<p className="text-sm text-[#bbcabf] max-w-2xl mt-2 leading-relaxed">
											{t.kliqoSection.subtitle}
										</p>
									</div>

									<a
										href="https://kliqo.tech/"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#262a35] hover:bg-[#323846] border border-[#4edea3]/40 text-[#4edea3] font-mono text-xs sm:text-sm font-bold transition-all shadow-lg hover:shadow-[#4edea3]/10 self-start md:self-auto shrink-0 group"
									>
										<Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
										<span>{t.kliqoSection.websiteBtn}</span>
										<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
									</a>
								</div>

								{/* 4 Kliqo Ventures Cards */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
									{kliqoVentures.map((venture) => {
										const IconComp = venture.icon;
										return (
											<div
												key={venture.id}
												className={`bg-[#1c1f2a] border ${venture.cardBorder} rounded-2xl p-6 shadow-xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden`}
											>
												<div className="space-y-3">
													{/* Card Header */}
													<div className="flex items-start justify-between gap-2">
														<div className="flex items-center gap-2.5">
															<div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#3c4a42]/60 flex items-center justify-center text-[#dfe2f1] shrink-0">
																<IconComp className={`w-5 h-5 ${venture.accentColor}`} />
															</div>
															<div>
																<span className="font-mono text-[10px] uppercase font-bold text-[#86948a] tracking-wider block">
																	{venture.tag}
																</span>
																<h4 className="text-lg sm:text-xl font-bold text-[#dfe2f1] group-hover:text-white transition-colors">
																	{venture.title}
																</h4>
															</div>
														</div>
														<span
															className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border ${venture.badgeColor} shrink-0`}
														>
															{venture.badgeLabel}
														</span>
													</div>

													{/* Description */}
													<p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed pt-1">
														{venture.description}
													</p>

													{/* Highlights */}
													<ul className="space-y-1.5 pt-1 text-xs text-[#bbcabf]">
														{venture.highlights.map((item, idx) => (
															<li key={idx} className="flex items-start gap-2">
																<span className={`font-mono font-bold ${venture.accentColor}`}>
																	&gt;
																</span>
																<span className="leading-tight">{item}</span>
															</li>
														))}
													</ul>
												</div>

												{/* Card Footer with Link */}
												<div className="pt-4 mt-4 border-t border-[#262a35] flex items-center justify-between gap-3">
													<div className="flex flex-wrap gap-1.5">
														{venture.technologies.slice(0, 3).map((tech) => (
															<span
																key={tech}
																className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#262a35] text-[#dfe2f1] border border-[#3c4a42]/50"
															>
																{tech}
															</span>
														))}
													</div>

													<a
														href={venture.link}
														target="_blank"
														rel="noopener noreferrer"
														className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] hover:text-[#4edea3] text-xs font-semibold font-mono border border-[#3c4a42]/60 transition-all shrink-0"
													>
														<span>{venture.isProprietary ? t.kliqoSection.proprietaryTag : t.kliqoSection.accessProject}</span>
														<ArrowUpRight className="w-3.5 h-3.5" />
													</a>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</section>

						{/* ============================================================ */}
						{/* 4. EXPERIÊNCIA & FORMAÇÃO (DUAL TIMELINE ARCHITECTURE)      */}
						{/* ============================================================ */}
						<section
							id="experiencia"
							className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2"
						>
							{/* Left Column: Experiência Profissional */}
							<div className="lg:col-span-7 space-y-6">
								<div>
									<div className="flex items-center gap-2 text-[#4edea3] font-mono text-[13px] font-semibold">
										<Briefcase className="w-4 h-4" />
										<span>{t.experienceSection.tag}</span>
									</div>
									<h2 className="text-2xl sm:text-3xl font-extrabold text-[#dfe2f1] mt-1">
										{t.experienceSection.title}
									</h2>
								</div>

								<div className="space-y-4 mt-4">
									{experiences.map((exp, idx) => (
										<div
											key={idx}
											className="bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#3c4a42] transition-colors"
										>
											<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
												<div className="flex items-center gap-2.5">
													<span
														className={`w-2.5 h-2.5 rounded-full ${exp.dotColor} ${
															exp.current ? "animate-pulse" : ""
														}`}
													/>
													<h3 className="text-base sm:text-lg font-bold text-[#dfe2f1]">
														{exp.role}
													</h3>
												</div>
												<span
													className={`font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto ${exp.tagColor}`}
												>
													{exp.period}
												</span>
											</div>
											{exp.link ? (
												<a
													href={exp.link}
													target="_blank"
													rel="noopener noreferrer"
													className="font-mono text-xs text-[#4edea3] hover:underline inline-flex items-center gap-1.5 font-semibold mb-2.5 transition-colors group/link"
												>
													<span>{exp.company}</span>
													<ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
												</a>
											) : (
												<p className="font-mono text-xs text-[#4cd7f6] font-semibold mb-2.5">
													{exp.company}
												</p>
											)}
											<p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed">
												{exp.desc}
											</p>
										</div>
									))}
								</div>
							</div>

							{/* Right Column: Formação & Certificações */}
							<div id="formacao" className="lg:col-span-5 space-y-6">
								<div>
									<div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-[13px] font-semibold">
										<GraduationCap className="w-4 h-4" />
										<span>{t.educationSection.tag}</span>
									</div>
									<h2 className="text-2xl sm:text-3xl font-extrabold text-[#dfe2f1] mt-1">
										{t.educationSection.title}
									</h2>
								</div>

								{/* Education Cards */}
								<div className="space-y-3.5 mt-4">
									{educations.map((item, idx) => (
										<div
											key={idx}
											className="bg-[#1c1f2a] border border-[#262a35] rounded-2xl p-5 shadow-xl hover:border-[#3c4a42] transition-colors"
										>
											<div className="flex items-start justify-between gap-2">
												<h3 className="text-sm sm:text-base font-bold text-[#dfe2f1] leading-snug">
													{item.title}
												</h3>
												<span
													className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded shrink-0 ${item.tagColor}`}
												>
													{item.period}
												</span>
											</div>
											<p className="text-xs sm:text-sm text-[#bbcabf] mt-1">
												{item.institution}
											</p>
											<span className="font-mono text-[11px] text-[#86948a] block mt-1">
												{item.status}
											</span>
										</div>
									))}
								</div>

								{/* Cursos & Certificações Badges */}
								<div className="pt-4 space-y-3">
									<div className="flex items-center gap-2">
										<Award className="w-5 h-5 text-[#4edea3]" />
										<h3 className="text-lg font-bold text-[#dfe2f1]">
											{t.educationSection.certsTitle}
										</h3>
									</div>

									<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
										{certifications.map((cert, idx) => (
											<div
												key={idx}
												className="p-3 rounded-xl bg-[#1c1f2a] border border-[#262a35] shadow-sm hover:border-[#3c4a42] transition-colors flex items-center gap-2.5"
											>
												<div className="w-2 h-2 rounded-full bg-[#4edea3]/50 shrink-0" />
												<div className="min-w-0 flex-1">
													<span className="text-xs font-semibold text-[#dfe2f1] block truncate">
														{cert.name}
													</span>
													<span
														className={`font-mono text-[11px] font-medium block truncate ${cert.color}`}
													>
														{cert.school}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</section>

						{/* ============================================================ */}
						{/* 5. CALL TO ACTION (INTERACTIVE HERO BOX)                     */}
						{/* ============================================================ */}
						<section
							id="contato"
							className="relative rounded-3xl bg-gradient-to-b from-[#1c1f2a] to-[#171b26] border border-[#262a35] p-8 md:p-12 shadow-2xl text-center overflow-hidden"
						>
							{/* Ambient Radial Accent */}
							<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4edea3]/10 via-transparent to-transparent pointer-events-none" />

							<div className="relative z-10 max-w-2xl mx-auto space-y-5">
								<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262a35] text-[#4edea3] font-mono text-[11px] font-bold uppercase tracking-wider border border-[#4edea3]/20">
									<Zap className="w-3.5 h-3.5" />
									<span>{t.contactSection.tag}</span>
								</div>

								<h2 className="text-2xl sm:text-4xl font-extrabold text-[#dfe2f1] tracking-tight">
									{t.contactSection.title}
								</h2>

								<p className="text-sm sm:text-base text-[#bbcabf] leading-relaxed max-w-xl mx-auto">
									{t.contactSection.description}
								</p>

								{/* Interactive Contact Buttons */}
								<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
									<a
										href="mailto:raquelstefany.work@gmail.com"
										className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#4edea3] text-[#003824] font-bold text-sm hover:bg-[#6ffbbe] shadow-lg shadow-[#10b981]/20 transition-all"
									>
										<FiMail className="w-4 h-4" />
										<span>{t.contactSection.emailBtn}</span>
									</a>

									<a
										href="https://www.linkedin.com/in/raquelstefany"
										target="_blank"
										rel="noopener noreferrer"
										className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] font-semibold text-sm border border-[#3c4a42]/60 transition-all shadow-sm"
									>
										<FiLinkedin className="w-4 h-4 text-[#4cd7f6]" />
										<span>{t.contactSection.linkedinBtn}</span>
									</a>

									<button
										onClick={handleCopyEmail}
										type="button"
										className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#262a35] hover:bg-[#353944] font-semibold text-sm border border-[#3c4a42]/60 transition-all shadow-sm cursor-pointer ${
											copied ? "text-[#4edea3] border-[#4edea3]/40" : "text-[#dfe2f1]"
										}`}
									>
										{copied ? (
											<>
												<Check className="w-4 h-4 text-[#4edea3]" />
												<span className="text-[#4edea3] font-bold">
													{t.contactSection.copiedBtn}
												</span>
											</>
										) : (
											<>
												<Copy className="w-4 h-4 text-[#adc6ff]" />
												<span>{t.contactSection.copyBtn}</span>
											</>
										)}
									</button>
								</div>

								{/* Profile link */}
								<div className="pt-2 flex items-center justify-center text-[#bbcabf]">
									<a
										href="https://www.github.com/RaquelStefany"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-[#4edea3] transition-colors flex items-center gap-2 font-mono text-xs"
									>
										<FiGithub className="w-4 h-4" />
										<span>github.com/RaquelStefany</span>
									</a>
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>

			{/* ============================================================ */}
			{/* INTERACTIVE PROJECT MODAL                                    */}
			{/* ============================================================ */}
			{selectedProject && (
				<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-[#0a0e18]/85 backdrop-blur-md transition-opacity"
						onClick={() => setSelectedProject(null)}
					/>

					{/* Modal Window */}
					<div className="relative bg-[#1c1f2a] border border-[#262a35] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl z-10">
						{/* Sticky Header */}
						<div className="sticky top-0 bg-[#1c1f2a]/95 backdrop-blur border-b border-[#262a35] p-5 sm:p-6 flex justify-between items-center z-20">
							<div>
								<span className="font-mono text-xs font-bold text-[#4edea3] uppercase tracking-wider">
									{selectedProject.tag}
								</span>
								<h2 className="text-xl sm:text-2xl font-bold text-[#dfe2f1] mt-0.5">
									{selectedProject.title}
								</h2>
							</div>
							<button
								onClick={() => setSelectedProject(null)}
								className="p-2 hover:bg-[#262a35] rounded-full transition-colors text-[#bbcabf] hover:text-[#dfe2f1] cursor-pointer"
								aria-label={t.modal.close}
							>
								<X className="w-6 h-6" />
							</button>
						</div>

						{/* Modal Content */}
						<div className="p-6 sm:p-8 space-y-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								{/* Left: Screenshots Gallery */}
								<div className="space-y-4">
									{selectedProject.images.map((img, idx) => (
										<div
											key={idx}
											className="group relative rounded-xl overflow-hidden bg-[#0a0e18] border border-[#262a35] aspect-video"
										>
											<div className="absolute top-2 left-2 z-10 bg-[#0f131d]/90 px-2 py-1 rounded text-[10px] font-mono text-[#4edea3] border border-[#4edea3]/20">
												{img.alt}
											</div>
											<Image
												src={img.src}
												alt={img.alt}
												fill
												sizes="(max-width: 1024px) 100vw, 50vw"
												className="object-cover group-hover:scale-105 transition-transform duration-300"
											/>
										</div>
									))}

									<div className="p-3.5 bg-[#4edea3]/5 border border-[#4edea3]/20 rounded-xl text-xs text-[#4edea3]/90 flex items-center gap-3">
										<Info className="w-4 h-4 shrink-0" />
										<span>{t.modal.internalNote}</span>
									</div>
								</div>

								{/* Right: Project Details */}
								<div className="space-y-6">
									<div>
										<h3 className="text-lg font-bold text-[#4edea3] mb-2">
											{t.modal.aboutTitle}
										</h3>
										<p className="text-sm sm:text-base text-[#bbcabf] leading-relaxed italic bg-[#171b26] p-4 rounded-xl border border-[#262a35]">
											&ldquo;{selectedProject.fullDescription}&rdquo;
										</p>
									</div>

									<div>
										<h3 className="text-base font-bold text-[#dfe2f1] mb-3 flex items-center gap-2">
											<Code2 className="w-4 h-4 text-[#4cd7f6]" />
											<span>{t.modal.techTitle}</span>
										</h3>
										<div className="flex flex-wrap gap-2">
											{selectedProject.technologies.map((tech) => (
												<span
													key={tech}
													className="font-mono px-3 py-1 bg-[#262a35] text-[#bbcabf] rounded-lg text-xs border border-[#3c4a42]/60 hover:text-[#4edea3] hover:border-[#4edea3]/40 transition-colors"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									<div>
										<h3 className="text-base font-bold text-[#dfe2f1] mb-3 flex items-center gap-2">
											<Sparkles className="w-4 h-4 text-[#adc6ff]" />
											<span>{t.modal.deliverablesTitle}</span>
										</h3>
										<ul className="space-y-2.5">
											{selectedProject.highlights.map((item, idx) => (
												<li
													key={idx}
													className="flex items-start gap-2.5 text-xs sm:text-sm text-[#bbcabf]"
												>
													<span className="font-mono text-[#4edea3] font-bold mt-0.5">
														&gt;
													</span>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>

									<div className="pt-4 border-t border-[#262a35]">
										<button
											onClick={() => setSelectedProject(null)}
											className="w-full py-2.5 bg-[#262a35] hover:bg-[#353944] text-[#dfe2f1] font-semibold text-sm rounded-xl border border-[#3c4a42]/60 transition-colors cursor-pointer"
										>
											{t.modal.close}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* ============================================================ */}
			{/* FOOTER                                                       */}
			{/* ============================================================ */}
			<footer className="w-full bg-[#0a0e18] py-12 border-t border-[#1c1f2a]">
				<div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1c1f2a]">
						<div className="flex flex-col items-center md:items-start gap-1">
							<div className="flex items-center gap-1.5">
								<span className="text-base font-bold text-[#dfe2f1]">
									Raquel Rodrigues
								</span>
								<span className="font-mono text-[#4edea3] font-bold animate-pulse">
									_
								</span>
							</div>
							<p className="text-xs text-[#bbcabf]">{t.footer.role}</p>
							<div className="flex items-center gap-1.5 text-[#86948a] text-xs mt-1">
								<MapPin className="w-3.5 h-3.5 text-[#4edea3]" />
								<span className="font-mono">{t.footer.location}</span>
							</div>
						</div>

						<div className="flex flex-col items-center md:items-end gap-2.5">
							<div className="flex items-center gap-2">
								<a
									href="https://www.github.com/RaquelStefany"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									className="w-9 h-9 rounded-lg bg-[#171b26] border border-[#262a35] flex items-center justify-center text-[#bbcabf] hover:text-[#4edea3] hover:bg-[#1c1f2a] transition-colors"
								>
									<FiGithub className="w-4 h-4" />
								</a>
								<a
									href="https://www.linkedin.com/in/raquelstefany"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="w-9 h-9 rounded-lg bg-[#171b26] border border-[#262a35] flex items-center justify-center text-[#bbcabf] hover:text-[#4cd7f6] hover:bg-[#1c1f2a] transition-colors"
								>
									<FiLinkedin className="w-4 h-4" />
								</a>
								<a
									href="mailto:raquelstefany.work@gmail.com"
									aria-label="Email"
									className="w-9 h-9 rounded-lg bg-[#171b26] border border-[#262a35] flex items-center justify-center text-[#bbcabf] hover:text-[#adc6ff] hover:bg-[#1c1f2a] transition-colors"
								>
									<FiMail className="w-4 h-4" />
								</a>
							</div>
							<p className="font-mono text-[11px] text-[#86948a] flex items-center gap-1.5">
								<Zap className="w-3 h-3 text-[#4edea3]" />
								{t.footer.techBadge}
							</p>
						</div>
					</div>

					<div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-mono text-[#86948a]">
						<p>{t.footer.copyright}</p>
						<div className="flex items-center gap-2">
							<span>System Status:</span>
							<span className="text-[#4edea3] font-bold flex items-center gap-1.5">
								<span className="w-2 h-2 rounded-full bg-[#4edea3] inline-block animate-ping" />
								{t.footer.status}
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
