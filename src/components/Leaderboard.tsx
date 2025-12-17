import React from "react";
import { Crown, Medal } from "lucide-react";

export type LeaderboardRank = "gold" | "silver" | "bronze" | "normal";

export type LeaderboardUser = {
  id: string;
  name: string;
  accuracy: number;
  isMe?: boolean;
};

function getRank(index: number): LeaderboardRank {
  if (index === 0) return "gold";
  if (index === 1) return "silver";
  if (index === 2) return "bronze";
  return "normal";
}

function getBadge(rank: LeaderboardRank): { label: string; icon: "crown" | "medal" | "none" } {
  if (rank === "gold") return { label: "Gold", icon: "crown" };
  if (rank === "silver") return { label: "Silver", icon: "medal" };
  if (rank === "bronze") return { label: "Bronze", icon: "medal" };
  return { label: "", icon: "none" };
}

function BadgeIcon({ kind, rank }: { kind: "crown" | "medal" | "none"; rank: LeaderboardRank }) {
  if (kind === "crown") return <Crown className="w-4 h-4 text-yellow-500" />;
  if (kind === "medal") {
    const color = rank === "silver" ? "text-gray-400" : "text-amber-600";
    return <Medal className={`w-4 h-4 ${color}`} />;
  }
  return null;
}

const defaultUsers: LeaderboardUser[] = [
  { id: "1", name: "Ahmed", accuracy: 95, isMe: true },
  { id: "2", name: "Sara", accuracy: 88 },
  { id: "3", name: "Ali", accuracy: 82 },
  { id: "4", name: "Shahd", accuracy: 76 },
  { id: "5", name: "Omar", accuracy: 70 },
];

export function Leaderboard({ 
  users = defaultUsers,
  className = ""
}: { 
  users?: LeaderboardUser[];
  className?: string;
}) {
  const sorted = [...users].sort((a, b) => b.accuracy - a.accuracy);

  return (
    <section 
      className={`bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-card p-6 ${className}`}
      aria-label="Accuracy leaderboard"
    >
      <header className="text-center mb-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-1">Leaderboard</h3>
        <p className="text-sm text-muted-foreground">Ranked by accuracy</p>
      </header>

      <ol className="space-y-3">
        {sorted.map((u, idx) => {
          const rank = getRank(idx);
          const badge = getBadge(rank);

          const rankStyles = {
            gold: "bg-yellow-500/10 border-yellow-500/30 shadow-[0_0_12px_rgba(234,179,8,0.2)]",
            silver: "bg-gray-400/10 border-gray-400/30",
            bronze: "bg-amber-600/10 border-amber-600/30",
            normal: "bg-muted/50 border-border",
          };

          const positionStyles = {
            gold: "bg-yellow-500 text-yellow-950",
            silver: "bg-gray-400 text-gray-950",
            bronze: "bg-amber-600 text-amber-950",
            normal: "bg-muted text-muted-foreground",
          };

          return (
            <li
              key={u.id}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${rankStyles[rank]} ${u.isMe ? "ring-2 ring-accent/50" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span 
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${positionStyles[rank]}`}
                  aria-label={`Rank ${idx + 1}`}
                >
                  {idx + 1}
                </span>

                <div className="flex flex-col">
                  <span className="font-semibold text-foreground text-sm">
                    {u.name}
                    {u.isMe && <span className="text-accent ml-1">(You)</span>}
                  </span>

                  {badge.icon !== "none" && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <BadgeIcon kind={badge.icon} rank={rank} />
                      <span>{badge.label}</span>
                    </span>
                  )}
                </div>
              </div>

              <span className={`font-bold text-lg ${rank === "gold" ? "text-yellow-500" : rank === "silver" ? "text-gray-400" : rank === "bronze" ? "text-amber-600" : "text-muted-foreground"}`}>
                {u.accuracy}%
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Leaderboard;
