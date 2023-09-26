F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "Counter App",
  }),

  template: `
      <h1>{{ title }}</h1>
      <h2>Đã đếm: {{ count }} lần</h2>
      <button v-on:click="decrement">-</button>
      <button v-on:click="increment">+</button>
      <button v-on:click="changeTitle">Change Title</button>
    `,

  decrement() {
    if (this.data.count > 0) {
      this.data.count--;
      this.updateCount();
    } else {
        alert(`Hư`)
    }
  },

  increment() {
    this.data.count++;
    this.updateCount();
  },

  changeTitle() {
    this.data.title = "Hello";
    this.updateTitle();
    this.updateCount();
  },

  updateCount() {
    const shadow = this.shadowRoot;
    const h1 = shadow.querySelector("h1");
    const h2 = shadow.querySelector("h2");
    h1.textContent = this.data.title;
    h2.textContent = `Đã đếm ${this.data.count} lần`;
  },
});
