"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter} from "next/navigation";
import qs from "query-string";

import { useCallback, useEffect, useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/app/hooks/use-debounce";


export const SearchInput = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const debouncedValue = useDebounce(value, 500);

  const generatedUrl = useMemo(() => {
    return qs.stringifyUrl(
      {
        url: pathname,
        query: {
          name: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
  }, [pathname, debouncedValue]);

  useEffect(() => {
    router.push(generatedUrl);
  }, [generatedUrl, router]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600 dark:text-slate-200" />
      <Input
        value={value}
        onChange={onChange}
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 dark:bg-black focus-visible:ring-slate-200 dar:text-slate-200 dark:placeholder-slate-200 dark:focus-visible:ring-slate-200 dark:focus-visible:ring-offset-black dark:focus-visible:ring-offset-2"
        placeholder="Search for a course"
      />
    </div>
  );
};
