export default async function openAlexReq(url: string, retryCount = 2) {
    try {
        const data = await fetch(url, {
            method: "GET"
        });
        const response = await data.json();
        return response;
    } catch (err) {
        if (retryCount > 0) {
            console.warn(`Retrying request to ${url}. Retries left: ${retryCount}`);
            await new Promise(resolve => setTimeout(resolve, 900)); // Delay before retrying
            return openAlexReq(url, retryCount - 1);
        } else {
            console.error(err);
            throw new Error("Error fetching data from OpenAlex");
        }
    }
}