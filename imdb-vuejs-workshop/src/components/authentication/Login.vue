<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent = "onLoginClick">
        <label for="login">Username</label>
        <input type="text" v-model="username"  id="login" placeholder="Ivan Ivanov" />
        <label for="password">Password</label>
        <input type="password"  v-model="password" id="password" placeholder="******" />

        <input type="submit" value="Login" />
      </form>
    </div>
</template>

<script>
import { authenticate } from '@/services/authServices'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mixins : [authenticate],
  methods: {
    onLoginClick() {
      this.login( this.username, this.password)
      .then(user => {
        this.$root.$emit('logged-in', user.authtoken);
        this.$router.push('/',  );
      })
    }
  }
}
</script>

<style scoped>


/* Login CSS */
.login form {
  display: grid;
  width: 25%;
  margin: 0 auto;
}

.login input {
  padding: 10px;
  margin-bottom: 20px;
}

.login input[type="submit"] {
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

.login input[type="submit"]:hover {
  color: dodgerblue;
  background: transparent;
}
</style>
