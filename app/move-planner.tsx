"use client";
import { useState, type FormEvent } from "react";

export default function MovePlanner() {
  const [moveType, setMoveType] = useState("Local");
  const [summary, setSummary] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [sendStatus, setSendStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  async function createPlan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const movePlan = `MY MOVE PLAN — JAMMEH ASSALAAM MOVING

Name: ${data.get("name")}
Email: ${data.get("email")}
Move type: ${moveType}
From: ${data.get("from")}
To: ${data.get("to")}
Preferred date: ${data.get("date") || "Flexible"}
Home size: ${data.get("size")}
Packing support: ${data.get("packing")}
Access and household preferences: ${data.get("notes") || "To discuss"}

This is a planning summary, not a quote or reservation. Confirm pricing, availability, and service arrangements before booking.`;
    setSummary(movePlan);
    setCopyStatus("");
    setSendStatus("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/move-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          moveType,
          from: data.get("from"),
          to: data.get("to"),
          date: data.get("date"),
          size: data.get("size"),
          packing: data.get("packing"),
          notes: data.get("notes"),
        }),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "We could not send your move plan.");
      setSendStatus("Your move plan has been sent to Jammeh AsSalaam Moving.");
    } catch (error) {
      setSendStatus(error instanceof Error ? error.message : "Your plan was created, but we could not send it. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  }
  function downloadPlan() {
    const url = URL.createObjectURL(
      new Blob([summary], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "my-move-plan.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("Copied");
    } catch {
      setCopyStatus("Unable to copy. Please download your plan instead.");
    }
  }
  return (
    <>
      {summary && (
        <div className="plan-result" aria-live="polite">
          <span className="result-icon">✓</span>
          <h3>Your move plan is ready.</h3>
          <p>
            Download or copy it for your next conversation. Your move is not
            booked until availability and pricing are confirmed.
          </p>
          {sendStatus && <p role="status">{sendStatus}</p>}
          <p>
            <a className="text-link" href="tel:+14159405405">
              Discuss your plan: (415) 940-5405
            </a>
          </p>
          <pre>{summary}</pre>
          <div className="result-actions">
            <button className="button" onClick={downloadPlan}>
              ↓ Download plan
            </button>
            <button className="secondary" onClick={copyPlan}>
              {copyStatus === "Copied" ? "Copied" : "Copy plan"}
            </button>
          </div>
          {copyStatus && copyStatus !== "Copied" && (
            <p role="status">{copyStatus}</p>
          )}
          <button
            className="text-link edit-plan"
            onClick={() => setSummary("")}
          >
            Edit move details
          </button>
        </div>
      )}
      <form onSubmit={createPlan} hidden={Boolean(summary)}>
        <div className="form-title">
          <h3>Your move, at a glance.</h3>
          <span>~ 1 minute</span>
        </div>
        <fieldset className="move-type">
          <legend>Where are you moving?</legend>
          <label className={moveType === "Local" ? "selected" : ""}>
            <input type="radio" name="type" defaultChecked value="Local" />
            Local
          </label>
          <label className="">
            <input
              type="radio"
              name="type"
              value="Cross-country"
              checked={moveType === "Cross-country"}
              onChange={() => setMoveType("Cross-country")}
            />
            Cross-country
          </label>
        </fieldset>
        <div className="form-grid">
          <label>
            Your name
            <input name="name" autoComplete="name" required maxLength={100} />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required maxLength={320} />
          </label>
          <label>
            Moving from
            <input
              placeholder="City or ZIP code"
              autoComplete="off"
              required
              maxLength={100}
              name="from"
            />
          </label>
          <label>
            Moving to
            <input
              placeholder="City or ZIP code"
              autoComplete="off"
              required
              maxLength={100}
              name="to"
            />
          </label>
          <label>
            Preferred moving date
            <input type="date" name="date" />
          </label>
          <label>
            Home size
            <select name="size">
              <option>Studio / small move</option>
              <option>1 bedroom</option>
              <option>2 bedrooms</option>
              <option>3 bedrooms</option>
              <option>4+ bedrooms</option>
              <option>Other / not sure</option>
            </select>
          </label>
        </div>
        <label>
          Packing support
          <select name="packing">
            <option>Moving only</option>
            <option>Some packing help</option>
            <option>Full packing support</option>
            <option>Loading / unloading only</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Anything we should know? <span className="optional">Optional</span>
          <textarea
            name="notes"
            rows={3}
            maxLength={1500}
            placeholder="Stairs, parking, fragile items, prayer times, or privacy preferences…"
          ></textarea>
        </label>
        <button className="button form-submit" type="submit" disabled={submitting}>
          {submitting ? "Sending your move plan…" : "Create my move plan"}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-clipboard-list"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <path d="M12 11h4"></path>
            <path d="M12 16h4"></path>
            <path d="M8 11h.01"></path>
            <path d="M8 16h.01"></path>
          </svg>
        </button>
        <p className="form-foot">
          A planning summary, not an estimate or confirmed booking.
        </p>
      </form>{" "}
    </>
  );
}
