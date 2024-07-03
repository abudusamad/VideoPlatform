"use client";

import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/app/hooks/use-current-role";
import { FormErrorDb } from "./form-error-db";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormErrorDb message="You do not have permission to add course login to change user Role!" />
    );
  }

  return <>{children}</>;
};
