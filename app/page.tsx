import Article from "@/ui/components/article";

export default function Home() {
  return (
    <main className="flex flex-col grow w-full h-full">
      <div className="flex grow border max-h-[50vh] justify-center items-center">
        <Article />
      </div>
    </main>
  );
}
