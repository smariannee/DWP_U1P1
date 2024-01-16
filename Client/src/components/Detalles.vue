<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h3>Detalles del espacio</h3>
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
            to: { name: 'catalogo' }
          },
          {
            text: 'Detalles del espacio',
            active: true
          }
        ]
      }
    }
}
</script>

<style>

</style>