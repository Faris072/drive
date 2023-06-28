<!DOCTYPE html>
<html lang="en">
	<!--begin::Head-->
	<head><base href="">
		<title>Drive</title>
		<meta name="description" content="Drive" />
		<meta name="keywords" content="Drive, Storage." />
		<meta property="og:title" content="Drive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charset="utf-8" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
		<meta property="og:locale" content="en_US" />
		<link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
        <!-- PWA  -->
        {{-- <meta name="theme-color" content="#6777ef"/>
        <link rel="apple-touch-icon" href="{{ asset('assets/extends/images/logo_pomdes.png') }}">
        <link rel="manifest" href="{{ asset('/manifest.json') }}"> --}}
        @include('components.css')
        @vite('resources/css/app.css')
        <script>
            let baseUrl = `{{url('/')}}`;
            let urlApi = baseUrl + '/api/';
            let assetUrl = `{{asset('/')}}`;
            let SUBPATH_DOMAIN = `{{config('myconfig.subpath_domain')}}`;
        </script>
	</head>
	<!--end::Head-->
	<!--begin::Body-->
	<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed" style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">

        <div id="app"></div>

        {{-- <script src="{{ asset('/sw.js') }}"></script> --}}
        <script>
            // if (!navigator.serviceWorker.controller) {
            //     navigator.serviceWorker.register("https://www.farishost.cloud/pomdes/public/sw.js").then(function (reg) {
            //         console.log("Service worker has been registered for scope: " + reg.scope);
            //     });
            // }
        </script>
        <script>
            function reinitializeAllPlugin() {
                $(".drawer-overlay").remove();
                setTimeout(() => {
                    KTDialer.init();
                    KTDrawer.init();
                    KTImageInput.init();
                    KTMenu.createInstances()
                    KTPasswordMeter.init();
                    KTScroll.init();
                    KTScrolltop.init();
                    KTSticky.init();
                    KTSwapper.init();
                    KTToggle.init();
                    KTUtil.onDOMContentLoaded((function () {
                        KTApp.init()
                    })), window.addEventListener("load", (function () {
                        KTApp.initPageLoader()
                    })), "undefined" != typeof module && void 0 !== module.exports && (module.exports = KTApp);

                    KTUtil.onDOMContentLoaded((function () {
                        KTLayoutAside.init()
                    }));


                    KTUtil.onDOMContentLoaded((function () {
                        KTLayoutSearch.init()
                    }));

                    KTUtil.onDOMContentLoaded((function () {
                        KTLayoutToolbar.init()
                    }));

                }, 100);

                setTimeout(() => {
                    $('body').attr('data-kt-drawer-aside', 'off');
                    $('body').attr('data-kt-drawer', 'off');
                    $('body').attr('data-kt-aside-minimize', 'off');

                    $(".drawer-overlay").remove();
                }, 10);


                $("#kt_aside_mobile_toggle").on('click', function () {
                    setTimeout(() => {


                        $('.drawer-overlay').each(function () {
                            let checkLength = $(".drawer-overlay").length;

                            if (checkLength > 1) {
                                $(this).remove();
                            }

                        });
                    }, 10);
                });

            }


            function reinitializeKTMenuPlugin() {
                KTMenu.createInstances()
            }
        </script>
        @vite('resources/js/app.js')
        @include('components.js')
	</body>
	<!--end::Body-->
</html>
