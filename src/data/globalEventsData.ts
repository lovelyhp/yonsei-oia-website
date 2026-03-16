export interface GlobalEventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

export const GLOBAL_EVENTS_DATA: GlobalEventItem[] = [
  {
    id: 1,
    title: "Visit from the Delegation of Embassy of Italy in Seoul and Guest Lecture by Astronaut Maurizio Cheli",
    date: "2025.02.13",
    location: "Underwood Hall",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202502131506015436164062500.jpg",
  },
  {
    id: 2,
    title: "Visit from the President of the Georgia Institute of Technology",
    date: "2025.02.13",
    location: "Underwood Hall",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202502131454505369059765625.jpg",
  },
  {
    id: 3,
    title: "Visit from the Delegation of The University of Florida",
    date: "2024.12.10",
    location: "Sinchon Campus",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202412101601145767485546875.jpg",
  },
];
