<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-navbar-brand class="title" href="#">NavBar</b-navbar-brand>

                <b-nav-item-dropdown text="Opciones" left class="options">
                    <b-dropdown-item>
                        <b-icon icon="person-circle" font-scale="1.2" />
                        <span class="p-3">Perfil</span>
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <b-icon icon="gear" font-scale="1.2" />
                        <span class="p-3">Ajustes</span>
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <b-icon icon="box-arrow-right" font-scale="1.2" />
                        <span class="p-3">Cerrar sesión</span>
                    </b-dropdown-item>
                </b-nav-item-dropdown>

                <b-form inline>
                    <b-input-group>
                        <b-form-input placeholder="Buscar" class="sm-2"></b-form-input>
                        <b-button variant="outline-light" class="sm-2">
                            <b-icon icon="search" aria-hidden="true"></b-icon>
                        </b-button>
                    </b-input-group>
                </b-form>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style scoped>
.title {
    margin-left: 1rem;
}

.options {
    margin-right: 55rem;
}
</style>