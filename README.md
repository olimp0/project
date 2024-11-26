# Olimpo

## Introduction

Olimpo is a project designed to simplify your workflow and enhance your productivity. This README will guide you on how to use the Conventional Commits standard for your commits and leverage a helpful script in the `package.json` file for streamlining your commit process.

## Committing Code Using Conventional Commits

Olimpo uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) specification for commit messages. This ensures that commit messages are structured and consistent, which is essential for automated versioning and better collaboration.

### What are Conventional Commits?

Conventional Commits follow a simple format:

```
[optional scope]:

[optional body]

[optional footer(s)]
```

#### Key Elements:

- **`type`**: Describes the purpose of the change (e.g., `feat`, `fix`, `docs`, `chore`, etc.).
- **`scope`**: (Optional) Provides additional context for the change (e.g., the part of the codebase affected).
- **`description`**: A concise summary of the change in the present tense.
- **`body`**: (Optional) Detailed explanation of the change.
- **`footer`**: (Optional) Notes for breaking changes or issues fixed.

#### Common `type` Values:

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation updates.
- **style**: Changes that do not affect functionality (e.g., code formatting).
- **refactor**: Code restructuring without functional changes.
- **test**: Adding or updating tests.
- **chore**: Maintenance tasks (e.g., dependency updates).

#### Example Commit Message:

```
feat(auth): add password reset functionality

This adds a new endpoint for users to reset their passwords via email.

BREAKING CHANGE: The auth token format has been updated.
```

## Streamlining Commits with the `commit` Script

To make the process of crafting proper commit messages easier, we have included a script in the `package.json` file:

```json
"scripts": {
  "commit": "commit"
}
```

### How to Use the Script

1. Install dependencies (if you haven’t already):

```bash
npm install
```

2. Run the commit script:

```bash
npm run commit
```

3. Follow the prompts: The script will guide you through creating a properly formatted commit message by asking questions about the type, scope, description, and other relevant details.

## Branch Convention

Olimpo follows the **Git Flow** branching model to ensure a structured and efficient workflow.

### Git Flow Overview

Git Flow is a branching model that defines a strict branching structure for managing releases. It consists of the following primary branches:

- **`main`**: The main branch where the latest development changes are integrated. This is the branch where feature branches are merged.
- **`production`**: The branch where the source code of HEAD always reflects a production-ready state.

### Supporting Branches

Git Flow also uses supporting branches to aid parallel development and to assist in quickly fixing live issues. These branches have limited lifetimes and are as follows:

- **Feature branches**: Used to develop new features for the upcoming or a distant future release. Typically branch off from `main` and merge back into `main`.
- **Release branches**: Used to prepare a new production release. Typically branch off from `main` and merge into both `production` and `main`.
- **Hotfix branches**: Used to quickly patch production releases. Typically branch off from `production` and merge back into both `production` and `main`.

### Main Branch

- The `main` branch is the primary branch where the development team collaborates.
- All new feature branches, bug fixes, or updates should be created from the `main` branch.

### Production Branch

- The `production` branch is used exclusively for production-ready code.
- Code from the `main` branch is merged into the `production` branch only when it is ready for deployment.

### Creating a New Branch

1. Start by checking out the `main` branch:
   ```bash
   git checkout main
   ```

````
2. Create a new branch for your feature or fix:
```bash
git switch -c <branch-name>
````

### Branch Naming Convention:

- Feature branches: feature/\<short-description\>
- Bug fix branches: fix/\<short-description\>
- Release branches: release/\<version-number\>
- Hotfix branches: hotfix/\<short-description\>

### Merging Changes

- Use **Pull Requests (PRs)** to merge changes back into the main branch.
- Before merging to production, ensure the branch has been thoroughly tested and approved.

### Good Practices

1. **Consistent Naming**: Follow the branch naming conventions strictly to avoid confusion and ensure clarity.
2. **Regular Merges**: Regularly merge `main` into feature branches to keep them up-to-date with the latest changes.
3. **Small Commits**: Make small, frequent commits to make it easier to track changes and resolve conflicts.
4. **Code Reviews**: Use pull requests for code reviews to maintain code quality and share knowledge among team members.
5. **Automated Testing**: Integrate automated testing to catch issues early and ensure the stability of the codebase.
6. **Documentation**: Document significant changes and decisions in commit messages or a dedicated documentation file.

By adhering to these practices, the team can maintain a clear workflow, reduce merge conflicts, and ensure a seamless path to production.
