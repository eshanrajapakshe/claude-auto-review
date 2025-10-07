# Claude Auto Review

This repository demonstrates how to use **Claude Code** (Anthropic) in a GitHub Action
to automatically review, test, and fix code whenever a commit is pushed to a feature branch.

## Workflow

1. You push to a branch like `feature/sum-improvement`.
2. The Claude GitHub Action reviews the code, adds missing Jest tests, and fixes ESLint issues.
3. It opens a **Pull Request** into `main` for you to review & merge.

## Setup

1. Create a GitHub secret called `ANTHROPIC_API_KEY` with your API key.
2. Verify that GitHub Actions are enabled.
3. Push a commit to a branch like `feature/demo` — Claude will do the rest!

See `.github/workflows/claude-auto-review.yml` for the action configuration.
