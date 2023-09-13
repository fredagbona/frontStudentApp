<template>
  <div class="container mt-5 mb-5">
    <h1 class="text-center mt-5">Créer un nouvel étudiant</h1>
    <form @submit.prevent="createStudent">
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
      <button type="submit" class="btn btn-warning">Enregistrer</button><br>
    </form>
    <router-link to="/" class="btn btn-dark text-light mt-3 mb-5">Retour</router-link><br>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      student: {
        matricule: '',
        nom: '',
        prenom: '',
        sexe: 'Homme',
        dateDeNaissance: '',
        telephone: '',
      },
    };
  },
  methods: {
    createStudent() {
      axios
        .post('http://localhost/studentApp/api/create.php', this.student)
        .then((response) => {
            console.log(response);
            this.$router.push('/');
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
