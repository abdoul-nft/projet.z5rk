<template>
    <section class="discover-nft-random margin-y-20">
        <div class="content-NFTs-body">
            <!-- item-card-nft -->
            <div class="item-card-nft">
                <picture>
                    <source srcset="~/assets/images/other/18.webp" type="image/webp">
                    <img class="big-image" src="~/assets/images/other/18.jpg" alt="">
                </picture>
                <div class="counterdown">
                    <span>08H</span>
                    <span>38M</span>
                    <span>16S</span>
                </div>
                <div class="btn-like-click">
                    <div class="btnLike">
                        <input type="checkbox" checked>
                        <span class="count-likes">197</span>
                        <i class="ri-heart-3-line"></i>
                    </div>
                </div>
                <a href="page-collectibles-details.html" class="un-info-card">
                    <div class="block-left">
                        <h4>Dark Side of Me</h4>
                        <div class="user">
                            <picture>
                                <source srcset="~/assets/images/avatar/19.webp" type="image/webp">
                                <img class="img-avatar" src="~/assets/images/avatar/19.jpg" alt="">
                            </picture>
                            <h5>Julian Co.</h5>
                        </div>
                    </div>
                    <div class="block-right">
                        <h6>Starting Bid</h6>
                        <p>
                            <span>($3,650)</span>
                            1.50 ETH
                        </p>
                    </div>
                </a>
            </div>
            <!-- item-sm-card-NFTs -->
            <a href="page-collectibles-details.html" class="item-sm-card-NFTs">
                <div class="cover-image">
                    <picture>
                        <source srcset="~/assets/images/other/27.webp" type="image/webp">
                        <img class="big-image" src="~/assets/images/other/27.jpg" alt="">
                    </picture>
                    <div class="content-text">
                        <div class="btn-like-click">
                            <div class="btnLike">
                                <input type="checkbox">
                                <span class="count-likes">14</span>
                                <i class="ri-heart-3-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="user-text">
                        <div class="user-avatar">
                            <picture>
                                <source srcset="~/assets/images/avatar/10.webp" type="image/webp">
                                <img class="sm-user" src="~/assets/images/avatar/10.jpg" alt="">
                            </picture>
                            <span>Camillo</span>
                        </div>
                        <div class="number-eth">
                            <span class="main-price">1.50 ETH</span>
                            <span>($3,650)</span>
                        </div>
                    </div>
                </div>
            </a>
            <!-- item-sm-card-NFTs -->
            <a href="page-collectibles-details.html" class="item-sm-card-NFTs">
                <div class="cover-image">
                    <picture>
                        <source srcset="~/assets/images/other/19.webp" type="image/webp">
                        <img class="big-image" src="~/assets/images/other/19.jpg" alt="">
                    </picture>
                    <div class="content-text">
                        <div class="icon-type">
                            <i class="ri-vidicon-line"></i>
                        </div>

                        <div class="btn-like-click">
                            <div class="btnLike">
                                <input type="checkbox">
                                <span class="count-likes">0</span>
                                <i class="ri-heart-3-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="user-text">
                        <div class="user-avatar">
                            <picture>
                                <source srcset="~/assets/images/avatar/14.webp" type="image/webp">
                                <img class="sm-user" src="~/assets/images/avatar/14.jpg" alt="">
                            </picture>
                            <span>Julian Co.</span>
                        </div>
                        <div class="number-eth">
                            <span class="main-price">1.50 ETH</span>
                            <span>($3,650)</span>
                        </div>
                    </div>
                </div>
            </a>
            <!-- item-sm-card-NFTs -->
            <a href="page-collectibles-details.html" class="item-sm-card-NFTs">
                <div class="cover-image">
                    <picture>
                        <source srcset="~/assets/images/other/24.webp" type="image/webp">
                        <img class="big-image" src="~/assets/images/other/24.jpg" alt="">
                    </picture>
                    <div class="content-text">
                        <div class="btn-like-click">
                            <div class="btnLike">
                                <input type="checkbox" checked>
                                <span class="count-likes">42</span>
                                <i class="ri-heart-3-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="user-text">
                        <div class="user-avatar">
                            <picture>
                                <source srcset="~/assets/images/avatar/10.webp" type="image/webp">
                                <img class="sm-user" src="~/assets/images/avatar/10.jpg" alt="">
                            </picture>
                            <span>Camillo</span>
                        </div>
                        <div class="number-eth">
                            <span class="main-price">1.50 ETH</span>
                            <span>($3,650)</span>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    middleware: 'auth',
    name: 'favoris',
    layout: 'navigation',
})
</script>
