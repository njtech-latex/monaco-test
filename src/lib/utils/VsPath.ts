export default class VsPath {
  private storageKey = "vsPath" as const;
  private defaultPath = "https://www.keepresearch.com/blob/npm/monaco-editor/min/vs" as const;

  get path() {
    return localStorage.getItem(this.storageKey) || this.defaultPath;
  }

  set path(path: string) {
    localStorage.setItem(this.storageKey, path);
  }
}
