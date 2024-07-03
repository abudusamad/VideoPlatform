

import { FaExclamationTriangle } from "react-icons/fa";

interface FormErrorProps {
  message?: string;
}

export const FormErrorDb = ({ message }: FormErrorProps) => {
  return (
    <div className="bg-rose-500/15 p-3 rounded-md flex items-center gap-x-2  text-sm text-rose-500 border-l-8 border-rose-500">
      <FaExclamationTriangle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
