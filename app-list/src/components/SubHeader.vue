<script setup>
import { ref } from 'vue';
const emits = defineEmits([
    'input-change',
    'view-list',
    'view-grid',
    'view-tile'
]);

const props = defineProps({
    state: Object
})

const searchValue = ref('')


</script>

<template>
    <div class="subheader-container">
        <div class="search-box">
            <label for="search">
                <span class="material-symbols-rounded">search</span>
            </label>
            <input type="search" id="search" placeholder="Search apps" v-model="searchValue" @input="$emit('input-change', searchValue)">
        </div>
        
        <div class="icons">
            <span class="material-symbols-rounded" @click="$emit('view-list')" :class="{'active' : state.list}" title="List view">lists</span>
            <span class="material-symbols-rounded" @click="$emit('view-grid')" :class="{ 'active': state.grid }" title="Grid view">grid_view</span>
            <span class="material-symbols-rounded" @click="$emit('view-tile')" :class="{ 'active': state.tile }" title="Tile view">calendar_view_month</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.subheader-container {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search-box {
    width: 50%;
    position: relative;
    padding-left: 4px;

    input {
        height: 2rem;
        width: 95%;
        border-radius: 4px;
        padding: 0 2rem 0 1rem;
        font-size: 1rem;

        &:focus {
           box-shadow: 0 0 10px 1px rgb(255, 255, 255);
        }
    }

    span {
        position: absolute;
        color: #212121;
        right: 6%;
        top: 10%;
    }
}

.icons {
    border-radius: 4px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    width: auto;

    span {
        cursor: context-menu;
        padding: .3rem;
        border-radius: 4px;
    }
    .active {
        background-color: rgba(255, 255, 255, 0.3);
    }
}

</style>