<template>
    <div>
        <div class="dropdown">
            <div class="select-single" v-if="!multiple">
                <input type="text" :value="modelValue?.text ? modelValue?.text : modelValue?.html" :placeholder="placeholder" class="form-select" @click="$emit('get-options', searchValue, limit)" data-bs-toggle="dropdown" :disabled="disabled" readonly>
                <button class="btn-clear" v-if="showClear" @click="clear()"><i class="fa-solid fa-xmark"></i></button>
                <ul class="dropdown-menu" style="width:100%; max-height:50vh; overflow-y:auto;">
                    <li class="p-4" v-if="showSearch">
                        <input type="search" v-model="searchValue" @input="search()" class="form-control p-2" placeholder="Search">
                    </li>
                    <template v-if="loading">
                        <li>
                            <a class="dropdown-item dropdown-item-selectku-dewe" href="javascript:;">{{ loadingLabel }}</a>
                        </li>
                    </template>
                    <template v-if="!options?.length&&!loading">
                        <li>
                            <a class="dropdown-item dropdown-item-selectku-dewe" href="javascript:;">{{ emptyLabel }}</a>
                        </li>
                    </template>
                    <template v-if="options?.length && !loading" v-for="(context, index) in optionsLimit">
                        <li :class="`${context?.id == modelValue?.id ? 'select-active' : ''} d-flex align-items-center justify-content-between`" v-if="context?.html">
                            <a @click="setValue(context)" class="dropdown-item dropdown-item-selectku-dewe" href="javascript:;" v-html="context?.html"></a>
                            <i v-if="context?.id == modelValue?.id" class="fa-solid fa-check text-primary px-5"></i>
                        </li>
                        <li :class="`${context?.id == modelValue?.id ? 'select-active' : ''} d-flex align-items-center justify-content-between`" v-else>
                            <a @click="setValue(context)" class="dropdown-item dropdown-item-selectku-dewe" href="javascript:;" v-text="context?.text"></a>
                            <i v-if="context?.id == modelValue?.id" class="fa-solid fa-check text-primary px-5"></i>
                        </li>
                    </template>
                </ul>
            </div>
            <div :class="`select-multiple ${disabled ? 'disabled' : ''}`" data-bs-toggle="dropdown" v-else>
                <div :class="`input-select form-select ${modelValue.length ? 'p-2' : ''}`" :disabled="disabled" @click="$emit('get-options', searchValue, limit)">
                    <div class="placeholder-multiple" v-if="!modelValue?.length">
                        <span class="text-muted">{{ placeholder }}</span>
                    </div>
                    <div class="value-multiple" v-else>
                        <template v-for="(context, index) in modelValue">
                            <span class="badge badge-secondary m-1"><i class="fa-solid fa-xmark mx-1 text-dark" @click="popMultiple(context?.id)"></i>{{ context?.text }}</span>
                        </template>
                    </div>
                </div>
                <div class="wrap-btn-clear-multiple d-flex">
                    <button class="my-auto" v-if="showClear" @click="clear()"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <ul class="dropdown-menu" style="width:100%; max-height:50vh; overflow-y:auto;">
                    <li class="p-4" v-if="showSearch">
                        <input type="search" v-model="searchValue" @input="search()" class="form-control p-2" placeholder="Search">
                    </li>
                    <template v-if="loading">
                        <li>
                            <a class="dropdown-item dropdown-item-selectku-dewe" href="javascript:;">{{ loadingLabel }}</a>
                        </li>
                    </template>
                    <template v-if="!loading && !options?.length">
                        <li>
                            <a class="dropdown-item dropdown-item-selectku-dewe" href="javascript:;">{{ emptyLabel }}</a>
                        </li>
                    </template>
                    <template v-if="!loading && options.length" v-for="(context, index) in optionsLimit">
                        <li :class="`${modelValue.findIndex(val => val?.id == context?.id) != -1 ? 'select-active' : ''} d-flex align-items-center justify-content-between`" v-if="context?.html">
                            <a @click="setValueMultiple(context)" class="dropdown-item dropdown-item-selectku-dewe" href="javascript:;" v-html="context?.html"></a>
                            <i v-if="modelValue.findIndex(val => val?.id == context?.id) != -1" class="fa-solid fa-check text-primary px-5"></i>
                        </li>
                        <li :class="`${modelValue.findIndex(val => val?.id == context?.id) != -1 ? 'select-active' : ''} d-flex align-items-center justify-content-between`" v-else>
                            <a @click="setValueMultiple(context)" class="dropdown-item dropdown-item-selectku-dewe" href="javascript:;" v-text="context?.text"></a>
                            <i v-if="modelValue.findIndex(val => val?.id == context?.id) != -1" class="fa-solid fa-check text-primary px-5"></i>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Lodash from 'lodash';
    export default {
        props: {
            modelValue: {},
            options: {
                type: Array,
                default: []
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingLabel: {
                type: String,
                default: 'Loading...'
            },
            serverside: {
                type: Boolean,
                default: false
            },
            limit: {
                type: Number,
                default: 7000
            },
            multiple: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            showClear: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            emptyLabel: {
                type: String,
                default: 'Tidak ada data'
            },
            showSearch: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                value: '',
                searchValue: '',
                triggerSearch: false
            }
        },
        watch: {
            value: {
                handler(val){
                },
            }
        },
        mounted(){
            let that = this;
        },
        methods: {
            setValue(value){
                // $event.target.value hanya untuk mengambil value dari input yang di emit tersebut
                this.$emit('update:modelValue', value);//modelValue merepresentasikan v-model di parent dan di set ke value
                this.$emit('change-options', value);
                this.value = value?.text;
            },
            setValueMultiple(value){
                let vModel = [];
                vModel = this.modelValue;
                vModel.push({id: value?.id, text: value?.text});
                this.$emit('update:modelValue', vModel);//modelValue merepresentasikan v-model di parent dan di set ke value
                this.$emit('change-options', value);
            },
            search: Lodash.debounce(function($event){
                this.$emit('get-options',this.searchValue, this.limit);
            }, 1000),
            clear(){
                if(this.multiple){
                    this.$emit('update:modelValue', []);
                    this.value = [];
                    this.$emit('change-options', []);
                }
                else{
                    this.$emit('update:modelValue', '');
                    this.value = '';
                    this.$emit('change-options', '');
                }
            },
            popMultiple(id){
                let vModel = this.modelValue;
                let index = vModel.findIndex((val) => val?.id == id);
                vModel.splice(index,1);
                this.$emit('change-options');
            }
        },
        computed: {
            optionsLimit(){
                return this.options.slice(0,this.limit);
            },
        }
    }
</script>

<style scoped>
    .dropdown-item-selectku-dewe{
        line-height:27px;
        font-size:15px;
        color:rgb(103, 101, 101);
    }
    .dropdown-item-selectku-dewe:hover{
        color:#2c98db;
        background-color:#68c2fa43;
    }
    .select-multiple .input-select{
        width:100%;
        min-height:40px;
        border-radius:5px;
        border:1px solid #E4E6EF;
        display:flex;
        align-items: center;
        padding:10px;
    }
    .btn-clear{
        margin-top:-33px;
        position:absolute;
        background-color:transparent;
        border:none;
        right:35px;
        z-index:1;
        font-weight: bold;
    }
    .wrap-btn-clear-multiple{
        top:0;
        bottom:0;
        right:35px;
        position:absolute;
    }
    .wrap-btn-clear-multiple button{
        background-color:transparent;
        border:none;
        font-weight: bold;
    }
    .select-active{
        color:#2c98db !important;
        background-color:#68c2fa43 !important;
        pointer-events:none;
    }
    .disabled, .disabled div{
        pointer-events:none;
        background-color:#EFF2F5 !important;
    }
</style>
