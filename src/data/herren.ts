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
				name: "Toni (Mentor) Kadrija",
				role: "Co-Trainer",
				phone: "+49 171 1040794",
				image: "/images/trainers/toni-kadrija.jpg",
			},
		],
		kontakt: undefined,
		fussballDeUrl: "https://www.fussball.de/...", // Link einsetzen
		spieler: [
			{ name: "Ben Dunsch", position: "", image: "/images/players/1-mannschaft/ben.jpg" },
			{ name: "Divin Feukeu", position: "", image: "/images/players/1-mannschaft/divin.jpg" },
			{ name: "Eugene Ambang", position: "", image: "/images/players/1-mannschaft/eugene.jpg" },
			{ name: "Florian Lehmann", position: "", image: "/images/players/1-mannschaft/florian.jpg" },
			{ name: "Franz Schott", position: "", image: "/images/players/1-mannschaft/franz.jpg" },
			{ name: "Jaydon Kappeser", position: "", image: "/images/players/1-mannschaft/jaydon.jpg" },
			{ name: "John Kay Kappeser", position: "", image: "/images/players/1-mannschaft/john.jpg" },
			{ name: "Kevin Führer", position: "", image: "/images/players/1-mannschaft/kevin.jpg" },
			{ name: "Lukas Blatt", position: "", image: "/images/players/1-mannschaft/lukas-blatt.jpg" },
			{ name: "Marco Lazaro", position: "", image: "/images/players/1-mannschaft/marco.jpg" },
			{ name: "Pal Chuol", position: "", image: "/images/players/1-mannschaft/pal.jpg" },
			{ name: "Timo Berz", position: "", image: "/images/players/1-mannschaft/timo.jpg" },
			{ name: "Tobias Kolb", position: "", image: "/images/players/1-mannschaft/tobias.jpg" },
			{ name: "Toni Kadrija", position: "", image: "/images/players/1-mannschaft/toni.jpg" },
			{ name: "Torben Galinski", position: "", image: "/images/players/1-mannschaft/torben.jpg" },
			{ name: "William Tefounou", position: "", image: "/images/players/1-mannschaft/william.jpg" },
			{ name: "Yannik Van Der Does", position: "", image: "/images/players/1-mannschaft/yannik.jpg" },
		],
	},
	{
		name: "2. Mannschaft",
		trainerTeam: [
			{
				name: "Philipp Gerbig",
				role: "Cheftrainer",
				phone: "+49 1573 5707181",
				image: "/images/trainers/philipp-gerbig.jpg",
			},
			{
				name: "Marcel Schott",
				role: "Co-Trainer",
				phone: "+49 1575 2443331",
				image: "/images/trainers/marcel-schott.jpg",
			},
		],
		kontakt: undefined,
		fussballDeUrl: "https://www.fussball.de/...", // Link einsetzen
		spieler: [
			{ name: "Niklas Schied", position: "", image: "/images/players/2-mannschaft/alex.jpg" },
			{ name: "Sebastian Schied", position: "", image: "/images/players/2-mannschaft/basti.jpg" },
			{ name: "Iven Schroeder", position: "", image: "/images/players/2-mannschaft/iven.jpg" },
			{ name: "Jonas Kiefner", position: "", image: "/images/players/2-mannschaft/jonas.jpg" },
			{ name: "Mohamed Ibrahim", position: "", image: "/images/players/2-mannschaft/mohamed.jpg" },
			{ name: "Philipp Schüler", position: "", image: "/images/players/2-mannschaft/philipp.jpg" },
			{ name: "Emilio Fernandez", position: "", image: "/images/players/2-mannschaft/emilio.jpg" },
			{ name: "Heiko Müller", position: "", image: "/images/players/2-mannschaft/heiko.jpg" },
			{ name: "Luca Daden", position: "", image: "/images/players/2-mannschaft/luca.jpg" },
			{ name: "Marcel Schott", position: "", image: "/images/players/2-mannschaft/marcel.jpg" },
			{ name: "Nicolas da Silva", position: "", image: "/images/players/2-mannschaft/nicolas.jpg" },
			{ name: "Pascal Tischler", position: "", image: "/images/players/2-mannschaft/pascal.jpg" },
			{ name: "Robin Schüler", position: "", image: "/images/players/2-mannschaft/robin.jpg" },
			{ name: "Shumail Sayyed", position: "", image: "/images/players/2-mannschaft/shumail.jpg" },
			{ name: "Tobias Weithaler", position: "", image: "/images/players/2-mannschaft/tobias.jpg" },
			{ name: "Tom Dunsch", position: "", image: "/images/players/2-mannschaft/tom.jpg" },
		],
	},
];
