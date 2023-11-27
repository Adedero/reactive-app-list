<script setup>
import { ref, reactive, computed } from 'vue';
import { allApps } from './assets/data.js'

import HeaderComp from './components/HeaderComp.vue';
import SubHeader from './components/SubHeader.vue';
import ThirdHeader from './components/ThirdHeader.vue';
import GridView from './components/GridView.vue';
import ListView from './components/ListView.vue';
import TileView from './components/TileView.vue';

const apps = ref(allApps.sort((a, b) => a.name.localeCompare(b.name)));

const searchValue = ref('');

const views = reactive({
  grid: false,
  list: true,
  tile: false,
})

function filterApps(value) {
  searchValue.value = value;
}

const filteredApps = computed(() => {
  return apps.value.filter(app => app.name.toLowerCase().includes(searchValue.value.toLowerCase()))
})

function viewGrid() { views.grid = true; views.list = false; views.tile = false;}
function viewList() { views.grid = false; views.list = true; views.tile = false; }
function viewTile() { views.grid = false; views.list = false; views.tile = true; }


function sortApps(value) {
  if (value == 1) {
    apps.value.sort((a, b) => a.name.localeCompare(b.name))
  } else if(value == 2) {
    apps.value.sort((a, b) => b.name.localeCompare(a.name))
  } else if(value == 3) {
    return;
  } else if(value ==4) {
    apps.value.sort((a, b) => b.actualSize - a.actualSize)
  } else {
    apps.value.sort((a, b) => a.actualSize - b.actualSize)
  }
}

</script>

<template>
 <HeaderComp />

 <SubHeader
 @input-change="filterApps"
 :state="views"
 @view-grid="viewGrid"
 @view-list="viewList"
 @view-tile="viewTile"
 />

<ThirdHeader
@change-sort="sortApps"
:apps-displayed="filteredApps" />

<main>
<GridView v-if="views.grid" :apps="filteredApps" />

<ListView v-if="views.list" :apps="filteredApps" />

<TileView v-if="views.tile" :apps="filteredApps" />
</main>
</template>

<style scoped>
main {
  width: 100%;
  height: calc(100vh - 10.5rem);
  overflow-y: scroll;
  padding: 1rem 0;
}
</style>
