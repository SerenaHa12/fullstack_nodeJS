F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "Counter App",
  }),

  template: `
      <h1 style="font-size: 40px; color: #b65b30">{{ title }}</h1>
      <h2>Đã đếm: {{ count }} lần</h2>
      <button 
        style="padding: 5px 10px; 
                cursor: pointer;
                background-color: #b65b30;
                color: #fff;
                border: none;
                border-radius: 5px;" 
        v-on:click="decrement"
      >-</button>
      <button 
        style="padding: 5px 10px; 
                cursor: pointer;
                background-color: #b65b30;
                color: #fff;
                border: none;
                border-radius: 5px;"
        v-on:click="increment">+</button>
      <button 
        style="padding: 5px 10px; 
                cursor: pointer;
                background-color: transparent;
                color: #b65b30;
                font-weight: 600;
                border: 1px solid #b65b30;
                border-radius: 5px;
                margin: 0px 5px"
        v-on:click="changeTitle">Change Title</button>
    `,

  decrement() {
    if (this.data.count > 0) {
      this.data.count--;
      this.updateCount();
      console.log(this.data.count);
    } else {
      alert(`Hư`);
    }
  },

  increment() {
    this.data.count++;
    this.updateCount();
    console.log(this.data.count);
  },

  changeTitle() {
    this.data.title = "Hello";
    this.updateTitle();
    this.updateCount();
    console.log(this.data.title);
  },

  updateCount() {
    const shadow = this.shadowRoot;
    const h1 = shadow.querySelector("h1");
    const h2 = shadow.querySelector("h2");
    h1.textContent = this.data.title;
    h2.textContent = `Đã đếm ${this.data.count} lần`;
  },
});
