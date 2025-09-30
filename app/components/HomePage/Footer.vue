<template>
    <footer className="py-12 border-t border-border">
        <UContainer>
            <div
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-3">
                    <NuxtImg src="/logo.png" class="h-8 w-8 object-center object-contain" />
                    <span className="text-lg font-bold font-space-grotesk">NusaPay</span>
                </div>

                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <span>© 2025 NusaPay</span>
                    <a href="#" className="hover:text-primary transition-colors">
                        Privacy & Terms
                    </a>
                </div>
            </div>
        </UContainer>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped></style>