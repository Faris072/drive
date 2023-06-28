<template>
    <div>
        <div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">
                <app-sidebar></app-sidebar>
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" style="padding-top:70px !important;" id="kt_wrapper">
                    <app-navbar></app-navbar>
                    <!--begin::Content-->
                    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                        <router-view></router-view>
                    </div>
                    <!--end::Content-->
                    </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Page-->
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            setTimeout(function(){
                reinitializeAllPlugin();
            },1000);
        }
    };
</script>

<style scoped>
</style>
