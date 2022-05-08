<template>
  <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="mdllOtherOpen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header border-0"></div>
            <div class="modal-body pt-0">
                <div class="content-alert-actions">
                    <div class="margin-b-20">
                        <h2>
                            This page will open another application.
                        </h2>
                    </div>
                    <div class="action-links">
                        <button type="button" class="btn border color-text rounded-pill margin-r-20"
                            data-bs-dismiss="modal">Cancel</button>
                        <a href="#" class="btn bg-primary text-white rounded-pill">Open</a>
                    </div>
                </div>
            </div>
            <div class="modal-footer border-0">
                <div class="env-pb"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ConnectWalletModal',
}
</script>
