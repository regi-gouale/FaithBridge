import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, LogOut, SettingsIcon, User } from "lucide-react";
// import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const SearchBar: React.FC = () => (
  <div className="flex items-center">
    {/* <Search className="mr-2 size-4 text-muted-foreground" />
    <Input type="search" placeholder="Search..." className="w-64" /> */}
  </div>
);

const NotificationsButton: React.FC = () => (
  <Button variant="ghost" size="icon">
    <Bell className="size-5" />
  </Button>
);

const UserMenu: React.FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative size-8 rounded-full">
        <Avatar className="size-8">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">John Doe</p>
          <p className="text-xs leading-none text-muted-foreground">
            john.doe@example.com
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <User className="mr-2 size-4" />
        <span>Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <SettingsIcon className="mr-2 size-4" />
        <span>Settings</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 size-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const DashboardHeader: React.FC = () => {
  return (
    <header className="sticky top-0 mx-auto flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4">
      <div className="flex items-center">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <SearchBar />
      </div>
      <div className="flex items-center space-x-4">
        <NotificationsButton />
        <UserMenu />
      </div>
    </header>
  );
};
