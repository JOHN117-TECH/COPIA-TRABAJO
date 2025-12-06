type SlideItem = {
  type: "video" | "image";
  src: string;
  videoType?: "youtube" | "vimeo";
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
};

export default function transformHomeSliders(data: any): SlideItem[] {
  if (!data?.homeSliders?.edges) return [];

  return data.homeSliders.edges.map(({ node }: any) => {
    const isVideo = node.link?.includes("youtube.com") || node.link?.includes("vimeo.com");
    const videoType = node.link?.includes("youtube.com")
      ? "youtube"
      : node.link?.includes("vimeo.com")
      ? "vimeo"
      : undefined;

    return {
      type: isVideo ? "video" : "image",
      src: isVideo ? node.link : node.imageThumb || node.imagePhone || "", // fallback a imagen
      ...(isVideo && { videoType }), // solo incluye videoType si es video
      title: node.title || "",
      description: node.description || "",
      buttonText: node.buttonText || "",
      onClick: () => {},
    };
  });
}
