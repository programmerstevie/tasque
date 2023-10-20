export function bind<A, B>(
  f: (a: A) => B | undefined,
  a: A | undefined
): B | undefined;
export function bind<A, B>(f: (a: A) => B | null, a: A | null): B | null;
export function bind<A, B>(
  f: ((a: A) => B | null) | ((a: A) => B | undefined),
  a: (A | null) | (A | undefined)
) {
  if (a === undefined) return undefined;
  if (a === null) return null;
  return f(a);
}
