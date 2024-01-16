<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-card class="mt-3">
            <b-card-text>
              <h3>¡Bienvenido/a!</h3>
              <b-card-subtitle>
                Este espacio te permite navegar por nuestro catálogo de espacios disponibles para rentar, así como rentar
                tu propio espacio.
              </b-card-subtitle>
              <hr class="my-4">
              <b-button variant="outline-dark" :to="{ name: 'otros-espacios' }" class>
                <span>Rentar espacios</span>
                <b-icon icon="house-door" font-scale="1.2" class="icon" />
              </b-button>
              <b-button variant="outline-dark" :to="{ name: 'otros-espacios' }" class="mx-3">
                <span>Renta tu espacio</span>
                <b-icon icon="person-circle" font-scale="1.2" class="icon" />
              </b-button>
            </b-card-text>
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