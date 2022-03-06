<template>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
     <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form @submit.prevent="interactiveLogin">
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email</label>
                            <input type="text" placeholder="Email" v-model="email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                    <label class="block">Password</label>
                            <input type="password" placeholder="Password" v-model="password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="flex items-baseline justify-between">
                    <button type="submit" :disabled="processing" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                    <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div>
            </div>
        </form>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      processing: false,
      password: "coolToolsGr8Work",
      email: "elroifrancis@gmail.com",
      strategy: "local"
    };
  },
  methods: {
    interactiveLogin() {
      this.processing = true;

      this.login({
        username: this.email,
        password: this.password,
        strategy: this.stategy || "local"
      })
        .catch(e => {
          console.error("Error:login() e.response", e.response);
        })
        .finally(() => {
          this.processing = false;
        });
    },


    async login({
      username = this.email,
      password = this.password,
      strategy = this.stategy || "local"
    }) {
      console.log("login()", this.email, this.password, this.strategy);
      
      if (!username || !password) {
        throw new Error("Error: username & password are required.");
      }
      // console.debug('store login: %s:%s', email, password)
      if (strategy === "local") {
        console.log('==========this.$store.state.auth.loggedIn==============');
        console.log(this.$store.state.auth.loggedIn);

        if (this.email == 'elroifrancis@gmail.com' && this.password == 'coolToolsGr8Work') {
            this.$router.push("/");
        } else {
            this.$router.push("login");
        }
        
        // on local strategy we only handle email as username
        // const succesfulLogin = await this.$auth.loginWith('local', {
        // data: {
        //     email: this.email,
        //     password: this.password,
        // },
        // })

        // this.$router.push("/");
        return true;
      
      } else {
        throw new Error(
          `Passport strattegie '${strategy}' isn't supported yet.`
        );
      }
    },

    // async login() {
    //   try {
    //     let response = await this.$auth.loginWith("local", {
    //       data: this.loginData
    //     });
    //     this.$router.push("/");
    //     console.log(response);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  }
};
</script>
<style></style>