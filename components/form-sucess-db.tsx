import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccessDb = ({ message }: FormSuccessProps) => {
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2  text-sm text-emerald-500 border-l-8 border-emerald-500">
      <CheckCircleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
