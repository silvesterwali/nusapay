<template>

    <section class="py-20 relative">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <UContainer>
            <div class="max-w-4xl mx-auto text-center">
                <div class="space-y-8">
                    <div class="space-y-4">
                        <h2 class="text-3xl lg:text-4xl font-bold font-space-grotesk">
                            Join Our <span class="text-primary">Community</span>
                        </h2>
                        <p class="text-lg text-muted-foreground">
                            Stay updated with the latest developments and connect with other Web3 enthusiasts
                        </p>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <template v-for="item in items" :key="item.label">
                            <UCard
                                class="bg-card/50 border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group"
                                :as="'a'" :href="item.href" target="_blank" rel="noopener noreferrer">
                                <div class="p-6 text-center space-y-3">
                                    <div
                                        class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                                        <UIcon :name="item.icon" class="w-6 h-6 text-primary" />
                                    </div>
                                    <span class="text-sm font-medium">{{ item.label }}</span>
                                </div>
                            </UCard>
                        </template>
                    </div>

                    <UButton size="lg" class="glow-green font-medium">
                        Follow Updates
                    </UButton>
                </div>
            </div>
        </UContainer>
    </section>


</template>

<script setup lang="ts">

const items = [
    { icon: 'i-lucide-twitter', label: "Twitter", href: "#" },
    { icon: 'i-lucide-send', label: "Telegram", href: "#" },
    { icon: 'i-lucide-github', label: "GitHub", href: "#" },
    { icon: 'i-lucide-file-text', label: "Docs", href: "#" },
]

</script>

<style scoped></style>