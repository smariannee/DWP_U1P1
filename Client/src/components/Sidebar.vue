<template>
  <div class="sidebar">
    <div class="item">
      <span>Inicio</span>
      <b-icon icon="house-door" font-scale="1.2" />
    </div>
    <div class="item">
      <span>Usuarios</span>
      <b-icon icon="people" font-scale="1.2" />
    </div>
    <div class="item">
      <span>Archivos</span>
      <b-icon icon="archive" font-scale="1.2" />
    </div>
    <div class="bottom-item" sticky>
      <span>Más información</span>
      <b-icon icon="info-circle" font-scale="1.2" />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: sticky;
  height: 91vh;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: rgb(250, 250, 250);
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  margin: 5px 0px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.bottom-item {
  position: absolute;
  bottom: 10px;
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>