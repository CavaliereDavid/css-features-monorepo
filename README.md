# CSS Features Monorepo

This repository is a monorepo containing multiple projects related to CSS features. It uses `pnpm` for package management and dependency installation.

## Workspace Setup

The workspace is configured using `pnpm` and the following files:

### `pnpm-workspace.yaml`

This file defines the structure of the workspace and includes all projects under the `apps` directory.

```yaml
packages:
  - "apps/*"
```

### `.npmrc`

The .npmrc file contains configuration settings for pnpm to optimize dependency management and installation.

## Getting Started

### Step 1: Initialize the Root Project

Run the following command to initialize the root project:

```sh
pnpm init
```

### Step 2: Configure `pnpm-workspace.yaml`

Create a `pnpm-workspace.yaml` file in the root directory:

```yaml
packages:
  - "apps/*"
```

This tells pnpm to manage projects inside the `apps/` directory.

### Step 3: Create Multiple Vite Projects

Inside the `my-monorepo/` directory, create multiple Vite projects:

```sh
mkdir -p apps/project-a apps/project-b
```

Generate Vite projects using pnpm:

```sh
cd apps/project-a
pnpm create vite@latest .
```

Choose your preferred framework (React, Vue, etc.), then repeat for `project-b`:

```sh
cd ../project-b
pnpm create vite@latest .
```

### Step 4: Install Dependencies

Install dependencies for all projects from the root:

```sh
pnpm install
```

### Step 5: Run Vite Projects

From the root directory, run any project individually:

```sh
pnpm --filter project-a run dev
pnpm --filter project-b run dev
```

Run all projects in parallel:

```sh
pnpm run --parallel dev
```

### Step 6: Add Shared Dependencies

To install a shared dependency across all projects:

```sh
pnpm add lodash -w
```

This installs `lodash` in the root `node_modules`, linking it to all projects.

To install a dependency for a specific project:

```sh
pnpm add axios --filter project-a
```



