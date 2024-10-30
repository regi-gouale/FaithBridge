interface StrapiData {
  id: number;
  createdAt: string;
  documentId: string;
  dontHaveAccount: string;
  email: string;
  emailPlaceholder: string;
  locale: string;
  loginButton: string;
  loginDescription: string;
  loginText: string;
  loginWithButton: string;
  password: string;
  publishedAt: string;
  signUpLink: string;
  updatedAt: string;
  [key: string]: unknown;
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
  params: string,
): Promise<StrapiData | StrapiData[] | null | undefined> {
  try {
    // Construct the full URL for the API request
    const url = new URL(
      `api/${contentType}`,
      process.env.NEXT_PUBLIC_STRAPI_API_URL
    );

    // Perform the fetch request with the provided query parameters
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
    // return spreadData ? spreadStrapiData(jsonData) : jsonData;
    return spreadStrapiData(jsonData);
  } catch (error) {
    // Log any errors that occur during the fetch process
    console.error("FetchContentTypeError", error);
  }
}
