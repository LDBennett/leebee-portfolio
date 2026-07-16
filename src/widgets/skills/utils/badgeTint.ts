const tintMap: Record<string, string> = {
  emerald: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400 hover:bg-emerald-400/20 hover:border-emerald-400/40 hover:text-emerald-300',
  blue: 'bg-blue-400/10 border-blue-400/20 text-blue-400 hover:bg-blue-400/20 hover:border-blue-400/40 hover:text-blue-300',
  orange: 'bg-orange-400/10 border-orange-400/20 text-orange-400 hover:bg-orange-400/20 hover:border-orange-400/40 hover:text-orange-300',
  purple: 'bg-purple-400/10 border-purple-400/20 text-purple-400 hover:bg-purple-400/20 hover:border-purple-400/40 hover:text-purple-300',
  pink: 'bg-pink-400/10 border-pink-400/20 text-pink-400 hover:bg-pink-400/20 hover:border-pink-400/40 hover:text-pink-300',
};

export function getBadgeTint(color: string): string {
  return tintMap[color] ?? 'bg-surface border-stroke-subtle text-secondary';
}
