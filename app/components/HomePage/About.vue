<template>
    <section class="py-20">

        <UContainer>
            <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div class="space-y-6">
                    <h2 class="text-3xl lg:text-4xl font-bold font-space-grotesk text-balance">
                        Revolutionizing Digital Payments in <span class="text-primary">Southeast Asia</span>
                    </h2>
                    <p class="text-lg text-muted-foreground leading-relaxed">
                        NusaPay combines the security of blockchain technology with the simplicity of
                        traditional payments,
                        creating a seamless Web3 experience for Indonesian businesses and consumers.
                    </p>
                </div>

                <div class="relative">
                    <div class="bg-card border border-border rounded-2xl p-8">
                        <div class="space-y-6">
                            <div class="text-center">
                                <div
                                    class="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                                    <UIcon name="i-lucide-shield" class="w-4 h-4" />
                                    <span>Escrow Protection</span>
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="text-center space-y-2">
                                    <div
                                        class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                                        <span class="text-primary font-bold">B</span>
                                    </div>
                                    <span class="text-sm text-muted-foreground">Buyer</span>
                                </div>

                                <div class="flex-1 mx-4">
                                    <div class="relative">
                                        <div class="h-px bg-gradient-to-r from-primary via-primary to-primary" />
                                        <div
                                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card border-2 border-primary rounded-full p-2">
                                            <UIcon name="i-lucide-shield" class="w-4 h-4 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center space-y-2">
                                    <div
                                        class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                                        <span class="text-primary font-bold">S</span>
                                    </div>
                                    <span class="text-sm text-muted-foreground">Seller</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="grid md:grid-cols-3 gap-8">
                <UCard class=" border hover:border-primary/50 transition-colors">
                    <div class="p-6 text-center space-y-4">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                            <UIcon name="i-lucide-shield" class="w-6 h-6 text-primary" />
                        </div>
                        <h3 class="text-xl font-semibold font-space-grotesk">Escrow Payments</h3>
                        <p class="text-muted-foreground">
                            Secure transactions with built-in escrow protection for both buyers and sellers.
                        </p>
                    </div>
                </UCard>

                <UCard class=" border hover:border-primary/50 transition-colors">
                    <div class="p-6 text-center space-y-4">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                            <UIcon name="i-lucide-zap" class="w-6 h-6 text-primary" />
                        </div>
                        <h3 class="text-xl font-semibold font-space-grotesk">DeFi Ready</h3>
                        <p class="text-muted-foreground">
                            Seamlessly integrate with DeFi protocols for staking, lending, and yield farming.
                        </p>
                    </div>
                </UCard>

                <UCard class=" border hover:border-primary/50 transition-colors">
                    <div class="p-6 text-center space-y-4">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                            <UIcon name="i-lucide-dollar-sign" class="w-6 h-6 text-primary" />
                        </div>
                        <h3 class="text-xl font-semibold font-space-grotesk">Low Fees</h3>
                        <p class="text-muted-foreground">
                            Minimal transaction costs with transparent pricing and no hidden fees.
                        </p>
                    </div>
                </UCard>
            </div>
        </UContainer>

    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>