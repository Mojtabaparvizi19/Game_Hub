import image from "../assets/no-image-placeholder-6f3882e0.webp";

function imageUrl(url: string) {
  if (!url) return image;
  const index = url.indexOf("media/");
  const cropUrlAddress = "crop/600/400/";
  const newUrl =
    url.slice(0, index + "media/".length) +
    cropUrlAddress +
    url.slice(index + "media/".length, url.length);

  return newUrl;
}

export default imageUrl;
