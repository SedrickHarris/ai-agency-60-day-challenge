"use client";

import { useState } from "react";
import { mockParticipants } from "@/data/mock-participants";
import { formatCurrency } from "@/lib/format-currency";

const niches = Array.from(new Set(mockParticipants.map((participant) => participant.niche)));

export function LeaderboardPreview() {
  const [query, setQuery] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("all");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredParticipants = mockParticipants.filter((participant) => {
    const matchesQuery =
      participant.name.toLowerCase().includes(normalizedQuery) ||
      participant.niche.toLowerCase().includes(normalizedQuery);
    const matchesNiche = selectedNiche === "all" || participant.niche === selectedNiche;
    return matchesQuery && matchesNiche;
  });

  return (
    <div className="leaderboard-frame">
      <div className="leaderboard-toolbar">
        <label className="filter-field">
          <span className="filter-field__label">Search participants</span>
          <span className="filter-field__input-wrap">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <circle cx="8.7" cy="8.7" r="5.7" stroke="currentColor" strokeWidth="1.5" />
              <path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name or niche"
            />
          </span>
        </label>
        <label className="filter-field filter-field--select">
          <span className="filter-field__label">Filter by niche</span>
          <select value={selectedNiche} onChange={(event) => setSelectedNiche(event.target.value)}>
            <option value="all">All niches</option>
            {niches.map((niche) => (
              <option value={niche} key={niche}>{niche}</option>
            ))}
          </select>
        </label>
        <p className="leaderboard-toolbar__count" aria-live="polite">
          {filteredParticipants.length} demo {filteredParticipants.length === 1 ? "entry" : "entries"}
        </p>
      </div>

      {filteredParticipants.length > 0 ? (
        <>
          <div className="leaderboard-table-wrap">
            <table className="leaderboard-table">
              <caption className="visually-hidden">Mock standings. These are illustrative demo entries, not live results.</caption>
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Participant</th>
                  <th scope="col">Niche</th>
                  <th scope="col">Clients</th>
                  <th scope="col">Verified cash collected</th>
                </tr>
              </thead>
              <tbody>
                {filteredParticipants.map((participant) => (
                  <tr className={participant.rank === 1 ? "leaderboard-table__leader" : ""} key={participant.rank}>
                    <td><span className="rank-number">{String(participant.rank).padStart(2, "0")}</span></td>
                    <th scope="row">
                      <span className="participant-cell">
                        <span className={`avatar${participant.rank === 1 ? " avatar--leader" : ""}`} aria-hidden="true">
                          {participant.initials}
                        </span>
                        <span>{participant.name}</span>
                      </span>
                    </th>
                    <td>{participant.niche}</td>
                    <td>{participant.clientCount}</td>
                    <td className="leaderboard-table__cash">{formatCurrency(participant.verifiedCashCollected)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ol className="leaderboard-mobile-list" aria-label="Mock leaderboard standings">
            {filteredParticipants.map((participant) => (
              <li className="leaderboard-mobile-row" key={participant.rank}>
                <span className="leaderboard-mobile-row__rank">{String(participant.rank).padStart(2, "0")}</span>
                <span className={`avatar${participant.rank === 1 ? " avatar--leader" : ""}`} aria-hidden="true">
                  {participant.initials}
                </span>
                <span className="leaderboard-mobile-row__person">
                  <strong>{participant.name}</strong>
                  <small>{participant.niche} <i aria-hidden="true">·</i> {participant.clientCount} clients</small>
                </span>
                <strong className="leaderboard-mobile-row__cash">{formatCurrency(participant.verifiedCashCollected)}</strong>
              </li>
            ))}
          </ol>
        </>
      ) : (
        <p className="leaderboard-empty">No demo entries match those filters.</p>
      )}

      <div className="leaderboard-footnote">
        <span><span className="leaderboard-footnote__dot" aria-hidden="true" /> MOCK STANDINGS · DEMO PREVIEW</span>
        <span>Last reconciled: illustrative preview only · not live data</span>
      </div>
    </div>
  );
}