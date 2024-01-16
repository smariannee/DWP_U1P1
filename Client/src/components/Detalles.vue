<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <b-card class="mt-3">
            <template #header>
              <b-breadcrumb :items="items" class="breadcrumb"></b-breadcrumb>
            </template>
            <b-container fluid>
              <b-row>
                <b-col cols="12" md="4">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5dcda1fe29d6cb706834a3fb/1579219543432-5SW5I459AW7EVU5WBR9K/Taller_3_8.jpg?format=1500w"
                    class="img" alt="espacio para rentar" />
                </b-col>
                <b-col cols="12" md="8" class="mt-2">
                  <h4>Detalles del espacio</h4>
                  <b-text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit quidem commodi quos,
                    reprehenderit laudantium quae laboriosam placeat omnis assumenda alias maxime dolore atque. Illo iste
                    earum mollitia voluptas ad.
                  </b-text>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.img {
  width: 100%;
  height: 250px;
  border-radius: 5px;
}

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