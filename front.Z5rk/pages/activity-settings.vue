<template>
<div>
    <section class="un-my-account">
        <!-- head -->
        <div class="head border-0">
            <p class="color-text size-14 m-0">
                Select which notifications you would like to receive for 0xe388...e162
            </p>
        </div>
    </section>

    <section class="un-activity-toggle">
        <nav class="nav flex-column">
            <div class="nav-link">
                <div class="text">
                    <h2>Item Sold</h2>
                    <p>When someone purchased one of your items</p>
                </div>
                <label class="switch_toggle toggle_lg" for="swithDefault">
                    <input type="checkbox" checked id="swithDefault">
                    <span class="handle"></span>
                </label>
            </div>
            <div class="nav-link">
                <div class="text">
                    <h2>Bid Activity</h2>
                    <p>When someone bids on one of your items</p>
                </div>
                <label class="switch_toggle toggle_lg" for="swithDefault2">
                    <input type="checkbox" id="swithDefault2">
                    <span class="handle"></span>
                </label>
            </div>
            <div class="nav-link">
                <div class="text">
                    <h2>Price Change</h2>
                    <p>When an item you made an offer on changes in price</p>
                </div>
                <label class="switch_toggle toggle_lg" for="swithDefault3">
                    <input type="checkbox" checked id="swithDefault3">
                    <span class="handle"></span>
                </label>
            </div>
            <div class="nav-link">
                <div class="text">
                    <h2>Auction Expiration</h2>
                    <p>When a Dutch or English auction you created ends</p>
                </div>
                <label class="switch_toggle toggle_lg" for="swithDefault4">
                    <input type="checkbox" checked id="swithDefault4">
                    <span class="handle"></span>
                </label>
            </div>
            <div class="nav-link">
                <div class="text">
                    <h2>Outbid</h2>
                    <p>When an offer you placed is exceeded by another user</p>
                </div>
                <label class="switch_toggle toggle_lg" for="swithDefault5">
                    <input type="checkbox" checked id="swithDefault5">
                    <span class="handle"></span>
                </label>
            </div>
            <div class="nav-link">
                <div class="text">
                    <h2>Referral Successful</h2>
                    <p>When an item you referred is purchased</p>
                </div>
                <label class="switch_toggle toggle_lg" for="swithDefault6">
                    <input type="checkbox" id="swithDefault6">
                    <span class="handle"></span>
                </label>
            </div>
            <div class="nav-link">
                <div class="text">
                    <h2>Owned Asset Updates</h2>
                    <p>When a significant update occurs for one of the items you have purchased on opensea</p>
                </div>
                <label class="switch_toggle toggle_lg" for="swithDefault7">
                    <input type="checkbox" checked id="swithDefault7">
                    <span class="handle"></span>
                </label>
            </div>
            <div class="nav-link">
                <div class="text">
                    <h2>Successful Purchase</h2>
                    <p>When you successfully buy an item</p>
                </div>
                <label class="switch_toggle toggle_lg" for="swithDefault8">
                    <input type="checkbox" id="swithDefault8">
                    <span class="handle"></span>
                </label>
            </div>
        </nav>
    </section>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  name: 'activity-settings',
  layout: 'others',
})
</script>