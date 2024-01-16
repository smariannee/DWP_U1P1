<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-card title="Oferta tu espacio" class="mt-3">
            <template #header>
              <b-breadcrumb :items="items" class="breadcrumb"></b-breadcrumb>
            </template>
            <b-card-text>
              En este espacio coloca el precio de tu espacio dependiendo del horario que sea requerido.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 0;
}
</style>

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