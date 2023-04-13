<template>
  <main>
    <div class="main">
      <section class="close">
        <nuxt-link to="/home">
          <font-awesome-icon icon="x" />
        </nuxt-link>
      </section>
      <section class="toggle">
        <p :class="send ? 'active' : 'inactive'" @click="toggleSend">
          Send
        </p>
        <p :class="receive ? 'active' : 'inactive'" @click="toggleReceive">
          Receive
        </p>
      </section>
      <section v-show="send" class="send">
        <p>Send an Item</p>
        <div class="locations">
          <div class="input">
            <label for="pickup">Pick-up Location</label>
            <div class="input-form">
              <font-awesome-icon icon="location-crosshairs" class="yel" />
              <input
                ref="pickUpRefSend"
                v-model="requestDelivery.pickup_address"
                type="text"
                name="pickup"
                placeholder="Choose pick-up location"
              >
              <!-- <the-select-place :inputRef="pickUpRef" /> -->
            </div>
          </div>
          <div class="input">
            <label for="pickup">Drop-off Location</label>
            <div class="input-form">
              <!-- <select placeholder="Select State">
                <option value="Select State">Select State</option>
              </select> -->
              <div>
                <font-awesome-icon icon="location-dot" class="red" />
                <input
                  ref="dropOffRefSend"
                  v-model="requestDelivery.delivery_address"
                  type="text"
                  name="pickup"
                  placeholder="Choose drop-off location"
                >
              <!-- <the-select-place :inputRef="dropOffRef" /> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-show="receive" class="send">
        <p>Receive an Item</p>
        <div class="locations">
          <div class="input">
            <label for="pickup">Pick-up Location</label>
            <div class="input-form">
              <!-- <select placeholder="Select State">
                <option value="Select State">Select State</option>
              </select> -->
              <div>
                <font-awesome-icon icon="location-dot" class="red" />
                <input
                  ref="dropOffRef"
                  v-model="requestDelivery.delivery_address"
                  type="text"
                  name="pickup"
                  placeholder="Choose drop-off location"
                >
              </div>
            </div>
          </div>
          <div class="input">
            <label for="pickup">Drop-off Location</label>
            <div class="input-form">
              <font-awesome-icon icon="location-crosshairs" class="yel" />
              <input
                ref="pickUpRef"
                v-model="requestDelivery.pickup_address"
                type="text"
                name="pickup"
                placeholder="Choose drop-off location"
              >
            </div>
          </div>
        </div>
      </section>
      <section class="contact-info">
        <div class="input">
          <p>Contact Information (Sender)</p>

          <input type="text" name="first name" placeholder="First Name">
          <input
            type="number"
            name="number"
            placeholder="+xxx (xxx)-xxx-xxxx"
            value="Phone Number"
            min="0"
          >
        </div>
        <div class="receiver">
          <div class="input">
            <p>Contact Information (Receiver)</p>

            <input v-model="requestDelivery.receiver" type="text" name="pickup" placeholder="First Name">
            <input
              v-model="requestDelivery.receiver_phone"
              type="number"
              name="pickup"
              placeholder="+xxx (xxx)-xxx-xxxx"
              min="0"
            ><input
              type="email"
              name="pickup"
              placeholder="Email Address"
            >
          </div>
        </div>
      </section>
      <section class="date">
        <p>Time and Date</p>
        <div class="input">
          <div class="input-form">
            <font-awesome-icon icon="calendar" class="red" />
            <input
              type="datetime-local"
              value="2022-06-01"
              min="2022-06-20"
              max="2025-12-31"
            >
          </div>
        </div>
      </section>
      <div class="desc">
        <p>Package Description</p>
        <div class="package-description">
          <select id="package" v-model="requestDelivery.package_type" name="package">
            <option value="package1" selected disabled>
              Select Package
            </option>
            <option value="Small">
              Small (30 x 25 cm)
            </option>
            <option value="Medium">
              Medium (30 x 25 cm)
            </option>
            <option value="Big">
              Big (30 x 25 cm)
            </option>
            <option value="Large">
              Large (30 x 25 cm)
            </option>
          </select>
        </div>
        <input v-model="requestDelivery.name" type="text" placeholder="name of package?">
        <input v-model.number="requestDelivery.weight" type="text" placeholder="Weight (Kg)">
      </div>
      <button class="payment-btn" :class="{ loading : loading }" @click="pay()">
        Continue to Payment <span v-show="loading"><img src="~/assets/images/loader.svg" alt="loader"></span>
      </button>
    </div>
    <!-- <the-direction-container :originLngLat="originLngLat" :destinationLngLat="destinationLngLat" /> -->
  </main>
</template>
<script>
// import TheSelectPlace from '~/components/TheSelectPlace.vue'
// import TheDirectionContainer from '~/components/TheDirectionContainer.vue'

export default {
  // components: {
  //   TheSelectPlace,
  //   TheDirectionContainer
  // },
  data () {
    return {
      previewImage: [],
      isActive: true,
      send: true,
      receive: false,
      email: this.$store.state.userDetails.email,
      amount: this.$store.state.requestPrice,
      requestDelivery: {
        name: '',
        receiver: '',
        receiver_phone: '',
        weight: 0,
        pickup_address: '',
        delivery_address: '',
        package_type: '',
        deliveryType: 'pickup',
        regionType: this.$route.name
      },
      originLngLat: { lat: 4.8472226, lng: 6.974604 },
      destinationLngLat: {},
      distance: '',
      requestPrice: 0,
      basePrice: 1000
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  async mounted () {
    const options = {
      componentRestrictions: { country: 'ng' },
      fields: ['address_components', 'geometry'],
      strictBounds: false,
      types: ['address']
    }

    // Instantiating Google Place API for all four Input fields
    const pickUpRefService = await new google.maps.places.Autocomplete(this.$refs.pickUpRef, options)
    const pickUpRefSendService = await new google.maps.places.Autocomplete(this.$refs.pickUpRefSend, options)
    const dropOffRefService = await new google.maps.places.Autocomplete(this.$refs.dropOffRef, options)
    const dropOffRefSendService = await new google.maps.places.Autocomplete(this.$refs.dropOffRefSend, options)

    // Adding Event Listeners for when user clicks a new place
    google.maps.event.addListener(pickUpRefSendService, 'place_changed', () => {
      console.log(pickUpRefSendService.getPlace())
      const place = pickUpRefSendService.getPlace()
      // console.log(place.geometry.location.lat(), place.geometry.location.lng());
      this.originLngLat = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
      const addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}`
      this.requestDelivery.pickup_address = addressLiteral
    })
    google.maps.event.addListener(dropOffRefSendService, 'place_changed', () => {
      console.log(dropOffRefSendService.getPlace())
      const place = dropOffRefSendService.getPlace()
      this.destinationLngLat = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
      const addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}`
      this.requestDelivery.delivery_address = addressLiteral
    })
    google.maps.event.addListener(pickUpRefService, 'place_changed', () => {
      console.log(pickUpRefService.getPlace())
      const place = pickUpRefService.getPlace()
      this.originLngLat = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
      const addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}`
      this.requestDelivery.pickup_address = addressLiteral
    })

    google.maps.event.addListener(dropOffRefService, 'place_changed', () => {
      console.log(dropOffRefService.getPlace())
      const place = dropOffRefService.getPlace()
      this.destinationLngLat = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
      const addressLiteral = `${place.address_components[0].long_name}, ${place.address_components[1].long_name}`
      this.requestDelivery.delivery_address = addressLiteral
    })
  },
  methods: {
    pay () {
      try {
        this.requestPrice = this.basePrice + (Number(this.requestDelivery.weight) * 50) // Setting price of the request for local transactions
        this.$store.commit('setRequestPrice', this.requestPrice)
        setTimeout(() => {
          this.$router.push('/payments')
        }, 3000)
      } catch (error) {
        console.log(error.message)
      }
    },

    toggleSend () {
      this.send = true
      this.receive = false
      this.requestDelivery.deliveryType = 'pickup'
    },

    toggleReceive () {
      this.receive = true
      this.send = false
      this.requestDelivery.deliveryType = 'dropoff'
    },

    requestDeliveryHandler () {
      try {
        this.requestPrice = this.basePrice + (Number(this.requestDelivery.weight) * 50) // Setting price of the request for local transactions
        this.$store.commit('setRequestPrice', this.requestPrice)
        console.log('Delivery request successful')
      } catch (error) {
        console.log(error.message)
      }
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
  padding: 2rem;
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
  .send {
    p {
      margin: 2.2rem 0rem;
      font-size: 20px;
    }
    .locations {
      @include input-form();
    }
  }
  .contact-info {
    @include input-box();
    p {
      margin: 1rem 0rem;
      font-family: "Rubik Medium";
      font-size: 18px;
    }
    input {
      margin: 1rem 0rem;
      color: #000;
    }
  }
  .date {
    p {
      margin: 1rem 0rem;
      font-family: "Rubik Medium";
      font-size: 18px;
    }
    @include input-form();
  }
  .yel {
    color: #d9b608;
  }
  .red {
    color: #cc5500;
  }

  // Package Description
  .desc {
    @include form-header();
    .package-description {
      @include select-field;
    }
    .more-description{
      @include input-box;
    }
    input {
      margin-bottom: 2rem;
      height: 55px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid #b0b0b0;
      outline: none;
      padding: 1rem 2.5rem;
      margin-top: 16px;
    }
  }

  .payment-btn {
    width: 100%;
    height: 50px;
    margin: 1rem 0;
    background-color: #ffd60a;
    color: #000;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 18px;
    transition: all ease-in-out 200ms;
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
  .payment-btn:hover {
    transform: scale(1.02);
  }
  @media screen and(min-width: 800px) {
    .main {
      width: 40%;
    }
  }
}
</style>
