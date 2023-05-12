const candidates = [
  {
    name: "Linnea",
    email: "Linnea.hulu@hotmail.com",
    age: 23,
    stage: "HR",
  },
  {
    name: "Dani",
    email: "Daniela.hulu@hotmail.com",
    age: 43,
    stage: "IT",
  },
  {
    name: "Matilda",
    email: "Matilda.hulu@hotmail.com",
    age: 33,
    stage: "FINANCE",
  },
];

export const getAllCandidates = () => {
  return candidates.map((candidate) => ({
    name: candidate.name,
    email: candidate.email,
    age: candidate.age,
    stage: candidate.stage,
  }));
};
