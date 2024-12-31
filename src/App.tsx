import Editor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";

import { langData, LangKeys } from "@/data/lang";

import style from "./App.module.css";
import VsPath from "@/lib/utils/VsPath";
import usePersistantState from "@/lib/utils/usePersistantState";

const vsPath = new VsPath();

loader.config({ paths: { vs: vsPath.path } });

export default function App() {
  const [lang, setLang] = usePersistantState<LangKeys>("lang", "latex");

  function handleUpdateVSPath() {
    const path = prompt("Enter the path to the VSCode Monaco Editor", vsPath.path);
    if (!path || path === vsPath.path) return;
    vsPath.path = path;
    window.location.reload();
  }

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1 className="mr-auto font-semibold">Monaco Editor</h1>

        <button type="button" onClick={handleUpdateVSPath} className={style.btn}>
          VSPath
        </button>

        <select value={lang} onChange={(e) => setLang(e.target.value as LangKeys)} className={style.btn}>
          {Object.keys(langData).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <Editor path={lang} language={lang} value={langData[lang]} className={style.editor} />
    </div>
  );
}
