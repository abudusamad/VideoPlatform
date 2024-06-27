"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "next-auth/react";
import * as z from "zod";

import { MenuIcon } from "lucide-react";
import { AvatarImg } from "./avatarImage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, UserRole } from "@prisma/client";
import { SettingsSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface UserMenuProps {
  user?: User;
}

export const UserMenu = ({ user }: UserMenuProps) => {
  const { data: session } = useSession();
    const [isPending] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      role: user?.role || undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof SettingsSchema>) => {
    console.log(values);
    try {
      await axios.patch("api/settings", values);
      toast.success("Role updated");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="relative">
      <div
        className="
          p-2
       md:py-1
        md:px-4
        border-[1px]
        border-neutral-200
        rounded-full
        transition-all
        duration-200
        ease-in-out
        hover:shadow-md
        flex
        items-center

        "
      >
        <Popover>
          <PopoverTrigger asChild>
            <div className="cursor-pointer flex items-center gap-3 ">
              <MenuIcon size={24} />
              <AvatarImg src={session?.user?.image} alt="user" />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-6">
              {/* <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select
                          disabled={isPending}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={UserRole.ADMIN}>
                              Admin
                            </SelectItem>
                            <SelectItem value={UserRole.USER}>User</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form> */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut()}
                className="w-full text-center"
              >
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
