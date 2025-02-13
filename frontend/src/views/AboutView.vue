<template>
    <h1>About</h1>
    The Landscape is part of a set of tools provided by the AI Native Dev Community.

    <h2>How to contribute?</h2>
    Don't see your favorite tool? <a href="https://github.com/ai-native-dev/tool-landscape/issues">Open an issue</a> or <a href="https://github.com/ai-native-dev/tool-landscape/pulls">submit a pull request</a>. 
    Or just fill in this google form.

    <h2>Can I use this data?</h2>
    This application and data is open source and maintained as a community effort.
    The app and data is under MIT license.

    <h2>Contributors</h2>
    Thanks to the following people for contributing to the project:
    <ul>
        <li v-for="contributor in contributors" :key="contributor.id">
            <a :href="contributor.profileUrl" target="_blank">
                <img :src="contributor.avatarUrl" alt="Avatar" width="30" height="30" />
                {{ contributor.name }}
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contributors = ref([
    { id: 1, name: 'Patrick Debois', profileUrl: 'https://github.com/jedi4ever', avatarUrl: 'https://avatars.githubusercontent.com/u/70908?v=4' },
    { id: 2, name: 'Simon Maple', profileUrl: 'https://github.com/sjmaple', avatarUrl: 'https://avatars.githubusercontent.com/u/3339230' },
    { id: 3, name: 'Dion Almaer', profileUrl: 'https://github.com/dalmaer', avatarUrl: 'https://avatars.githubusercontent.com/u/4770' },
    // ... add more contributors as needed ...
]);
</script>