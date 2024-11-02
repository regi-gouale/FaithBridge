import fetchContentType, { StrapiData } from "@/lib/strapi/fetchContentType";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

interface HeaderProps {
  locale: string;
}

export const Header = async ({ locale }: HeaderProps) => {
  const headerContent = (await fetchContentType(
    "headers",
    `locale=${locale}`
  )) as StrapiData;

  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link className="flex items-center justify-center font-heading" href="#">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/logo_dbbf5809ff.svg`}
          alt="Company Logo"
          width={24}
          height={24}
          priority
          className="mr-2"
        />
        <span className="font-bold">{headerContent.appName as string}</span>
      </Link>
      <div className="ml-auto">
        <div className="flex sm:hidden">
          <Button variant="ghost">
            <MenuIcon size={24} />
          </Button>
        </div>
        <nav className="ml-auto hidden gap-4 font-heading font-medium sm:flex sm:gap-6">
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              {headerContent.features as string}
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              {headerContent.pricing as string}
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              {headerContent.about as string}
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              {headerContent.contact as string}
            </Link>
        </nav>
      </div>
    </header>
  );
};
