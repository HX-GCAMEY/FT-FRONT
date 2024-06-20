import Link from "next/link";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/about`}>About</Link>
        </li>
        <li>
          <Link href={`/events`}>Events</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
