<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h3>Ofertar tu espacio</h3>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Renta tu espacio',
            to: { name: 'mis-espacios' }
          },
          {
            text: 'Información de tu espacio',
            to: { name: 'info' }
          },
          {
            text: 'Ofertar espacio',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>

</style>