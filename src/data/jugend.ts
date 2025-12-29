export type TrainingsSlot = {
    wochentag: string; // "Montag"
    uhrzeit: string;   // "17:00 - 18:30"
    platz: string;     // "Rasenplatz 1"
  };
  
 export type JugendTeam = {
    name: string;          // "E-Jugend"
    jahrgaenge: string;    // "Jahrgänge 2014–2015"
    trainer: string;
    kontaktMail: string;
    slots: TrainingsSlot[];
  };
  
export const jugendTeams: JugendTeam[] = [
	{
		name: "Minis",
		jahrgaenge: "Jahrgang 2019",
		trainer: "Karl Heinz Fröhner, Sarah Bohland, Jan Bohland",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Donnerstag",
				uhrzeit: "17:00 – 18:00",
				platz: "Sporthalle",
			},
		],
	},
	{
		name: "G-Jugend",
		jahrgaenge: "Jahrgänge 2017–2018",
		trainer: "Norman Bauer, Gilbert Clippard, Jörn Glaw, Mario Töpel",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Mittwoch",
				uhrzeit: "17:00 – 18:30",
				platz: "",
			},
		],
	},
	{
		name: "F-Jugend",
		jahrgaenge: "Jahrgänge 2015–2016",
		trainer: "Matthias Blatt, Pierre Reisinger, Semih Demir, Mehmet Avci",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Dienstag",
				uhrzeit: "16:30 – 18:00",
				platz: "",
			},
			{
				wochentag: "Freitag",
				uhrzeit: "16:30 – 18:00",
				platz: "",
			},
		],
	},
	{
		name: "E-Jugend",
		jahrgaenge: "Jahrgänge 2013–2014",
		trainer: "Lukas Galinski, John Kay Kappeser",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Dienstag",
				uhrzeit: "17:30 – 18:30",
				platz: "",
			},
			{
				wochentag: "Donnerstag",
				uhrzeit: "17:00 – 18:30",
				platz: "",
			},
		],
	},
	{
		name: "D-Jugend",
		jahrgaenge: "Jahrgänge 2011–2012",
		trainer: "David Maerz, Michael Weygand",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Dienstag",
				uhrzeit: "17:00 – 19:00",
				platz: "",
			},
			{
				wochentag: "Donnerstag",
				uhrzeit: "17:00 – 19:00",
				platz: "",
			},
		],
	},
];
