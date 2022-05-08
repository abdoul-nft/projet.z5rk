<template>
<div>
    <section class="un-my-account">
        <!-- head -->
        <div class="head border-0 pb-0">
            <div class="form-group form-address-copy">
                <label>Your Wallet Address</label>
                <div class="input_group">
                    <input type="text" class="form-control size-11 weight-500"
                        :value="$store.state.user.wallet_address">
                    <button type="button" class="btn btn-copy">
                        <i class="ri-file-copy-2-line"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- body -->
        <div class="body">
            <div class="img-coin-eth">
                <picture>
                    <source srcset="~/assets/images/other/eth.webp" type="image/webp">
                    <img src="~/assets/images/other/eth.png" alt="">
                </picture>
            </div>
            <div class="my-balance-text">
                <h2>My Balance</h2>
                <p>{{ $store.state.balance }} ETH</p>

                <button type="button"
                    class="btn btn-md-size effect-click border-primary rounded-pill text-primary"
                    data-bs-toggle="modal" data-bs-target="#mdllAddETH">
                    Add Balance
                </button>
            </div>
        </div>
    </section>

    <section class="log-table-simple">
        <h3>Operation log</h3>
        <table class="table table-striped table-hover">
            <tbody>
                <tr v-for="transaction in this.$store.state.transactions" :key="transaction.hash">
                    <td>Added <span class="text-dark">{{parseInt(transaction.value)/1000000000000000000}}</span> ETH - {{formatDate(transaction.block_timestamp)}}</td>
                </tr>
            </tbody>
        </table>
    </section>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment';

export default Vue.extend({
  middleware: 'auth',
  name: 'my-wallet',
  layout: 'others',
  methods:{
    formatDate(value: any) {
        if (value) {
            return moment(String(value)).format('DD/MM/YYYY hh:mm')
        }
    }
  } 
})
</script>