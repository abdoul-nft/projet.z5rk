<template>
<div id="wrapper">
<div id="content">
    <AppDefaultHeader title="Edit Profile" />
    <div class="space-sticky"></div>

    <section class="un-creator-ptofile">
        <!-- head -->
        <div class="head">
            <div class="cover-image d-flex align-items-center justify-content-center overlay">
                <picture>
                    <source srcset="~/assets/images/other/20.webp" type="image/webp">
                    <img src="~/assets/images/other/20.jpg" alt="cover image">
                </picture>
                <div class="position-absolute">
                    <button type="button" class="btn btn-upload-text">
                        <input type="file">
                        <span>Upload cover photo</span>
                    </button>
                </div>
            </div>
            <div class="text-user-creator">
                <div class="d-flex align-items-center">
                    <div class="user-img d-flex align-items-center justify-content-center position-relative">
                        <picture>
                            <source srcset="~/assets/images/avatar/avatar.webp" type="image/webp">
                            <img src="~/assets/images/avatar/avatar.png" alt="creator image">
                        </picture>
                        <div class="position-absolute">
                            <button type="button" class="btn btn-upload-icon">
                                <input type="file">
                                <div class="icon">
                                    <i class="ri-camera-line"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="text">
                        <h3 class="size-15 weight-500">Upload Profile Photo</h3>
                        <p class="size-11 weight-400">We recommend a 300x300px JPG, PNG, SVG, WEBP or GIF (1MB
                            max size)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-20 form-edit-profile margin-b-20">
        <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" :value="$store.state.user.username"  placeholder="Enter username">
            <div class="size-11 color-text form-text">Username is not visible to other users</div>
        </div>
        <div class="form-group">
            <label>Bio</label>
            <textarea  class="form-control" rows="3" placeholder="Tell the world your story!">
            </textarea>
        </div>
        <div class="form-group">
            <label>E-Mail Address</label>
            <!--is-invalid color-red -->
            <input type="email" class="form-control" :value="$store.state.user.email" 
                placeholder="Enter your email">
            <div class="size-11 form-text">This email address is not valid</div>
        </div>

        <div class="bk-social-networks">
            <h3>Social networks</h3>
            <div class="form-group with_icon">
                <label>Twitter</label>
                <div class="input_group">
                    <input type="text" class="form-control" :value="$store.state.user.twitter_username" placeholder="@twitter username">
                    <div class="icon">
                        <i class="ri-twitter-fill"></i>
                    </div>
                </div>
            </div>

            <div class="form-group with_icon">
                <label>Instagram</label>
                <div class="input_group">
                    <input type="text" class="form-control" :value="$store.state.user.instagram_username" placeholder="@instagram username">
                    <div class="icon">
                        <i class="ri-instagram-fill"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="size-13 color-text margin-t-10 border-b border-b-solid border-snow padding-b-20">
            To update your settings you should sign a message through your wallet. Click <span
                class="text-dark">'Update
                Profile'</span> then
            sign the message.
        </div>

    </section>

    <div class="space-sticky-footer"></div>

    <footer class="footer-pages-forms">
        <div class="content">
            <div class="links-clear-data">
                <a href="page-collectibles-details.html" class="link-clear">
                    <i class="ri-close-circle-line"></i>
                    <span>Clear all</span>
                </a>
            </div>
            <a href="page-my-profile.html" aria-label="profile" class="btn btn-bid-items">
                <p>Update Profile</p>
                <div class="ico">
                    <i class="ri-arrow-drop-right-line"></i>
                </div>
            </a>
        </div>
    </footer>
</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  name: 'edit-profile',
  layout: 'default'
})
</script>