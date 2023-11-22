export function getImageUrl(
  id: number,
  imageUrl: string,
  resourceName: string
) {
  const splitResource = resourceName.split(".")[0] || resourceName;
  const fileExtension = extractFileExtension(imageUrl);
  // return `http://localhost:3001/file/img?folder=${splitResource}&id=${id}&ex=${fileExtension}`;
  return `resources/${splitResource}/${id}.${fileExtension}`;
}

function extractFileExtension(url: string): string | null {
  const urlParts = url.split("/");
  const fileNameWithExtension = urlParts.pop();
  const fileNameParts = fileNameWithExtension?.split(".");
  const fileExtension = fileNameParts?.pop();
  return fileExtension?.toLowerCase() || null;
}
