<script setup>
const props = defineProps({
    apps: Array,
})

</script>

<template>
    <div class="grid-container">

        <div class="app-card" v-for="app in apps" :id="app.id">

            <div class="top">
                <span class="material-symbols-rounded">more_horiz</span>
            </div>

            <div class="app-icon">
                <img :src="app.imageURL" :alt="app.alt">
            </div>

            <div class="details">
                <p :title="app.name">{{ app.name }}</p>
                <p>{{ app.size }} | {{ app.installationDate }}</p>
            </div>

            <div class="uninstall">
                <p>Uninstall</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(147px, 1fr));
    gap: .5rem;
}

.app-card {
    height: 13rem;
    padding:.5rem;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    user-select: none;
    position: relative;

    .top {
       text-align: right;
       

       span {
        cursor: context-menu;
        border-radius: 4px;
        padding: .2rem;
        transition: background .2s;

        &:hover {
            background-color: rgb(255, 255, 255, 0.1);
        }
       }
    }

    .app-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            border-radius: 4px;
            width: 3.5rem;
            aspect-ratio: 1/1;
            object-fit: cover;
        }
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-top: .5rem;
        gap: .2rem;

        p:first-child {
            font-size: 17px;
            font-weight: 600;
            width: 100%;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p:last-child {
            font-size: 11px;
        }
    }

    .uninstall {
        width: 100%;
        
        display: grid;
        place-content: center;
        padding-top: .5rem;

        p {
            cursor: pointer;
            padding: .5rem;
            font-weight: 600;
            font-size: 14px;
            border-radius: 4px;
            transition: background .2s;

            &:hover {
                background-color: rgb(255, 255, 255, 0.1);
            }
        }
    }
}

    
</style>