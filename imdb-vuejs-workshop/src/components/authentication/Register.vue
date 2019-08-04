<template>
    <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="onRegisterClick">
        <label for="username">Username</label>
        <input type="text" v-model="$v.username.$model" id="username" placeholder="Ivan Ivanov" />
        <label for="email">Email</label>
        <input type="text" v-model="$v.email.$model" id="email" placeholder="ivan@gmail.com" />
        <label for="password">Password</label>
        <input type="password" v-model="$v.password.$model" id="password" placeholder="******" />
        <input type="submit" value="Register" :disabled="$v.$error"/>
      </form>
    </div>
</template>

<script>
import { authenticate } from '@/services/authServices'


import {
  required,
  minLength,
  maxLength,
  email
} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      username: 'Zlati',
      password: 'asdasd',
      email: '',
    }
  },
  mixins: [ authenticate ],
  validations: {
      username: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20)
      },
      password: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20)
      },
      email: {
        email
      },
  },
  methods: {
    onRegisterClick() {
      this.register(this.username, this.password)
        .then(res => this.$router.push('/')) 
     }
  }
}
</script>

<style scoped>

/* Register CSS */
.register {
  padding-top: 2em;
}

.register form {
  display: grid;
  width: 25%;
  margin: 0 auto;
}

.register input {
  padding: 10px;
  margin-bottom: 20px;
}

.register input[type="submit"] {
  width: 25%;
  margin: 0 auto;
  border: 2px solid dodgerblue;
  text-align: center;
  font-size: 14px;
  background: dodgerblue;
  color: white;
  border-radius: 7px;
  margin-top: 20px;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
}

.register input[type="submit"]:hover {
  color: dodgerblue;
  background: transparent;
}

</style>
