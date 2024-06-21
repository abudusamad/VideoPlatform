import { signOut } from "@/auth";

const SettingsPage = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
          }}
          className="flex h-full items-center justify-center text-3xl font-bold"
    >
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default SettingsPage;
