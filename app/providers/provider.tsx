import { ConfettiProvider } from "./confetti-provider";
import { ToasterProvider } from "./toast-provider";

export const Provider = () => {
  return (
    <>
      <ConfettiProvider />
      <ToasterProvider />
    </>
  );
};
