<template>
    <section class="py-20">
        <div class=" px-4">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-4xl font-bold font-space-grotesk mb-4">
                        Development <span class="text-primary">Roadmap</span>
                    </h2>
                    <p class="text-lg text-muted">Our journey to revolutionize Web3 payments in Indonesia
                    </p>
                </div>
                <UTimeline :items="items" color="primary" :default-value="1" class="w-full" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui"
const items: TimelineItem[] = [
    {
        date: "Q3 2025",
        title: "Closed Beta",
        description: "Launch closed beta with selected merchants and early adopters",
        status: "current",
        icon: 'i-lucide-rocket'
    },
    {
        date: "Q4 2025",
        title: "Staking & Audit",
        description: "Implement staking rewards and complete security audit",
        status: "upcoming",
        icon: 'i-lucide-shield-check'
    },
    {
        date: "Q1 2026",
        title: "Merchant Dashboard",
        description: "Full merchant dashboard with analytics and payment management",
        status: "upcoming",
        icon: 'i-lucide-pie-chart'
    },
    {
        date: "Q2 2026",
        title: "SEA Expansion",
        description: "Expand to other Southeast Asian markets",
        status: "future",
        icon: 'i-lucide-map'
    },
]

</script>

<style scoped></style>