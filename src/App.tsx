import Editor from "@monaco-editor/react";

import { useState } from "react";
import { loader } from "@monaco-editor/react";

import { defaultVsPaths } from "./data/paths";
import { langData, LangKeys } from "@/data/lang";

import style from "./App.module.css";
import VsPath from "@/lib/utils/VsPath";
import usePersistantState from "@/lib/utils/usePersistantState";

const vsPath = new VsPath();

loader.config({ paths: { vs: vsPath.path } });

export default function App() {
  const [content, setContent] = useState(langData);
  const [lang, setLang] = usePersistantState<LangKeys>("lang", "latex");

  function handleUpdateVSPath(path: string) {
    if (!path || path === vsPath.path) return;
    vsPath.path = path;
    window.location.reload();
  }

  function handleContentChange(value?: string) {
    if (value) setContent((prev) => ({ ...prev, [lang]: value }));
  }

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1 className="mr-auto font-semibold">Monaco Editor Test</h1>

        <select value={lang} onChange={(e) => setLang(e.target.value as LangKeys)} className={style.btn}>
          {Object.keys(langData).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <select value={vsPath.path} onChange={(e) => handleUpdateVSPath(e.target.value)} className={style.btn}>
          {defaultVsPaths.map((path) => (
            <option key={path.label} value={path.value}>
              {path.label}
            </option>
          ))}
        </select>
      </div>

      <Editor
        path={lang}
        language={lang}
        value={content[lang]}
        onChange={handleContentChange}
        className={style.editor}
      />
    </div>
  );
}
