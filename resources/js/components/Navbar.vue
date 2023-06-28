<template>
    <div>
        <!--begin::Header-->
        <div id="kt_header" style="" class="header align-items-stretch">
            <!--begin::Container-->
            <div class="container-fluid d-flex align-items-stretch justify-content-between">
                <!--begin::Aside mobile toggle-->
                <div class="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
                    <div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
                        <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
                        <span class="svg-icon svg-icon-2x mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                                <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                            </svg>
                        </span>
                        <!--end::Svg Icon-->
                    </div>
                </div>
                <!--end::Aside mobile toggle-->
                <!--begin::Mobile logo-->
                <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                    <a href="#" class="d-lg-none">
                        <img alt="Logo" :src="`${assetUrl}assets/extends/images/logo_pomdes.png`" class="h-30px" />
                    </a>
                </div>
                <!--end::Mobile logo-->
                <!--begin::Wrapper-->
                <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                    <!--begin::Navbar-->
                    <div class="d-flex align-items-stretch" id="kt_header_nav">
                        <!--begin::Menu wrapper-->
                        <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                            <!--begin::Menu-->
                            <!-- <div class="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
                                <div class="menu-item me-lg-1">
                                    <a class="menu-link active py-3" href="../../demo1/dist/index.html">
                                        <span class="menu-title">Dashboard</span>
                                    </a>
                                </div>
                            </div> -->
                            <!--end::Menu-->
                        </div>
                        <!--end::Menu wrapper-->
                    </div>
                    <!--end::Navbar-->
                    <!--begin::Topbar-->
                    <div class="d-flex align-items-stretch flex-shrink-0">
                        <!--begin::Toolbar wrapper-->
                        <div class="d-flex align-items-stretch flex-shrink-0">
                            <!--begin::Search-->
                            <div class="d-flex align-items-stretch ms-1 ms-lg-3">
                            <!--begin::User-->
                            <div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                                <!--begin::Menu wrapper-->
                                <div class="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <img v-if="!profile.loading" :src="linkPhotoProfile ? `${linkPhotoProfile}?token=${token}` : `${$assetUrl()}assets/images/logo_pomdes.png`" style="object-fit:cover;" alt="user" />
                                    <app-loader v-else></app-loader>
                                </div>
                                <!--begin::Menu-->
                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <div class="menu-content d-flex align-items-center px-3">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-50px me-5">
                                                <img v-if="!profile.loading" :src="linkPhotoProfile ? `${$store.state.auth.profile.photo_profile.link}?token=${token}` : `${$assetUrl()}assets/images/logo_pomdes.png`" style="object-fit:cover;" alt="user" />
                                                <app-loader v-else></app-loader>
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Username-->
                                            <div class="d-flex flex-column">
                                                <div class="fw-bolder d-flex align-items-center fs-5"> {{ this.$store?.state?.auth?.profile?.name }}
                                                <span class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">{{ this?.$store?.state?.auth?.role?.name }}</span></div>
                                                <a href="#" class="fw-bold text-muted text-hover-primary fs-7">{{ this.$store?.state?.auth?.username }}</a>
                                            </div>
                                            <!--end::Username-->
                                        </div>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu separator-->
                                    <div class="separator my-2"></div>
                                    <!--end::Menu separator-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-5">
                                        <a href="javascript:;" @click="showModalProfile()" class="menu-link px-5">Profile</a>
                                    </div>
                                    <div class="menu-item px-5">
                                        <a href="javascript:;" @click="modalChangePassword()" class="menu-link px-5">Ganti Password</a>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <!-- <div class="menu-item px-5">
                                        <a href="../../demo1/dist/pages/projects/list.html" class="menu-link px-5">
                                            <span class="menu-text">My Projects</span>
                                            <span class="menu-badge">
                                                <span class="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                                            </span>
                                        </a>
                                    </div> -->
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <!-- <div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                                        <a href="#" class="menu-link px-5">
                                            <span class="menu-title">My Subscription</span>
                                            <span class="menu-arrow"></span>
                                        </a> -->
                                        <!--begin::Menu sub-->
                                        <!-- <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                            <div class="menu-item px-3">
                                                <a href="../../demo1/dist/account/referrals.html" class="menu-link px-5">Referrals</a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="../../demo1/dist/account/billing.html" class="menu-link px-5">Billing</a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="../../demo1/dist/account/statements.html" class="menu-link px-5">Payments</a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="../../demo1/dist/account/statements.html" class="menu-link d-flex flex-stack px-5">Statements
                                                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements"></i></a>
                                            </div>
                                            <div class="separator my-2"></div>
                                            <div class="menu-item px-3">
                                                <div class="menu-content px-3">
                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                        <input class="form-check-input w-30px h-20px" type="checkbox" value="1" name="notifications" />
                                                        <span class="form-check-label text-muted fs-7">Notifications</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div> -->
                                    <!-- </div> -->
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <!-- <div class="menu-item px-5">
                                        <a href="../../demo1/dist/account/statements.html" class="menu-link px-5">My Statements</a>
                                    </div> -->
                                    <!--end::Menu item-->
                                    <!--begin::Menu separator-->
                                    <div class="separator my-2"></div>
                                    <!--end::Menu separator-->
                                    <!--begin::Menu item-->
                                    <!-- <div class="menu-item px-5 my-1">
                                        <a href="../../demo1/dist/account/settings.html" class="menu-link px-5">Account Settings</a>
                                    </div> -->
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-5">
                                        <a href="javascript:;" @click="logout()" class="menu-link text-danger px-5">Logout</a>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu separator-->
                                    <!-- <div class="separator my-2"></div> -->
                                    <!--end::Menu separator-->
                                    <!--begin::Menu item-->
                                    <!-- <div class="menu-item px-5">
                                        <div class="menu-content px-5">
                                            <label class="form-check form-switch form-check-custom form-check-solid pulse pulse-success" for="kt_user_menu_dark_mode_toggle">
                                                <input class="form-check-input w-30px h-20px" type="checkbox" value="1" name="mode" id="kt_user_menu_dark_mode_toggle" data-kt-url="../../demo1/dist/index.html" />
                                                <span class="pulse-ring ms-n1"></span>
                                                <span class="form-check-label text-gray-600 fs-7">Dark Mode</span>
                                            </label>
                                        </div>
                                    </div> -->
                                    <!--end::Menu item-->
                                </div>
                                <!--end::Menu-->
                                <!--end::Menu wrapper-->
                            </div>
                            <!--end::User -->
                            <!--begin::Heaeder menu toggle-->
                            <!-- <div class="d-flex align-items-center d-lg-none ms-2 me-n3" title="Show header menu">
                                <div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                                    begin::Svg Icon | path: icons/duotune/text/txt001.svg
                                    <span class="svg-icon svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z" fill="black" />
                                            <path opacity="0.3" d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z" fill="black" />
                                        </svg>
                                    </span>
                                    end::Svg Icon
                                </div>
                            </div> -->
                            <!--end::Heaeder menu toggle-->
                        </div>
                        <!--end::Toolbar wrapper-->
                    </div>
                    <!--end::Topbar-->
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Container-->
        </div>
        </div>
        <!--end::Header-->

        <div class="modal fade" tabindex="-1" id="modal-navbar-profile">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="m-auto" style="width:100%;">
                            <center>
                                <h3 class="modal-title">Profile</h3>
                                <span class="text-muted">Ubah profile akun PDOMS</span>
                            </center>
                        </div>
                        <!--begin::Close-->
                        <button type="button" class="btn-close m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body">
                        <div class="wrap-photo-profile">
                            <center id="wrap-show-photo-profile">
                                <img v-if="!profile.loading" :src="`${linkPhotoProfile+'?token='+token}`" style="width:150px; height:150px; object-fit: cover; border-radius:100%; border:1px solid black;">
                                <app-loader v-else></app-loader>
                            </center>
                            <br>
                            <div class="form-photo-profile">
                                <label for="dropzone_photo_profile"><h5><b>Photo Profile</b></h5></label>
                                <div class="dropzone" id="dropzone_photo_profile">
                                    <div class="dz-message needsclick">
                                        <i class="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
                                        <div class="ms-4">
                                            <h3 class="fs-5 fw-bolder text-gray-900 mb-1">Drop atau klik disini untuk mengubah foto profil.</h3>
                                            <span class="fs-7 fw-bold text-gray-400">Upload foto profil dengan format .jpg/.jpeg/.png</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="wrap-form-profile">
                            <div class="d-flex" v-if="profile.loading">
                                <app-loader class="m-auto"></app-loader>
                            </div>
                            <div v-else>
                                <div class="form-group my-4">
                                    <label for="nama"><h5>Nama</h5></label>
                                    <input type="text" v-model="profile.data.name" class="form-control" id="nama" placeholder="Masukkan nama" >
                                </div>
                                <div class="form-group my-4">
                                    <label for="phone"><h5>Province</h5></label>
                                    <app-select2 v-model="profile.data.province" :options="selectList.selectProvince.list" :loading="selectList.selectProvince.loading" @change-options="resetCity()" @get-options="getProvince" placeholder="Pilih Provinsi" :multiple="false" />
                                </div>
                                <div class="form-group my-4">
                                    <label for="phone"><h5>City</h5></label>
                                    <app-select2 v-model="profile.data.city" :options="selectList.selectCity.list" :loading="selectList.selectCity.loading" @get-options="getCity" placeholder="Pilih Kota" :multiple="false" :disabled="!profile.data.province.id" />
                                </div>
                                <div class="form-group my-4">
                                    <label for="phone"><h5>Nomor Telpon</h5></label>
                                    <input type="text" v-model="profile.data.phone" class="form-control" id="phone" placeholder="Masukkan nomor telpon" >
                                </div>
                                <div class="form-group my-4">
                                    <label for="email"><h5>Email</h5></label>
                                    <input type="text" v-model="profile.data.email" class="form-control" id="email" placeholder="Masukkan email" >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tutup</button>
                        <button type="button" class="btn btn-primary" @click="updateProfile()">Simpan Perubahan</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" id="modal-navbar-change-password">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="m-auto" style="width:100%;">
                            <center>
                                <h3 class="modal-title">Ganti Password</h3>
                                <span class="text-muted">Isi form dibawah untuk mengubah password anda.</span>
                            </center>
                        </div>
                        <!--begin::Close-->
                        <button type="button" class="btn-close m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body">
                        <div class="old-passwod my-5" style="position:relative;">
                            <h6>Password Sekarang</h6>
                            <input :type="isShowPassword.old_password ? `text` : `password`" v-model="password.old_password" class="form-control" placeholder="Masukkan password saat ini">
                            <i v-if="!isShowPassword.old_password" @click="isShowPassword.old_password = true" class="bi bi-eye-fill fa-2x" style="position:absolute; right:0; margin-top:-35px; margin-right:15px;"></i>
                            <i v-if="isShowPassword.old_password" @click="isShowPassword.old_password = false" class="bi bi-eye-slash-fill fa-2x" style="position:absolute; right:0; margin-top:-35px; margin-right:15px;"></i>
                        </div>
                        <div class="new-passwod my-5" style="position:relative;">
                            <h6>Password Baru</h6>
                            <input :type="isShowPassword.new_password ? `text` : `password`" v-model="password.new_password" class="form-control" placeholder="Masukkan password saat ini">
                            <i v-if="!isShowPassword.new_password" @click="isShowPassword.new_password = true" class="bi bi-eye-fill fa-2x" style="position:absolute; right:0; margin-top:-35px; margin-right:15px;"></i>
                            <i v-if="isShowPassword.new_password" @click="isShowPassword.new_password = false" class="bi bi-eye-slash-fill fa-2x" style="position:absolute; right:0; margin-top:-35px; margin-right:15px;"></i>
                        </div>
                        <div class="confirm-passwod my-5" style="position:relative;">
                            <h6>Konfirmasi Password</h6>
                            <input :type="isShowPassword.confirm_password ? `text` : `password`" v-model="password.confirm_password" class="form-control" placeholder="Masukkan password saat ini">
                            <i v-if="!isShowPassword.confirm_password" @click="isShowPassword.confirm_password = true" class="bi bi-eye-fill fa-2x" style="position:absolute; right:0; margin-top:-35px; margin-right:15px;"></i>
                            <i v-if="isShowPassword.confirm_password" @click="isShowPassword.confirm_password = false" class="bi bi-eye-slash-fill fa-2x" style="position:absolute; right:0; margin-top:-35px; margin-right:15px;"></i>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tutup</button>
                        <button type="button" class="btn btn-primary" @click="changePassword()">Ubah Password</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                assetUrl: assetUrl,
                linkPhotoProfile: this.$store?.state?.auth?.profile?.photo_profile?.link,
                token: localStorage.getItem('pomdes_token'),
                selectList: {
                    selectProvince: {
                        loading: false,
                        list: []
                    },
                    selectCity: {
                        loading: false,
                        list: []
                    },
                },
                a: '',
                b: '',
                profile: {
                    loading: false,
                    data: {
                        name: '',
                        province: '',
                        city: '',
                        phone: '',
                        email: '',
                    },
                    photo: {
                        link: '',
                        data: ''
                    }
                },
                password: {
                    old_password: '',
                    new_password: '',
                    confirm_password: ''
                },
                isShowPassword: {
                    old_password: false,
                    new_password: false,
                    confirm_password: false
                }
            }
        },
        mounted(){
            let that = this;
            this.getProfile();
            this.linkPhotoProfile = this.$store?.state?.auth?.profile?.photo_profile?.link;
        },
        methods: {
            initDropzone() {
                const that = this;
                if(this.profile.photo.data){
                    this.profile.photo.data.destroy();
                }
                this.profile.photo.data = new Dropzone("#dropzone_photo_profile", {
                    url: urlApi+"users/profile/photo",
                    dictCancelUpload: "Cancel",
                    maxFilesize: 20,
                    parallelUploads: 1,
                    uploadMultiple: false,
                    maxFiles: 1,
                    addRemoveLinks: true,
                    acceptedFiles: ".jpg,.jpeg,.png",
                    autoProcessQueue: true,
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                        Authorization: "Bearer " + localStorage.getItem("pomdes_token"),
                    },
                    init: function () {
                        this.on("error", function (file) {
                        if (!file.accepted) {
                            this.removeFile(file);
                            Swal.fire("Silahkan periksa file Anda lagi");
                        } else if (file.status == "error") {
                            this.removeFile(file);
                            Swal.fire("Terjadi kesalahan koneksi");
                        }
                        });
                            this.on("resetFiles", function (file) {
                            this.removeAllFiles();
                        });
                    },
                });
                this.profile.photo.data.on('success',function(){
                    that.profile.photo.data.destroy();
                    that.getProfile();
                });
            },
            logout(){
                this.$axios().post('logout')
                    .then(res => {
                        localStorage.setItem('pomdes_token','');
                        this.$store.commit('setNoAuth');
                        this.$router.push({name: 'login'});
                    })
                    .catch(err => {
                        this.$axiosHandleError(err);
                    })
                    .then(()=>{

                    });
            },
            showModalProfile(){
                $('#modal-navbar-profile').modal('show');
            },
            modalChangePassword(){
                this.password = {
                    old_password: '',
                    new_password: '',
                    confirm_password: ''
                };
                this.isShowPassword = {
                    old_password: false,
                    new_password: false,
                    confirm_password: false
                };
                $('#modal-navbar-change-password').modal('show');
            },
            getProvince(search, limit){
                let that = this;
                this.selectList.selectProvince.loading = true;
                this.$axios().get(`location/province/select-list?search=${search}&limit=${limit}`)
                    .then(res => {
                        let data = res?.data?.data;
                        this.selectList.selectProvince.list = [];
                        $.each(data, function(i, val){
                            that.selectList.selectProvince.list.push({id: val?.id, text: val?.name});
                        });
                    })
                    .catch(err => {
                        this.$axiosHandleError(err);
                    })
                    .then(() => {
                        this.selectList.selectProvince.loading = false;
                    })
            },
            getCity(search, limit){
                let that = this;
                this.selectList.selectCity.loading = true;
                this.$axios().get(`location/city/select-list?search=${search}&limit=${limit}&province_id=${this.profile?.data?.province?.id || ''}`)
                    .then(res => {
                        let data = res?.data?.data;
                        this.selectList.selectCity.list = [];
                        $.each(data, function(i, val){
                            that.selectList.selectCity.list.push({id: val?.id, text: val?.name});
                        });
                    })
                    .catch(err => {
                        this.$axiosHandleError(err);
                    })
                    .then(() => {
                        this.selectList.selectCity.loading = false;
                    })
            },
            getProfile(){
                this.profile.loading = true;
                let that = this;
                this.$axios().get(`users/profile`)
                    .then(res => {
                        let data = res?.data?.data;
                        this.profile.data.name = data?.name;
                        this.profile.data.phone = data?.phone;
                        this.profile.data.email = data?.email;
                        this.profile.data.city = {id: data?.city?.id, text: data?.city?.name};
                        this.profile.data.province = {id: data?.city?.province?.id, text: data?.city?.province?.name};
                        this.profile.photo.link = data?.photo_profile?.link;
                        this.linkPhotoProfile = '';
                        this.linkPhotoProfile = this.profile?.photo?.link || this.$store?.state?.auth?.profile?.photo_profile?.link;
                        this.initDropzone();
                    })
                    .catch(err => {
                        console.log(err)
                        this.$axiosHandleError(err);
                    })
                    .then(() => {
                        this.profile.loading = false;
                    });
            },
            updateProfile(){
                let that = this;
                let data = this.profile?.data;
                data.city_id = data?.city?.id;
                this.$pageLoadingShow();
                this.$axios().put(`users/profile`,data)
                    .then(res => {
                        Swal.fire('Berhasil', 'Data profil berhasil diubah', 'success');
                    })
                    .catch(err => {
                        console.log(err)
                        this.$axiosHandleError(err);
                    })
                    .then(() => {
                        this.$pageLoadingHide();
                        this.getProfile();
                    });
            },
            resetCity(){
                this.profile.data.city = '';
            },
            changePassword(){
                let that = this;

                this.$pageLoadingShow()
                this.$axios().put(`users/change-password`, this.password)
                    .then(res => {
                        $('.modal').modal('hide');
                        Swal.fire('Berhasil', 'Password berhasil diubah.', 'success');
                    })
                    .catch(err => {
                        this.$axiosHandleError(err);
                    })
                    .then(() => {
                        this.$pageLoadingHide()
                    });
            },
        }
    }
</script>
