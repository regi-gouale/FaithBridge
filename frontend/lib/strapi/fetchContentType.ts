export interface StrapiData {
  id: number;
  [key: string]: string | number | boolean | StrapiData | StrapiData[];
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
  params?: string
): Promise<StrapiData | StrapiData[] | null | undefined> {
  try {
    const url = new URL(
      `api/${contentType}`,
      process.env.NEXT_PUBLIC_STRAPI_API_URL
    );

    const response = await fetch(
      `${url.href}?populate=*${params ? `&${params}` : ""}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

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

export async function fetchLocales(): Promise<string[]> {
  const url = new URL(
    "api/i18n/locales",
    process.env.NEXT_PUBLIC_STRAPI_API_URL
  );

  const response = await fetch(url.href, {
    method: "GET",
    cache: "no-store",
  });

  if (response.ok) {
    const locales = await response.json();
    return locales.map((locale: StrapiData) => locale.name as string);
  }
  return [];
}

export function fetchImageUrl(imageName: string): string {
  const url = new URL(
    `uploads/${imageName}`,
    process.env.NEXT_PUBLIC_STRAPI_API_URL
  );
  return url.href;
}
