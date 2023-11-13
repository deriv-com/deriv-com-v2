import { closestMatch, distance } from 'closest-match';

export function utils(): string {
  return 'utils';
}

export const searchString = (
  query: string,
  items: string[],
  maxDistance = 2,
) => {
  const matches = closestMatch(query, items, true);
  const finalMatches: string[] = [];

  if (Array.isArray(matches)) {
    matches.forEach((match) => {
      let lowestDistance = 10;
      let stringExist = false;

      match.split(' ').forEach((m) => {
        const dist = distance(query, m);

        if (lowestDistance > dist) {
          lowestDistance = dist;
        }

        if (m.toLowerCase().includes(query.toLowerCase())) {
          stringExist = true;
        }
      });

      if (
        lowestDistance <= maxDistance ||
        stringExist ||
        match.toLowerCase().includes(query.toLowerCase())
      ) {
        finalMatches.push(match);
      }
    });

    // Merge other exact matches inside the string
    const otherMatches = items.filter((e) =>
      e.toLowerCase().includes(query.toLowerCase()),
    );

    return Array.from(new Set(otherMatches.concat(finalMatches)));
  }

  return [];
};
