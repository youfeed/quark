import { Ref, ref } from 'vue';

export class RefData {
  private static instance: RefData;
  public static getInstance(): RefData {
    if (this.instance == null) {
      this.instance = new RefData();
      let localTheme = localStorage.getItem('csui-theme-color');
      if (localTheme) {
        this.instance.themeColor.value = localTheme;
      }
    }
    return this.instance;
  }

  public currentRoute: Ref<string> = ref('/');

  private _themeColor: Ref<string> = ref('white');
  public get themeColor(): Ref<string> {
    return this._themeColor;
  }
  public set themeColor(v: Ref<string>) {
    this._themeColor = v;
  }
}
