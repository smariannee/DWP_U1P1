<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-card title="Renta tu espacio" class="mt-3" header="Renta tu espacio">
            <b-card-text>
              Gestiona tu espacio y ofértalo a nuestros clientes para que puedan rentarlo.
            </b-card-text>
            <b-button href="#" variant="outline-dark" :to="{ name: 'info' }" class="mt-3">
              <span>Información sobre mi espacio</span>
              <b-icon icon="info-circle" font-scale="1.2" class="icon"/>
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.icon {
  margin-left: 10px;
}
</style>