import Link from "next/link";

export default function Landingpage() {
  return (
    <div>
      <div>
        <h1>Welcome to danis recruitmentpage</h1>
        <Link href={"/hire"}>
          <div>
            {" "}
            <h1>HIRE</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
