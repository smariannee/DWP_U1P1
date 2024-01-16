<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h3>Rentar espacios</h3>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Rentar espacios',
            active: true
          },
          {
            text: 'Catálogo de espacios',
            to: { name: 'catalogo' }
          },
          {
            text: 'Detalles del espacio',
            to: { name: 'detalles' }
          }
        ]
      }
    }
}
</script>

<style>

</style>