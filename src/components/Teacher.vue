<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    crear profesor
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Crear profesor
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="formnew" enctype="multipart/form-data">
            <div class="mb-2">
              <label for="message-text" class="col-form-label text-black"
                >DNI:</label
              >
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-2">
              <label for="categori" class="col-form-label text-black"
                >First name:
              </label>
              <input type="text" class="form-control" id="categori" />
            </div>
            <div class="mb-2">
              <label for="code" class="col-form-label text-black"
                >Family name:</label
              >
              <input type="text" class="form-control" id="code" />
            </div>
            <div class="mb-2">
              <label for="price" class="col-form-label text-black"
                >Email:
              </label>
              <input type="text" class="form-control" id="price" />
            </div>
            <div class="mb-2">
              <label for="stock" class="col-form-label text-black">Age:</label>
              <input type="text" class="form-control" id="stock" />
            </div>
            <div class="mb-2">
              <label for="description" class="col-form-label text-black"
                >Phone number:
              </label>
              <input type="text" class="form-control" id="description" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            cerrar
          </button>
          <button type="button" class="btn btn-primary">guardar</button>
        </div>
      </div>
    </div>
  </div>

  <div id="container_home">
    <div id="welcome">
      <aside id="lado">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">link</a>
          </li>
        </ul>
      </aside>
    </div>

    <div id="home">
      <div class="section">
        <div id="welcome">
          <div id="buscar">
            <input
              name="buscar profesor"
              class="em"
              type="text"
              id="buscar"
              placeholder="Buscar profesor"
               v-model="search"
              @keyup="filtrar()"
            />
          </div>
        </div>

        <section>
          <table class="table">
            <thead>
              <tr>
                <th scope="col"><b>dni</b></th>
                <th scope="col"><b>First</b></th>
                <th scope="col"><b>family name</b></th>
                <th scope="col"><b>email</b></th>
                <th scope="col"><b>age</b></th>
                <th scope="col"><b>phone</b></th>
                <th scope="col"><b>address</b></th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="p in profesores_list_mostrar" :key="'profesores' + p.dni">
                <th scope="row">{{ p.dni }}</th>
                <td>{{ p.first }}</td>
                <td>{{ p.family_name }}</td>
                <td>{{ p.email }}</td>
                <td>{{ p.age }}</td>
                <td>{{ p.phone_number }}</td>
                <td>{{ p.address }}</td>

                <a
                  name=""
                  id="edit"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modaleditar"
                  >editar</a
                >
                <a
                  name=""
                  id="elimi"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modaleliminar"
                  >eliminar</a
                >
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <router-view> </router-view>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="modaleditar"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Editar profesor
          </h1>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="formnew" enctype="multipart/form-data">
            <div class="mb-2">
              <label for="message-text" class="col-form-label text-black"
                >DNI:</label
              >
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-2">
              <label for="categori" class="col-form-label text-black"
                >First name:
              </label>
              <input type="text" class="form-control" id="categori" />
            </div>
            <div class="mb-2">
              <label for="code" class="col-form-label text-black"
                >Family name:</label
              >
              <input type="text" class="form-control" id="code" />
            </div>
            <div class="mb-2">
              <label for="price" class="col-form-label text-black"
                >Email:
              </label>
              <input type="text" class="form-control" id="price" />
            </div>
            <div class="mb-2">
              <label for="stock" class="col-form-label text-black">Age:</label>
              <input type="text" class="form-control" id="stock" />
            </div>
            <div class="mb-2">
              <label for="description" class="col-form-label text-black"
                >Phone number:
              </label>
              <input type="text" class="form-control" id="description" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            cerrar
          </button>
          <button type="button" class="btn btn-primary">guardar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal2 -->
  <div
    class="modal fade"
    id="modaleliminar"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Eliminar profesor
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Esta seguro de eliminar profesor</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button type="button" class="btn btn-primary">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(../assets/teacher.css);
</style>

<script>
export default {
  data() {
    return {
      profesores_list_mostrar: [],
      search: "",
      profesores: [
        {
          dni: "1117550550",
          first: "karolina",
          family_name: "segura",
          email: "ksegura1@misena.edu.co",
          age: "24",
          phone_number: "3142613646",
          address: "acacias",
        },

        {
          dni: "4546567",
          first: "lina",
          family_name: "segura",
          email: "ksa1@misena.edu.co",
          age: "22",
          phone_number: "3142613646",
          address: "acacias",
        },

        {
          dni: "786454",
          first: "karo",
          family_name: "segura",
          email: "ksegura1@misena.edu.co",
          age: "21",
          phone_number: "3142613646",
          address: "acacias",
        },
      ],
    };
  },
  mounted() {
    this.profesores_list_mostrar = this.profesores

  },

  methods: {
    filtrar() {
      this.profesores_list_mostrar = this.profesores.filter(
        (p) =>
          p.first.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          p.dni.toString().toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          p.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          p.family_name
            .toString()
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1 ||
          p.phone_number
            .toString()
            .toLowerCase()
            .toString()
            .indexOf(this.search.toLowerCase()) > -1 ||
          p.age == parseInt(this.search)
      );
    },
  },
};

</script>
