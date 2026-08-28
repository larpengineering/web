import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="not-found-code">404 / continuity error</span>
      <div>
        <h1>wrong bit.</h1>
        <p>this route is doing a very convincing impression of something real.</p>
      </div>
      <Link className="button button-solid" href="/">
        back to reality <span aria-hidden="true">↙</span>
      </Link>
    </main>
  );
}
