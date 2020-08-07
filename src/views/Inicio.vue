<template>
  <div>
    <h1>Lista de Tareas</h1>
    <router-link to="/agregar">
      <button class="btn btn-success btn-block">Agregar</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="(item, index) in tareas" :key="index">
        {{ item.nombre }} - {{ item.id }}
        <div class="float-right">
          <router-link :to="{name: 'Editar', params: {id: item.id}}">
            <button class="btn btn-warning btn-sm mr-2">Editar</button>
          </router-link>
          <button class="btn btn-danger btn-sm" @click="eliminarTarea(item.id)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  created() {
    this.getTareas();
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
  computed: {
    ...mapState(["tareas"]),
  },
};
</script>