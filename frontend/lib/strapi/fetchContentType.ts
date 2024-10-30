export interface StrapiData {
  id: number;
  [key: string]: string | number | boolean;
}

interface StrapiResponse {
  data: StrapiData | StrapiData[];
}

export function spreadStrapiData(
  data: StrapiResponse
): StrapiData | null | undefined {
  if (Array.isArray(data.data) && data.data.length > 0) {
    return data.data[0];
  }
  if (!Array.isArray(data.data)) {
    return data.data;
  }
  return null;
}

export default async function fetchContentType(
  contentType: string,
  params: string
): Promise<StrapiData | StrapiData[] | null | undefined> {
  try {
    const url = new URL(
      `api/${contentType}`,
      process.env.NEXT_PUBLIC_STRAPI_API_URL
    );

    const response = await fetch(`${url.href}?${params}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Strapi (url=${url.toString()}, status=${
          response.status
        })`
      );
    }
    const jsonData: StrapiResponse = await response.json();

    return spreadStrapiData(jsonData);
  } catch (error) {
    console.error("FetchContentTypeError", error);
  }
}
