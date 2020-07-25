const app = new Vue({
  el: "#app",
  data: {
    tema: "Escribe y haz click en el botón",
    ocupaciones: [
      { hacer: "Tirarse en Paracaidas" },
      { hacer: "Nadar en los Rápidos" },
      { hacer: "Viajar a Alaska por carretera" },
    ],
    misOcupaciones: "",
  },
  methods: {
    enlistarLabor() {
      this.ocupaciones.push({
        hacer: this.misOcupaciones,
      });
    },
  },
});
