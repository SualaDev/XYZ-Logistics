<template>
  <div class="main-container">
    <h2 class="welcome-message">
      Welcome back David
    </h2>
    <div class="order-details">
      <div class="total-revenue">
        <h2 class="text">
          Total Revenue
        </h2>
        <h2 class="figures">
          $200k
        </h2>
        <div class="money-details">
          <h6 class="money-frequency">
            Up by 50k this month
          </h6>
          <img src="~assets/images/healthymoney.svg" alt="">
        </div>
      </div>
      <div class="active-orders">
        <h2 class="text">
          Active Orders
        </h2>
        <h2 class="figures">
          200
        </h2>
        <div class="money-details">
          <h6 class="money-frequency">
            Down by 50k this month
          </h6>
          <img src="~assets/images/negativemoney.svg" alt="">
        </div>
      </div>
      <div class="pending-orders">
        <h2 class="text">
          Pending Orders
        </h2>
        <h2 class="figures">
          49
        </h2>
      </div>
      <div class="active-riders">
        <h2 class="text">
          Active Riders
        </h2>
        <h2 class="figures">
          70
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  layout: 'adminlayout'
}
</script>

<style scoped>

.main-container{
  background-color: #fffceb91;
  padding: 1.5rem 0 0 3rem;
}
.welcome-message{
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
}
.order-details{
  display: flex;
}
.total-revenue,.active-orders,.pending-orders{
  padding-right: 3.5rem;
  border-right: 1px solid #F3F3F3;
}
.active-orders,.pending-orders,.active-riders{
  padding-left: 3rem;
}
.text{
  font-size: .8rem;
  line-height: 1.3rem;
}
.figures{
  font-size: 2.5rem;
  line-height: 3.5rem;
}
.money-details{
  display: flex;
  column-gap: .6rem;
  align-items: center;
}
.money-frequency{
  color: #ADADAD;
  font-size: .8rem;
  line-height: 1.3rem;
}
</style>
