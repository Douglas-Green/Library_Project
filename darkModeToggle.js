export function getTheme() {
  let localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  return calculateSettingAsThemeString(localStorageTheme, systemSettingDark);
}

export function setTheme(newTheme) {
  localStorage.setItem("theme", newTheme);
}

export function calculateSettingAsThemeString(localStorageTheme, systemSettingDark) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}
