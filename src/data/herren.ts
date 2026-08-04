export type Spieler = {
	name: string;
	position: string;
	image?: string;
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
				name: "Volker Hermanns",
				role: "Cheftrainer",
				phone: "+49 163 3545638",
				image: "/images/trainers/volker-hermanns.jpg",
			},
			{
				name: "Yannik Van der Does",
				role: "Co-Trainer",
				image: "/images/trainers/yannik.jpg",
			},
		],
		kontakt: undefined,
		fussballDeUrl: "https://www.fussball.de/...", // Link einsetzen
		spieler: [
			{ name: "Ben Dunsch", position: "", image: "/images/players/1-mannschaft/ben.jpg" },
			{ name: "Divin Feukeu", position: "", image: "/images/players/1-mannschaft/divin.jpg" },
			{ name: "Eugene Ambang", position: "", image: "/images/players/1-mannschaft/eugene.jpg" },
			{ name: "Florian Lehmann", position: "", image: "/images/players/1-mannschaft/florian.jpg" },
			{ name: "Jaydon Kappeser", position: "", image: "/images/players/1-mannschaft/jaydon.jpg" },
			{ name: "John Kay Kappeser", position: "", image: "/images/players/1-mannschaft/john.jpg" },
			{ name: "Kevin Führer", position: "", image: "/images/players/1-mannschaft/kevin.jpg" },
			{ name: "Lukas Blatt", position: "", image: "/images/players/1-mannschaft/lukas-blatt.jpg" },
			{ name: "Pal Chuol", position: "", image: "/images/players/1-mannschaft/pal.jpg" },
			{ name: "Timo Berz", position: "", image: "/images/players/1-mannschaft/timo.jpg" },
			{ name: "Tobias Kolb", position: "", image: "/images/players/1-mannschaft/tobias.jpg" },
			{ name: "Torben Galinski", position: "", image: "/images/players/1-mannschaft/torben.jpg" },
			{ name: "William Tefounou", position: "", image: "/images/players/1-mannschaft/william.jpg" },
			{ name: "Yannik Van Der Does", position: "", image: "/images/players/1-mannschaft/yannik.jpg" },
		],
	},
	{
		name: "2. Mannschaft",
		trainerTeam: [
			{
				name: "Antonio Picon",
				role: "Cheftrainer",
				phone: "+49 170 4087779",
				image: "/images/trainers/antonio-picon.jpg",
			},
			{
				name: "Philipp Gerbig",
				role: "Co-Trainer",
				image: "/images/trainers/philipp-gerbig.jpg",
			},
		],
		kontakt: undefined,
		fussballDeUrl: "https://www.fussball.de/...", // Link einsetzen
		spieler: [
			{ name: "Alexander Schied", position: "", image: "/images/players/2-mannschaft/alex.jpg" },
			{ name: "Nicolas da Silva", position: "", image: "/images/players/2-mannschaft/nicolas.jpg" },
			{ name: "Luca Daden", position: "", image: "/images/players/2-mannschaft/luca.jpg" },
			{ name: "Lukas Depner", position: "", image: "/images/players/2-mannschaft/lukas.jpg" },
			{ name: "Noam Domta Noumsi", position: "", image: "/images/players/2-mannschaft/noam.jpg" },
			{ name: "Philipp Gerbig", position: "", image: "/images/players/2-mannschaft/philippg.jpg" },
			{ name: "Justin Gutjahr", position: "", image: "/images/players/2-mannschaft/justing.jpg" },
			{ name: "Justin Jost", position: "", image: "/images/players/2-mannschaft/justinj.jpg" },
			{ name: "Kevin Jung", position: "", image: "/images/players/2-mannschaft/kevin.jpg" },
			{ name: "Mentor Kadrija", position: "", image: "/images/players/2-mannschaft/toni.jpg" },
			{ name: "Jonas Kiefner", position: "", image: "/images/players/2-mannschaft/jonas.jpg" },
			{ name: "Nils Klement", position: "", image: "/images/players/2-mannschaft/nils.jpg" },
			{ name: "Marco Lazaro", position: "", image: "/images/players/2-mannschaft/marco.jpg" },
			{ name: "Hümmet Makal", position: "", image: "/images/players/2-mannschaft/hummet.jpg" },
			{ name: "Emilio Fernandez", position: "", image: "/images/players/2-mannschaft/emilio.jpg" },
			{ name: "Robin Saniel", position: "", image: "/images/players/2-mannschaft/robins.jpg" },
			{ name: "Franz Schott", position: "", image: "/images/players/2-mannschaft/franz.jpg" },
			{ name: "Marcel Schott", position: "", image: "/images/players/2-mannschaft/marcel.jpg" },
			{ name: "Iven Schröder", position: "", image: "/images/players/2-mannschaft/iven.jpg" },
			{ name: "Philipp Schüler", position: "", image: "/images/players/2-mannschaft/philipp.jpg" },
			{ name: "Robin Schüler", position: "", image: "/images/players/2-mannschaft/robin.jpg" },
			{ name: "Marcel Siepl", position: "", image: "/images/players/2-mannschaft/marcels.jpg" },
			{ name: "Pascal Tischler", position: "", image: "/images/players/2-mannschaft/pascal.jpg" },
			{ name: "Tobias Weithaler", position: "", image: "/images/players/2-mannschaft/tobias.jpg" },
		],
	},
];
