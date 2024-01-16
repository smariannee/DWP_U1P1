<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-card title="Rentar espacios" class="mt-3" header="Rentar espacios">
            <b-card-text>
              Accede a nuestro catálogo de espacios y encuentra el que más se adapte a tus necesidades.
            </b-card-text>
            <b-button href="#" variant="outline-dark" :to="{ name: 'catalogo' }" class="mt-3">
              <span>Ver catálogo de espacios</span>
              <b-icon icon="book" font-scale="1.2" class="icon"/>
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