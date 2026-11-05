# Documentation

Everything a developer reads rather than runs. The code lives in `src/` and `public/`; this folder explains it.

| Folder | What is in it |
|---|---|
| [`specs/`](specs/) | What the site must do: overview, requirements, architecture, data model, roadmap, data sources and Module H (motion). Also `DECISIONS.md`, the log of every choice and deviation, and `PARKING-LOT.md`, the ideas not being built now. |
| [`tasks/`](tasks/) | The ordered build plan for each phase. The checkboxes are the single source of progress. |
| [`guides/`](guides/) | How to do recurring work: update content, change animations, connect the contact form, deploy and test. |

`docs/certificates/` holds original photos and screenshots. It is git-ignored; optimized copies live in `public/images/` ([D-014](specs/DECISIONS.md#d-014--source-photos-stay-out-of-git)).

## Where to start

- **New to the project:** [`specs/00-overview.md`](specs/00-overview.md), then [`specs/02-architecture.md`](specs/02-architecture.md).
- **Updating your details or a project:** [`guides/content-updates.md`](guides/content-updates.md).
- **Picking up work:** the first unchecked item in [`tasks/phase-3.md`](tasks/phase-3.md).

## Working rules

1. **Spec first.** A change in behaviour starts as a change to `specs/01-requirements.md` or `specs/06-module-h.md`.
2. **Only true claims.** Every fact on the site traces to a source in `specs/05-data-sources.md`.
3. **This repository is public.** No secrets, and no internal names of private projects, in code or docs.
4. **Log decisions.** Any choice or deviation goes in `specs/DECISIONS.md`. Add new entries at the end and do not rewrite old ones.
5. **Park ideas.** Good ideas outside the current task go in `specs/PARKING-LOT.md`.
6. **One commit per task,** referencing its task ID. Phases 1 and 2 predate this rule and landed together in `2be3c34`.
