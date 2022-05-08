<template>
  <div>
    <section class="unSwiper-cards margin-t-20">
        <!-- un-title-default -->
        <div class="un-title-default">
            <div class="text">
                <h2>Discover</h2>
                <p>Be on the lookout for the latest NFTs</p>
            </div>
            <div class="un-block-right">
                <a @click="$nuxt.$router.push('/search')" class="icon-back" aria-label="iconBtn">
                    <i class="ri-arrow-drop-right-line"></i>
                </a>
            </div>
        </div>
        <div class="discover-nft-random margin-t-20">
            <div class="content-NFTs-body">
                <!-- item-card-nft -->
                <div class="item-card-nft" v-if="this.$store.state.nfts">
                    <picture>
                        <source :srcset="getImage(parseNftMetaData(this.$store.state.nfts[0].metadata).image)" type="image/webp">
                        <img class="big-image" :src="getImage(parseNftMetaData(this.$store.state.nfts[0].metadata).image)" alt="">
                    </picture>
                    <div class="counterdown">
                        <!-- <span>08H</span>
                        <span>38M</span> -->
                        <span>16S</span>
                    </div>
                    <div class="btn-like-click">
                        <div class="btnLike">
                            <input type="checkbox" checked>
                            <span class="count-likes">197</span>
                            <i class="ri-heart-3-line"></i>
                        </div>
                    </div>
                    <a href="" class="un-info-card">
                        <div class="block-left">
                            <h4>{{ parseNftMetaData(this.$store.state.nfts[0].metadata).name }}</h4>
                            <div class="user">
                                <picture>
                                    <source srcset="~/assets/images/avatar/19.webp" type="image/webp">
                                    <img class="img-avatar" src="~/assets/images/avatar/19.jpg" alt="">
                                </picture>
                                <h5>Julian Co. </h5>
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
                <a href="#" class="item-sm-card-NFTs" v-for="nft in this.$store.state.nfts" :key="nft.hash" @click="showNft(nft)">
                    <div class="cover-image">
                        <picture>
                            <source :srcset="getImage(parseNftMetaData(nft.metadata).image)" type="image/webp">
                            <img class="big-image" :src="getImage(parseNftMetaData(nft.metadata).image)" alt="">
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
                                <!-- <picture>
                                    <source srcset="~/assets/images/avatar/10.webp" type="image/webp">
                                    <img class="sm-user" src="~/assets/images/avatar/10.jpg" alt="">
                                </picture> -->
                                <span>{{ parseNftMetaData(nft.metadata).name }}</span>
                            </div>
                            <div class="number-eth">
                                <span class="main-price">1.50 ETH</span>
                                <span>($3,650)</span>
                            </div>
                        </div>
                    </div>
                </a>


            </div>
        </div>
    </section>

    <!-- <div class="border-sections-home"></div> -->

    <section class="margin-t-20 unList-creatores">
        <!-- un-title-default -->
        <div class="un-title-default">
            <div class="text">
                <h2>Creators</h2>
                <p>You can follow many Creators</p>
            </div>
            <div class="un-block-right">
                <a href="page-creators.html" class="icon-back" aria-label="iconBtn">
                    <i class="ri-arrow-drop-right-line"></i>
                </a>
            </div>
        </div>

        <div class="content-list-creatores">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="page-creator-profile.html">
                        <div class="item-user-img">
                            <picture>
                                <source srcset="~/assets/images/avatar/13.webp" type="image/webp">
                                <img class="avt-img" src="~/assets/images/avatar/13.jpg" alt="">
                            </picture>
                            <div class="txt-user">
                                <h5>Richard Noga</h5>
                                <p>$9,500.32</p>
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">44 Item</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="page-creator-profile.html">
                        <div class="item-user-img">
                            <picture>
                                <source srcset="~/assets/images/avatar/7.webp" type="image/webp">
                                <img class="avt-img" src="~/assets/images/avatar/7.jpg" alt="">
                            </picture>
                            <div class="txt-user">
                                <h5>Tito_Calab</h5>
                                <p>$8,382.32</p>
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">37 Item</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="page-creator-profile.html">
                        <div class="item-user-img">
                            <picture>
                                <source srcset="~/assets/images/avatar/4.webp" type="image/webp">
                                <img class="avt-img" src="~/assets/images/avatar/4.jpg" alt="">
                            </picture>
                            <div class="txt-user">
                                <h5>Settimio Loggia</h5>
                                <p>$6,920.00</p>
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">30 Item</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="page-creator-profile.html">
                        <div class="item-user-img">
                            <picture>
                                <source srcset="~/assets/images/avatar/1.webp" type="image/webp">
                                <img class="avt-img" src="~/assets/images/avatar/1.jpg" alt="user">
                            </picture>
                            <div class="txt-user">
                                <h5>Vinicius O.</h5>
                                <p>$4,500.32</p>
                            </div>
                        </div>
                        <div class="other-option">
                            <div class="color-text rounded-pill bg-snow btn-xs-size">20 Item</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    middleware: 'auth',
    name: 'index',
    layout: 'navigation',
    head() {
        return {
            script: [
                // { src: '/scss/style.scss' }
            ],
        }
    },
    data() {
        return {
            mNft: null,
        }
    },
    mounted(){
        console.log(this.$store.state.nfts)
    },
    methods: {
        showNft(value: any) {
            console.log(this.parseNftMetaData(value.metadata))
        },
        parseNftMetaData(value: string) {
            return JSON.parse(value)
        },
        getImage(value: string) {
            return ( value.includes('ipfs://ipfs')) ? value.replace('ipfs://ipfs','https://ipfs.moralis.io:2053/ipfs/') : value.replace('ipfs://','https://ipfs.moralis.io:2053/ipfs/')
        }
    }
})
</script>
