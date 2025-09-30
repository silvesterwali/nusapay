<template>
    <section class="relative overflow-hidden">
        <UContainer class="py-20 lg:py-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <div class="space-y-8">
                    <div class="flex items-center space-x-3">
                        <div class="relative">
                            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <div
                                    class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-default" />
                            </div>
                            <div class="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                        </div>
                        <span class="text-2xl font-bold font-space-grotesk">NusaPay</span>
                    </div>


                    <div class="space-y-4">
                        <h1 class="text-4xl lg:text-6xl font-bold font-space-grotesk text-balance leading-tight">
                            Web3 Payments for <span class="text-primary">Indonesia</span>
                        </h1>
                        <p class="text-xl text-muted-foreground font-inter">Fast • Low-cost • Secure</p>
                    </div>


                    <div class="flex flex-col sm:flex-row gap-4">
                        <UButton size="lg" class="glow-green font-medium">
                            Get Whitepaper
                        </UButton>
                        <UButton size="lg" variant="outline">
                            Join Closed Beta
                        </UButton>
                    </div>
                </div>

                <div class="relative">
                    <div class="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-card to-secondary rounded-3xl shadow-2xl transform rotate-6">
                            <div class="absolute inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl" />
                        </div>


                        <div
                            class="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-3xl shadow-xl border border-border">
                            <div class="p-8 h-full flex flex-col justify-between">
                                <div class="space-y-4">
                                    <div class="w-12 h-8 bg-primary rounded opacity-80" />
                                    <div class="space-y-2">
                                        <div class="h-2 bg-muted-foreground/20 rounded w-3/4" />
                                        <div class="h-2 bg-muted-foreground/20 rounded w-1/2" />
                                    </div>
                                </div>

                                <div class="space-y-4">
                                    <div class="text-2xl font-mono text-primary">•••• •••• •••• 1234</div>
                                    <div class="flex justify-between text-sm text-muted-foreground">
                                        <span>NUSA PAY</span>
                                        <span>12/26</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute -inset-4">
                            <div
                                class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                            <div
                                class="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse delay-1000" />
                            <div
                                class="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse delay-500" />
                            <div
                                class="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse delay-1500" />
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>