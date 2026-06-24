import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-accent-strong text-sm font-bold tracking-[0.1em] uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl">Page not found</h1>
      <p className="text-muted mt-4 max-w-md">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link href="/" className={`${buttonVariants({ size: "lg" })} mt-8`}>
        Back to home
      </Link>
    </Container>
  );
}
