const tintMap: Record<string, string> = {
  emerald: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
  blue: 'bg-blue-400/10 border-blue-400/20 text-blue-400',
  orange: 'bg-orange-400/10 border-orange-400/20 text-orange-400',
  purple: 'bg-purple-400/10 border-purple-400/20 text-purple-400',
  pink: 'bg-pink-400/10 border-pink-400/20 text-pink-400',
};

export function getBadgeTint(color: string): string {
  return tintMap[color] ?? 'bg-surface border-stroke-subtle text-secondary';
}
