import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-forest grass-pattern">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-8xl mb-6">{"\u{1F33F}"}</div>
        <h1 className="font-heading font-extrabold text-6xl sm:text-8xl text-sage mb-4">
          404
        </h1>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-cream mb-4">
          Looks Like This Page Got Mowed Down
        </h2>
        <p className="font-body text-cream/60 text-lg mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. But do
          not worry &mdash; your lawn is still in good hands.
        </p>
        <Link
          href="/"
          className="inline-block bg-sage hover:bg-lime text-forest font-heading font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
