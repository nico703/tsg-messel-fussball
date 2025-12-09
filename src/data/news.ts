export type NewsEntry = {
	title: string;
	date: string; // ISO Date
	category: "Spielbericht" | "Veranstaltung" | "Info";
	teaser: string;
	link?: string;
	icsUrl?: string;
};

export const newsEntries: NewsEntry[] = [
	{
		title: "TSG Messel I siegt im Derby",
		date: "2024-08-24",
		category: "Spielbericht",
		teaser:
			"Mit einer geschlossenen Mannschaftsleistung sichern sich unsere Herren drei Punkte gegen den Ortsrivalen.",
		link: "#",
	},
	{
		title: "Jugend-Sommercamp 2024",
		date: "2024-07-15",
		category: "Veranstaltung",
		teaser:
			"Drei Tage voller Fußball, Technik-Workshops und Teamgeist – jetzt anmelden und einen der begehrten Plätze sichern.",
		icsUrl: "/events/jugendcamp-2024.ics",
	},
	{
		title: "AH Wochenende in der Pfalz",
		date: "2024-06-01",
		category: "Info",
		teaser:
			"Die Alte-Herren-Abteilung reist zum traditionellen Freundschaftsspiel mit anschließendem Weinfest.",
	},
];
