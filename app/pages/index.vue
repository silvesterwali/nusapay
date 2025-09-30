<template>
    <div className="min-h-screen bg-background grid-texture">
        <HomePageHero />
        <HomePageAbout />
        <HomePageRoadmap />
        <HomePageCommunity />
        <HomePageFooter />
    </div>
</template>

<script setup lang="ts">
const meta = {
    title: "NusaPay - Web3 Payments for Indonesia",
    description: "Fast, low-cost, and secure Web3 payments platform for Indonesia. Join the DeFi revolution.",
}

useSeoMeta({
    title: meta.title,
    description: meta.description,
    ogTitle: meta.title,
    ogDescription: meta.description,
    twitterTitle: meta.title,
    twitterDescription: meta.description,
});
useHead({
    title: meta.title,
    meta: [
        {
            name: 'description',
            content: meta.description
        }
    ]
})
</script>

<style scoped></style>