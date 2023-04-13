<template>
  <main>
    <div class="main">
      <section class="close">
        <!-- <nuxt-link to="/home"> <font-awesome-icon icon="x" /></nuxt-link> -->
      </section>
      <section class="toggle">
        <p :class="active ? 'active' : 'inactive'" @click="toggleActive">
          Active
        </p>
        <p :class="delivered ? 'active' : 'inactive'" @click="toggleDelivered">
          Delivered
        </p>
        <p :class="cancelled ? 'active' : 'inactive'" @click="toggleCancelled">
          Cancelled
        </p>
      </section>
      <section v-show="active" class="active-cards">
        <TheActiveOrder v-for="shipment in activeShipments" :key="shipment._id" :shipment-prop="shipment" />
        <div class="loading">
          <span v-show="loading"><img src="~/assets/images/loader_black.svg" alt="loader"></span>
        </div>
      </section>
      <section v-show="delivered" class="active-cards">
        <the-empty-content empty-caption="You currently have no delivered orders" />
      </section>
      <section v-show="cancelled" class="active-cards">
        <TheCancelledOrder v-for="shipment in cancelledShipments" :key="shipment._id" :cancelled-shipment-prop="shipment" />
        <the-empty-content v-if="!cancelledShipments" empty-caption="You currently have no cancelled orders" />
      </section>
    </div>

    <section class="footer">
      <TheBottomNav />
    </section>
  </main>
</template>
<script>
import TheEmptyContent from '~/components/TheEmptyContent.vue'
import TheCancelledOrder from '~/components/TheCancelledOrder.vue'
export default {
  components: { TheEmptyContent, TheCancelledOrder },
  data () {
    return {
      active: true,
      delivered: false,
      cancelled: false,
      activeShipments: [],
      cancelledShipments: []
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    toggleActive () {
      this.active = true
      this.delivered = false
      this.cancelled = false
    },
    toggleDelivered () {
      this.delivered = true
      this.active = false
      this.cancelled = false
    },
    toggleCancelled () {
      this.cancelled = true
      this.active = false
      this.delivered = false
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik Regular";
  padding: 2rem 1rem;
  background: #fafafa;
  // height: 100vh;
  .main {
    width: 100%;
  }
  .close {
    display: flex;
    justify-content: flex-start;
    svg {
      font-size: 20px;
      color: #d9b608;
    }
  }
  .toggle {
    @include flex-row();
    justify-content: space-between;
    margin: 2rem 0rem;
    width: 133px;
    .active {
      background-color: #ffd60a;
      color: #000;
      padding: 6px 8px;
      border-radius: 8px;
      cursor: pointer;
    }
    .inactive {
      padding: 6px 8px;
      color: #b0b0b0;
      cursor: pointer;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 24px;
  }
  .active-cards{
    margin-bottom: 100px;
    min-height: 130vh;
    .loading{
      @include flex-center;
      color: black;
      img{
        width: 80px;
        height: 80px;
      }
    }
  }
  @media screen and(min-width: 800px) {
    .main {
      width: 40%;
    }
  }
}
</style>
