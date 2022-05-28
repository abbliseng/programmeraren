<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand mb-0 h1" style="margin-left: 1rem;" href="/">
            <!-- <span class="badge badge-warning">WIP</span> -->
            <span class="badge bg-warning ">WIP</span>
            Programmeraren
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/projects">Projekt</a>
                <a class="nav-item nav-link" href="/course_material">Läromedel 
                    <!-- <span class="sr-only">(current)</span> -->
                </a>
                <a class="nav-item nav-link" href="/tasks">Uppgifter</a>
                <a class="nav-item nav-link disabled" href="/account">Konto</a>
            </div>
        </div>
    </nav>
</template>