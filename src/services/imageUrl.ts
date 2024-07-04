function imageUrl(url: string) {
  if (!url)
    return "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
  const index = url.indexOf("media/");
  const cropUrlAddress = "crop/600/400/";
  const newUrl =
    url.slice(0, index + "media/".length) +
    cropUrlAddress +
    url.slice(index + "media/".length, url.length);

  return newUrl;
}

export default imageUrl;
