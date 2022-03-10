<template>
    <div>
        <topNavbar></topNavbar>
        <main class="container-fluid">
            <div class="row">
                <router-view></router-view>
            </div>
        </main>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>
