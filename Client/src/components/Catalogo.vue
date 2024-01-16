<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h3>Catálogo de espacios</h3>
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
            to: { name: 'otros-espacios' }
          },
          {
            text: 'Catálogo de espacios',
            active: true
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