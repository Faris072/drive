<template>
    <div>
        <div class="container-xl d-flex m-auto" style="height:100vh;">
            <img style="width:50%; margin:auto;" :src="`${assetUrl}assets/extends/images/not_found.svg`" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                assetUrl: assetUrl,
            }
        }
    }
</script>
