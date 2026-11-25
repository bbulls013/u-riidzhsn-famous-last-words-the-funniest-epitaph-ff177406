import { mkdirSync, writeFileSync } from "node:fs";

// Famous last words, carved in one line: the program places the epitaph
// where the grader reads it, and does nothing else.
const line =
  "\"Don't worry, I read the instructions.\" They were for a different parachute.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
