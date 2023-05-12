import { getAllCandidates } from "../public/data";

export default function CreatCandidate({ candidates }) {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="name" />
        <input type="number" name="number" placeholder="Age"></input>
        <input type="text" name="email" placeholder="email"></input>
        <label>
          Stage:
          <select name="Stage">
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="FINANCE">FINANCE</option>
          </select>
        </label>
      </form>
      <button>tryck</button>
      <div>
        {candidates.map((candidate) => (
          <div>
            <h3>{candidate.name}</h3>
            <p>{candidate.age}</p>
            <p>{candidate.email}</p>
            <p>{candidate.stage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const candidates = getAllCandidates();
  return {
    props: { candidates },
  };
}
