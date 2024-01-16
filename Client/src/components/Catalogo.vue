<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-card title="Catálogo de espacios" class="mt-3">
            <template #header>
              <b-breadcrumb :items="items" class="breadcrumb"></b-breadcrumb>
            </template>
            <b-container fluid>
              <b-row>
                <b-col cols="12" md="6" lg="4">
                  <b-card class="mt-3 card" no-body>
                    <template #header>
                      <h6 class="title">Nombre del espacio 1</h6>
                    </template>
                    <b-card-body class="card-body">
                      <b-img
                        src="https://images.squarespace-cdn.com/content/v1/5dcda1fe29d6cb706834a3fb/1579219543432-5SW5I459AW7EVU5WBR9K/Taller_3_8.jpg?format=1500w"
                        class="img" alt="espacio para rentar" />
                      <b-card-text class="pt-3 pb-1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut provident neque corrupti
                        necessitatibus.
                      </b-card-text>
                      <b-button href="#" variant="outline-dark" :to="{ name: 'detalles' }">
                        <span>Ver detalles</span>
                        <b-icon icon="eye" font-scale="1.2" class="icon" />
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col cols="12" md="6" lg="4">
                  <b-card class="mt-3 card" no-body>
                    <template #header>
                      <h6 class="title">Nombre del espacio 2</h6>
                    </template>
                    <b-card-body class="card-body">
                      <b-img
                        src="https://images.squarespace-cdn.com/content/v1/5dcda1fe29d6cb706834a3fb/1579219543432-5SW5I459AW7EVU5WBR9K/Taller_3_8.jpg?format=1500w"
                        class="img" alt="espacio para rentar" />
                      <b-card-text class="pt-3 pb-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam cumque minus a fuga vitae
                        voluptatibus sed ex.
                      </b-card-text>
                      <b-button href="#" variant="outline-dark" :to="{ name: 'detalles' }">
                        <span>Ver detalles</span>
                        <b-icon icon="eye" font-scale="1.2" class="icon" />
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col cols="12" md="6" lg="4">
                  <b-card class="mt-3 card" no-body>
                    <template #header>
                      <h6 class="title">Nombre del espacio 3</h6>
                    </template>
                    <b-card-body class="card-body">
                      <b-img
                        src="https://images.squarespace-cdn.com/content/v1/5dcda1fe29d6cb706834a3fb/1579219543432-5SW5I459AW7EVU5WBR9K/Taller_3_8.jpg?format=1500w"
                        class="img" alt="espacio para rentar" />
                      <b-card-text class="pt-3 pb-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam cumque minus a fuga vitae
                        voluptatibus sed ex.
                      </b-card-text>
                      <b-button href="#" variant="outline-dark" :to="{ name: 'detalles' }">
                        <span>Ver detalles</span>
                        <b-icon icon="eye" font-scale="1.2" class="icon" />
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
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
        }
      ]
    }
  }
}
</script>

<style>
.icon {
  margin-left: 10px;
}

.title {
  margin-bottom: 0;
  text-align: center;
}

.breadcrumb {
  margin-bottom: 0;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.img {
  width: 100%;
  height: 150px;
  border-radius: 5px;
}
</style>