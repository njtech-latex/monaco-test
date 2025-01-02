import { defaultVsPaths } from "@/data/paths";

export default class VsPath {
  private storageKey = "vsPath" as const;

  get path() {
    return localStorage.getItem(this.storageKey) || defaultVsPaths[0].value;
  }

  set path(path: string) {
    localStorage.setItem(this.storageKey, path);
  }
}
