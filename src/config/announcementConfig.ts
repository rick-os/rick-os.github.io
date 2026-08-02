import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "Visite meu canal no youtube!", // Título do anúncio, default: announcement
	content: "Se você gostou do blog, tenho certeza que gostará dos vídeos que postarei! Se puder inscrever-se eu ficarei muito feliz!", // anúncio em si
	closable: true, // se pode fechar
	link: {
		enable: true, // se tem link
		text: "Visitar", // texto do link
		url: "https://www.youtube.com/channel/UC_BT94MgdoTjLSHCnZATlig", // url
		external: false, // abrir em outra página?
	},
};
