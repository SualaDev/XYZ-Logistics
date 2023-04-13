<template>
  <div class="desktop-container">
    <div class="login-container">
      <div class="back-arrow">
        <font-awesome-icon icon="arrow-left" @click="goToPrev" />
      </div>
      <div class="login-header">
        Login
      </div>
      <div class="social-logins">
        <button class="google link">
          <img src="~/assets/images/Google-icon.svg" alt="google">
          <p>Google</p>
        </button>
        <button class="facebook link">
          <img src="~/assets/images/Facebook-icon.svg" alt="facebook">
          <p>Facebook</p>
        </button>
      </div>
      <div class="page-breaker">
        <div class="line" />
        <div class="or">
          OR
        </div>
        <div class="line" />
      </div>
      <div class="form-container">
        <div class="email input-field">
          <label for="email">Email</label>
          <input id="email" v-model="loginDetails.email" type="email" name="email">
        </div>
        <div class="password input-field">
          <label for="password">Password</label>
          <input id="password" v-model="loginDetails.password" type="password" name="password">
        </div>
      </div>
      <div class="continue-btn">
        <button :class="{ loading : loading }" @click="loginUser">
          Continue <span v-show="loading"><img src="~/assets/images/loader.svg" alt="loader"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      loginDetails: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    loginUser () {
      if (!this.loading) {
        try {
          // Here you can perform a check on the loginDetails object to ensure that the email and password properties have been filled
          if (this.loginDetails.email === '' || this.loginDetails.password === '') {
            this.$toasted.show('Please fill in all the fields', {
              position: 'top-center',
              duration: 2500,
              type: 'warning'
            })
            return
          }
          // Here you can perform any necessary validation on the user's input before proceeding
          this.$store.commit('addUserDetails', this.loginDetails.email)
          this.$store.commit('setToken', 'some token')
          this.$toasted.show('You have logged in successfully', {
            position: 'top-center',
            duration: 2500,
            type: 'success'
          })
          setTimeout(() => {
            this.$router.push('/home')
          }, 2000)
        } catch (error) {
          this.$toasted.show(
            error.response.data.message || error.message,
            {
              position: 'top-center',
              type: 'danger',
              duration: 3500
            }
          )
          console.log(error)
        }
      }
    },
    goToPrev () {
      this.$router.go(-1)
    }
  }
}

</script>
<style lang="scss" scoped>
  .login-container{
    font-family: "Rubik Regular";
    padding: 32px;
    .back-arrow{
      svg{
        color: #D9B608;
      }
    }
    .login-header{
      font-weight: 400;
      font-size: 25px;
      line-height: 40px;
      margin-top: 21px
    }
    .social-logins{
      @include flex-center;
      gap: 24px;
      margin-top: 40px;
      .link{
          @include flex-center;
          gap: 40px;
          padding: 16px 1.5rem;
          border: 1px solid #DFDFDF;
          border-radius: 8px;
          background: white;
      }
    }
    .page-breaker{
      @include flex-center;
      gap: 67px;
      margin-top: 40px;
      .line{
          width: 103px;
          height: 2px;
          background: #EBEBEB;
          border-radius: 8px;
      }
    }
    .form-container{
            display: flex;
            flex-direction: column;
            gap: 32px;
            margin-top: 48px;
            .input-field{
                display: flex;
                flex-direction: column;
                gap: 8px;
                input{
                    padding: 24px 16px;
                    border: 1px solid #DFDFDF;
                    border-radius: 8px;
                    outline: none;
                }
                .inputError{
                    border: 1px solid red;
                }
                .error-message{
                    font-size: 10px;
                    color: red;
                }
            }
        }
        .continue-btn{
            padding: 64px 0px 0px;
            button{
                @include active-btn;
                border: none;
                outline: none;
                width: 100%;
            }
            .disabled{
                background: grey;
            }
            .loading{
              @include flex-center;
              position: relative;
              background: grey;
              color: white;
                span{
                  position: absolute;
                  right: 5px;
                  bottom: 5px;
                  img{
                    width: 20px;
                    height: 20px;
                  }
                }
            }
        }
  }
  @media (min-width: 1029px) {
    .desktop-container{
      @include flex-center;
      .login-container{
        width: 40%;
      }
    }
  }
</style>
