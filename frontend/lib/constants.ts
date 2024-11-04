import {
  AudioWaveformIcon,
  Calendar,
  CommandIcon,
  HomeIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import { ElementType } from "react";

export const protectedRoutes = [
  "/dashboard",
  "/interviews",
  "/members",
  "/settings",
];

export const navMain = [
  {
    title: { en: "Dashboard", fr: "Tableau de bord" },
    url: "/dashboard/",
    icon: HomeIcon,
  },
  {
    title: { en: "Interviews", fr: "Entretiens" },
    url: "/interviews",
    icon: Calendar,
  },
  {
    title: { en: "Members", fr: "Membres" },
    url: "/members",
    icon: UsersIcon,
  },
  {
    title: { en: "Settings", fr: "Paramètres" },
    url: "/settings",
    icon: SettingsIcon,
  },
];

export const teams: Team[] = [
  {
    name: "Team 1",
    logo: CommandIcon,
    plan: "FREE",
  },
  {
    name: "Team 2",
    logo: AudioWaveformIcon,
    plan: "PRO",
  },
];

export interface Team {
  name: string;
  logo: ElementType;
  plan: "FREE" | "PRO";
}

export interface NavItem {
  title: { [key: string]: string };
  url: string;
  icon: ElementType;
  isActive?: boolean;
}
