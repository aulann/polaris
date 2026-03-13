import { Extension } from "@codemirror/state";
import { StreamLanguage } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { php } from "@codemirror/lang-php";
import { rust } from "@codemirror/lang-rust";
import { sql } from "@codemirror/lang-sql";
import { xml } from "@codemirror/lang-xml";
import { yaml } from "@codemirror/lang-yaml";
import { sass } from "@codemirror/lang-sass";

import { go } from "@codemirror/legacy-modes/mode/go";
import { ruby } from "@codemirror/legacy-modes/mode/ruby";
import { swift } from "@codemirror/legacy-modes/mode/swift";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { lua } from "@codemirror/legacy-modes/mode/lua";
import { r } from "@codemirror/legacy-modes/mode/r";
import { toml } from "@codemirror/legacy-modes/mode/toml";
import { dockerFile } from "@codemirror/legacy-modes/mode/dockerfile";
import { groovy } from "@codemirror/legacy-modes/mode/groovy";
import { perl } from "@codemirror/legacy-modes/mode/perl";

import {
  csharp,
  kotlin,
  scala,
  dart,
} from "@codemirror/legacy-modes/mode/clike";

export const getLanguageExtension = (filename: string): Extension => {
  const ext = filename.split(".").pop()?.toLowerCase();
  const basename = filename.split("/").pop()?.toLowerCase() ?? "";

  if (basename === "dockerfile") return StreamLanguage.define(dockerFile);
  if (basename === "makefile") return [];

  switch (ext) {
    // JavaScript / TypeScript
    case "js":
      return javascript();
    case "jsx":
      return javascript({ jsx: true });
    case "ts":
      return javascript({ typescript: true });
    case "tsx":
      return javascript({ typescript: true, jsx: true });

    // Web
    case "html":
    case "htm":
      return html();
    case "css":
      return css();
    case "scss":
      return sass();
    case "sass":
      return sass({ indented: true });
    case "xml":
    case "svg":
    case "xaml":
      return xml();

    // Data / Config
    case "json":
    case "jsonc":
      return json();
    case "yaml":
    case "yml":
      return yaml();
    case "toml":
      return StreamLanguage.define(toml);

    // Docs
    case "md":
    case "mdx":
      return markdown();

    // Backend
    case "py":
      return python();
    case "java":
      return java();
    case "kt":
    case "kts":
      return StreamLanguage.define(kotlin);
    case "scala":
      return StreamLanguage.define(scala);
    case "groovy":
    case "gradle":
      return StreamLanguage.define(groovy);
    case "php":
      return php();
    case "rs":
      return rust();
    case "go":
      return StreamLanguage.define(go);
    case "rb":
      return StreamLanguage.define(ruby);
    case "swift":
      return StreamLanguage.define(swift);
    case "cs":
      return StreamLanguage.define(csharp);
    case "dart":
      return StreamLanguage.define(dart);
    case "lua":
      return StreamLanguage.define(lua);
    case "pl":
    case "pm":
      return StreamLanguage.define(perl);
    case "r":
      return StreamLanguage.define(r);

    // Systems
    case "c":
    case "h":
    case "cpp":
    case "cc":
    case "cxx":
    case "hpp":
      return cpp();

    // Shell
    case "sh":
    case "bash":
    case "zsh":
      return StreamLanguage.define(shell);

    // SQL
    case "sql":
      return sql();

    default:
      return [];
  }
};
