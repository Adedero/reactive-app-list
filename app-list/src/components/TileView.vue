<script setup>
const props = defineProps({
    apps: Array,
})

</script>

<template>
    <div class="tile-container">

        <div class="app-card" v-for="app in apps" :id="app.id">
            <div class="left">
                <img :src="app.imageURL" :alt="app.alt">
            </div>

            <div class="middle">
                <p :title="app.name">{{ app.name }}</p>
                <p>{{ app.size }} | {{ app.installationDate }}</p>
            </div>

            <div class="right">
                <span class="material-symbols-rounded">more_horiz</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tile-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: .3rem;
}

.app-card {
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    user-select: none;
    padding: 1rem;

    .left {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            border-radius: 4px;
            width: 2rem;
            aspect-ratio: 1/1;
            object-fit: cover;
        }
    }

    .middle {
        padding: 0 .5rem;

        p:first-child {
            font-weight: 600;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        p:last-child {
            font-size: 12px;
        }
    }
}
</style>