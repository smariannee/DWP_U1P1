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
                  <img src="https://eltallergastronomico.mx/wp-content/uploads/2023/03/img_4248-2_optimized-1024x683.jpg"
                    class="img" alt="espacio para rentar" />
                </b-col>
                <b-col cols="12" md="8" class="mt-2">
                  <h4>Información sobre tu espacio</h4>
                  <b-card-sub-title class="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem. Cupiditate deleniti autem
                    inventore exercitationem veritatis neque ipsa id debitis perspiciatis.
                  </b-card-sub-title>
                  <b-card-text class="mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit quidem commodi quos,
                    reprehenderit laudantium quae laboriosam placeat omnis assumenda alias maxime dolore atque. Illo iste
                    earum mollitia voluptas ad.
                  </b-card-text>
                  <b-button href="#" variant="outline-dark" :to="{ name: 'oferta' }" class="mt-3">
                    <span>Ofertar mi espacio</span>
                    <b-icon icon="coin" font-scale="1.2" class="icon" />
                  </b-button>
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
          text: 'Renta tu espacio',
          to: { name: 'mis-espacios' }
        },
        {
          text: 'Información de tu espacio',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 250px;
  border-radius: 5px;
}

.breadcrumb {
  margin-bottom: 0;
}

.icon {
  margin-left: 10px;
}
</style>