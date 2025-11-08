export function useTheme() {
  const theme = useCookie<"light" | "dark">("theme", {
    default: () => "light",
  });

  const isDark = computed(() => theme.value === "dark");

  function applyTheme() {
    if (isDark.value) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  function toggleTheme() {
    theme.value = isDark.value ? "light" : "dark";
    applyTheme();
  }

  onMounted(applyTheme);

  return {
    theme,
    isDark,
    toggleTheme,
  };
}
