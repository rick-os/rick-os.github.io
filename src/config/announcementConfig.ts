import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "", // Título do anúncio, default: announcement
	content: "Eu vim fazer um anúncio, shadow o ouriço é um filho da puta.", // anúncio em si
	closable: true, // se pode fechar
	link: {
		enable: true, // se tem link
		text: "Learn More", // texto do link
		url: "/about/", // url
		external: false, // abrir em outra página?
	},
};
