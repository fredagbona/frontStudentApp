<template>
  <div class="mb-5">
    <h1 class="text-center mt-5"> <i class="bi bi-person-lines-fill"></i> Student App</h1> <br>
    <RouterLink to="/new" class="mx-auto d-block w-50 btn btn-warning">Ajouter un Etudiant</RouterLink> <br>
    <div class="container-fluid mb-5">
      <table class="table  table-striped">
        <thead>
          <tr>
            <th scope="col">Matricule</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Sexe</th>
            <th scope="col">Date de Naissance</th>
            <th scope="col">N° Telephone</th>
             <th scope="col"></th>
              <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.matricule">
            <td>{{ user.matricule }}</td>
            <td>{{ user.nom }}</td>
            <td>{{ user.prenom }}</td>
            <td>{{ user.sexe }}</td>
            <td>{{ user.dateDeNaissance }}</td>
            <td>{{ user.telephone }}</td>
            <td> 
                 <router-link :to="'/edit/' + user.matricule">
                    <i class="bi text-dark bi-pencil-square" title="Modifier"></i>
                </router-link>
             </td>
            <td> <button   @click="deleteStudent(user.matricule)"><i class="bi text-danger bi-trash" title="Supprimer"></i></button>  </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      getAllStudents()
        .then((response) => {
          this.users = response;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteStudent(matricule){
      deleteStudent(matricule)
        .then((response) => {
           this.getStudents();
        })
        .catch((error) => {
          console.error(error);
        })
    }
  },
};

function getAllStudents() {
  return axios
    .get("http://localhost/studentApp/api/reads.php")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function deleteStudent(matricule){
  return axios
    .delete(`http://localhost/studentApp/api/delete.php/?matricule=${matricule}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    })
}
</script>

<style scoped>

</style>
