"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Earth, MoonIcon, SunIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

interface AuthHeaderProps {
  signButtonText: string;
  locales: string[];
}

export const AuthHeader = ({ signButtonText, locales }: AuthHeaderProps) => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const pathname = usePathname();

  const localeToCode = (locale: string) => {
    const match = locale.match(/\(([^)]+)\)/);
    return match ? match[1] : locale;
  };

  return (
    <div className="container mx-auto flex items-center justify-end space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/20 hover:shadow-xl"
          >
            <Earth className="size-2" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {locales.map((locale) => (
            <DropdownMenuItem
              key={localeToCode(locale)}
              onClick={() => {
                router.push(`/${localeToCode(locale)}/${pathname}`);
              }}
            >
              <span className="">{locale}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/20 hover:shadow-xl"
          >
            <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="secondary"
        className="font-heading font-semibold hover:bg-primary/20 hover:shadow-xl"
        onClick={() => router.push("/sign-up")}
      >
        {signButtonText}
      </Button>
    </div>
  );
};
