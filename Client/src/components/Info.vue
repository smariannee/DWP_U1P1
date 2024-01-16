<template>
  <div>
      <b-container>
          <b-breadcrumb :items="items"></b-breadcrumb>
          <h3>Información de tu espacio</h3>
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
          active: true
        },
        {
          text: 'Ofertar espacio',
          to: { name: 'oferta' }
        }
      ]
    }
  }
}
</script>

<style>

</style>