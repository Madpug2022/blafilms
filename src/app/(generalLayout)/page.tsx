import MediaDisplay from "@/components/MediaDisplay/MediaDisplay";

export default function Home({ searchParams }:
  { searchParams: { q: string; page: number; } }
) {

  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <MediaDisplay query={searchParams.q} page={searchParams.page} />
    </div>
  );
}
