// This file is imported at the top of app/layout.tsx
// It runs before any other code to ensure process.versions.node is set
// before any module that might check it during initialization

// Immediately invoked function to set process.versions.node
;(() => {
  if (typeof window !== "undefined") {
    // We're in the browser
    if (!window.process) {
      window.process = {} as any
    }

    if (!window.process.versions) {
      window.process.versions = {} as any
    }

    // Set a valid semver string if it's missing or empty
    if (!window.process.versions.node) {
      window.process.versions.node = "18.0.0"
    }

    // Ensure process.env exists
    if (!window.process.env) {
      window.process.env = {} as any
    }
  }
})()

export {} // Make this a module
