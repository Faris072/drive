<template>
    <div>
        <!--begin::Aside-->
        <div id="kt_aside" class="aside aside-light aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
            <!--begin::Brand-->
            <div class="aside-logo flex-column-auto" id="kt_aside_logo">
                <!--begin::Logo-->
                <a href="" class="d-flex align-items-center" style="align-items:center;">
                    <img alt="Logo" :src="`${assetUrl}assets/extends/images/logo_pomdes.png`" class="h-25px logo" />
                    <h5 class="mx-5 my-0" style="color:orange;">PDOMS</h5>
                </a>
                <!--end::Logo-->
                <!--begin::Aside toggler-->
                <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->
                    <span class="svg-icon svg-icon-1 rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="black"></path>
                            <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="black"></path>
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                </div>
                <!--end::Aside toggler-->
            </div>
            <!--end::Brand-->
            <!--begin::Aside menu-->
            <div class="aside-menu flex-column-fluid">
                <!--begin::Aside Menu-->
                <div class="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                    <!--begin::Menu-->
                    <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
                        <div class="menu-item">
                            <div class="menu-content pb-2">
                                <span class="menu-section text-muted text-uppercase fs-8 ls-1">Dashboard</span>
                            </div>
                        </div>
                        <div class="menu-item">
                            <a :class="`menu-link ${pageActive('dashboard')}`" href="javascript:;" @click="this.$router.push({name: 'dashboard'})">
                                <span class="menu-icon"><i class="bi bi-speedometer fa-lg"></i></span>
                                <span class="menu-title">Dashboard</span>
                            </a>
                        </div>
                        <div class="menu-item" v-if="[1,4].includes($store?.state?.auth?.role_id)">
                            <div class="menu-content pt-8 pb-2">
                                <span class="menu-section text-muted text-uppercase fs-8 ls-1">Master</span>
                            </div>
                        </div>
                        <div class="menu-item" v-if="$store.state.auth.role_id == 1">
                            <a :class="`menu-link ${pageActive('m-users')}`" href="javascript:;" @click="this.$router.push({name: 'm-users'})">
                                <span class="menu-icon"><i class="bi bi-people-fill fa-lg"></i></span>
                                <span class="menu-title">Users</span>
                            </a>
                        </div>
                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion" v-if="$store.state.auth.role_id == 1">
                            <span class="menu-link">
                                <span class="menu-icon"><i class="bi bi-geo-alt-fill fa-lg"></i></span>
                                <span class="menu-title">Location</span>
                                <span class="menu-arrow"></span>
                            </span>
                            <div class="menu-sub menu-sub-accordion">
                                <div class="menu-item">
                                    <a :class="`menu-link ${pageActive('m-province')}`" @click="$router.push({name: 'm-province'})" href="javascript:;">
                                        <span class="menu-bullet">
                                            <span class="bullet bullet-dot"></span>
                                        </span>
                                        <span class="menu-title">Province</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a :class="`menu-link ${pageActive('m-city')}`" @click="$router.push({name: 'm-city'})" href="javascript:;">
                                        <span class="menu-bullet">
                                            <span class="bullet bullet-dot"></span>
                                        </span>
                                        <span class="menu-title">City</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-item" v-if="$store.state.auth.role_id == 1 || $store.state.auth.role_id == 4">
                            <a :class="`menu-link ${pageActive('m-fuel')}`" href="javascript:;" @click="this.$router.push({name: 'm-fuel'})">
                                <span class="menu-icon">
                                    <i class="bi bi-fuel-pump-fill fa-lg"></i>
                                </span>
                                <span class="menu-title">Bahan Bakar</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <div class="menu-content pt-8 pb-2">
                                <span class="menu-section text-muted text-uppercase fs-8 ls-1">Transaction</span>
                            </div>
                        </div>
                        <div class="menu-item" v-if="[1,2,3].includes($store?.state?.auth?.role_id)">
                            <a :class="`menu-link ${pageActive(['t-pengajuan','t-pengajuan-tambah','t-pengajuan-edit'])}`" href="javascript:;" @click="this.$router.push({name: 't-pengajuan'})">
                                <span class="menu-icon"><i class="bi bi-file-earmark-text-fill fa-lg"></i></span>
                                <span class="menu-title">Pengajuan</span>
                            </a>
                        </div>
                        <div class="menu-item" v-if="[1,2].includes($store?.state?.auth?.role_id)">
                            <a :class="`menu-link ${pageActive(['t-tagihan','t-tagihan-penerbitan'])}`" href="javascript:;" @click="this.$router.push({name: 't-tagihan'})">
                                <span class="menu-icon"><i class="bi bi-receipt-cutoff fa-lg"></i></span>
                                <span class="menu-title">Penerbitan Tagihan</span>
                            </a>
                        </div>
                        <div class="menu-item" v-if="[1,2,3].includes($store?.state?.auth?.role_id)">
                            <a :class="`menu-link ${pageActive(['t-pembayaran'])}`" href="javascript:;" @click="this.$router.push({name: 't-pembayaran'})">
                                <span class="menu-icon"><i class="bi bi-credit-card fa-lg"></i></span>
                                <span class="menu-title">Pembayaran Tagihan</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a :class="`menu-link ${pageActive(['t-pengiriman'])}`" href="javascript:;" @click="this.$router.push({name: 't-pengiriman'})">
                                <span class="menu-icon"><i class="bi bi-truck fa-lg"></i></span>
                                <span class="menu-title">Pengiriman</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a :class="`menu-link ${pageActive(['t-sampai','t-sampai-ketidaksesuaian'])}`" href="javascript:;" @click="this.$router.push({name: 't-sampai'})">
                                <span class="menu-icon"><i class="bi bi-flag-fill fa-lg"></i></span>
                                <span class="menu-title">BBM Telah Sampai</span>
                            </a>
                        </div>
                    </div>
                    <!--end::Menu-->
                </div>
                <!--end::Aside Menu-->
            </div>
        </div>
        <!--end::Aside-->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                assetUrl: assetUrl,
            }
        },
        mounted(){

        },
        methods: {
            pageActive(menu){
                let active = '';
                if(typeof Array.isArray(menu)){
                    active = menu.includes(this.$route.name) ? 'active' : '';
                }
                else{
                    active = this.$route.name == menu ? 'active' : '';
                }
                return active;
            }
        }
    }
</script>
