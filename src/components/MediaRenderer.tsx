export const MediaRenderer = ({
  type,
  src,
  alt,
}: {
  type: string;
  src: string;
  alt: string;
}) => {
  const mediaType = type.includes("video")
    ? "video"
    : type.includes("gif")
    ? "gif"
    : "image";

  const commonStyles = {
    width: "100%",
    aspectRatio: "16/9",
  };

  switch (mediaType) {
    case "gif":
    case "image":
      return <img src={src} alt={alt} style={commonStyles} />;

    case "video":
      return (
        <video controls style={commonStyles}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );

    default:
      return <p>Unsupported media type</p>;
  }
};
