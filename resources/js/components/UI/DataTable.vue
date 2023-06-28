<template>
    <div style="overflow-x:auto;">
        <div class="d-flex justify-content-between align-items-center">
            <input type="search" class="form-control form-control-solid" v-model="searchValue" @input="search()" style="width:250px;" placeholder="Search" autocomplete="off">
            <slot name="rightSearch"></slot>
        </div>
        <div class="wrap-table" style="width:100%; overflow-x:auto;">
            <table class="table table-hover my-4 data-table-faris" style="table-layout: fixed;">
                <thead>
                    <tr>
                        <th v-for="(val, i) in tableConfig?.data?.header" :class="val?.class?.column" :style="val?.style?.column">
                            <div class="d-flex justify-content-between" @click="val?.sort ? clickSort(val, i) : ''" :style="`${val?.sort ? 'cursor:pointer;' : ''}`">
                                <div :class="`wrap-th ${val?.class?.wrap}`" :style="`width:100%; ${val?.style?.wrap}`">
                                    <h5 :class="`text-gray-700 ${val?.class?.text}`" :style="val?.style?.text">{{ val?.text }}</h5>
                                </div>
                                <template v-if="val?.sort && val?.activeSort">
                                    <span v-if="tableConfig?.config?.order_by == 'asc'"><i class="bi bi-sort-alpha-down fa-lg"></i></span>
                                    <span v-if="tableConfig?.config?.order_by == 'desc'"><i class="bi bi-sort-alpha-up fa-lg"></i></span>
                                </template>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="tableConfig?.config?.loading">
                        <tr>
                            <td :colspan="tableConfig?.data?.header?.length">
                                <center class="p-5" style="display:block;">
                                    <app-loader></app-loader>
                                </center>
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <slot name="body"></slot>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="control-bottom d-flex justify-content-between w-100">
            <div class="wrap-limit">
                <select class="form-select-solid form-select form-select-sm" v-model="tableConfig.config.limit" @change=" tableConfig.config.page = 1; $emit('get-data');">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div class="wrap-pagination">
                <ul class="pagination">
                    <li :class="`page-item next ${tableConfig?.config?.page == 1 ? 'disabled' : ''}`"><a href="javascript:;" @click="tableConfig.config.page = 1; $emit('get-data');" class="page-link"><i class="bi bi-chevron-double-left"></i></a></li>
                    <li :class="`page-item previous ${tableConfig?.config?.page == 1 ? 'disabled' : ''}`"><a href="javascript:;"  @click="tableConfig.config.page = tableConfig?.config?.page-1; $emit('get-data');" class="page-link"><i class="previous"></i></a></li>
                    <template v-for="(context,index) in tableConfig?.config?.totalPage">
                        <template v-if="tableConfig?.config?.page < 3">
                            <template v-if="index+1 <= 5">
                                <li :class="`page-item ${index+1 == tableConfig?.config?.page ? 'active' : ''}`"><a href="javascript:;" @click="tableConfig.config.page = index+1; $emit('get-data');" class="page-link">{{ index+1 }}</a></li>
                            </template>
                        </template>
                        <template v-if="tableConfig?.config?.page >= 3 && tableConfig?.config?.page <= tableConfig?.config?.totalPage-3">
                            <template v-if="index+1 < tableConfig?.config?.page+3 && index+1 > tableConfig?.config?.page-3">
                                <li :class="`page-item ${index+1 == tableConfig?.config?.page ? 'active' : ''}`"><a href="javascript:;" @click="tableConfig.config.page = index+1; $emit('get-data');" class="page-link">{{ index+1 }}</a></li>
                            </template>
                        </template>
                        <template v-if="tableConfig?.config?.page >= tableConfig?.config?.totalPage-2 && tableConfig?.config?.page >= 3">
                            <template v-if="index+1 > tableConfig?.config?.totalPage-5">
                                <li :class="`page-item ${index+1 == tableConfig?.config?.page ? 'active' : ''}`"><a href="javascript:;" @click="tableConfig.config.page = index+1; $emit('get-data');" class="page-link">{{ index+1 }}</a></li>
                            </template>
                        </template>
                    </template>
                    <li :class="`page-item next ${tableConfig?.config?.page == tableConfig?.config?.totalPage ? 'disabled' : ''}`"><a href="javascript:;" @click="tableConfig.config.page = tableConfig?.config?.page+1; $emit('get-data');" class="page-link"><i class="next"></i></a></li>
                    <li :class="`page-item next ${tableConfig?.config?.page == tableConfig?.config?.totalPage ? 'disabled' : ''}`"><a href="javascript:;" @click="tableConfig.config.page = tableConfig?.config?.totalPage; $emit('get-data');" class="page-link"><i class="bi bi-chevron-double-right"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Lodash from 'lodash';
    export default {
        props: {
            tableConfig: {
                type: Object,
            }
        },
        data(){
            return {
                searchValue: ''
            }
        },
        mounted(){

        },
        watch: {

        },
        methods: {
            clickSort(val, i){
                $.each(this.tableConfig?.data?.header, function(index,value){
                    value.activeSort = false;
                });
                this.tableConfig.data.header[i].activeSort = true;
                if(this.tableConfig.config.order_by == 'asc'){
                    this.tableConfig.config.order_by = 'desc';
                    this.tableConfig.config.sort_by = val?.sort_by;
                }
                else if(this.tableConfig.config.order_by == 'desc'){
                    this.tableConfig.config.order_by = 'asc';
                    this.tableConfig.config.sort_by = val?.sort_by
                }

                this.$emit('get-data');
            },
            search: Lodash.debounce(function($event){
                this.tableConfig.config.search = this.searchValue;
                this.$emit('get-data');
            }, 1000),
        }
    }
</script>

<style scoped>
    thead{
        border-bottom:2px solid lightgray;
    }
</style>

<style>
    table.data-table-faris tr{
        border-bottom:1px dashed lightgray !important;
        padding:10px !important;
        padding-top:15px !important;
        padding-bottom:15px !important;
    }
    table.data-table-faris tr td, table.data-table-faris tr th{
        border:none;
        padding:10px !important;
        padding-top:15px !important;
        padding-bottom:15px !important;
    }
    @media screen and (max-width: 700px){
        table.table{
            width:1000px;
        }
    }
    /* Coloring paginate */
    /* .page-item.active a{
        background-color: #D35D3D !important;
    } */
</style>
