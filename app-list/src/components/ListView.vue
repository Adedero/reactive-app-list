<script setup>
const props = defineProps({
    apps: Array,
})
</script>

<template>
    <div class="list-container">
        <div class="app-card" v-for="app in apps" :id="app.id">
            <div class="left-side">
                <div class="app-icon">
                    <img :src="app.imageURL" alt="app.alt">
                </div>
                <div class="details">
                    <p>{{ app.name }}</p>
                    <p>{{ app.author }} | {{ app.installationDate }}</p>
                </div>
            </div>
            <div class="right-side">
                <p>{{ app.size }}</p>
                <span class="material-symbols-rounded">more_horiz</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.list-container {
    display: grid;
    gap: .5rem;
}

.app-card {
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    user-select: none;
    padding: .8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-side {
        display: flex;
        align-items: center;
        gap: .8rem;

        .app-icon {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                border-radius: 4px;
                width: 2.5rem;
                aspect-ratio: 1/1;
                object-fit: cover;
            }
        }

        .details {
            line-height: 1.1rem;

            p:first-child {
                font-weight: 600;
            }

            p:last-child {
                font-size: 12px;
            }
        }
    }

    .right-side {
        display: flex;
        align-items: center;
        gap: .8rem;

        p {
            font-size: 14px;
        }
    }
}
</style>