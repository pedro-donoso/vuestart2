<template>
  <div id="app">
    <h5>{{tema}}</h5>
  </div>
</template>

<script>

 <input type="text" v-model="misOcupaciones"/>

<button v-on:click="enlistarLabor" >Añadir a la Lista</button>
 <h5>Mi Listado de Pendientes</h5>
      <ul>
        <li v-for="ocupacion of ocupaciones">
          {{ocupacion.hacer}}

          <span v-if="ocupacion.total === 0"> </span>
        </li>
      </ul>

</script>

<style>
</style>