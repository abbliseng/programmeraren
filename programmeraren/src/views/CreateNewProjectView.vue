<template>
    <div class="row no-gutters justify-content-center">
        <div id="head" class="col-12 row no-gutters justify-content-center">
            <b-card class="col-8" style="margin-top: 15px;" title="Skapa nytt projekt">
                <b-form class="project-form">
                    <!-- TITEL -->
                    <b-form-group id="input-group-title" label="Projekt titel:" label-for="input-1"
                        description="Går ej att ändra senare.">
                        <b-form-input id="input-title" v-model="form.title" type="text" placeholder="Ange projekt titel"
                            required>
                        </b-form-input>
                    </b-form-group>
                    <hr>
                    <!-- INTRO -->
                    <b-form-group id="input-group-desc" label="Beskrivning:" label-for="input-1"
                        description="Kommer visas under titeln.">
                        <b-form-textarea id="input-desc" rows=4 v-model="form.main.n1.content" type="text"
                            placeholder="Ange en beskrivning för projektet." required>
                        </b-form-textarea>
                    </b-form-group>
                    <hr>
                    <div id="custom-sections">

                    </div>
                    <!-- SKAPA NY SEKTION -->
                    <b-button class="col-12" size="sm" @click="addNewSection()">Skapa ny sektion</b-button>
                </b-form>
                <hr>
                <b-button class="col-12" variant="success">Spara</b-button>
                <b-button class="col-12" variant="danger" size="sm" style="margin-top: 5px;">Avbryt</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            admin: false,
            form: {
                "title": "",
                "main": {
                    "n1": {
                        "class": "card-text col-12",
                        "content": "",
                        "title": "Introduktion",
                        "type": "text"
                    }
                }
            }
        };
    },
    mounted() {
        // this.loadProjects();
        this.isAdmin();
    },
    methods: {
        async isAdmin() {
            this.admin = await this.$store.getters.getAdminStatus
        },
        addNewSection() {
            let parent = document.getElementById("custom-sections")
            
            let new_section_div = document.createElement("div")
            new_section_div.setAttribute("id", "input-group-desc");
            new_section_div.setAttribute("role", "group");
            new_section_div.setAttribute("class", "form-group");
            new_section_div.setAttribute("", "");
        },
        loadProjects() {
            let parent = document.getElementById("head")
            this.$db.collection("projects")
                .get()
                .then((snapshots) => {
                    while (parent.firstChild) {
                        parent.removeChild(parent.lastChild);
                    }
                    let data = []
                    snapshots.forEach((doc) => {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    data.forEach((data_point) => {
                        // Go through each part and create the card and shite
                        let card = document.createElement("div")
                        card.setAttribute("class", "card col-8 row justify-content-center")
                        card.setAttribute("style", "margin-top: 15px")
                        card.setAttribute("id", data_point.id)

                        let card_body = document.createElement("div")
                        card_body.setAttribute("class", "card-body")

                        let title = document.createElement("h4")
                        title.setAttribute("class", "card-title")
                        title.innerHTML = data_point.id
                        card_body.appendChild(title)

                        const data_keys = Object.keys(data_point)
                        for (let i = 1; i < data_keys.length; i++) {
                            let key = "n" + i.toString()
                            if (data_point[key].type == "text") {
                                let subtitle = document.createElement("h6")
                                subtitle.setAttribute("class", "card-subtitle")
                                subtitle.setAttribute("style", "margin-top: 10px")
                                subtitle.innerHTML = data_point[key].title
                                card_body.appendChild(subtitle)

                                card_body.appendChild(this.createTextElement(data_point[key].class, data_point[key].content))
                            } else if (data_point[key].type == "img") {
                                card_body.appendChild(this.createImageElement(data_point[key].class, data_point[key].content))
                            }
                        }
                        card.appendChild(card_body)
                        parent.appendChild(card)
                    })
                })
        },
        createImageElement(c, s) {
            let img = document.createElement("img")
            img.setAttribute("class", c)
            img.setAttribute("src", s)
            return img
        },
        createTextElement(c, t) {
            let text = document.createElement("p")
            text.setAttribute("class", c)
            text.innerHTML = t
            return text
        }
    }
};
</script>