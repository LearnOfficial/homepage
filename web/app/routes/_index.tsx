import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="font-bold">Welcome to Learn Official</h1>
    </div>
  );
}
