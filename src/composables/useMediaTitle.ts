import type { IMedia } from "@/models/Media.model";
import { useMediaStore } from "@/stores/media.store";
import { computed } from "vue";

export function useMediaTitle(defaultTitle: string, medias: () => IMedia[]) {
	const mediaStore = useMediaStore();

	const title = computed(() => {
		if (mediaStore.filter) {
			return `Found ${medias()?.length} results for '${mediaStore.filter}'`;
		}
		return defaultTitle;
	});
	return {
		title,
	};
}
