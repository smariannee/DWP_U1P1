<template>
    <div>
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h3>Renta tu espacio</h3>
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
            active: true
          },
          {
            text: 'Información de tu espacio',
            to: { name: 'info' }
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