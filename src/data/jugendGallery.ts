export type JugendGalleryItem = {
	title: string;
	description: string;
	image: string;
	tag?: string;
	date?: string;
};

export const jugendGallery: JugendGalleryItem[] = [
	{
		title: "E-Jugend Hallenturnier",
		description: "Starker Auftritt beim Winter-Cup mit Finaleinzug.",
		image: "/images/jugend/gallery-hallenturnier.jpg",
		tag: "Turnier",
		date: "Februar 2024",
	},
	{
		title: "Sommerfest & Fun-Cup",
		description: "Parcours, Technikspiele und gemeinsames Grillen mit allen Teams.",
		image: "/images/jugend/gallery-sommerfest.jpg",
		tag: "Event",
		date: "Juli 2024",
	},
	{
		title: "D-Jugend Trainingseinheit",
		description: "Intensives Techniktraining auf dem Kunstrasen.",
		image: "/images/jugend/gallery-training.jpg",
		tag: "Training",
		date: "September 2024",
	},
];
