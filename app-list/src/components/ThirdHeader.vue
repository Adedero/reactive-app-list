<script setup>
import { ref } from 'vue';

const props = defineProps({
    appsDisplayed: Array
})

const sortOption = ref(1)

</script>

<template>
    <div class="third-header-container">
        <div class="details">
            <p>{{ appsDisplayed.length }} {{ appsDisplayed.length > 1 || appsDisplayed.length == 0 ? 'apps' :  'app'}} found</p>
        </div>
        
        <div class="sort">
            <span class="material-symbols-rounded">swap_vert</span>
            <label>Sort by: </label>
            <select v-model="sortOption" @change="$emit('change-sort', sortOption)" >
                <option value="1" default>Name (A -Z)</option>
                <option value="2">Name (Z-A)</option>
                <option value="3">Date installed</option>
                <option value="4">Size (Large to small)</option>
                <option value="5">Size (Small to large)</option>
            </select>
        </div>
    </div>
</template>


<style scoped lang="scss">
.third-header-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: .5rem;
}

.details {
    p {
        font-size: 20px;
        font-weight: 600;
    }
}

.sort {
    display: flex;
    align-items: center;
    gap: .2rem;

    span {
        font-size: 20px;
    }

    select {
        height: 2rem;
        padding: .5rem;
        border-radius: 4px;
        color: #212121;
        font-size: 13px;
    }
}
</style>