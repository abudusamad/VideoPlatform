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
import { UserRole } from "@prisma/client";
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
import { useState, useTransition } from "react";
import { settings } from "@/actions/settings";
import { useCurrentUser } from "@/app/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const UserMenu = () => {
  const user = useCurrentUser();

  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      role: user?.role,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
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
              <Form {...form}>
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
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <Button variant="blue" disabled={isPending} type="submit" className="mt-2">
                    Save
                  </Button>
                </form>
              </Form>
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
