export const bonusCreditEligibilitys = [
  { _id: true, name: "YES" },
  { _id: false, name: "NO" }
];

export function getbonusCreditEligibilitys() {
  return bonusCreditEligibilitys.filter(g => g);
}
