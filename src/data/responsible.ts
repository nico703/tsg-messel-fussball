export type ResponsibleMember = {
	name: string;
	role: string;
	mail?: string;
	phone?: string;
	image: string;
};

export const responsibleMembers: ResponsibleMember[] = [
	{
		name: "Sabine Vorstand",
		role: "1. Vorsitzende",
		mail: "vorstand@tsg-messel.de",
		image: "/images/responsible/sabine-vorstand.jpg",
	},
	{
		name: "Daniel Fußball",
		role: "Abteilungsleiter Fußball",
		mail: "fussball@tsg-messel.de",
		image: "/images/responsible/daniel-fussball.jpg",
	},
	{
		name: "Kerstin Jugend",
		role: "Jugendleitung Fußball",
		mail: "jugend@tsg-messel.de",
		image: "/images/responsible/kerstin-jugend.jpg",
	},
];
