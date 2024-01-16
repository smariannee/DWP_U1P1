<template>
    <div>
      <h3>Inicio</h3>
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            active: true
          },
          {
            text: 'Rentar espacios',
            to: { name: 'otros-espacios' }
          },
          {
            text: 'Renta tu espacio',
            to: { name: 'mis-espacios' }
          }
        ]
      }
    }
}
</script>

<style>

</style>