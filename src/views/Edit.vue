<template>
  <div class="container mt-5 mb-5">
    <h1 class="text-center mt-5">Modifier l'étudiant</h1>
    <form @submit.prevent="updateStudent">
      <div class="form-group">
        <label for="matricule">Matricule</label>
        <input
          type="text"
          class="form-control"
          id="matricule"
          v-model="student.matricule"
        />
      </div> <br>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="student.nom"
        />
      </div><br>
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="prenom"
          v-model="student.prenom"
        />
      </div><br>
      <div class="form-group">
        <label for="sexe">Sexe</label>
        <select class="form-control" id="sexe" v-model="student.sexe">
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
        </select>
      </div><br>
      <div class="form-group">
        <label for="dateDeNaissance">Date de Naissance</label>
        <input
          type="date"
          class="form-control"
          id="dateDeNaissance"
          v-model="student.dateDeNaissance"
        />
      </div><br>
      <div class="form-group">
        <label for="telephone">N° Téléphone</label>
        <input
          type="text"
          class="form-control"
          id="telephone"
          v-model="student.telephone"
        />
      </div><br>
      <button type="submit" class="btn btn-primary">Enregistrer les modifications</button> <br>
    </form><br>
    <RouterLink to="/" class="btn btn-dark text-light mb-5">Retour</RouterLink>
  </div>
</template>

<script style>
import axios from 'axios';

export default {
  data() {
    return {
      student: {
        matricule: '',
        nom: '',
        prenom: '',
        sexe: '',
        dateDeNaissance: '',
        telephone: '',
      },
    };
  },
  created() {
   
    const matricule = this.$route.params.matricule;

    axios
      .get(`http://localhost/studentApp/api/read.php/?matricule=${matricule}`)
      .then((response) => {
        this.student = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    updateStudent() {
        const matricule = this.$route.params.matricule;
      axios
        .put(`http://localhost/studentApp/api/update.php/?matricule=${matricule}`, this.student)
        .then((response) => {
          this.$router.push(`/`);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>

</style>
