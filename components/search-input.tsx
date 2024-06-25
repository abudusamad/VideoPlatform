"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useCallback, useEffect, useMemo, useState } from "react";

import { Input } from "@/components/ui/input";


export const SearchInput = () => {

  const searchParams = useSearchParams();
  return (
      <div className="relative">
        <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600 dark:text-slate-200" />
      <Input
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 dark:bg-black focus-visible:ring-slate-200 dar:text-slate-200 dark:placeholder-slate-200 dark:focus-visible:ring-slate-200 dark:focus-visible:ring-offset-black dark:focus-visible:ring-offset-2"
        placeholder="Search for a course"
      />
    </div>
  );
};
