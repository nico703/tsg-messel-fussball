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
		jahrgaenge: "Jahrgang bis 2021",
		trainer: "Karl Heinz",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Donnerstag",
				uhrzeit: "16:00 – 18:00",
				platz: "",
			},
		],
	},
	{
		name: "G1-Jugend",
		jahrgaenge: "Jahrgang 2019",
		trainer: "Anton, Nils",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Donnerstag",
				uhrzeit: "17:00 – 18:30",
				platz: "",
			},
		],
	},
	{
		name: "G2-Jugend",
		jahrgaenge: "Jahrgang 2020",
		trainer: "Senol, Sophie",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Freitag",
				uhrzeit: "16:00 – 17:00",
				platz: "",
			},
		],
	},
	{
		name: "G3-Jugend",
		jahrgaenge: "Jahrgang 2021",
		trainer: "Dominik",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Freitag",
				uhrzeit: "16:00 – 17:00",
				platz: "",
			},
		],
	},
	{
		name: "F1-Jugend",
		jahrgaenge: "Jahrgang 2017",
		trainer: "Corinna, Norman",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Dienstag",
				uhrzeit: "17:00 – 18:30",
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
		name: "F2-Jugend",
		jahrgaenge: "Jahrgang 2018",
		trainer: "Jörn, Dejan, Jojo",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Dienstag",
				uhrzeit: "17:30 – 18:45",
				platz: "",
			},
			{
				wochentag: "Donnerstag",
				uhrzeit: "17:30 – 18:45",
				platz: "",
			},
		],
	},
	{
		name: "E1-Jugend",
		jahrgaenge: "Jahrgang 2015",
		trainer: "Jonas, Matthias, Ray",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Dienstag",
				uhrzeit: "17:00 – 18:30",
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
		name: "E2-Jugend",
		jahrgaenge: "Jahrgang 2016",
		trainer: "Semih, Michael",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Montag",
				uhrzeit: "17:00 – 18:30",
				platz: "",
			},
			{
				wochentag: "Mittwoch",
				uhrzeit: "17:00 – 18:30",
				platz: "",
			},
		],
	},
	{
		name: "D-Jugend",
		jahrgaenge: "Jahrgänge 2013–2014",
		trainer: "Tobias, Dominic",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Dienstag",
				uhrzeit: "17:15 – 18:45",
				platz: "",
			},
			{
				wochentag: "Donnerstag",
				uhrzeit: "17:15 – 18:45",
				platz: "",
			},
		],
	},
	{
		name: "C-Junioren",
		jahrgaenge: "Jahrgänge 2011–2012",
		trainer: "Kevin, Robert",
		kontaktMail: "jugend@tsg-messel.de",
		slots: [
			{
				wochentag: "Mittwoch",
				uhrzeit: "18:00 – 19:30",
				platz: "",
			},
			{
				wochentag: "Freitag",
				uhrzeit: "18:00 – 19:30",
				platz: "",
			},
		],
	},
];
