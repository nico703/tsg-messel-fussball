export type TrainingsSlot = {
    wochentag: string; // "Montag"
    uhrzeit: string;   // "17:00 - 18:30"
    platz: string;     // "Rasenplatz 1"
  };
  
  export type JugendTeam = {
    name: string;          // "E-Jugend"
    jahrgaenge: string;    // "Jahrgänge 2014–2015"
    trainer: string;
    coTrainer?: string;
    kontaktMail: string;
    slots: TrainingsSlot[];
  };
  
  export const jugendTeams: JugendTeam[] = [
    {
      name: "G-Jugend",
      jahrgaenge: "Jahrgänge 2018–2019",
      trainer: "Trainer G",
      kontaktMail: "jugend@tsg-messel.de",
      slots: [
        {
          wochentag: "Mittwoch",
          uhrzeit: "16:00 – 17:00",
          platz: "Kleinfeld"
        },
      ],
    },
    {
      name: "F-Jugend",
      jahrgaenge: "Jahrgänge 2016–2017",
      trainer: "Trainer F",
      kontaktMail: "jugend@tsg-messel.de",
      slots: [
        {
          wochentag: "Dienstag",
          uhrzeit: "17:00 – 18:15",
          platz: "Rasenplatz"
        },
        {
          wochentag: "Donnerstag",
          uhrzeit: "17:00 – 18:15",
          platz: "Rasenplatz"
        },
      ],
    },
    // weitere Teams ...
  ];
  