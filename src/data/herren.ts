export type Spieler = {
	name: string;
	position: string;
};

export type TrainerInfo = {
	name: string;
	role: string;
	mail?: string;
	phone?: string;
	image: string;
};

export type Mannschaft = {
	name: string;
	trainerTeam: TrainerInfo[];
	kontakt?: string;
	fussballDeUrl?: string;
	spieler: Spieler[];
};

export const herrenTeams: Mannschaft[] = [
	{
		name: "1. Mannschaft",
		trainerTeam: [
			{
				name: "Max Mustermann",
				role: "Cheftrainer",
				mail: "trainer1@tsg-messel.de",
				image: "/images/trainers/max-mustermann.jpg",
			},
			{
				name: "Lena Muster",
				role: "Co-Trainerin",
				mail: "co1@tsg-messel.de",
				image: "/images/trainers/lena-muster.jpg",
			},
		],
		kontakt: "trainer1@tsg-messel.de",
		fussballDeUrl: "https://www.fussball.de/...", // Link einsetzen
		spieler: [
			{ name: "Spieler Eins", position: "Torwart" },
			{ name: "Spieler Zwei", position: "Innenverteidiger" },
			{ name: "Spieler Drei", position: "Sturm" },
			// ...
		],
	},
	{
		name: "2. Mannschaft",
		trainerTeam: [
			{
				name: "Erika Beispiel",
				role: "Cheftrainerin",
				mail: "trainer2@tsg-messel.de",
				image: "/images/trainers/erika-beispiel.jpg",
			},
			{
				name: "Jonas Demo",
				role: "Co-Trainer",
				mail: "co2@tsg-messel.de",
				image: "/images/trainers/jonas-demo.jpg",
			},
		],
		kontakt: "trainer2@tsg-messel.de",
		fussballDeUrl: "https://www.fussball.de/...", // Link einsetzen
		spieler: [
			{ name: "Spieler A", position: "Mittelfeld" },
			{ name: "Spieler B", position: "Außenbahn" },
			// ...
		],
	},
];
