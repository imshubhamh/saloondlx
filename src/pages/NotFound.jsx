import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[--c-primary]">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-[--c-ink] sm:text-4xl">
        This page hasn't been booked yet
      </h1>
      <p className="mt-4 text-[--c-muted]">
        The page you're looking for doesn't exist. Let's get you back to the
        homepage.
      </p>
      <Link to="/" className="mt-8">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </section>
  );
}
