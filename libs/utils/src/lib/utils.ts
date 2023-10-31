import { closestMatch, distance } from 'closest-match';

export function utils(): string {
  return 'utils';
}

export const searchString = (
  query: string,
  items: string[],
  max_distance = 2,
) => {
  const matches = closestMatch(query, items, true);
  const final_matches: string[] = [];

  if (Array.isArray(matches)) {
    matches.forEach((match) => {
      let lowest_distance = 10;
      let string_exist = false;

      match.split(' ').forEach((m) => {
        const dist = distance(query, m);

        if (lowest_distance > dist) {
          lowest_distance = dist;
        }

        if (m.toLowerCase().includes(query.toLowerCase())) {
          string_exist = true;
        }
      });

      if (
        lowest_distance <= max_distance ||
        string_exist ||
        match.toLowerCase().includes(query.toLowerCase())
      ) {
        final_matches.push(match);
      }
    });

    // Merge other exact matches inside the string
    const other_matches = items.filter((e) =>
      e.toLowerCase().includes(query.toLowerCase()),
    );

    return Array.from(new Set(other_matches.concat(final_matches)));
  }

  return [];
};

export const slugify = (input: string): string =>
  input
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .trim();
