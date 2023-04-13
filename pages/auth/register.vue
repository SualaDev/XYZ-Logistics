<template>
  <div class="desktop-container">
    <div class="register-container">
      <div class="back-arrow">
        <font-awesome-icon icon="arrow-left" @click="goToPrev" />
      </div>
      <div class="register-header">
        <p>{{ finishRegistration ? "Finish" : "Get Started" }}</p>
      </div>
      <get-started-container
        v-show="!finishRegistration"
        @continue-registration="finishRegistration = true"
        @update-credentials="updateCredentials"
      />
      <finish-registration v-show="finishRegistration" @finish-registration="registerUser" />
    </div>
  </div>
</template>
<script>
import FinishRegistration from '~/components/authComps/FinishRegistration.vue'
import GetStartedContainer from '~/components/authComps/GetStartedContainer.vue'
export default {
  components: {
    GetStartedContainer,
    FinishRegistration
  },
  data () {
    return {
      finishRegistration: false,
      registerData: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        address1: '',
        phone_number: ''
      }
    }
  },
  methods: {
    goToPrev () {
      if (this.finishRegistration) {
        this.finishRegistration = false
      } else {
        this.$router.go(-1)
      }
    },
    updateCredentials (e) {
      this.registerData.email = e.email
      this.registerData.password = e.password
    },
    registerUser (e) {
      this.registerData.firstname = e.firstname
      this.registerData.lastname = e.lastname
      this.registerData.address1 = e.address1
      this.registerData.phone_number = e.phone_number
      this.$router.push('/auth/login')
    }
  }
}
</script>
<style lang="scss" scoped>
    .register-container{
      font-family: "Rubik Regular";
      padding: 32px;
      .back-arrow{
        align-items: flex-start;
        svg{
          color: #D9B608;
        }
      }
      .register-header{
        align-items: flex-start;
        margin-top: 21px;
        p{
          font-weight: 400;
          font-size: 25px;
          line-height: 40px;
        }
      }
    }
    @media (min-width: 1029px) {
      .desktop-container{
        @include flex-center;
        .register-container{
          width: 40%;
        }
      }
    }
</style>
