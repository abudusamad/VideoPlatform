import { useMemo } from "react";

export const useOrigin = () => {
	const origin = useMemo(() => {
		return typeof window !== "undefined" && window.location.origin
			? window.location.origin
			: "";
	}, []);
	return origin;
};