import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-4xl font-black mb-4">404</h2>
      <p className="text-xl text-muted-foreground mb-8">Could not find the requested resource</p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold tracking-widest text-sm uppercase hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
