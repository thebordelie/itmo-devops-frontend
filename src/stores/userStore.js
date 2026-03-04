import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: localStorage.getItem("userId") || 1,
    name: localStorage.getItem("userName") || "Test User"
  }),

  actions: {
    setUser(user) {
      this.id = user.id;
      this.name = user.name;

      localStorage.setItem("userId", user.id);
      localStorage.setItem("userName", user.name);
    },

    logout() {
      this.id = null;
      this.name = null;

      localStorage.clear();
    }
  }
});