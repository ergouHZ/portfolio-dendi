// filter the certain url needed in this app, if there is not url, return original input
export default function ExtractUrl(input:string):string {
  //the Regex is written by ai
  const urlRegex = /https?:\/\/[^\s]+/g;
  const matches = input.match(urlRegex);

  if (matches) {
    const filteredUrls = matches.filter((url) =>
      url.startsWith("https://api.openalex.org/")
    );

    if (filteredUrls.length > 0) {
      return filteredUrls[0];
    }
  }
  return input;
}
